import os
import json
from .constants import MISC_PATH
import uuid

# Path to the session file
SESSION_FILE_PATH = os.path.join(MISC_PATH, 'sessions.json')

# Ensure the session file exists
if not os.path.exists(SESSION_FILE_PATH):
    with open(SESSION_FILE_PATH, 'w') as f:
        json.dump({}, f)

def store_data(data: str) -> str:
    session_id = str(uuid.uuid4())  # Generate a unique session ID

    # Load existing sessions from the file
    with open(SESSION_FILE_PATH, 'r') as f:
        session_store = json.load(f)

    # Store the new session data
    session_store[session_id] = data

    # Save the updated sessions back to the file
    with open(SESSION_FILE_PATH, 'w') as f:
        json.dump(session_store, f)

    return session_id  # Return the session ID to be stored in the cookie

def retrieve_data(session_id: str) -> str:
    # Load existing sessions from the file
    with open(SESSION_FILE_PATH, 'r') as f:
        session_store = json.load(f)

    return session_store.get(session_id)  # Retrieve the data using the session ID