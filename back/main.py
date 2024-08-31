import pandas as pd
from fastapi import FastAPI, HTTPException, Request, Response
from contextlib import asynccontextmanager
import utils.setup as setup
import utils.models as models
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from utils.preprocess import parse_steam_data, games_to_display
import ast
import uuid

data_cache = {}


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Preload the data into the cache
    setup.check_for_data()
    setup.load_data(data_cache)
    print("Dataframes loaded successfully!")
    yield  # Application is now running

    # Cleanup (if needed)
    # No explicit cleanup needed in this case


app = FastAPI(lifespan=lifespan)

# Set up CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5500"],  # Allows all origins from localhost:3000
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
    expose_headers=["Set-Cookie"]
)


@app.get("/")
def read_root():
    return {"Hello": "World"}


class UserData(BaseModel):
    data: str


@app.post("/user_games")
async def read_user_games(user_data: UserData, response: Response):
    input_string = parse_steam_data(user_data.data)
    # Store the entire string in a server-side store, such as a database or in-memory cache
    session_id = store_data(input_string)  # Implement store_data to save and return a session ID
    response.set_cookie(
        key="session_id",
        value=session_id,
        httponly=True,
        secure=False,
        samesite="Lax",
        max_age=18000,
    )
    return {"message": "Data processed and stored securely"}


# In-memory dictionary to store session data (for demonstration purposes)
session_store = {}


def store_data(data: str) -> str:
    session_id = str(uuid.uuid4())  # Generate a unique session ID
    session_store[session_id] = data  # Store the data in the session store
    return session_id  # Return the session ID to be stored in the cookie


def retrieve_data(session_id: str) -> str:
    return session_store.get(session_id)  # Retrieve the data using the session ID


def get_user_games_from_dict(games_dict, user_to_user_db):
    # Convert the dictionary to a pandas Series
    user_games_series = pd.Series(games_dict)

    # Filter games to include only those that exist in the user_to_user_db DataFrame
    filtered_games = user_games_series[user_games_series.index.isin(user_to_user_db.columns)]

    # Sort the series in descending order based on playtime
    sorted_games = filtered_games[filtered_games > 0].sort_values(ascending=False)

    return sorted_games


@app.get("/recommendations")
async def get_recommendations(request: Request):
    print("Creating game recommendations...")
    cookie_name = "session_id"
    if not request.cookies.get(cookie_name):
        raise HTTPException(status_code=400, detail="No game data found in cookies.")

    try:
        user_games = retrieve_data(request.cookies.get(cookie_name))
        if user_games == None:
            raise Exception(f"Could not retrieve cookie with name: {cookie_name}")
    except ValueError as e:
        raise HTTPException(status_code=400, detail=f"Invalid game data format: {e}")

    normalized_user_to_user_df = data_cache["normalized_user_to_user"]
    normalized_item_to_item_df = data_cache['normalized_item_to_item']

    # Create a new row with all values set to 0, matching the number of columns
    user_row = pd.DataFrame([[0] * len(normalized_user_to_user_df.columns)], columns=normalized_user_to_user_df.columns)
    user_row['Player_ID'] = -1

    game_list = normalized_user_to_user_df.columns[1:]
    played_games = list(user_games.keys())
    played_games_set = set(played_games)

    # for game in game_list:
    #     if game in played_games_set:
    #         print(f"Game {game} already played by user.")
    #         continue
    #     match = models.find_closest_match(game, played_games)
    #     user_row[game] = user_games[match]

    user_row = user_row.div(user_row.sum(axis=1), axis=0)

    print("Generating user to user recommendations...")
    user_to_user_recommendation = models.user_to_user_recommendations(normalized_user_to_user_df, user_row)
    print(user_to_user_recommendation)

    print("Generating item to item recommendations...")
    item_to_item_recommendation = models.item_to_item_recommendations(normalized_item_to_item_df, user_row)
    print(item_to_item_recommendation)

    # Extract game names from user_to_user_recommendation
    user_to_user_games = user_to_user_recommendation.index.tolist()
    # Extract game names from item_to_item_recommendation
    item_to_item_games = item_to_item_recommendation['Game_title'].tolist()

    recommendations = {
        "user_to_user": games_to_display(user_to_user_games, data_cache) or [],
        "item_to_item": games_to_display(item_to_item_games, data_cache) or [],
        "tags": games_to_display(item_to_item_games, data_cache) or []
    }
    return recommendations
    # python -m uvicorn main:app --reload
    # python -m uvicorn main:app --reload --port 8500
