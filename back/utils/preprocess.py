import re
import requests

# List of special characters to remove
special_chars_to_remove = [
    ' ', '"', '#', '$', '%', '&', "'", '*', '+', '/',
    '<', '=', '>', '@', '\\', '^', '_', '`', '|', '~', '\x92', '\x99', '¡', '«', '\xad', '¯', '°', '²',
    '³', '´', '·', '¹', '»', '½', '×', '̇', '̈', '̱', '͜', '͡', '۩', 'ั', 'ิ', 'ี', 'ื', 'ุ', '็', '่',
    '้', '์', '\u200b', '\u200d', '‐', '–', '—', '―', '‘', '’', '“', '”', '†', '•', '…', '‧', '\u202a',
    '″', '※', '‼', '⁓', '⁵', '₁', '₂', '€', '₼', '⃣', '℃', '№', 'ⅰ', 'ⅱ', 'ⅲ', 'ⅳ', 'ⅴ', 'ⅵ', 'ⅶ',
    'ⅷ', 'ⅸ', 'ⅹ', '←', '→', '↳', '∀', '∑', '−', '√', '∞', '∫', '≒', '⊂', '①', '②', '③', '④', '⑤',
    '⑥', '⑦', 'ⓒ', 'ⓡ', '─', '█', '■', '△', '▼', '◎', '●', '◒', '★', '☆', '☙', '☠', '☭', '☯', '♀',
    '♂', '♉', '♛', '♝', '♞', '♡', '♥', '♪', '♮', '⚠', '⚧', '⛱', '✈', '✌', '✭', '❂', '❄', '❌', '❗',
    '❘', '❤', '❧', '⭐', '、', '。', '〇', '《', '》', '「', '」', '『', '』', '【', '】', '〜', '〝', '゙', '゚',
    '・', '️', '！', '＃', '％', '＆', '（', '）', '＊', '＋', '，', '－', '．', '／', '：', '＜', '＞', '？', '［', '］', '｜', '～', '｡',
    '｢', '｣', '･',
    '🃏', '🌀', '🌈', '🌊', '🌎', '🌴', '🌸', '🍆', '🍉', '🍊', '🍌', '🍐', '🍓', '🍕', '🍸', '🍺', '🍻',
    '🎄', '🎥', '🎮', '🎵', '🏄', '🏝', '🏩', '🏳', '🏴', '🐍', '🐓', '🐘', '🐙', '🐛', '🐦', '🐰', '🐱',
    '🐶', '🐸', '🐺', '🐻', '👁', '👉', '👊', '👑', '👧', '👩', '👰', '👹', '👽', '💀', '💋', '💕', '💖',
    '💘', '💜', '💝', '💥', '💦', '📷', '🔞', '🔥', '🔮', '🔲', '🔳', '🔴', '🕌', '🕹', '🗨', '😈', '😎',
    '😱', '😳', '🚀', '🚩', '🚬', '🤑', '🤓', '🤬', '🥗', '🦁', '🦊', '🦋', '🧛', '🧟', '🧠', '🪐'
]


def normalize_title(title):
    title = str(title)
    # Lowercase the title
    title = title.lower()

    # Create a regex pattern to match any of the special characters
    pattern = '[' + re.escape(''.join(special_chars_to_remove)) + ']'

    # Remove special characters
    title = re.sub(pattern, '', title)

    # Remove other general special symbols and punctuation
    title = re.sub(r'[®™©\.,\!\?\:\;\-\(\)\[\]\{\}]', '', title)

    # Replace multiple spaces with a single space
    title = re.sub(r'\s+', ' ', title)

    # Trim whitespace
    title = title.strip()

    return title


def parse_steam_data(text):
    # Split the text into lines
    lines = text.splitlines()

    # Initialize the result list
    results = []

    # Iterate through lines and check for "TOTAL PLAYED"
    for i, line in enumerate(lines):
        if "TOTAL PLAYED" in line:
            if i > 0 and i + 1 < len(lines):
                game_name = lines[i - 1].strip()
                total_played_line = lines[i + 1].strip()
                # Extract hours or minutes from the next line using regex
                match = re.search(r'([\d.]+)\s+(hours|minutes)', total_played_line.replace(",", ""))

                if match:
                    total_played = float(match.group(1))
                    unit = match.group(2)
                    if unit == "minutes":
                        total_played /= 60  # Convert minutes to hours
                    results.append((game_name, total_played))

    return {normalize_title(game[0]): game[1] for game in results}


def games_to_display(games_list, data_cache):
    all_games_df = data_cache['all_games']
    game_id_list = []
    for game in games_list:
        # try to find the game in the all_games_df in the 'normalized_name' column and append the 'appid'
        game_id = all_games_df[all_games_df['normalized_name'] == game].get('appid')
        if not game_id.empty:
            game_id_list.append(game_id.values[0])
        else:
            print(f"Game {game} not found in all_games_df")

    limit = 5
    game_details = []
    for appid in game_id_list:
        if limit <= 0:
            break
        try:
            response = requests.get(f'https://store.steampowered.com/api/appdetails?appids={appid}')
            response.raise_for_status()
            data = response.json()
            if str(appid) in data and 'data' in data[str(appid)]:
                game_details.append(data[str(appid)]['data'])
                limit -= 1
            else:
                print(f"No data found for appid {appid}")
        except requests.RequestException as e:
            print(f"Error fetching game details for appid {appid}: {e}")
            continue

    return game_details