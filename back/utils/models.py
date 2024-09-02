from sklearn.neighbors import NearestNeighbors
import pandas as pd
import textdistance
from bs4 import BeautifulSoup
import requests
import re


def find_closest_match(title, choices, min_distance=None):  # TODO: set a minimum similarity threshold
    distances = [textdistance.jaccard(title, choice) for choice in choices]
    if min_distance and max(distances) < min_distance:
        return None
    return choices[distances.index(max(distances))]


def get_knn_model(db):
    knn = NearestNeighbors(n_neighbors=6, metric='cosine')
    knn.fit(db)
    return knn


def get_user_games(index, user_to_user_db):
    user = user_to_user_db.iloc[index]
    return user[user > 0].sort_values(ascending=False)


def user_to_user_recommendations(normalized_user_to_user, user_row, index=None):
    user_to_user_knn = get_knn_model(normalized_user_to_user)
    distances, indices = user_to_user_knn.kneighbors(user_row)
    nearest_users = indices[indices != index][:5]

    # Initialize a DataFrame to store the sums
    total_sum = pd.Series(0, index=normalized_user_to_user.columns)

    for user_index in nearest_users:
        user_games = normalized_user_to_user.iloc[user_index]
        total_sum += user_games

    # Sort the Series by descending values
    sorted_total_sum = total_sum.sort_values(ascending=False)

    if 'Player_ID' in sorted_total_sum.index:
        sorted_total_sum = sorted_total_sum.drop(index='Player_ID')

    return sorted_total_sum[sorted_total_sum > 0]


def item_to_item_recommendations(normalized_item_to_item, user_row):
    normalized_item_to_item = normalized_item_to_item.copy()
    # Function to create a mapping from game titles to indices
    print('normalized_item_to_item_df', normalized_item_to_item.columns)

    def create_game_mapping(df):
        # Print the columns of the DataFrame to debug
        print("DataFrame columns:", df.columns)

        # Ensure the 'Game_title' column exists
        if 'Game_title' not in df.columns:
            raise KeyError("The DataFrame does not contain the 'Game_title' column.")

        unique_games = df['Game_title'].unique()
        game_to_index = {game: idx for idx, game in enumerate(unique_games)}
        index_to_game = {idx: game for game, idx in game_to_index.items()}

        return game_to_index, index_to_game

    # Function to replace game titles with indices in the DataFrame
    def replace_titles_with_indices(df, game_to_index):
        df['Game_index'] = df['Game_title'].map(game_to_index)
        df.drop('Game_title', axis=1, inplace=True)
        return df

    # Create the mapping and replace titles with indices
    game_to_index, index_to_game = create_game_mapping(normalized_item_to_item)

    normalized_item_to_item = replace_titles_with_indices(normalized_item_to_item, game_to_index)

    # Function to get the KNN model
    def get_knn_model(df):
        # Drop 'Game_index' and use all other columns as features
        features = df.drop('Game_index', axis=1)
        knn = NearestNeighbors(n_neighbors=5, metric='cosine')  # or another appropriate metric
        knn.fit(features)
        return knn

    # Function to find the closest match for game names
    def find_closest_match(game_name, game_list, threshold):
        # Implement fuzzy matching logic
        # This is a placeholder implementation; replace with actual fuzzy matching code
        return min(game_list, key=lambda x: abs(len(x) - len(game_name))) if len(game_name) > threshold else None

    user_row = user_row.iloc[0]
    user_row = user_row[user_row > 0].sort_values(ascending=False)
    user_games = user_row.index

    chosen_game_indices = []
    game_list = list(index_to_game.values())

    for game in user_games:
        game_name = find_closest_match(game, game_list, 0.5)
        if game_name:
            game_index = game_to_index.get(game_name)
            if game_index is not None:
                chosen_game_indices.append(game_index)
                if len(chosen_game_indices) >= 5:
                    break

    # Initialize a DataFrame to accumulate the results
    accumulated_results = pd.DataFrame()

    # Get KNN model
    item_to_item_knn = get_knn_model(normalized_item_to_item)

    # Extract features without 'Game_index' for prediction
    features_for_prediction = normalized_item_to_item.drop('Game_index', axis=1)

    for i in range(min(5, len(chosen_game_indices))):
        game_index = chosen_game_indices[i]
        game_vector = normalized_item_to_item[normalized_item_to_item['Game_index'] == game_index]

        # Ensure the game_vector has the same columns as features_for_prediction
        game_vector_features = game_vector.drop('Game_index', axis=1)

        distances, indices = item_to_item_knn.kneighbors(game_vector_features)
        nearest_games = indices[0][:5]
        nearest_games_df = normalized_item_to_item.iloc[nearest_games]

        # Sum the nearest games DataFrame to the accumulated results
        accumulated_results = accumulated_results.add(nearest_games_df, fill_value=0)

    # Calculate the sum of each row
    row_sums = accumulated_results.sum(axis=1)

    # Sort the row names by the sum of each row in descending order
    sorted_row_names = row_sums.sort_values(ascending=False)

    sorted_row_names_df = pd.DataFrame({
        'Game_title': sorted_row_names.index.map(index_to_game),
        'Score': sorted_row_names.values
    })
    return sorted_row_names_df


def tag_recommendations(steam_tags, user_row):
    return item_to_item_recommendations(steam_tags, user_row)


def preprocess_name(name):
    # Keep only spaces, numbers, and English characters
    return re.sub(r'[^a-zA-Z0-9 ]', '', name).lower()


def get_all_time_user_score_from_appid(appid):
    url = f"https://store.steampowered.com/app/{appid}/"
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')

    # The all-time user score is typically within a "div" with class "user_reviews_summary_bar"
    # and the score itself might be within a "span" with class "game_review_summary positive"
    review_summary = soup.find('div', class_='user_reviews_summary_bar')
    if review_summary:
        positive_reviews_span = review_summary.find('span', class_='game_review_summary positive')
        if positive_reviews_span:
            tooltip = positive_reviews_span.get('data-tooltip-html')
            if tooltip:
                match = re.search(r'([0-9]+)%', tooltip)
                if match:
                    return match.group(1) + '%'

    return None


def get_steam_user_score(game_list, prints=True):
    res = dict()

    # Fetch the Steam App List
    response = requests.get("https://api.steampowered.com/ISteamApps/GetAppList/v2/")
    app_list = response.json().get('applist', {}).get('apps', [])

    # Create a dictionary with preprocessed names as keys and appids as values
    app_dict = {preprocess_name(app['name']): app['appid'] for app in app_list}
    real_names_dict = {preprocess_name(app['name']): app['name'] for app in app_list}

    for game in game_list:
        processed_game_name = preprocess_name(game)
        appid = app_dict.get(processed_game_name)

        if appid:
            res[game] = get_all_time_user_score_from_appid(appid)
        else:
            pretext = "AppID not found for: "
            posttext = "Settled on: "
            if prints:
                print(f"{pretext}{game}. Finding the best match...")
            best_match = find_closest_match(processed_game_name, list(app_dict.keys()))
            if prints:
                print(f"{posttext}{' ' * (len(pretext) - len(posttext))}{real_names_dict[best_match]}\n")
            appid = app_dict.get(best_match)
            res[game] = get_all_time_user_score_from_appid(appid)

    return res


def cross_tags_and_scores(tags_recommendations):
    df = tags_recommendations.copy()
    game_list = df.index
    game_scores = get_steam_user_score(game_list, False)
    for game in game_list:
        score = game_scores[game]
        if score == None:
            df[game] = 0
        else:
            score = float(str(score)[:-1])
            df[game] = df[game] * (score / 100)
    return df[df > 0].sort_values(ascending=False)
