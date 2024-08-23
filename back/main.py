import pandas as pd
from fastapi import FastAPI, HTTPException, Request, Response
from contextlib import asynccontextmanager
import utils.setup as setup
import utils.models as models
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from utils.preprocess import parse_steam_data
import ast
import uuid

data_cache = {}


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Preload the data into the cache
    setup.check_for_data()
    # setup.load_data(data_cache)
    data_cache['user_to_user'] = setup.load_dataframe_from_shared_memory('user_to_user')
    data_cache['normalized_user_to_user'] = setup.load_dataframe_from_shared_memory('normalized_user_to_user')
    data_cache['item_to_item'] = setup.load_dataframe_from_shared_memory('item_to_item')
    data_cache['normalized_item_to_item'] = setup.load_dataframe_from_shared_memory('normalized_item_to_item')
    data_cache['steam_scores'] = setup.load_dataframe_from_shared_memory('steam_scores')
    data_cache['steam_tags'] = setup.load_dataframe_from_shared_memory('steam_tags')
    print("Dataframes loaded sucessfuly!")
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


# @app.post("/user_games")
# async def read_user_games(user_data: UserData, response: Response):
#     input_string = str(parse_steam_data(user_data.data))
#     string_chunks = []
#     size = 3800
#
#     while len(input_string) > size:
#         string_chunks.append(input_string[:size])
#         input_string = input_string[size:]
#     string_chunks.append(input_string)
#
#     for i, chunk in enumerate(string_chunks):
#         print(len(chunk))
#         response.set_cookie(
#             key=f"processed_game_data_{i}",
#             value=chunk,
#             httponly=True,  # JavaScript can't access this cookie
#             secure=False,  # Cookie is sent over HTTPS only
#             samesite="Lax",  # Helps prevent CSRF attacks
#             max_age=18000,  # 30 minutes for example
#             # expires=1800,
#         )
#     return {"message": "Data processed and stored in cookie securely"}

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


# Dummy data for recommendations
dummy_recommendations = ["Game A", "Game B", "Game C"]


@app.get("/recommendations")
async def get_recommendations(request: Request):
    cookie_name = "session_id"
    if not request.cookies.get(cookie_name):
        raise HTTPException(status_code=400, detail="No game data found in cookies.")

    try:
        user_games = retrieve_data(request.cookies.get(cookie_name))
        if user_games == None:
            raise Exception(f"Could not retrieve cookie with name: {cookie_name}")
        print(user_games)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=f"Invalid game data format: {e}")


    # Create df row
    print(type(user_games))
    print(type(data_cache["normalized_user_to_user"]))

    # item to item


    # res_1 = models.item_to_item_recommendations(data_cache["normalized_item_to_item"],
    #                                             get_user_games_from_dict(user_games,
    #                                                                      data_cache["normalized_user_to_user"]))
    #
    #
    # print("Recommendations generated")
    # print(res_1)
    #
    # return dummy_recommendations
