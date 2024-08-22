import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ORIGINAL_DATA_PATH = os.path.join(BASE_DIR, 'data', 'dataset', 'steam-200k.csv')

MATRICES_PATH = os.path.join(BASE_DIR, 'data', 'matrices')

MISC_PATH = os.path.join(BASE_DIR, 'data', 'misc')