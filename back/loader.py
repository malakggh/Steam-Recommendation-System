import pandas as pd
from multiprocessing import shared_memory
import pickle
import os
from pathlib import Path


def create_shared_memory(dataframe, name):
    df_bytes = pickle.dumps(dataframe)
    shm = shared_memory.SharedMemory(create=True, size=len(df_bytes), name=name)
    shm.buf[:len(df_bytes)] = df_bytes
    return shm


def main():
    MATRICES_PATH = Path.cwd() / 'data' / 'matrices'
    MISC_PATH = Path.cwd() / 'data' / 'misc'
    DATASET_PATH = Path.cwd() / 'data' / 'dataset'

    dataframes = {
        'user_to_user': pd.read_csv(os.path.join(MATRICES_PATH, 'user_to_user.csv')),
        'normalized_user_to_user': pd.read_csv(os.path.join(MATRICES_PATH, 'normalized_user_to_user.csv')),
        'item_to_item': pd.read_csv(os.path.join(MATRICES_PATH, 'item_to_item.csv')),
        'normalized_item_to_item': pd.read_csv(os.path.join(MATRICES_PATH, 'normalized_item_to_item.csv')),
        'steam_scores': pd.read_csv(os.path.join(MISC_PATH, 'steam_scores.csv')),
        'steam_tags': pd.read_csv(os.path.join(MISC_PATH, 'steam_tags.csv')),
        'all_games': pd.read_csv(os.path.join(DATASET_PATH, 'all_games.csv'))
    }

    shared_memories = {}
    for name, df in dataframes.items():
        shm = create_shared_memory(df, name)
        shared_memories[name] = shm

    print("Shared memory created for all dataframes.")
    # Keep the script running to prevent the shared memory from being freed
    input("Press Enter to exit and clean up shared memory...")

    # Cleanup
    for shm in shared_memories.values():
        shm.close()
        shm.unlink()


if __name__ == "__main__":
    # print current working directory
    print(os.getcwd())
    main()
