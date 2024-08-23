from sklearn.neighbors import NearestNeighbors
import pandas as pd


def get_knn_model(user_to_user_db):
    knn = NearestNeighbors(n_neighbors=6, metric='cosine')
    knn.fit(user_to_user_db)
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

    return sorted_total_sum[sorted_total_sum > 0]


def item_to_item_recommendations(normalized_item_to_item, user_row, index=None):
    item_to_item_knn = get_knn_model(normalized_item_to_item)
    # Initialize a DataFrame to accumulate the results
    accumulated_results = pd.DataFrame()

    for i in range(min(5, len(user_row))):
        game_name = user_row.index[i]
        game_vector = normalized_item_to_item.loc[game_name]
        distances, indices = item_to_item_knn.kneighbors([game_vector])
        nearest_games = indices[0][:5]
        nearest_games_df = normalized_item_to_item.iloc[nearest_games]

        # Sum the nearest games DataFrame to the accumulated results
        accumulated_results = accumulated_results.add(nearest_games_df, fill_value=0)

    # return accumulated_results

    # Calculate the sum of each row
    row_sums = accumulated_results.sum(axis=1)

    # Sort the row names by the sum of each row in descending order
    sorted_row_names = row_sums.sort_values(ascending=False)

    return sorted_row_names


def tag_recommendations(steam_tags, user_row):
    return item_to_item_recommendations(steam_tags, user_row)
