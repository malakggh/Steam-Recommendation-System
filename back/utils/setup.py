import os
from .constants import ORIGINAL_DATA_PATH, MATRICES_PATH, MISC_PATH
def check_for_data():
    # check if steam-200k.csv exists in back\data\dataset\steam-200k.csv
    if not os.path.exists(ORIGINAL_DATA_PATH):
        raise FileNotFoundError(f"File not found: {ORIGINAL_DATA_PATH}")
    
    # check if matrices folder exists in MATRICES_PATH
    if not os.path.exists(MATRICES_PATH):
        os.makedirs(MATRICES_PATH)
    
    # check if any of user_to_user.csv, normalized_user_to_user.csv, item_to_item.csv, normalized_item_to_item.csv exists in MATRICES_PATH
    if not all(os.path.exists(os.path.join(MATRICES_PATH, file)) for file in ['user_to_user.csv', 'normalized_user_to_user.csv', 'item_to_item.csv', 'normalized_item_to_item.csv']):
        user_to_user, normalized_user_to_user, item_to_item, normalized_item_to_item = generate_matrices()
        user_to_user.to_csv(os.path.join(MATRICES_PATH, 'user_to_user.csv'))
        normalized_user_to_user.to_csv(os.path.join(MATRICES_PATH, 'normalized_user_to_user.csv'))
        item_to_item.to_csv(os.path.join(MATRICES_PATH, 'item_to_item.csv'))
        normalized_item_to_item.to_csv(os.path.join(MATRICES_PATH, 'normalized_item_to_item.csv'))
        print("Matrices generated successfully")

    if not os.path.exists(MISC_PATH):
        os.makedirs(MISC_PATH)
    
    # check if any of steam_scores.csv, steam_tags.csv missing in MISC_PATH
    if not all(os.path.exists(os.path.join(MISC_PATH, file)) for file in ['steam_scores.csv', 'steam_tags.csv']):
        raise FileNotFoundError(f"Files not found: {os.path.join(MISC_PATH, 'steam_scores.csv')}, {os.path.join(MISC_PATH, 'steam_tags.csv')}")
    print("All data files found")
def generate_matrices():
    import pandas as pd
    steam = pd.read_csv(ORIGINAL_DATA_PATH)
    steam = steam.drop(columns=['Ignore'])
    steamPlay = steam[steam.Behavior == 'play']
    data_for_model = steamPlay.groupby(['Game_title','Player_ID'])['Hours'].sum().reset_index().sort_values('Hours')
    user_to_user = data_for_model.pivot(index='Player_ID', columns='Game_title', values='Hours').fillna(0)
    normalized_user_to_user = user_to_user.div(user_to_user.sum(axis=1), axis=0)
    item_to_item = user_to_user.transpose()
    normalized_item_to_item = normalized_user_to_user.transpose()
    return user_to_user, normalized_user_to_user, item_to_item, normalized_item_to_item

def load_data(data_cache):
    import pandas as pd
    # Load data into cache
    data_cache['user_to_user'] = load_dataframe_from_shared_memory('user_to_user')
    data_cache['normalized_user_to_user'] = load_dataframe_from_shared_memory('normalized_user_to_user')
    data_cache['item_to_item'] = load_dataframe_from_shared_memory('item_to_item')
    data_cache['normalized_item_to_item'] = load_dataframe_from_shared_memory('normalized_item_to_item')
    data_cache['steam_scores'] = load_dataframe_from_shared_memory('steam_scores')
    data_cache['steam_tags'] = load_dataframe_from_shared_memory('steam_tags')
    data_cache['all_games'] = load_dataframe_from_shared_memory('all_games')
    print("Data preloaded successfully")

from multiprocessing import shared_memory
import pickle
def load_dataframe_from_shared_memory(name):
    shm = shared_memory.SharedMemory(name=name)
    df_bytes = bytes(shm.buf)
    dataframe = pickle.loads(df_bytes)
    return dataframe