from fastapi import FastAPI, HTTPException, Request ,Response
from contextlib import asynccontextmanager
import utils.setup as setup
import utils.models as models
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from utils.preprocess import parse_steam_data
import ast
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

@app.post("/user_games")
async def read_user_games(user_data: UserData, response: Response):
    response.set_cookie(
        key = "processed_game_data",
        value = str(parse_steam_data(user_data.data)),
        httponly = True,  # JavaScript can't access this cookie
        secure = False,    # Cookie is sent over HTTPS only
        samesite = "Lax",  # Helps prevent CSRF attacks
        max_age=18000,  # 30 minutes for example
        # expires=1800,
    )
    return {"message": "Data processed and stored in cookie securely"}

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

import pandas as pd
@app.get("/recommendations")
async def get_recommendations(request: Request):
    if not request.cookies.get("processed_game_data"):
        raise HTTPException(status_code=400, detail="No game data found in cookies.")
    
    try:
        user_games = ast.literal_eval(request.cookies.get("processed_game_data"))
    except ValueError as e:
        raise HTTPException(status_code=400, detail=f"Invalid game data format: {e}")
    # Print cookies
    res_1 = models.item_to_item_recommendations(data_cache["normalized_item_to_item"], get_user_games_from_dict(user_games, data_cache["normalized_user_to_user"]))
    print("Recommendations generated")
    print(res_1)
    
    return dummy_recommendations
