import re
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
    '・', '️', '！', '＃', '％', '＆', '（', '）', '＊', '＋', '，', '－', '．', '／', '：', '＜', '＞', '？', '［', '］', '｜', '～', '｡', '｢', '｣', '･',
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