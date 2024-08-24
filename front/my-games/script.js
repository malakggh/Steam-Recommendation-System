function generateLink() {
  const userId = document.getElementById("steamUserID").value.trim();
  
  if (userId === "") {
    alert("Please enter your Steam user-id.");
    return; // Exit the function if the input is empty
  }

  const link = `https://steamcommunity.com/id/${userId}/games/?tab=all`;
  window.open(link, '_blank'); // Open the link in a new tab
}

// Add event listener to the input field to detect "Enter" key press
document.getElementById("steamUserID").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent the default action (form submission, etc.)
    generateLink(); // Call the generateLink function
  }
});



async function submitData() {
  // const data = document.getElementById("steamData").value.trim();
  const data = `
  Link to the Steam HomepageSTORECOMMUNITYmaayan.labChatSUPPORT
Home
Discovery Queue
Wishlist
Points Shop
News
Stats
About
Home
Discussions
Workshop
Market
Broadcasts
Install Steam 
 maayan.lab
₪0.34
 maayan.lab

maayan.lab » Games
Recently Played (4)
All Games (1540)
Perfect Games (12)
Followed
Reviews (12)
Wishlist
Find a game
Playtime
Name
Achievement Completion
REMOTE DOWNLOAD TO:
PC Client | "Maayan-PC"
PUBG: BATTLEGROUNDS
PUBG: BATTLEGROUNDS
TOTAL PLAYED
93.3 hours
LAST PLAYED
Sep 20, 2018
ACHIEVEMENTS
7/37
My Game Stats
My Game Content
UNINSTALL
HELLDIVERS™ 2
HELLDIVERS™ 2
TOTAL PLAYED
22.5 hours
LAST PLAYED
Aug 7
ACHIEVEMENTS
20/38
My Game Stats
My Game Content
UNINSTALL
Ready or Not
Ready or Not
TOTAL PLAYED
21.3 hours
LAST PLAYED
May 9
ACHIEVEMENTS
2/15
My Game Stats
My Game Content
UNINSTALL
Dead Cells
Dead Cells
TOTAL PLAYED
106 minutes
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/121
My Game Stats
My Game Content
UNINSTALL
Disco Elysium
Disco Elysium
ACHIEVEMENTS
0/45
My Game Stats
My Game Content
UNINSTALL
Call of Duty: Modern Warfare 2 (2009) - Multiplayer
Call of Duty: Modern Warfare 2 (2009) - Multiplayer
TOTAL PLAYED
1,037.1 hours
LAST PLAYED
May 17, 2021
My Game Content
696.6 MB
DOWNLOAD
Rocket League
Rocket League
TOTAL PLAYED
843.1 hours
LAST PLAYED
Apr 8
ACHIEVEMENTS
88/88
My Game Stats
My Game Content
UNINSTALL
Monster Hunter: World
Monster Hunter: World
TOTAL PLAYED
727.2 hours
LAST PLAYED
Oct 8, 2020
ACHIEVEMENTS
50/100
My Game Stats
My Game Content
98.4 GB
DOWNLOAD
Forza Horizon 5
Forza Horizon 5
TOTAL PLAYED
515.1 hours
LAST PLAYED
Jun 23
ACHIEVEMENTS
137/137
My Game Stats
My Game Content
UNINSTALL
Assassin's Creed Brotherhood
Assassin's Creed Brotherhood
TOTAL PLAYED
271.1 hours
LAST PLAYED
Jan 16, 2017
My Game Content
18.4 GB
DOWNLOAD
Battlefield: Bad Company™ 2
Battlefield: Bad Company™ 2
TOTAL PLAYED
196.6 hours
LAST PLAYED
Aug 21, 2019
My Game Content
8.5 GB
DOWNLOAD
Call of Duty: Modern Warfare 2 (2009)
Call of Duty: Modern Warfare 2 (2009)
TOTAL PLAYED
142.3 hours
LAST PLAYED
Nov 14, 2017
ACHIEVEMENTS
48/50
My Game Stats
My Game Content
11.3 GB
DOWNLOAD
Among Us
Among Us
TOTAL PLAYED
141.8 hours
LAST PLAYED
Feb 1, 2023
ACHIEVEMENTS
13/33
My Game Stats
My Game Content
UNINSTALL
The Witcher 3: Wild Hunt
The Witcher 3: Wild Hunt
TOTAL PLAYED
89.9 hours
LAST PLAYED
Jul 21, 2023
ACHIEVEMENTS
34/78
My Game Stats
My Game Content
57.3 GB
DOWNLOAD
theHunter: Call of the Wild™
theHunter: Call of the Wild™
TOTAL PLAYED
87.4 hours
LAST PLAYED
Oct 21, 2021
ACHIEVEMENTS
33/160
My Game Stats
My Game Content
89.1 GB
DOWNLOAD
Call of Duty: Black Ops - Multiplayer
Call of Duty: Black Ops - Multiplayer
TOTAL PLAYED
77.1 hours
LAST PLAYED
Jan 23, 2017
ACHIEVEMENTS
2/3
My Game Stats
My Game Content
8.2 MB
DOWNLOAD
HITMAN™ 2
HITMAN™ 2
TOTAL PLAYED
74.8 hours
LAST PLAYED
Jan 30, 2022
ACHIEVEMENTS
44/146
My Game Stats
My Game Content
149.6 GB
DOWNLOAD
Palworld
Palworld
TOTAL PLAYED
70.4 hours
LAST PLAYED
Feb 6
ACHIEVEMENTS
7/31
My Game Stats
My Game Content
23.2 GB
DOWNLOAD
Total War: WARHAMMER II
Total War: WARHAMMER II
TOTAL PLAYED
70.2 hours
LAST PLAYED
Feb 8, 2023
ACHIEVEMENTS
30/152
My Game Stats
My Game Content
62.2 GB
DOWNLOAD
Wallpaper Engine
Wallpaper Engine
TOTAL PLAYED
59.3 hours
LAST PLAYED
Today
ACHIEVEMENTS
3/17
My Game Stats
My Game Content
UNINSTALL
RPG Maker MV
RPG Maker MV
TOTAL PLAYED
59 hours
LAST PLAYED
Feb 12, 2023
My Game Content
UNINSTALL
Marvel’s Spider-Man Remastered
Marvel’s Spider-Man Remastered
TOTAL PLAYED
58 hours
LAST PLAYED
Dec 6, 2022
ACHIEVEMENTS
78/78
My Game Stats
My Game Content
66 GB
DOWNLOAD
DAVE THE DIVER
DAVE THE DIVER
TOTAL PLAYED
62.3 hours
LAST PLAYED
Nov 28, 2023
ACHIEVEMENTS
43/43
My Game Stats
My Game Content
2.6 GB
DOWNLOAD
Fall Guys
Fall Guys
TOTAL PLAYED
50.8 hours
LAST PLAYED
Dec 27, 2022
ACHIEVEMENTS
27/34
My Game Stats
My Game Content
6.7 GB
DOWNLOAD
NBA 2K Playgrounds 2
NBA 2K Playgrounds 2
TOTAL PLAYED
41.9 hours
LAST PLAYED
Aug 2, 2020
ACHIEVEMENTS
13/13
My Game Stats
My Game Content
9.7 GB
DOWNLOAD
Grand Theft Auto V
Grand Theft Auto V
TOTAL PLAYED
41.4 hours
LAST PLAYED
Jul 13, 2018
ACHIEVEMENTS
10/77
My Game Stats
My Game Content
112.8 GB
DOWNLOAD
Devil Daggers
Devil Daggers
TOTAL PLAYED
39.6 hours
LAST PLAYED
May 9
ACHIEVEMENTS
0/1
My Game Stats
My Game Content
UNINSTALL
Danganronpa: Trigger Happy Havoc
Danganronpa: Trigger Happy Havoc
TOTAL PLAYED
38.7 hours
LAST PLAYED
Jan 1
ACHIEVEMENTS
9/38
My Game Stats
My Game Content
3 GB
DOWNLOAD
The Elder Scrolls V: Skyrim Special Edition
The Elder Scrolls V: Skyrim Special Edition
TOTAL PLAYED
35.3 hours
LAST PLAYED
Jan 27, 2023
ACHIEVEMENTS
32/75
My Game Stats
My Game Content
15 GB
DOWNLOAD
Arma 2: FreeArma 2: Free
Arma 2: Free
TOTAL PLAYED
35.3 hours
LAST PLAYED
Sep 3, 2017
My Game Content
1.7 GB
DOWNLOAD
Dead by Daylight
Dead by Daylight
TOTAL PLAYED
34.8 hours
LAST PLAYED
Jan 26, 2022
ACHIEVEMENTS
18/258
My Game Stats
My Game Content
42.6 GB
DOWNLOAD
Call of Duty: Black Ops
Call of Duty: Black Ops
TOTAL PLAYED
34.2 hours
LAST PLAYED
Jan 23, 2017
ACHIEVEMENTS
21/68
My Game Stats
My Game Content
9 GB
DOWNLOAD
Horizon Zero Dawn™ Complete Edition
Horizon Zero Dawn™ Complete Edition
TOTAL PLAYED
33.1 hours
LAST PLAYED
Feb 21, 2021
ACHIEVEMENTS
39/79
My Game Stats
My Game Content
72.2 GB
DOWNLOAD
Call of Duty®: Modern Warfare® 3 (2011) - MultiplayerCall of Duty®: Modern Warfare® 3 (2011) - Multiplayer
Call of Duty®: Modern Warfare® 3 (2011) - Multiplayer
TOTAL PLAYED
29.8 hours
LAST PLAYED
May 1, 2019
My Game Content
14.1 GB
DOWNLOAD
HITMAN™
HITMAN™
TOTAL PLAYED
27.9 hours
LAST PLAYED
Apr 16, 2020
ACHIEVEMENTS
13/69
My Game Stats
My Game Content
68.3 GB
DOWNLOAD
God of War
God of War
TOTAL PLAYED
24.8 hours
LAST PLAYED
Sep 5, 2022
ACHIEVEMENTS
16/37
My Game Stats
My Game Content
64.2 GB
DOWNLOAD
Worms Reloaded
Worms Reloaded
TOTAL PLAYED
24.5 hours
LAST PLAYED
Dec 14, 2018
ACHIEVEMENTS
11/61
My Game Stats
My Game Content
3.4 GB
DOWNLOAD
Vampire Survivors
Vampire Survivors
TOTAL PLAYED
25.1 hours
LAST PLAYED
Jan 28, 2023
ACHIEVEMENTS
78/211
My Game Stats
My Game Content
733.9 MB
DOWNLOAD
UNCHARTED™: Legacy of Thieves Collection
UNCHARTED™: Legacy of Thieves Collection
TOTAL PLAYED
24.1 hours
LAST PLAYED
Nov 12, 2023
ACHIEVEMENTS
29/101
My Game Stats
My Game Content
124.1 GB
DOWNLOAD
Plague Inc: Evolved
Plague Inc: Evolved
TOTAL PLAYED
21.9 hours
LAST PLAYED
Jul 31, 2021
ACHIEVEMENTS
61/234
My Game Stats
My Game Content
1.2 GB
DOWNLOAD
DOOM Eternal
DOOM Eternal
TOTAL PLAYED
21.4 hours
LAST PLAYED
Oct 9, 2020
ACHIEVEMENTS
16/50
My Game Stats
My Game Content
89 GB
DOWNLOAD
Mortal Kombat X
Mortal Kombat X
TOTAL PLAYED
21.1 hours
LAST PLAYED
Jan 28, 2023
ACHIEVEMENTS
18/73
My Game Stats
My Game Content
77.2 GB
DOWNLOAD
Game Dev Tycoon
Game Dev Tycoon
TOTAL PLAYED
19.6 hours
LAST PLAYED
Dec 26, 2020
ACHIEVEMENTS
20/35
My Game Stats
My Game Content
161 MB
DOWNLOAD
Dead Space
Dead Space
TOTAL PLAYED
18.6 hours
LAST PLAYED
Jul 8, 2023
ACHIEVEMENTS
32/47
My Game Stats
My Game Content
36.3 GB
DOWNLOAD
NieR:Automata™
NieR:Automata™
TOTAL PLAYED
17.9 hours
LAST PLAYED
Jul 5, 2017
ACHIEVEMENTS
18/47
My Game Stats
My Game Content
40.3 GB
DOWNLOAD
Don't Starve Together
Don't Starve Together
TOTAL PLAYED
16.7 hours
LAST PLAYED
Sep 26, 2019
My Game Content
3.5 GB
DOWNLOAD
Besiege
Besiege
TOTAL PLAYED
16.4 hours
LAST PLAYED
May 31
ACHIEVEMENTS
25/36
My Game Stats
My Game Content
UNINSTALL
Hades
Hades
TOTAL PLAYED
16.2 hours
LAST PLAYED
Feb 25, 2023
ACHIEVEMENTS
8/49
My Game Stats
My Game Content
11.1 GB
DOWNLOAD
Hollow Knight
Hollow Knight
TOTAL PLAYED
16 hours
LAST PLAYED
Aug 1, 2021
ACHIEVEMENTS
10/63
My Game Stats
My Game Content
UNINSTALL
Metro Exodus
Metro Exodus
TOTAL PLAYED
16 hours
LAST PLAYED
Jul 12, 2020
ACHIEVEMENTS
27/68
My Game Stats
My Game Content
77.7 GB
DOWNLOAD
Lara Croft and the Guardian of Light
Lara Croft and the Guardian of Light
TOTAL PLAYED
15.6 hours
LAST PLAYED
Jul 26, 2021
ACHIEVEMENTS
12/12
My Game Stats
My Game Content
3.5 GB
DOWNLOAD
DOOM
DOOM
TOTAL PLAYED
15.1 hours
LAST PLAYED
Mar 15, 2020
ACHIEVEMENTS
16/54
My Game Stats
My Game Content
68.7 GB
DOWNLOAD
Arma 3
Arma 3
TOTAL PLAYED
15 hours
LAST PLAYED
Jul 28, 2019
ACHIEVEMENTS
8/123
My Game Stats
My Game Content
40.7 GB
DOWNLOAD
MONSTER HUNTER RISE
MONSTER HUNTER RISE
TOTAL PLAYED
14.7 hours
LAST PLAYED
Jan 26, 2022
ACHIEVEMENTS
1/100
My Game Stats
My Game Content
34.4 GB
DOWNLOAD
Middle-earth™: Shadow of Mordor™
Middle-earth™: Shadow of Mordor™
TOTAL PLAYED
14.5 hours
LAST PLAYED
Jan 24, 2017
ACHIEVEMENTS
24/74
My Game Stats
My Game Content
88.2 GB
DOWNLOAD
Half-Life
Half-Life
TOTAL PLAYED
14.3 hours
LAST PLAYED
May 6, 2020
My Game Content
562.1 MB
DOWNLOAD
Overcooked
Overcooked
TOTAL PLAYED
14.2 hours
LAST PLAYED
Oct 5, 2019
ACHIEVEMENTS
10/12
My Game Stats
My Game Content
681.4 MB
DOWNLOAD
Super Meat Boy
Super Meat Boy
TOTAL PLAYED
14.1 hours
LAST PLAYED
Mar 25, 2023
ACHIEVEMENTS
7/48
My Game Stats
My Game Content
495.1 MB
DOWNLOAD
Rise of the Tomb Raider
Rise of the Tomb Raider
TOTAL PLAYED
13.8 hours
LAST PLAYED
Nov 2, 2018
ACHIEVEMENTS
31/143
My Game Stats
My Game Content
26.4 GB
DOWNLOAD
Half-Life 2
Half-Life 2
TOTAL PLAYED
13.6 hours
LAST PLAYED
Jun 28, 2020
ACHIEVEMENTS
21/33
My Game Stats
My Game Content
6.3 GB
DOWNLOAD
Wolfenstein: The New Order
Wolfenstein: The New Order
TOTAL PLAYED
13 hours
LAST PLAYED
Jun 7, 2018
ACHIEVEMENTS
19/50
My Game Stats
My Game Content
43.4 GB
DOWNLOAD
Stick Fight: The Game
Stick Fight: The Game
TOTAL PLAYED
12.1 hours
LAST PLAYED
Apr 17
ACHIEVEMENTS
22/28
My Game Stats
My Game Content
374.7 MB
DOWNLOAD
Alan Wake
Alan Wake
TOTAL PLAYED
11.9 hours
LAST PLAYED
Sep 3, 2017
ACHIEVEMENTS
30/67
My Game Stats
My Game Content
22 GB
DOWNLOAD
Keep Talking and Nobody Explodes
Keep Talking and Nobody Explodes
TOTAL PLAYED
11.3 hours
LAST PLAYED
May 27
ACHIEVEMENTS
6/10
My Game Stats
My Game Content
UNINSTALL
Hogwarts Legacy
Hogwarts Legacy
TOTAL PLAYED
11.2 hours
LAST PLAYED
Mar 12, 2023
ACHIEVEMENTS
6/45
My Game Stats
My Game Content
71 GB
DOWNLOAD
Halo: The Master Chief Collection
Halo: The Master Chief Collection
TOTAL PLAYED
11.1 hours
LAST PLAYED
Feb 23, 2021
ACHIEVEMENTS
39/700
My Game Stats
My Game Content
32.3 GB
DOWNLOAD
Control Ultimate Edition
Control Ultimate Edition
TOTAL PLAYED
11 hours
LAST PLAYED
Aug 20, 2021
ACHIEVEMENTS
19/67
My Game Stats
My Game Content
49.6 GB
DOWNLOAD
Valheim
Valheim
TOTAL PLAYED
11 hours
LAST PLAYED
Mar 25, 2021
My Game Content
2.1 GB
DOWNLOAD
Mafia: Definitive Edition
Mafia: Definitive Edition
TOTAL PLAYED
10.9 hours
LAST PLAYED
Dec 13, 2021
ACHIEVEMENTS
27/43
My Game Stats
My Game Content
36.5 GB
DOWNLOAD
Overcooked! 2
Overcooked! 2
TOTAL PLAYED
10.7 hours
LAST PLAYED
Jun 25
ACHIEVEMENTS
9/54
My Game Stats
My Game Content
UNINSTALL
The Henry Stickmin Collection
The Henry Stickmin Collection
TOTAL PLAYED
10.6 hours
LAST PLAYED
Aug 31, 2021
ACHIEVEMENTS
82/82
My Game Stats
My Game Content
440.1 MB
DOWNLOAD
Batman: Arkham City GOTY
Batman: Arkham City GOTY
TOTAL PLAYED
10.4 hours
LAST PLAYED
Mar 28, 2017
ACHIEVEMENTS
26/64
My Game Stats
My Game Content
18.6 GB
DOWNLOAD
Resident Evil 7 Biohazard
Resident Evil 7 Biohazard
TOTAL PLAYED
10.2 hours
LAST PLAYED
Jun 24, 2018
ACHIEVEMENTS
20/58
My Game Stats
My Game Content
64.3 GB
DOWNLOAD
Portal
Portal
TOTAL PLAYED
9.9 hours
LAST PLAYED
May 24, 2020
ACHIEVEMENTS
6/15
My Game Stats
My Game Content
7.3 GB
DOWNLOAD
Celeste
Celeste
TOTAL PLAYED
9.7 hours
LAST PLAYED
Feb 13, 2023
ACHIEVEMENTS
10/32
My Game Stats
My Game Content
1.1 GB
DOWNLOAD
Tomb Raider
Tomb Raider
TOTAL PLAYED
9.7 hours
LAST PLAYED
May 23, 2017
ACHIEVEMENTS
14/50
My Game Stats
My Game Content
11 GB
DOWNLOAD
Hi-Fi RUSH
Hi-Fi RUSH
TOTAL PLAYED
9.6 hours
LAST PLAYED
Mar 21
ACHIEVEMENTS
23/71
My Game Stats
My Game Content
16.6 GB
DOWNLOAD
Call of Duty®: Modern Warfare® 3 (2011)
Call of Duty®: Modern Warfare® 3 (2011)
TOTAL PLAYED
9.2 hours
LAST PLAYED
May 4, 2019
ACHIEVEMENTS
6/76
My Game Stats
My Game Content
5.4 MB
DOWNLOAD
Metro 2033 Redux
Metro 2033 Redux
TOTAL PLAYED
9 hours
LAST PLAYED
Mar 5, 2017
ACHIEVEMENTS
14/49
My Game Stats
My Game Content
7.8 GB
DOWNLOAD
DiRT 4
DiRT 4
TOTAL PLAYED
9 hours
LAST PLAYED
Aug 7, 2023
ACHIEVEMENTS
13/48
My Game Stats
My Game Content
35.9 GB
DOWNLOAD
Deep Rock Galactic
Deep Rock Galactic
TOTAL PLAYED
8.6 hours
LAST PLAYED
Aug 30, 2022
ACHIEVEMENTS
4/69
My Game Stats
My Game Content
3.3 GB
DOWNLOAD
Balatro
Balatro
TOTAL PLAYED
9.5 hours
LAST PLAYED
Jun 25
ACHIEVEMENTS
7/31
My Game Stats
My Game Content
UNINSTALL
Metro: Last Light Redux
Metro: Last Light Redux
TOTAL PLAYED
8.4 hours
LAST PLAYED
Sep 5, 2017
ACHIEVEMENTS
18/49
My Game Stats
My Game Content
9.2 GB
DOWNLOAD
Batman: Arkham Asylum GOTY Edition
Batman: Arkham Asylum GOTY Edition
TOTAL PLAYED
8.4 hours
LAST PLAYED
Mar 21, 2017
ACHIEVEMENTS
28/47
My Game Stats
My Game Content
7.9 GB
DOWNLOAD
Hellblade: Senua's Sacrifice
Hellblade: Senua's Sacrifice
TOTAL PLAYED
8.1 hours
LAST PLAYED
Aug 18, 2017
ACHIEVEMENTS
13/14
My Game Stats
My Game Content
18.8 GB
DOWNLOAD
Mafia II: Definitive Edition
Mafia II: Definitive Edition
TOTAL PLAYED
8.1 hours
LAST PLAYED
May 19
ACHIEVEMENTS
32/67
My Game Stats
My Game Content
44.1 GB
DOWNLOAD
Borderlands 2
Borderlands 2
TOTAL PLAYED
8 hours
LAST PLAYED
Oct 1, 2018
ACHIEVEMENTS
13/75
My Game Stats
My Game Content
11.2 GB
DOWNLOAD
To the Moon
To the Moon
TOTAL PLAYED
8 hours
LAST PLAYED
Aug 7, 2020
ACHIEVEMENTS
1/1
My Game Stats
My Game Content
176.9 MB
DOWNLOAD
My Friend Pedro
My Friend Pedro
TOTAL PLAYED
7.9 hours
LAST PLAYED
Nov 27, 2020
ACHIEVEMENTS
22/30
My Game Stats
My Game Content
3.6 GB
DOWNLOAD
Invisigun Reloaded
Invisigun Reloaded
TOTAL PLAYED
7.8 hours
LAST PLAYED
Feb 10, 2020
ACHIEVEMENTS
18/39
My Game Stats
My Game Content
437.6 MB
DOWNLOAD
The Lord of the Rings: War in the North
The Lord of the Rings: War in the North
TOTAL PLAYED
7.6 hours
LAST PLAYED
Oct 6, 2018
ACHIEVEMENTS
25/46
My Game Stats
My Game Content
7.2 GB
DOWNLOAD
Hacknet
Hacknet
TOTAL PLAYED
7.5 hours
LAST PLAYED
Oct 23, 2017
ACHIEVEMENTS
4/11
My Game Stats
My Game Content
422.2 MB
DOWNLOAD
The Sexy Brutale
The Sexy Brutale
TOTAL PLAYED
7.3 hours
LAST PLAYED
Aug 11, 2017
ACHIEVEMENTS
15/18
My Game Stats
My Game Content
3 GB
DOWNLOAD
Crysis Remastered
Crysis Remastered
TOTAL PLAYED
7.3 hours
LAST PLAYED
Feb 1, 2023
ACHIEVEMENTS
30/40
My Game Stats
My Game Content
19.9 GB
DOWNLOAD
Moonlighter
Moonlighter
TOTAL PLAYED
7.3 hours
LAST PLAYED
May 31, 2019
ACHIEVEMENTS
9/67
My Game Stats
My Game Content
1.2 GB
DOWNLOAD
DiRT 3 Complete EditionDiRT 3 Complete Edition
DiRT 3 Complete Edition
TOTAL PLAYED
7.1 hours
LAST PLAYED
Jul 13, 2018
ACHIEVEMENTS
10/60
My Game Stats
My Game Content
13.7 GB
DOWNLOAD
Red Dead Redemption 2
Red Dead Redemption 2
TOTAL PLAYED
7 hours
LAST PLAYED
Mar 28, 2023
ACHIEVEMENTS
2/51
My Game Stats
My Game Content
UNINSTALL
HITMAN World of Assassination
HITMAN World of Assassination
TOTAL PLAYED
6.9 hours
LAST PLAYED
Mar 11, 2023
ACHIEVEMENTS
17/83
My Game Stats
My Game Content
UNINSTALL
Transistor
Transistor
TOTAL PLAYED
6.8 hours
LAST PLAYED
Jul 28, 2017
ACHIEVEMENTS
11/33
My Game Stats
My Game Content
3.1 GB
DOWNLOAD
Team Fortress 2
Team Fortress 2
TOTAL PLAYED
6.5 hours
LAST PLAYED
Oct 23, 2017
ACHIEVEMENTS
19/520
My Game Stats
My Game Content
REMOTE DOWNLOAD UNAVAILABLE
Portal 2
Portal 2
TOTAL PLAYED
6.5 hours
LAST PLAYED
Jul 21, 2023
ACHIEVEMENTS
15/51
My Game Stats
My Game Content
11.9 GB
DOWNLOAD
Warframe
Warframe
TOTAL PLAYED
6.2 hours
LAST PLAYED
Jun 6, 2018
ACHIEVEMENTS
20/193
My Game Stats
My Game Content
41.2 GB
DOWNLOAD
XCOM 2
XCOM 2
TOTAL PLAYED
5.9 hours
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/88
My Game Stats
My Game Content
75.1 GB
DOWNLOAD
Spec Ops: The Line
Spec Ops: The Line
TOTAL PLAYED
5.8 hours
LAST PLAYED
Jul 26, 2017
ACHIEVEMENTS
33/50
My Game Stats
My Game Content
7.1 GB
DOWNLOAD
Resident Evil 5
Resident Evil 5
TOTAL PLAYED
5.8 hours
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/70
My Game Stats
My Game Content
8.5 GB
DOWNLOAD
Shadow of the Tomb Raider
Shadow of the Tomb Raider
TOTAL PLAYED
5.8 hours
LAST PLAYED
Jan 26, 2019
ACHIEVEMENTS
11/99
My Game Stats
My Game Content
35.2 GB
DOWNLOAD
Owlboy
Owlboy
TOTAL PLAYED
5.7 hours
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/12
My Game Stats
My Game Content
1 GB
DOWNLOAD
Axiom Verge
Axiom Verge
TOTAL PLAYED
5.7 hours
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/29
My Game Stats
My Game Content
122.8 MB
DOWNLOAD
Strider
Strider
TOTAL PLAYED
5.6 hours
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/30
My Game Stats
My Game Content
3.3 GB
DOWNLOAD
Ryse: Son of Rome
Ryse: Son of Rome
TOTAL PLAYED
5.5 hours
LAST PLAYED
Aug 29, 2017
ACHIEVEMENTS
28/73
My Game Stats
My Game Content
25.8 GB
DOWNLOAD
Mark of the Ninja
Mark of the Ninja
TOTAL PLAYED
5.4 hours
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/38
My Game Stats
My Game Content
2.6 GB
DOWNLOAD
Persona 4 Golden
Persona 4 Golden
TOTAL PLAYED
5.4 hours
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/50
My Game Stats
My Game Content
10.5 GB
DOWNLOAD
Vampyr
Vampyr
TOTAL PLAYED
5.4 hours
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/28
My Game Stats
My Game Content
14.2 GB
DOWNLOAD
Devil May Cry 4 Special Edition
Devil May Cry 4 Special Edition
TOTAL PLAYED
5.4 hours
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/42
My Game Stats
My Game Content
24.7 GB
DOWNLOAD
Chime Sharp
Chime Sharp
TOTAL PLAYED
5.4 hours
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/17
My Game Stats
My Game Content
844 MB
DOWNLOAD
Ori and the Blind Forest
Ori and the Blind Forest
TOTAL PLAYED
5.3 hours
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/50
My Game Stats
My Game Content
7.4 GB
DOWNLOAD
Prison Architect
Prison Architect
TOTAL PLAYED
5.2 hours
LAST PLAYED
May 26, 2021
ACHIEVEMENTS
0/18
My Game Stats
My Game Content
512.1 MB
DOWNLOAD
Thumper
Thumper
TOTAL PLAYED
5.2 hours
LAST PLAYED
Jan 4, 2021
ACHIEVEMENTS
6/19
My Game Stats
My Game Content
886.2 MB
DOWNLOAD
Umbrella Corps
Umbrella Corps
TOTAL PLAYED
5.2 hours
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/41
My Game Stats
My Game Content
10.1 GB
DOWNLOAD
APE OUT
APE OUT
TOTAL PLAYED
5.1 hours
LAST PLAYED
Mar 12, 2023
ACHIEVEMENTS
5/23
My Game Stats
My Game Content
994.8 MB
DOWNLOAD
KovaaK's
KovaaK's
TOTAL PLAYED
5.1 hours
LAST PLAYED
May 24, 2020
ACHIEVEMENTS
0/1
My Game Stats
My Game Content
7 GB
DOWNLOAD
Caveblazers
Caveblazers
TOTAL PLAYED
5 hours
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/21
My Game Stats
My Game Content
66 MB
DOWNLOAD
TT Isle of Man: Ride on the Edge
TT Isle of Man: Ride on the Edge
TOTAL PLAYED
5 hours
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/31
My Game Stats
My Game Content
18 GB
DOWNLOAD
Broforce
Broforce
TOTAL PLAYED
4.9 hours
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/17
My Game Stats
My Game Content
523.7 MB
DOWNLOAD
DiRT Rally 2.0
DiRT Rally 2.0
TOTAL PLAYED
4.9 hours
LAST PLAYED
Jul 14, 2022
ACHIEVEMENTS
4/71
My Game Stats
My Game Content
109.5 GB
DOWNLOAD
The Elder Scrolls Online
The Elder Scrolls Online
TOTAL PLAYED
4.8 hours
LAST PLAYED
Oct 22, 2017
My Game Content
135.6 GB
DOWNLOAD
Killing Floor 2
Killing Floor 2
TOTAL PLAYED
4.8 hours
LAST PLAYED
Dec 9, 2018
ACHIEVEMENTS
13/307
My Game Stats
My Game Content
94.8 GB
DOWNLOAD
For Honor
For Honor
TOTAL PLAYED
4.7 hours
LAST PLAYED
Jun 23, 2021
My Game Content
101.2 GB
DOWNLOAD
Super Bit Blaster XL
Super Bit Blaster XL
TOTAL PLAYED
4.6 hours
LAST PLAYED
Feb 29
ACHIEVEMENTS
17/17
My Game Stats
My Game Content
131.2 MB
DOWNLOAD
Crash Bandicoot™ N. Sane Trilogy
Crash Bandicoot™ N. Sane Trilogy
TOTAL PLAYED
4.6 hours
LAST PLAYED
Jan 4, 2021
ACHIEVEMENTS
7/74
My Game Stats
My Game Content
29.1 GB
DOWNLOAD
Talisman: Digital Edition
Talisman: Digital Edition
TOTAL PLAYED
4.6 hours
LAST PLAYED
May 22, 2017
ACHIEVEMENTS
7/255
My Game Stats
My Game Content
1.1 GB
DOWNLOAD
Bastion
Bastion
TOTAL PLAYED
4.5 hours
LAST PLAYED
Jul 9, 2017
ACHIEVEMENTS
7/24
My Game Stats
My Game Content
1.2 GB
DOWNLOAD
Oxenfree
Oxenfree
TOTAL PLAYED
4.5 hours
LAST PLAYED
Jun 21, 2018
ACHIEVEMENTS
4/13
My Game Stats
My Game Content
3.6 GB
DOWNLOAD
Dishonored
Dishonored
TOTAL PLAYED
4.5 hours
LAST PLAYED
Mar 20, 2017
ACHIEVEMENTS
10/80
My Game Stats
My Game Content
13.1 GB
DOWNLOAD
Lion Quest
Lion Quest
TOTAL PLAYED
4.4 hours
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/46
My Game Stats
My Game Content
557.3 MB
DOWNLOAD
Horizon Chase Turbo
Horizon Chase Turbo
TOTAL PLAYED
4.4 hours
LAST PLAYED
Jun 29, 2021
ACHIEVEMENTS
0/48
My Game Stats
My Game Content
1.2 GB
DOWNLOAD
Shovel Knight: Treasure Trove
Shovel Knight: Treasure Trove
TOTAL PLAYED
4.4 hours
LAST PLAYED
Feb 24, 2017
ACHIEVEMENTS
8/138
My Game Stats
My Game Content
421.6 MB
DOWNLOAD
The Last of Us™ Part I
The Last of Us™ Part I
TOTAL PLAYED
4.3 hours
LAST PLAYED
Jun 25
ACHIEVEMENTS
0/29
My Game Stats
My Game Content
UNINSTALL
Age of Empires II (2013)
Age of Empires II (2013)
TOTAL PLAYED
4.3 hours
LAST PLAYED
Feb 23, 2019
ACHIEVEMENTS
14/294
My Game Stats
My Game Content
4.5 GB
DOWNLOAD
Divinity: Original Sin Enhanced Edition
Divinity: Original Sin Enhanced Edition
TOTAL PLAYED
4.3 hours
LAST PLAYED
Oct 5, 2017
ACHIEVEMENTS
3/54
My Game Stats
My Game Content
10 GB
DOWNLOAD
Mega Man Legacy Collection 2
Mega Man Legacy Collection 2
TOTAL PLAYED
4.2 hours
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/21
My Game Stats
My Game Content
3.6 GB
DOWNLOAD
The Long Dark
The Long Dark
TOTAL PLAYED
4.2 hours
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/56
My Game Stats
My Game Content
13.8 GB
DOWNLOAD
RPG Maker XP
RPG Maker XP
TOTAL PLAYED
4.1 hours
LAST PLAYED
Jan 20, 2022
My Game Content
25.7 MB
DOWNLOAD
CHRONO TRIGGER
CHRONO TRIGGER
TOTAL PLAYED
4.1 hours
LAST PLAYED
Jul 8, 2021
ACHIEVEMENTS
0/13
My Game Stats
My Game Content
UNINSTALL
Mount & Blade: Warband
Mount & Blade: Warband
TOTAL PLAYED
4 hours
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/80
My Game Stats
My Game Content
4.6 GB
DOWNLOAD
Vanguard Princess
Vanguard Princess
TOTAL PLAYED
4 hours
LAST PLAYED
Jun 23, 2021
My Game Content
3.4 GB
DOWNLOAD
Alien: Isolation
Alien: Isolation
TOTAL PLAYED
4 hours
LAST PLAYED
Oct 20, 2020
ACHIEVEMENTS
9/50
My Game Stats
My Game Content
30.2 GB
DOWNLOAD
Sniper Ghost Warrior Contracts 2
Sniper Ghost Warrior Contracts 2
TOTAL PLAYED
4 hours
LAST PLAYED
Dec 21, 2022
ACHIEVEMENTS
10/43
My Game Stats
My Game Content
14.3 GB
DOWNLOAD
ACE COMBAT™7: SKIES UNKNOWN
ACE COMBAT™7: SKIES UNKNOWN
TOTAL PLAYED
3.9 hours
LAST PLAYED
Mar 6, 2023
ACHIEVEMENTS
5/49
My Game Stats
My Game Content
61.2 GB
DOWNLOAD
Warhammer: Vermintide 2
Warhammer: Vermintide 2
TOTAL PLAYED
3.9 hours
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
1/26
My Game Stats
My Game Content
60.8 GB
DOWNLOAD
Pillars of Eternity
Pillars of Eternity
TOTAL PLAYED
3.9 hours
LAST PLAYED
Jan 4, 2021
ACHIEVEMENTS
0/48
My Game Stats
My Game Content
16.3 GB
DOWNLOAD
Counter-Strike 2
Counter-Strike 2
TOTAL PLAYED
3.9 hours
LAST PLAYED
Oct 7, 2021
ACHIEVEMENTS
0/1
My Game Stats
My Game Content
40.6 GB
DOWNLOAD
Tyranny
Tyranny
TOTAL PLAYED
3.9 hours
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/70
My Game Stats
My Game Content
13.4 GB
DOWNLOAD
Cuphead
Cuphead
TOTAL PLAYED
3.9 hours
LAST PLAYED
Dec 20, 2018
ACHIEVEMENTS
5/42
My Game Stats
My Game Content
3.8 GB
DOWNLOAD
BattleBlock Theater
BattleBlock Theater
TOTAL PLAYED
3.9 hours
LAST PLAYED
Mar 16, 2021
ACHIEVEMENTS
6/30
My Game Stats
My Game Content
1.8 GB
DOWNLOAD
Rising Storm/Red Orchestra 2 Multiplayer
Rising Storm/Red Orchestra 2 Multiplayer
TOTAL PLAYED
3.8 hours
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/140
My Game Stats
My Game Content
23.8 GB
DOWNLOAD
Stray
Stray
TOTAL PLAYED
5.6 hours
LAST PLAYED
Aug 5, 2023
ACHIEVEMENTS
11/24
My Game Stats
My Game Content
6.1 GB
DOWNLOAD
Gremlins, Inc.
Gremlins, Inc.
TOTAL PLAYED
3.8 hours
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/100
My Game Stats
My Game Content
3.3 GB
DOWNLOAD
GRIS
GRIS
TOTAL PLAYED
3.8 hours
LAST PLAYED
Aug 25, 2023
ACHIEVEMENTS
6/17
My Game Stats
My Game Content
3.3 GB
DOWNLOAD
Redout: Enhanced Edition
Redout: Enhanced Edition
TOTAL PLAYED
3.7 hours
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/34
My Game Stats
My Game Content
4.6 GB
DOWNLOAD
Icewind Dale: Enhanced Edition
Icewind Dale: Enhanced Edition
TOTAL PLAYED
3.7 hours
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/50
My Game Stats
My Game Content
2.8 GB
DOWNLOAD
XCOM: Enemy Unknown
XCOM: Enemy Unknown
TOTAL PLAYED
3.7 hours
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/85
My Game Stats
My Game Content
18.6 GB
DOWNLOAD
Mount & Blade
Mount & Blade
TOTAL PLAYED
3.7 hours
LAST PLAYED
Jun 22, 2021
My Game Content
607 MB
DOWNLOAD
Tooth and Tail
Tooth and Tail
TOTAL PLAYED
3.7 hours
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/38
My Game Stats
My Game Content
515.3 MB
DOWNLOAD
Phantom Doctrine
Phantom Doctrine
TOTAL PLAYED
3.6 hours
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/47
My Game Stats
My Game Content
24.8 GB
DOWNLOAD
Darksiders Warmastered Edition
Darksiders Warmastered Edition
TOTAL PLAYED
3.6 hours
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/43
My Game Stats
My Game Content
22.5 GB
DOWNLOAD
Crypt of the NecroDancer
Crypt of the NecroDancer
TOTAL PLAYED
3.6 hours
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
1/61
My Game Stats
My Game Content
1.6 GB
DOWNLOAD
Valkyria Chronicles™
Valkyria Chronicles™
TOTAL PLAYED
3.6 hours
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/20
My Game Stats
My Game Content
19.9 GB
DOWNLOAD
80 Days
80 Days
TOTAL PLAYED
3.5 hours
LAST PLAYED
Sep 12, 2017
ACHIEVEMENTS
3/35
My Game Stats
My Game Content
1 GB
DOWNLOAD
METAL GEAR SOLID V: GROUND ZEROES
METAL GEAR SOLID V: GROUND ZEROES
TOTAL PLAYED
3.5 hours
LAST PLAYED
Apr 29, 2020
ACHIEVEMENTS
2/16
My Game Stats
My Game Content
2.8 GB
DOWNLOAD
Planescape: Torment: Enhanced Edition
Planescape: Torment: Enhanced Edition
TOTAL PLAYED
3.5 hours
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/50
My Game Stats
My Game Content
1.6 GB
DOWNLOAD
Resident Evil 2
Resident Evil 2
TOTAL PLAYED
3.5 hours
LAST PLAYED
May 9, 2019
ACHIEVEMENTS
9/44
My Game Stats
My Game Content
48.1 GB
DOWNLOAD
Project Highrise
Project Highrise
TOTAL PLAYED
3.5 hours
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/88
My Game Stats
My Game Content
575.4 MB
DOWNLOAD
Superliminal
Superliminal
TOTAL PLAYED
3.5 hours
LAST PLAYED
Jan 16, 2023
ACHIEVEMENTS
10/27
My Game Stats
My Game Content
14.9 GB
DOWNLOAD
American Fugitive
American Fugitive
TOTAL PLAYED
3.4 hours
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/46
My Game Stats
My Game Content
1.3 GB
DOWNLOAD
Little Nightmares
Little Nightmares
TOTAL PLAYED
3.4 hours
LAST PLAYED
Jan 20, 2021
ACHIEVEMENTS
5/22
My Game Stats
My Game Content
9 GB
DOWNLOAD
Baldur's Gate 3
Baldur's Gate 3
TOTAL PLAYED
3.4 hours
LAST PLAYED
Jan 21
ACHIEVEMENTS
3/54
My Game Stats
My Game Content
145.7 GB
DOWNLOAD
Mark of the Ninja: Remastered
Mark of the Ninja: Remastered
TOTAL PLAYED
3.3 hours
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/38
My Game Stats
My Game Content
7.5 GB
DOWNLOAD
DARK SOULS™: REMASTERED
DARK SOULS™: REMASTERED
TOTAL PLAYED
3.2 hours
LAST PLAYED
Jun 12, 2018
ACHIEVEMENTS
4/41
My Game Stats
My Game Content
6.9 GB
DOWNLOAD
Guilty Gear X2 #Reload
Guilty Gear X2 #Reload
TOTAL PLAYED
3.2 hours
LAST PLAYED
Jun 23, 2021
My Game Content
881.2 MB
DOWNLOAD
Sundered: Eldritch Edition
Sundered: Eldritch Edition
TOTAL PLAYED
3.2 hours
LAST PLAYED
Jan 8, 2021
ACHIEVEMENTS
0/20
My Game Stats
My Game Content
2.3 GB
DOWNLOAD
War Thunder
War Thunder
TOTAL PLAYED
3.2 hours
LAST PLAYED
Sep 22, 2018
ACHIEVEMENTS
0/84
My Game Stats
My Game Content
53.9 GB
DOWNLOAD
Dragon's Dogma: Dark Arisen
Dragon's Dogma: Dark Arisen
TOTAL PLAYED
3.2 hours
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/59
My Game Stats
My Game Content
19.7 GB
DOWNLOAD
Tick Tock: A Tale for Two
Tick Tock: A Tale for Two
TOTAL PLAYED
3.1 hours
LAST PLAYED
Mar 11, 2019
My Game Content
1,006.3 MB
DOWNLOAD
Rollers of the Realm
Rollers of the Realm
TOTAL PLAYED
3.1 hours
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/32
My Game Stats
My Game Content
1.2 GB
DOWNLOAD
Darksiders II Deathinitive Edition
Darksiders II Deathinitive Edition
TOTAL PLAYED
3.1 hours
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/50
My Game Stats
My Game Content
12.5 GB
DOWNLOAD
Door Kickers
Door Kickers
TOTAL PLAYED
3.1 hours
LAST PLAYED
May 24, 2022
ACHIEVEMENTS
9/43
My Game Stats
My Game Content
1.1 GB
DOWNLOAD
Need for Speed™ Heat 
Need for Speed™ Heat
TOTAL PLAYED
3 hours
LAST PLAYED
Nov 18, 2023
ACHIEVEMENTS
5/42
My Game Stats
My Game Content
34.2 GB
DOWNLOAD
Teenage Mutant Ninja Turtles: Shredder's Revenge
Teenage Mutant Ninja Turtles: Shredder's Revenge
TOTAL PLAYED
3 hours
LAST PLAYED
Dec 21, 2022
ACHIEVEMENTS
15/30
My Game Stats
My Game Content
995.9 MB
DOWNLOAD
Blasphemous
Blasphemous
TOTAL PLAYED
3 hours
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/45
My Game Stats
My Game Content
853.9 MB
DOWNLOAD
L.A. Noire
L.A. Noire
TOTAL PLAYED
2.9 hours
LAST PLAYED
Aug 29, 2023
ACHIEVEMENTS
3/60
My Game Stats
My Game Content
13.8 GB
DOWNLOAD
Offensive Combat: Redux!
Offensive Combat: Redux!
TOTAL PLAYED
2.9 hours
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/34
My Game Stats
My Game Content
2.8 GB
DOWNLOAD
Baldur's Gate: Enhanced Edition
Baldur's Gate: Enhanced Edition
TOTAL PLAYED
2.9 hours
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/129
My Game Stats
My Game Content
4.9 GB
DOWNLOAD
Scribblenauts Unlimited
Scribblenauts Unlimited
TOTAL PLAYED
2.9 hours
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/25
My Game Stats
My Game Content
1.7 GB
DOWNLOAD
Rock of Ages 2
Rock of Ages 2
TOTAL PLAYED
2.8 hours
LAST PLAYED
May 5, 2020
ACHIEVEMENTS
3/21
My Game Stats
My Game Content
4.4 GB
DOWNLOAD
The Stanley Parable
The Stanley Parable
TOTAL PLAYED
2.8 hours
LAST PLAYED
Jun 8, 2017
ACHIEVEMENTS
7/10
My Game Stats
My Game Content
2 GB
DOWNLOAD
Okami HD
Okami HD
TOTAL PLAYED
2.8 hours
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/51
My Game Stats
My Game Content
26.6 GB
DOWNLOAD
Distrust
Distrust
TOTAL PLAYED
2.8 hours
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/56
My Game Stats
My Game Content
1.3 GB
DOWNLOAD
Sins of a Solar Empire: Rebellion
Sins of a Solar Empire: Rebellion
TOTAL PLAYED
2.7 hours
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/68
My Game Stats
My Game Content
4.1 GB
DOWNLOAD
Spectrum
Spectrum
TOTAL PLAYED
2.7 hours
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/17
My Game Stats
My Game Content
1 GB
DOWNLOAD
Call of Duty®
Call of Duty®
TOTAL PLAYED
2.7 hours
LAST PLAYED
Nov 24, 2022
ACHIEVEMENTS
0/63
My Game Stats
My Game Content
39.3 GB
DOWNLOAD
Company of Heroes 
Company of Heroes
TOTAL PLAYED
2.7 hours
LAST PLAYED
Jan 5, 2021
My Game Stats
My Game Content
8.8 GB
DOWNLOAD
Insurgency
Insurgency
TOTAL PLAYED
2.7 hours
LAST PLAYED
Sep 1, 2018
ACHIEVEMENTS
6/100
My Game Stats
My Game Content
8.6 GB
DOWNLOAD
Divinity: Original Sin 2
Divinity: Original Sin 2
TOTAL PLAYED
2.7 hours
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
2/97
My Game Stats
My Game Content
58.7 GB
DOWNLOAD
No Time To Explain Remastered
No Time To Explain Remastered
TOTAL PLAYED
2.7 hours
LAST PLAYED
May 27
ACHIEVEMENTS
1/9
My Game Stats
My Game Content
1.3 GB
DOWNLOAD
The Binding of Isaac: Rebirth
The Binding of Isaac: Rebirth
TOTAL PLAYED
2.7 hours
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/637
My Game Stats
My Game Content
610.1 MB
DOWNLOAD
Twelve Minutes
Twelve Minutes
TOTAL PLAYED
2.7 hours
LAST PLAYED
May 15
ACHIEVEMENTS
2/12
My Game Stats
My Game Content
2.1 GB
DOWNLOAD
Hurtworld
Hurtworld
TOTAL PLAYED
2.6 hours
LAST PLAYED
Jan 6, 2021
My Game Content
4.5 GB
DOWNLOAD
Project CARS 2
Project CARS 2
TOTAL PLAYED
2.6 hours
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/47
My Game Stats
My Game Content
50.4 GB
DOWNLOAD
Renegade Ops
Renegade Ops
TOTAL PLAYED
2.6 hours
LAST PLAYED
Oct 22, 2017
ACHIEVEMENTS
0/16
My Game Stats
My Game Content
2.2 GB
DOWNLOAD
Mega Man Legacy Collection
Mega Man Legacy Collection
TOTAL PLAYED
2.6 hours
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/24
My Game Stats
My Game Content
245.1 MB
DOWNLOAD
Nex Machina
Nex Machina
TOTAL PLAYED
2.6 hours
LAST PLAYED
Dec 7, 2017
ACHIEVEMENTS
14/39
My Game Stats
My Game Content
896.7 MB
DOWNLOAD
Warhammer: End Times - Vermintide
Warhammer: End Times - Vermintide
TOTAL PLAYED
2.6 hours
LAST PLAYED
Jan 4, 2021
ACHIEVEMENTS
12/108
My Game Stats
My Game Content
49.4 GB
DOWNLOAD
Worms W.M.D
Worms W.M.D
TOTAL PLAYED
2.6 hours
LAST PLAYED
May 3, 2019
ACHIEVEMENTS
1/29
My Game Stats
My Game Content
5 GB
DOWNLOAD
Apex Legends
Apex Legends
TOTAL PLAYED
2.6 hours
LAST PLAYED
Mar 14, 2023
ACHIEVEMENTS
1/12
My Game Stats
My Game Content
68.6 GB
DOWNLOAD
Dungeon Souls
Dungeon Souls
TOTAL PLAYED
2.6 hours
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/10
My Game Stats
My Game Content
83.2 MB
DOWNLOAD
Dead Rising 3
Dead Rising 3
TOTAL PLAYED
2.6 hours
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/88
My Game Stats
My Game Content
32.9 GB
DOWNLOAD
Satellite Reign
Satellite Reign
TOTAL PLAYED
2.6 hours
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/40
My Game Stats
My Game Content
1.3 GB
DOWNLOAD
Never Alone (Kisima Ingitchuna)
Never Alone (Kisima Ingitchuna)
TOTAL PLAYED
2.5 hours
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/19
My Game Stats
My Game Content
2.7 GB
DOWNLOAD
Oriental Empires
Oriental Empires
TOTAL PLAYED
2.5 hours
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/60
My Game Stats
My Game Content
1.9 GB
DOWNLOAD
Batman™: Arkham Knight
Batman™: Arkham Knight
TOTAL PLAYED
2.5 hours
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/113
My Game Stats
My Game Content
71.2 GB
DOWNLOAD
Psychonauts
Psychonauts
TOTAL PLAYED
2.5 hours
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/37
My Game Stats
My Game Content
5.1 GB
DOWNLOAD
Train Valley
Train Valley
TOTAL PLAYED
2.5 hours
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/39
My Game Stats
My Game Content
429.3 MB
DOWNLOAD
Construction-Simulator 2015
Construction-Simulator 2015
TOTAL PLAYED
2.5 hours
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/51
My Game Stats
My Game Content
2.9 GB
DOWNLOAD
Metro 2033
Metro 2033
TOTAL PLAYED
2.5 hours
LAST PLAYED
Jan 24, 2017
ACHIEVEMENTS
2/48
My Game Stats
My Game Content
7.4 GB
DOWNLOAD
The Evil Within 2
The Evil Within 2
TOTAL PLAYED
2.5 hours
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/51
My Game Stats
My Game Content
36.4 GB
DOWNLOAD
Resident Evil 0
Resident Evil 0
TOTAL PLAYED
2.5 hours
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/47
My Game Stats
My Game Content
11.5 GB
DOWNLOAD
Verdun
Verdun
TOTAL PLAYED
2.5 hours
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/59
My Game Stats
My Game Content
8.1 GB
DOWNLOAD
The Evil Within
The Evil Within
TOTAL PLAYED
2.5 hours
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/71
My Game Stats
My Game Content
39.1 GB
DOWNLOAD
GameMaker: StudioGameMaker: Studio
GameMaker: Studio
TOTAL PLAYED
2.5 hours
LAST PLAYED
Aug 2, 2017
ACHIEVEMENTS
7/24
My Game Stats
My Game Content
752.5 MB
DOWNLOAD
Shenmue I & II
Shenmue I & II
TOTAL PLAYED
2.5 hours
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/55
My Game Stats
My Game Content
12.1 GB
DOWNLOAD
Lara Croft and the Temple of Osiris
Lara Croft and the Temple of Osiris
TOTAL PLAYED
2.4 hours
LAST PLAYED
Jul 26, 2021
ACHIEVEMENTS
13/40
My Game Stats
My Game Content
3.1 GB
DOWNLOAD
Dead Effect
Dead Effect
TOTAL PLAYED
2.4 hours
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/61
My Game Stats
My Game Content
3 GB
DOWNLOAD
Crawl
Crawl
TOTAL PLAYED
2.4 hours
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/45
My Game Stats
My Game Content
258.1 MB
DOWNLOAD
Danganronpa V3: Killing Harmony
Danganronpa V3: Killing Harmony
TOTAL PLAYED
2.4 hours
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/41
My Game Stats
My Game Content
21.8 GB
DOWNLOAD
Surviving Mars
Surviving Mars
TOTAL PLAYED
2.4 hours
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/80
My Game Stats
My Game Content
6.7 GB
DOWNLOAD
Ancestors Legacy
Ancestors Legacy
TOTAL PLAYED
2.4 hours
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/62
My Game Stats
My Game Content
21.6 GB
DOWNLOAD
Marvel's Guardians of the Galaxy
Marvel's Guardians of the Galaxy
TOTAL PLAYED
2.4 hours
LAST PLAYED
Jan 17, 2023
ACHIEVEMENTS
0/59
My Game Stats
My Game Content
UNINSTALL
Danganronpa 2: Goodbye Despair
Danganronpa 2: Goodbye Despair
TOTAL PLAYED
2.4 hours
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/47
My Game Stats
My Game Content
4.5 GB
DOWNLOAD
Lichdom: Battlemage
Lichdom: Battlemage
TOTAL PLAYED
2.4 hours
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/59
My Game Stats
My Game Content
11.9 GB
DOWNLOAD
SOMA
SOMA
TOTAL PLAYED
2.4 hours
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/10
My Game Stats
My Game Content
20.6 GB
DOWNLOAD
Dark Future: Blood Red States
Dark Future: Blood Red States
TOTAL PLAYED
2.3 hours
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/36
My Game Stats
My Game Content
3.2 GB
DOWNLOAD
Getting Over It with Bennett Foddy
Getting Over It with Bennett Foddy
TOTAL PLAYED
2.3 hours
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/3
My Game Stats
My Game Content
UNINSTALL
The Final Station
The Final Station
TOTAL PLAYED
2.3 hours
LAST PLAYED
Jan 8, 2021
ACHIEVEMENTS
0/23
My Game Stats
My Game Content
1.4 GB
DOWNLOAD
Wizard of Legend
Wizard of Legend
TOTAL PLAYED
2.3 hours
LAST PLAYED
Dec 20, 2018
ACHIEVEMENTS
1/19
My Game Stats
My Game Content
795.8 MB
DOWNLOAD
Ashes of the Singularity: Escalation
Ashes of the Singularity: Escalation
TOTAL PLAYED
2.3 hours
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/54
My Game Stats
My Game Content
30.2 GB
DOWNLOAD
Dead Rising 2
Dead Rising 2
TOTAL PLAYED
2.3 hours
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/50
My Game Stats
My Game Content
6.5 GB
DOWNLOAD
One Finger Death Punch 2
One Finger Death Punch 2
TOTAL PLAYED
2.3 hours
LAST PLAYED
Jun 30, 2022
ACHIEVEMENTS
11/63
My Game Stats
My Game Content
2.5 GB
DOWNLOAD
Age of Wonders III
Age of Wonders III
TOTAL PLAYED
2.2 hours
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/74
My Game Stats
My Game Content
3.8 GB
DOWNLOAD
Crusader Kings II
Crusader Kings II
TOTAL PLAYED
2.2 hours
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/161
My Game Stats
My Game Content
2.4 GB
DOWNLOAD
System Shock 2
System Shock 2
TOTAL PLAYED
2.2 hours
LAST PLAYED
Jan 6, 2021
My Game Content
647.9 MB
DOWNLOAD
Tales of Berseria
Tales of Berseria
TOTAL PLAYED
2.2 hours
LAST PLAYED
Jan 8, 2021
ACHIEVEMENTS
0/51
My Game Stats
My Game Content
13.3 GB
DOWNLOAD
Shadowgrounds
Shadowgrounds
TOTAL PLAYED
2.2 hours
LAST PLAYED
Jan 6, 2021
My Game Content
797 MB
DOWNLOAD
Bulletstorm: Full Clip Edition
Bulletstorm: Full Clip Edition
TOTAL PLAYED
2.2 hours
LAST PLAYED
Jan 4, 2021
ACHIEVEMENTS
5/60
My Game Stats
My Game Content
10.7 GB
DOWNLOAD
Cyberpunk 2077
Cyberpunk 2077
TOTAL PLAYED
2.2 hours
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/57
My Game Stats
My Game Content
61.4 GB
DOWNLOAD
FTL: Faster Than Light
FTL: Faster Than Light
TOTAL PLAYED
2.2 hours
LAST PLAYED
May 24, 2020
ACHIEVEMENTS
0/51
My Game Stats
My Game Content
273.3 MB
DOWNLOAD
Shotgun King: The Final Checkmate
Shotgun King: The Final Checkmate
TOTAL PLAYED
2.2 hours
LAST PLAYED
Apr 23
ACHIEVEMENTS
6/83
My Game Stats
My Game Content
88.3 MB
DOWNLOAD
Mini Metro
Mini Metro
TOTAL PLAYED
2.2 hours
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
1/73
My Game Stats
My Game Content
304.1 MB
DOWNLOAD
Scrap Garden
Scrap Garden
TOTAL PLAYED
2.2 hours
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/42
My Game Stats
My Game Content
1.6 GB
DOWNLOAD
Wildfire
Wildfire
TOTAL PLAYED
2.2 hours
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/60
My Game Stats
My Game Content
321.2 MB
DOWNLOAD
Guns of Icarus Online
Guns of Icarus Online
TOTAL PLAYED
2.1 hours
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/849
My Game Stats
My Game Content
11.9 GB
DOWNLOAD
Chroma SquadChroma Squad
Chroma Squad
TOTAL PLAYED
2.1 hours
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/43
My Game Stats
My Game Content
684.8 MB
DOWNLOAD
Broken Age
Broken Age
TOTAL PLAYED
2.1 hours
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/45
My Game Stats
My Game Content
2.1 GB
DOWNLOAD
Dead Rising 2: Off the Record
Dead Rising 2: Off the Record
TOTAL PLAYED
2.1 hours
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/50
My Game Stats
My Game Content
6.6 GB
DOWNLOAD
FreeCell Quest
FreeCell Quest
TOTAL PLAYED
2.1 hours
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/36
My Game Stats
My Game Content
159.6 MB
DOWNLOAD
Bayonetta
Bayonetta
TOTAL PLAYED
2.1 hours
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/50
My Game Stats
My Game Content
12.9 GB
DOWNLOAD
Brütal Legend
Brütal Legend
TOTAL PLAYED
2.1 hours
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/59
My Game Stats
My Game Content
8.1 GB
DOWNLOAD
F1 2015
F1 2015
TOTAL PLAYED
2.1 hours
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/45
My Game Stats
My Game Content
12.2 GB
DOWNLOAD
Grim Fandango Remastered
Grim Fandango Remastered
TOTAL PLAYED
2.1 hours
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/47
My Game Stats
My Game Content
5.3 GB
DOWNLOAD
PlanetSide 2
PlanetSide 2
TOTAL PLAYED
2.1 hours
LAST PLAYED
Dec 9, 2012
My Game Content
18.9 GB
DOWNLOAD
RIVE
RIVE
TOTAL PLAYED
2.1 hours
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/44
My Game Stats
My Game Content
872.1 MB
DOWNLOAD
DARQ
DARQ
TOTAL PLAYED
2 hours
LAST PLAYED
Jun 22, 2022
ACHIEVEMENTS
2/17
My Game Stats
My Game Content
2.7 GB
DOWNLOAD
DARK SOULS™ III
DARK SOULS™ III
TOTAL PLAYED
2 hours
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/43
My Game Stats
My Game Content
24.8 GB
DOWNLOAD
Death's Gambit: Afterlife
Death's Gambit: Afterlife
TOTAL PLAYED
2 hours
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/43
My Game Stats
My Game Content
1,022.1 MB
DOWNLOAD
Nidhogg
Nidhogg
TOTAL PLAYED
2 hours
LAST PLAYED
Sep 4, 2017
ACHIEVEMENTS
3/12
My Game Stats
My Game Content
169.7 MB
DOWNLOAD
The Flame in the Flood
The Flame in the Flood
TOTAL PLAYED
2 hours
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/36
My Game Stats
My Game Content
2.5 GB
DOWNLOAD
Untitled Goose Game
Untitled Goose Game
TOTAL PLAYED
119 minutes
LAST PLAYED
Mar 1
ACHIEVEMENTS
4/25
My Game Stats
My Game Content
830.3 MB
DOWNLOAD
Ancient Planet
Ancient Planet
TOTAL PLAYED
118 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/47
My Game Stats
My Game Content
154.9 MB
DOWNLOAD
Killing Floor
Killing Floor
TOTAL PLAYED
118 minutes
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/285
My Game Stats
My Game Content
6 GB
DOWNLOAD
Ori and the Blind Forest: Definitive Edition
Ori and the Blind Forest: Definitive Edition
TOTAL PLAYED
118 minutes
LAST PLAYED
Jan 21, 2021
ACHIEVEMENTS
5/57
My Game Stats
My Game Content
10.3 GB
DOWNLOAD
Teslagrad
Teslagrad
TOTAL PLAYED
118 minutes
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/36
My Game Stats
My Game Content
754.9 MB
DOWNLOAD
The Fall
The Fall
TOTAL PLAYED
118 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/17
My Game Stats
My Game Content
330.2 MB
DOWNLOAD
Vanquish
Vanquish
TOTAL PLAYED
118 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
1/50
My Game Stats
My Game Content
18.4 GB
DOWNLOAD
F.E.A.R.
F.E.A.R.
TOTAL PLAYED
117 minutes
LAST PLAYED
Mar 13, 2017
My Game Content
16.7 GB
DOWNLOAD
Spelunky
Spelunky
TOTAL PLAYED
117 minutes
LAST PLAYED
Jan 27, 2023
ACHIEVEMENTS
1/20
My Game Stats
My Game Content
184.5 MB
DOWNLOAD
American Truck Simulator
American Truck Simulator
TOTAL PLAYED
116 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/100
My Game Stats
My Game Content
17.9 GB
DOWNLOAD
Zeno Clash 2
Zeno Clash 2
TOTAL PLAYED
116 minutes
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/19
My Game Stats
My Game Content
2.7 GB
DOWNLOAD
Middle-earth™: Shadow of War™
Middle-earth™: Shadow of War™
TOTAL PLAYED
115 minutes
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/72
My Game Stats
My Game Content
109.7 GB
DOWNLOAD
The Talos Principle
The Talos Principle
TOTAL PLAYED
115 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/40
My Game Stats
My Game Content
5.4 GB
DOWNLOAD
Blockstorm
Blockstorm
TOTAL PLAYED
113 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/131
My Game Stats
My Game Content
174.4 MB
DOWNLOAD
Warhammer 40,000: Space Marine - Anniversary Edition
Warhammer 40,000: Space Marine - Anniversary Edition
TOTAL PLAYED
113 minutes
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/60
My Game Stats
My Game Content
10.7 GB
DOWNLOAD
Sanctum 2
Sanctum 2
TOTAL PLAYED
112 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/50
My Game Stats
My Game Content
2.6 GB
DOWNLOAD
Batman™: Arkham Origins
Batman™: Arkham Origins
TOTAL PLAYED
111 minutes
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/60
My Game Stats
My Game Content
27.1 GB
DOWNLOAD
GRIP: Combat Racing
GRIP: Combat Racing
TOTAL PLAYED
111 minutes
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/35
My Game Stats
My Game Content
11.4 GB
DOWNLOAD
Dead In Vinland
Dead In Vinland
TOTAL PLAYED
110 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/50
My Game Stats
My Game Content
1.9 GB
DOWNLOAD
METAL GEAR SOLID V: THE PHANTOM PAIN
METAL GEAR SOLID V: THE PHANTOM PAIN
TOTAL PLAYED
110 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/42
My Game Stats
My Game Content
29.1 GB
DOWNLOAD
The Witcher 2: Assassins of Kings Enhanced Edition
The Witcher 2: Assassins of Kings Enhanced Edition
TOTAL PLAYED
110 minutes
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/52
My Game Stats
My Game Content
18.5 GB
DOWNLOAD
Thief
Thief
TOTAL PLAYED
110 minutes
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/37
My Game Stats
My Game Content
24.1 GB
DOWNLOAD
Auto Age: Standoff
Auto Age: Standoff
TOTAL PLAYED
109 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/25
My Game Stats
My Game Content
2.8 GB
DOWNLOAD
Desert Child
Desert Child
TOTAL PLAYED
109 minutes
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/23
My Game Stats
My Game Content
122.6 MB
DOWNLOAD
ENDLESS™ Space 2
ENDLESS™ Space 2
TOTAL PLAYED
109 minutes
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/115
My Game Stats
My Game Content
15 GB
DOWNLOAD
Garry's Mod
Garry's Mod
TOTAL PLAYED
109 minutes
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/29
My Game Stats
My Game Content
3.9 GB
DOWNLOAD
Back to Bed
Back to Bed
TOTAL PLAYED
108 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/20
My Game Stats
My Game Content
510 MB
DOWNLOAD
Battle Chef Brigade
Battle Chef Brigade
TOTAL PLAYED
108 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/25
My Game Stats
My Game Content
1.2 GB
DOWNLOAD
Geometry Dash
Geometry Dash
TOTAL PLAYED
108 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/120
My Game Stats
My Game Content
310.3 MB
DOWNLOAD
Human Fall Flat
Human Fall Flat
TOTAL PLAYED
108 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/127
My Game Stats
My Game Content
4.7 GB
DOWNLOAD
Unpacking
Unpacking
TOTAL PLAYED
108 minutes
LAST PLAYED
Feb 29
ACHIEVEMENTS
5/25
My Game Stats
My Game Content
917 MB
DOWNLOAD
What Remains of Edith Finch
What Remains of Edith Finch
TOTAL PLAYED
108 minutes
LAST PLAYED
Dec 27, 2017
ACHIEVEMENTS
2/9
My Game Stats
My Game Content
2.4 GB
DOWNLOAD
Deus Ex: Human Revolution - Director's Cut
Deus Ex: Human Revolution - Director's Cut
TOTAL PLAYED
107 minutes
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/59
My Game Stats
My Game Content
17.7 GB
DOWNLOAD
Lost Castle
Lost Castle
TOTAL PLAYED
107 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/98
My Game Stats
My Game Content
2.2 GB
DOWNLOAD
Sid Meier's Civilization V
Sid Meier's Civilization V
TOTAL PLAYED
107 minutes
LAST PLAYED
Nov 17, 2017
ACHIEVEMENTS
1/286
My Game Stats
My Game Content
4.7 GB
DOWNLOAD
Devil May Cry HD Collection
Devil May Cry HD Collection
TOTAL PLAYED
106 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/99
My Game Stats
My Game Content
11.3 GB
DOWNLOAD
Rusty Lake Hotel
Rusty Lake Hotel
TOTAL PLAYED
106 minutes
LAST PLAYED
May 14, 2021
ACHIEVEMENTS
16/23
My Game Stats
My Game Content
55.9 MB
DOWNLOAD
Ahnayro: The Dream World
Ahnayro: The Dream World
TOTAL PLAYED
105 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/11
My Game Stats
My Game Content
489.8 MB
DOWNLOAD
Bulb Boy
Bulb Boy
TOTAL PLAYED
105 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/12
My Game Stats
My Game Content
2.3 GB
DOWNLOAD
Call of Duty: Black Ops III
Call of Duty: Black Ops III
TOTAL PLAYED
105 minutes
LAST PLAYED
Sep 24, 2023
ACHIEVEMENTS
0/98
My Game Stats
My Game Content
112 GB
DOWNLOAD
Citizens of Earth
Citizens of Earth
TOTAL PLAYED
105 minutes
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/50
My Game Stats
My Game Content
4.4 GB
DOWNLOAD
Day of the Tentacle Remastered
Day of the Tentacle Remastered
TOTAL PLAYED
105 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/58
My Game Stats
My Game Content
2.5 GB
DOWNLOAD
Dead Space (2008)
Dead Space (2008)
TOTAL PLAYED
105 minutes
LAST PLAYED
Jan 5, 2021
My Game Content
12.3 GB
DOWNLOAD
ELEX
ELEX
TOTAL PLAYED
105 minutes
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/50
My Game Stats
My Game Content
26.5 GB
DOWNLOAD
Cortex Command
Cortex Command
TOTAL PLAYED
104 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/11
My Game Stats
My Game Content
94.8 MB
DOWNLOAD
Phasmophobia
Phasmophobia
TOTAL PLAYED
104 minutes
LAST PLAYED
Oct 23, 2020
ACHIEVEMENTS
0/54
My Game Stats
My Game Content
26.6 GB
DOWNLOAD
The Walking Dead
The Walking Dead
TOTAL PLAYED
104 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/48
My Game Stats
My Game Content
4.3 GB
DOWNLOAD
ENDLESS™ Legend
ENDLESS™ Legend
TOTAL PLAYED
103 minutes
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/139
My Game Stats
My Game Content
5.7 GB
DOWNLOAD
Her Story
Her Story
TOTAL PLAYED
103 minutes
LAST PLAYED
Jun 20, 2017
ACHIEVEMENTS
2/13
My Game Stats
My Game Content
1.5 GB
DOWNLOAD
Life is Strange™
Life is Strange™
TOTAL PLAYED
103 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/60
My Game Stats
My Game Content
11.1 GB
DOWNLOAD
Deep Dungeons of Doom
Deep Dungeons of Doom
TOTAL PLAYED
102 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/46
My Game Stats
My Game Content
72 MB
DOWNLOAD
Furi
Furi
TOTAL PLAYED
102 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/33
My Game Stats
My Game Content
2.4 GB
DOWNLOAD
Ni no Kuni™ II: Revenant Kingdom
Ni no Kuni™ II: Revenant Kingdom
TOTAL PLAYED
102 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/63
My Game Stats
My Game Content
28.8 GB
DOWNLOAD
12 is Better Than 6
12 is Better Than 6
TOTAL PLAYED
101 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/46
My Game Stats
My Game Content
1.1 GB
DOWNLOAD
Defend Your Life
Defend Your Life
TOTAL PLAYED
101 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/20
My Game Stats
My Game Content
303.1 MB
DOWNLOAD
Where the Water Tastes Like Wine
Where the Water Tastes Like Wine
TOTAL PLAYED
101 minutes
LAST PLAYED
Jun 23, 2021
ACHIEVEMENTS
0/38
My Game Stats
My Game Content
6.4 GB
DOWNLOAD
ABZÛ
ABZÛ
TOTAL PLAYED
100 minutes
LAST PLAYED
Aug 22, 2018
ACHIEVEMENTS
5/12
My Game Stats
My Game Content
4.5 GB
DOWNLOAD
Broken Sword 5 - the Serpent's Curse
Broken Sword 5 - the Serpent's Curse
TOTAL PLAYED
100 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/35
My Game Stats
My Game Content
6.2 GB
DOWNLOAD
Galactic Missile Defense
Galactic Missile Defense
TOTAL PLAYED
100 minutes
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/10
My Game Stats
My Game Content
68.5 MB
DOWNLOAD
Final Fantasy III (3D Remake)
Final Fantasy III (3D Remake)
TOTAL PLAYED
99 minutes
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/18
My Game Stats
My Game Content
594.9 MB
DOWNLOAD
Grim Dawn
Grim Dawn
TOTAL PLAYED
99 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/185
My Game Stats
My Game Content
4.3 GB
DOWNLOAD
Gene Shift Auto
Gene Shift Auto
TOTAL PLAYED
98 minutes
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/40
My Game Stats
My Game Content
649.7 MB
DOWNLOAD
Undertale
Undertale
TOTAL PLAYED
98 minutes
LAST PLAYED
Jan 8, 2021
My Game Content
UNINSTALL
Cult of the Lamb
Cult of the Lamb
TOTAL PLAYED
97 minutes
LAST PLAYED
Jun 12
ACHIEVEMENTS
7/48
My Game Stats
My Game Content
4 GB
DOWNLOAD
Deus Ex: The Fall
Deus Ex: The Fall
TOTAL PLAYED
97 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/28
My Game Stats
My Game Content
3.2 GB
DOWNLOAD
Ageless
Ageless
TOTAL PLAYED
96 minutes
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/12
My Game Stats
My Game Content
1,007.8 MB
DOWNLOAD
BioShock 2 Remastered
BioShock 2 Remastered
TOTAL PLAYED
96 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/53
My Game Stats
My Game Content
20.1 GB
DOWNLOAD
DmC Devil May Cry
DmC Devil May Cry
TOTAL PLAYED
96 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/58
My Game Stats
My Game Content
8.6 GB
DOWNLOAD
Final Fantasy IV (3D Remake)
Final Fantasy IV (3D Remake)
TOTAL PLAYED
96 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/58
My Game Stats
My Game Content
685.4 MB
DOWNLOAD
FINAL FANTASY X/X-2 HD Remaster
FINAL FANTASY X/X-2 HD Remaster
TOTAL PLAYED
96 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/69
My Game Stats
My Game Content
36.8 GB
DOWNLOAD
Manual Samuel - Anniversary Edition
Manual Samuel - Anniversary Edition
TOTAL PLAYED
96 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/28
My Game Stats
My Game Content
468.2 MB
DOWNLOAD
Mount & Blade: With Fire and Sword
Mount & Blade: With Fire and Sword
TOTAL PLAYED
96 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/21
My Game Stats
My Game Content
1.3 GB
DOWNLOAD
Stellaris
Stellaris
TOTAL PLAYED
94 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/180
My Game Stats
My Game Content
17.9 GB
DOWNLOAD
Zup! X
Zup! X
TOTAL PLAYED
94 minutes
LAST PLAYED
Jan 4, 2021
ACHIEVEMENTS
2880/2880
My Game Stats
My Game Content
15.2 MB
DOWNLOAD
A Plague Tale: Innocence
A Plague Tale: Innocence
TOTAL PLAYED
93 minutes
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/35
My Game Stats
My Game Content
41.5 GB
DOWNLOAD
Evolve Stage 2
Evolve Stage 2
TOTAL PLAYED
93 minutes
LAST PLAYED
Jan 5, 2021
My Game Content
19.8 GB
DOWNLOAD
Journey
Journey
TOTAL PLAYED
93 minutes
LAST PLAYED
Jun 13, 2020
ACHIEVEMENTS
3/14
My Game Stats
My Game Content
3.4 GB
DOWNLOAD
The Beginner's Guide
The Beginner's Guide
TOTAL PLAYED
93 minutes
LAST PLAYED
Jun 8, 2017
My Game Content
3.2 GB
DOWNLOAD
Baldur's Gate II: Enhanced Edition
Baldur's Gate II: Enhanced Edition
TOTAL PLAYED
92 minutes
LAST PLAYED
Jan 8, 2021
ACHIEVEMENTS
0/93
My Game Stats
My Game Content
3.5 GB
DOWNLOAD
LIMBO
LIMBO
TOTAL PLAYED
92 minutes
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/13
My Game Stats
My Game Content
98.9 MB
DOWNLOAD
Brothers - A Tale of Two Sons
Brothers - A Tale of Two Sons
TOTAL PLAYED
91 minutes
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/12
My Game Stats
My Game Content
1.2 GB
DOWNLOAD
Life is Strange: Before the Storm
Life is Strange: Before the Storm
TOTAL PLAYED
91 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/34
My Game Stats
My Game Content
21.2 GB
DOWNLOAD
SpeedRunners
SpeedRunners
TOTAL PLAYED
91 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/29
My Game Stats
My Game Content
656.5 MB
DOWNLOAD
System Shock: Enhanced Edition
System Shock: Enhanced Edition
TOTAL PLAYED
91 minutes
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/6
My Game Stats
My Game Content
1,005.3 MB
DOWNLOAD
The Vanishing of Ethan Carter
The Vanishing of Ethan Carter
TOTAL PLAYED
91 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/14
My Game Stats
My Game Content
9.3 GB
DOWNLOAD
Dimension Jump
Dimension Jump
TOTAL PLAYED
90 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/28
My Game Stats
My Game Content
171.5 MB
DOWNLOAD
Dog Sled Saga
Dog Sled Saga
TOTAL PLAYED
89 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/12
My Game Stats
My Game Content
98.6 MB
DOWNLOAD
Counter-Strike: Source
Counter-Strike: Source
TOTAL PLAYED
88 minutes
LAST PLAYED
Mar 4, 2017
ACHIEVEMENTS
11/147
My Game Stats
My Game Content
4.3 GB
DOWNLOAD
Full Throttle Remastered
Full Throttle Remastered
TOTAL PLAYED
88 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/40
My Game Stats
My Game Content
5.1 GB
DOWNLOAD
GRID 2
GRID 2
TOTAL PLAYED
88 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/60
My Game Stats
My Game Content
9.9 GB
DOWNLOAD
Q.U.B.E. 2
Q.U.B.E. 2
TOTAL PLAYED
88 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/29
My Game Stats
My Game Content
7 GB
DOWNLOAD
Super House of Dead Ninjas
Super House of Dead Ninjas
TOTAL PLAYED
88 minutes
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/46
My Game Stats
My Game Content
82.2 MB
DOWNLOAD
Trine
Trine
TOTAL PLAYED
88 minutes
LAST PLAYED
Jan 4, 2021
ACHIEVEMENTS
2/33
My Game Stats
My Game Content
4 GB
DOWNLOAD
FINAL FANTASY IX
FINAL FANTASY IX
TOTAL PLAYED
87 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/85
My Game Stats
My Game Content
9.1 GB
DOWNLOAD
Gunpoint
Gunpoint
TOTAL PLAYED
87 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/42
My Game Stats
My Game Content
506.9 MB
DOWNLOAD
The Last Door - Collector's Edition
The Last Door - Collector's Edition
TOTAL PLAYED
87 minutes
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/16
My Game Stats
My Game Content
314.5 MB
DOWNLOAD
Trine 3: The Artifacts of Power
Trine 3: The Artifacts of Power
TOTAL PLAYED
87 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/28
My Game Stats
My Game Content
4.6 GB
DOWNLOAD
Hotline Miami
Hotline Miami
TOTAL PLAYED
86 minutes
LAST PLAYED
Aug 7, 2023
ACHIEVEMENTS
0/35
My Game Stats
My Game Content
559 MB
DOWNLOAD
The Darkside Detective
The Darkside Detective
TOTAL PLAYED
86 minutes
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/30
My Game Stats
My Game Content
1,013.3 MB
DOWNLOAD
The Vanishing of Ethan Carter Redux
The Vanishing of Ethan Carter Redux
TOTAL PLAYED
86 minutes
LAST PLAYED
Jan 8, 2021
ACHIEVEMENTS
0/14
My Game Stats
My Game Content
5.4 GB
DOWNLOAD
Cook, Serve, Delicious!
Cook, Serve, Delicious!
TOTAL PLAYED
85 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/52
My Game Stats
My Game Content
151.3 MB
DOWNLOAD
Guacamelee! Super Turbo Championship Edition
Guacamelee! Super Turbo Championship Edition
TOTAL PLAYED
85 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/30
My Game Stats
My Game Content
804.2 MB
DOWNLOAD
Firewatch
Firewatch
TOTAL PLAYED
84 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/10
My Game Stats
My Game Content
4 GB
DOWNLOAD
Aragami
Aragami
TOTAL PLAYED
83 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
6/51
My Game Stats
My Game Content
7.6 GB
DOWNLOAD
Gun MonkeysGun Monkeys
Gun Monkeys
TOTAL PLAYED
83 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/8
My Game Stats
My Game Content
199.7 MB
DOWNLOAD
Hitman GO: Definitive Edition
Hitman GO: Definitive Edition
TOTAL PLAYED
83 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/26
My Game Stats
My Game Content
1.1 GB
DOWNLOAD
Sonic Mania
Sonic Mania
TOTAL PLAYED
83 minutes
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/18
My Game Stats
My Game Content
201.9 MB
DOWNLOAD
Bomber Crew
Bomber Crew
TOTAL PLAYED
82 minutes
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/30
My Game Stats
My Game Content
702.7 MB
DOWNLOAD
Cosmonautica
Cosmonautica
TOTAL PLAYED
82 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/31
My Game Stats
My Game Content
633.2 MB
DOWNLOAD
Fight'N Rage
Fight'N Rage
TOTAL PLAYED
82 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/20
My Game Stats
My Game Content
253.6 MB
DOWNLOAD
Late Shift
Late Shift
TOTAL PLAYED
82 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/20
My Game Stats
My Game Content
6.5 GB
DOWNLOAD
Persona 3 Reload
Persona 3 Reload
TOTAL PLAYED
82 minutes
LAST PLAYED
Today
ACHIEVEMENTS
0/48
My Game Stats
My Game Content
17 GB
DOWNLOAD
Starpoint Gemini 2
Starpoint Gemini 2
TOTAL PLAYED
82 minutes
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/52
My Game Stats
My Game Content
8.6 GB
DOWNLOAD
Beyond Eyes
Beyond Eyes
TOTAL PLAYED
81 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/10
My Game Stats
My Game Content
1.2 GB
DOWNLOAD
Chivalry: Medieval Warfare
Chivalry: Medieval Warfare
TOTAL PLAYED
81 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/49
My Game Stats
My Game Content
7.6 GB
DOWNLOAD
Cultist Simulator
Cultist Simulator
TOTAL PLAYED
81 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/83
My Game Stats
My Game Content
667.7 MB
DOWNLOAD
Divinity: Original Sin (Classic)
Divinity: Original Sin (Classic)
TOTAL PLAYED
81 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/63
My Game Stats
My Game Content
8.3 GB
DOWNLOAD
Orwell
Orwell
TOTAL PLAYED
81 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
2/27
My Game Stats
My Game Content
718.8 MB
DOWNLOAD
Papers, Please
Papers, Please
TOTAL PLAYED
81 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/13
My Game Stats
My Game Content
86.5 MB
DOWNLOAD
Solstice
Solstice
TOTAL PLAYED
80 minutes
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/18
My Game Stats
My Game Content
235.2 MB
DOWNLOAD
The Black Watchmen
The Black Watchmen
TOTAL PLAYED
80 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/48
My Game Stats
My Game Content
838.6 MB
DOWNLOAD
Company of Heroes 2
Company of Heroes 2
TOTAL PLAYED
79 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
1/452
My Game Stats
My Game Content
40.5 GB
DOWNLOAD
DiRT Rally
DiRT Rally
TOTAL PLAYED
79 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/170
My Game Stats
My Game Content
38.8 GB
DOWNLOAD
Invisible, Inc.
Invisible, Inc.
TOTAL PLAYED
79 minutes
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/23
My Game Stats
My Game Content
1.1 GB
DOWNLOAD
Pinstripe
Pinstripe
TOTAL PLAYED
79 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/12
My Game Stats
My Game Content
1.5 GB
DOWNLOAD
INK
INK
TOTAL PLAYED
78 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/16
My Game Stats
My Game Content
47.1 MB
DOWNLOAD
TEKKEN 7
TEKKEN 7
TOTAL PLAYED
78 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/42
My Game Stats
My Game Content
81 GB
DOWNLOAD
Chainsaw WarriorChainsaw Warrior
Chainsaw Warrior
TOTAL PLAYED
77 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/23
My Game Stats
My Game Content
232.3 MB
DOWNLOAD
Dungeons 2
Dungeons 2
TOTAL PLAYED
77 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/25
My Game Stats
My Game Content
5.2 GB
DOWNLOAD
ENDLESS™ Space - Definitive Edition
ENDLESS™ Space - Definitive Edition
TOTAL PLAYED
77 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/93
My Game Stats
My Game Content
3.3 GB
DOWNLOAD
Hearts of Iron III
Hearts of Iron III
TOTAL PLAYED
77 minutes
LAST PLAYED
Jun 22, 2021
My Game Content
3.9 GB
DOWNLOAD
Reigns
Reigns
TOTAL PLAYED
77 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/13
My Game Stats
My Game Content
149.2 MB
DOWNLOAD
Rogue Legacy
Rogue Legacy
TOTAL PLAYED
77 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/29
My Game Stats
My Game Content
550.9 MB
DOWNLOAD
Baba Is You
Baba Is You
TOTAL PLAYED
85 minutes
LAST PLAYED
Aug 10, 2023
ACHIEVEMENTS
0/18
My Game Stats
My Game Content
106.2 MB
DOWNLOAD
Cataegis : The White Wind
Cataegis : The White Wind
TOTAL PLAYED
76 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/41
My Game Stats
My Game Content
44.3 MB
DOWNLOAD
Hitman: Absolution
Hitman: Absolution
TOTAL PLAYED
76 minutes
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/47
My Game Stats
My Game Content
25.4 GB
DOWNLOAD
Deus Ex: Mankind Divided™
Deus Ex: Mankind Divided™
TOTAL PLAYED
75 minutes
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/81
My Game Stats
My Game Content
58 GB
DOWNLOAD
GOD EATER 3
GOD EATER 3
TOTAL PLAYED
75 minutes
LAST PLAYED
Jul 7, 2021
ACHIEVEMENTS
4/32
My Game Stats
My Game Content
29.2 GB
DOWNLOAD
Hyper Light Drifter
Hyper Light Drifter
TOTAL PLAYED
75 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/23
My Game Stats
My Game Content
509.7 MB
DOWNLOAD
Just Cause 3
Just Cause 3
TOTAL PLAYED
75 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/66
My Game Stats
My Game Content
60.2 GB
DOWNLOAD
Snake Pass
Snake Pass
TOTAL PLAYED
75 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/33
My Game Stats
My Game Content
3.4 GB
DOWNLOAD
EARTH DEFENSE FORCE 4.1  The Shadow of New Despair
EARTH DEFENSE FORCE 4.1 The Shadow of New Despair
TOTAL PLAYED
74 minutes
LAST PLAYED
Jan 4, 2021
ACHIEVEMENTS
1/51
My Game Stats
My Game Content
6.9 GB
DOWNLOAD
hack_me
hack_me
TOTAL PLAYED
73 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/5
My Game Stats
My Game Content
169.6 MB
DOWNLOAD
PAYDAY 2
PAYDAY 2
TOTAL PLAYED
73 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
5/1328
My Game Stats
My Game Content
85.4 GB
DOWNLOAD
Pony Island
Pony Island
TOTAL PLAYED
73 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/20
My Game Stats
My Game Content
367 MB
DOWNLOAD
Narcos: Rise of the Cartels
Narcos: Rise of the Cartels
TOTAL PLAYED
72 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/34
My Game Stats
My Game Content
12.6 GB
DOWNLOAD
Left 4 Dead 2
Left 4 Dead 2
TOTAL PLAYED
71 minutes
LAST PLAYED
Sep 4, 2017
ACHIEVEMENTS
1/101
My Game Stats
My Game Content
13.9 GB
DOWNLOAD
Magicka 2
Magicka 2
TOTAL PLAYED
71 minutes
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/47
My Game Stats
My Game Content
2.9 GB
DOWNLOAD
Gurgamoth
Gurgamoth
TOTAL PLAYED
70 minutes
LAST PLAYED
Jan 5, 2021
My Game Content
353 MB
DOWNLOAD
Party Hard
Party Hard
TOTAL PLAYED
70 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/27
My Game Stats
My Game Content
868.4 MB
DOWNLOAD
Total War: EMPIRE - Definitive Edition
Total War: EMPIRE - Definitive Edition
TOTAL PLAYED
70 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/30
My Game Stats
My Game Content
16.1 GB
DOWNLOAD
Castle Crashers
Castle Crashers
TOTAL PLAYED
69 minutes
LAST PLAYED
Jan 4, 2021
ACHIEVEMENTS
0/12
My Game Stats
My Game Content
84.9 MB
DOWNLOAD
Dreaming Sarah
Dreaming Sarah
TOTAL PLAYED
69 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/22
My Game Stats
My Game Content
213.5 MB
DOWNLOAD
Home
Home
TOTAL PLAYED
69 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/12
My Game Stats
My Game Content
49 MB
DOWNLOAD
INSIDE
INSIDE
TOTAL PLAYED
69 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/14
My Game Stats
My Game Content
2.2 GB
DOWNLOAD
Oddworld: Abe's Oddysee
Oddworld: Abe's Oddysee
TOTAL PLAYED
69 minutes
LAST PLAYED
Jan 6, 2021
My Game Content
621.9 MB
DOWNLOAD
Resident Evil 6
Resident Evil 6
TOTAL PLAYED
69 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/70
My Game Stats
My Game Content
17.7 GB
DOWNLOAD
Rise & Shine
Rise & Shine
TOTAL PLAYED
69 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/14
My Game Stats
My Game Content
3.8 GB
DOWNLOAD
Dungeon of the ENDLESS™
Dungeon of the ENDLESS™
TOTAL PLAYED
68 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/33
My Game Stats
My Game Content
902.1 MB
DOWNLOAD
Infested Planet
Infested Planet
TOTAL PLAYED
68 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/36
My Game Stats
My Game Content
298.7 MB
DOWNLOAD
Quantum Break
Quantum Break
TOTAL PLAYED
68 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/42
My Game Stats
My Game Content
68.9 GB
DOWNLOAD
The Incredible Adventures of Van Helsing II
The Incredible Adventures of Van Helsing II
TOTAL PLAYED
68 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/63
My Game Stats
My Game Content
23 GB
DOWNLOAD
CastleStorm
CastleStorm
TOTAL PLAYED
67 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/46
My Game Stats
My Game Content
267.6 MB
DOWNLOAD
Dishonored 2
Dishonored 2
TOTAL PLAYED
67 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/50
My Game Stats
My Game Content
42.2 GB
DOWNLOAD
Enter the Gungeon
Enter the Gungeon
TOTAL PLAYED
67 minutes
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/54
My Game Stats
My Game Content
614.9 MB
DOWNLOAD
Lethal League
Lethal League
TOTAL PLAYED
67 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/23
My Game Stats
My Game Content
93.9 MB
DOWNLOAD
Monaco
Monaco
TOTAL PLAYED
67 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/13
My Game Stats
My Game Content
1.7 GB
DOWNLOAD
Lara Croft GO
Lara Croft GO
TOTAL PLAYED
66 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/17
My Game Stats
My Game Content
1.1 GB
DOWNLOAD
Hidden Folks
Hidden Folks
TOTAL PLAYED
65 minutes
LAST PLAYED
Jan 4, 2021
ACHIEVEMENTS
1/8
My Game Stats
My Game Content
254.3 MB
DOWNLOAD
Kingdom: Classic
Kingdom: Classic
TOTAL PLAYED
65 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/34
My Game Stats
My Game Content
288.9 MB
DOWNLOAD
Ni no Kuni Wrath of the White Witch™ Remastered
Ni no Kuni Wrath of the White Witch™ Remastered
TOTAL PLAYED
65 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/33
My Game Stats
My Game Content
43.4 GB
DOWNLOAD
Shadowrun Returns
Shadowrun Returns
TOTAL PLAYED
65 minutes
LAST PLAYED
Jan 12, 2021
My Game Content
2.9 GB
DOWNLOAD
Hand of Fate
Hand of Fate
TOTAL PLAYED
64 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/53
My Game Stats
My Game Content
2.6 GB
DOWNLOAD
Overlord: Fellowship of Evil
Overlord: Fellowship of Evil
TOTAL PLAYED
64 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/40
My Game Stats
My Game Content
4.2 GB
DOWNLOAD
Project CARS
Project CARS
TOTAL PLAYED
64 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/45
My Game Stats
My Game Content
21.5 GB
DOWNLOAD
Tiltagon
Tiltagon
TOTAL PLAYED
64 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/48
My Game Stats
My Game Content
98.9 MB
DOWNLOAD
ToyOdyssey
ToyOdyssey
TOTAL PLAYED
64 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/74
My Game Stats
My Game Content
1.4 GB
DOWNLOAD
Trine 2
Trine 2
TOTAL PLAYED
64 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/97
My Game Stats
My Game Content
4.4 GB
DOWNLOAD
Arma Tactics
Arma Tactics
TOTAL PLAYED
63 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/22
My Game Content
932.9 MB
DOWNLOAD
Europa Universalis III
Europa Universalis III
TOTAL PLAYED
63 minutes
LAST PLAYED
Jan 5, 2021
My Game Content
1.2 GB
DOWNLOAD
The Inner World
The Inner World
TOTAL PLAYED
63 minutes
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/23
My Game Stats
My Game Content
1.3 GB
DOWNLOAD
Flower
Flower
TOTAL PLAYED
62 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/14
My Game Stats
My Game Content
2.1 GB
DOWNLOAD
Shadowgrounds: Survivor
Shadowgrounds: Survivor
TOTAL PLAYED
62 minutes
LAST PLAYED
Jan 12, 2021
My Game Content
1.1 GB
DOWNLOAD
The Warlock of Firetop Mountain
The Warlock of Firetop Mountain
TOTAL PLAYED
62 minutes
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/54
My Game Stats
My Game Content
1.5 GB
DOWNLOAD
Unbox
Unbox
TOTAL PLAYED
62 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/15
My Game Stats
My Game Content
6 GB
DOWNLOAD
Samorost 3
Samorost 3
TOTAL PLAYED
61 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/30
My Game Stats
My Game Content
1.1 GB
DOWNLOAD
The Last Door: Season 2 - Collector's Edition
The Last Door: Season 2 - Collector's Edition
TOTAL PLAYED
61 minutes
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/16
My Game Stats
My Game Content
494.6 MB
DOWNLOAD
Battlerite
Battlerite
TOTAL PLAYED
60 minutes
LAST PLAYED
Jul 18, 2017
My Game Content
2.6 GB
DOWNLOAD
NARAKA: BLADEPOINT
NARAKA: BLADEPOINT
TOTAL PLAYED
60 minutes
LAST PLAYED
Aug 6, 2023
ACHIEVEMENTS
3/40
My Game Stats
My Game Content
47.8 GB
DOWNLOAD
Regions Of Ruin
Regions Of Ruin
TOTAL PLAYED
60 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/20
My Game Stats
My Game Content
694.4 MB
DOWNLOAD
Resident Evil
Resident Evil
TOTAL PLAYED
60 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/44
My Game Stats
My Game Content
17.6 GB
DOWNLOAD
Goetia
Goetia
TOTAL PLAYED
59 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/16
My Game Stats
My Game Content
6.6 GB
DOWNLOAD
Resident Evil 4 (2005)
Resident Evil 4 (2005)
TOTAL PLAYED
59 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/12
My Game Stats
My Game Content
24 GB
DOWNLOAD
Shadowrun: Dragonfall - Director's Cut
Shadowrun: Dragonfall - Director's Cut
TOTAL PLAYED
59 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/39
My Game Stats
My Game Content
6.9 GB
DOWNLOAD
Darkest Dungeon®
Darkest Dungeon®
TOTAL PLAYED
58 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
1/120
My Game Stats
My Game Content
3.7 GB
DOWNLOAD
KHOLAT
KHOLAT
TOTAL PLAYED
58 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/20
My Game Stats
My Game Content
3.3 GB
DOWNLOAD
Bit Blaster XL
Bit Blaster XL
TOTAL PLAYED
57 minutes
LAST PLAYED
Mar 11, 2023
ACHIEVEMENTS
9/17
My Game Stats
My Game Content
117.5 MB
DOWNLOAD
FINAL FANTASY XV WINDOWS EDITION
FINAL FANTASY XV WINDOWS EDITION
TOTAL PLAYED
57 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/97
My Game Stats
My Game Content
105.1 GB
DOWNLOAD
Shadow Warrior
Shadow Warrior
TOTAL PLAYED
57 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/92
My Game Stats
My Game Content
13.7 GB
DOWNLOAD
TowerFall Ascension
TowerFall Ascension
TOTAL PLAYED
57 minutes
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/30
My Game Stats
My Game Content
291.5 MB
DOWNLOAD
Insurgency: Sandstorm
Insurgency: Sandstorm
TOTAL PLAYED
56 minutes
LAST PLAYED
Dec 8, 2018
ACHIEVEMENTS
5/35
My Game Stats
My Game Content
28.1 GB
DOWNLOAD
Oh...Sir! The Hollywood Roast
Oh...Sir! The Hollywood Roast
TOTAL PLAYED
56 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/20
My Game Stats
My Game Content
521.9 MB
DOWNLOAD
Styx: Master of Shadows
Styx: Master of Shadows
TOTAL PLAYED
56 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/33
My Game Stats
My Game Content
6.8 GB
DOWNLOAD
Don't Starve
Don't Starve
TOTAL PLAYED
55 minutes
LAST PLAYED
Jan 5, 2021
My Game Content
2.2 GB
DOWNLOAD
Goat Simulator
Goat Simulator
TOTAL PLAYED
55 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/127
My Game Stats
My Game Content
2.1 GB
DOWNLOAD
Last Word
Last Word
TOTAL PLAYED
55 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/9
My Game Stats
My Game Content
87.4 MB
DOWNLOAD
The Incredible Adventures of Van Helsing III
The Incredible Adventures of Van Helsing III
TOTAL PLAYED
55 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/61
My Game Stats
My Game Content
20.7 GB
DOWNLOAD
The Turing Test
The Turing Test
TOTAL PLAYED
55 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/15
My Game Stats
My Game Content
10.8 GB
DOWNLOAD
Worms Clan Wars
Worms Clan Wars
TOTAL PLAYED
55 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/14
My Game Stats
My Game Content
2.2 GB
DOWNLOAD
DARK SOULS™: Prepare To Die Edition
DARK SOULS™: Prepare To Die Edition
TOTAL PLAYED
54 minutes
LAST PLAYED
Jun 11, 2018
ACHIEVEMENTS
3/41
My Game Stats
My Game Content
3.7 GB
DOWNLOAD
Outlast
Outlast
TOTAL PLAYED
54 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/14
My Game Stats
My Game Content
5.9 GB
DOWNLOAD
Tabletop Simulator
Tabletop Simulator
TOTAL PLAYED
54 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/27
My Game Stats
My Game Content
2.8 GB
DOWNLOAD
A Story About My Uncle
A Story About My Uncle
TOTAL PLAYED
53 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/15
My Game Stats
My Game Content
1.2 GB
DOWNLOAD
Borderlands: The Pre-Sequel
Borderlands: The Pre-Sequel
TOTAL PLAYED
53 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/63
My Game Stats
My Game Content
16.2 GB
DOWNLOAD
Counter-Strike
Counter-Strike
TOTAL PLAYED
53 minutes
LAST PLAYED
Apr 16, 2017
My Game Content
304 MB
DOWNLOAD
Victor Vran
Victor Vran
TOTAL PLAYED
53 minutes
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/90
My Game Stats
My Game Content
4.4 GB
DOWNLOAD
Destiny 2
Destiny 2
TOTAL PLAYED
52 minutes
LAST PLAYED
Feb 5, 2023
ACHIEVEMENTS
6/23
My Game Stats
My Game Content
126 GB
DOWNLOAD
Prey
Prey
TOTAL PLAYED
52 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/58
My Game Stats
My Game Content
30.8 GB
DOWNLOAD
hack_me 2
hack_me 2
TOTAL PLAYED
51 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/10
My Game Stats
My Game Content
290.9 MB
DOWNLOAD
LostWinds
LostWinds
TOTAL PLAYED
50 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/11
My Game Stats
My Game Content
405.1 MB
DOWNLOAD
Lossless Scaling
Lossless Scaling
TOTAL PLAYED
49 minutes
LAST PLAYED
Aug 7
My Game Content
UNINSTALL
Space Farmers
Space Farmers
TOTAL PLAYED
49 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/23
My Game Stats
My Game Content
346.1 MB
DOWNLOAD
Cities in Motion 2
Cities in Motion 2
TOTAL PLAYED
48 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/51
My Game Stats
My Game Content
1.2 GB
DOWNLOAD
FINAL FANTASY V
FINAL FANTASY V
TOTAL PLAYED
48 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/96
My Game Stats
My Game Content
1.2 GB
DOWNLOAD
Marooners
Marooners
TOTAL PLAYED
48 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/34
My Game Stats
My Game Content
789.2 MB
DOWNLOAD
Oh...Sir! The Insult Simulator
Oh...Sir! The Insult Simulator
TOTAL PLAYED
48 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
1/18
My Game Stats
My Game Content
402.9 MB
DOWNLOAD
Reigns: Her Majesty
Reigns: Her Majesty
TOTAL PLAYED
48 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/13
My Game Stats
My Game Content
175.7 MB
DOWNLOAD
BioShock Remastered
BioShock Remastered
TOTAL PLAYED
47 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/65
My Game Stats
My Game Content
20.8 GB
DOWNLOAD
BioShock Infinite
BioShock Infinite
TOTAL PLAYED
47 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/80
My Game Stats
My Game Content
42.6 GB
DOWNLOAD
Blair Witch
Blair Witch
TOTAL PLAYED
47 minutes
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/25
My Game Stats
My Game Content
12.9 GB
DOWNLOAD
Deponia: The Complete Journey
Deponia: The Complete Journey
TOTAL PLAYED
47 minutes
LAST PLAYED
Jan 8, 2021
ACHIEVEMENTS
0/105
My Game Stats
My Game Content
9.5 GB
DOWNLOAD
Grimoire: Manastorm
Grimoire: Manastorm
TOTAL PLAYED
47 minutes
LAST PLAYED
Jan 5, 2021
My Game Content
2 GB
DOWNLOAD
Rock of Ages
Rock of Ages
TOTAL PLAYED
47 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
2/19
My Game Stats
My Game Content
1.1 GB
DOWNLOAD
Uncanny Valley
Uncanny Valley
TOTAL PLAYED
47 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/18
My Game Stats
My Game Content
219.4 MB
DOWNLOAD
Unreal Tournament 2004
Unreal Tournament 2004
TOTAL PLAYED
47 minutes
LAST PLAYED
Jan 6, 2021
My Game Content
5.8 GB
DOWNLOAD
Call of Cthulhu
Call of Cthulhu
TOTAL PLAYED
46 minutes
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/49
My Game Stats
My Game Content
12.1 GB
DOWNLOAD
Paradigm
Paradigm
TOTAL PLAYED
46 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/18
My Game Stats
My Game Content
1.8 GB
DOWNLOAD
Sir, You Are Being Hunted
Sir, You Are Being Hunted
TOTAL PLAYED
46 minutes
LAST PLAYED
Jan 6, 2021
My Game Content
1.4 GB
DOWNLOAD
Chronology
Chronology
TOTAL PLAYED
45 minutes
LAST PLAYED
Jan 5, 2021
My Game Content
224.1 MB
DOWNLOAD
Mirage: Arcane WarfareMirage: Arcane Warfare
Mirage: Arcane Warfare
TOTAL PLAYED
45 minutes
LAST PLAYED
Jan 5, 2021
My Game Content
14.6 GB
DOWNLOAD
Neon Chrome
Neon Chrome
TOTAL PLAYED
45 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/14
My Game Stats
My Game Content
150.1 MB
DOWNLOAD
Rust
Rust
TOTAL PLAYED
45 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/92
My Game Stats
My Game Content
29.2 GB
DOWNLOAD
Outland
Outland
TOTAL PLAYED
44 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/12
My Game Stats
My Game Content
674.7 MB
DOWNLOAD
This War of Mine
This War of Mine
TOTAL PLAYED
44 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/55
My Game Stats
My Game Content
2.6 GB
DOWNLOAD
X-Morph: Defense
X-Morph: Defense
TOTAL PLAYED
44 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/40
My Game Stats
My Game Content
4 GB
DOWNLOAD
Day of Defeat: Source
Day of Defeat: Source
TOTAL PLAYED
43 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/54
My Game Stats
My Game Content
3.8 GB
DOWNLOAD
FINAL FANTASY VI
FINAL FANTASY VI
TOTAL PLAYED
42 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/28
My Game Stats
My Game Content
802.5 MB
DOWNLOAD
Screencheat
Screencheat
TOTAL PLAYED
42 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/34
My Game Stats
My Game Content
1.6 GB
DOWNLOAD
Silence of the Sleep
Silence of the Sleep
TOTAL PLAYED
42 minutes
LAST PLAYED
Jan 6, 2021
My Game Content
1.1 GB
DOWNLOAD
FINAL FANTASY XIII-2
FINAL FANTASY XIII-2
TOTAL PLAYED
41 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/31
My Game Stats
My Game Content
27.6 GB
DOWNLOAD
Deathtrap
Deathtrap
TOTAL PLAYED
40 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/47
My Game Stats
My Game Content
8.7 GB
DOWNLOAD
FINAL FANTASY XIII
FINAL FANTASY XIII
TOTAL PLAYED
40 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/35
My Game Stats
My Game Content
57.6 GB
DOWNLOAD
Headsnatchers
Headsnatchers
TOTAL PLAYED
40 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/52
My Game Stats
My Game Content
6.4 GB
DOWNLOAD
Killer is Dead
Killer is Dead
TOTAL PLAYED
40 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/48
My Game Stats
My Game Content
12.6 GB
DOWNLOAD
LIGHTNING RETURNS: FINAL FANTASY XIII
LIGHTNING RETURNS: FINAL FANTASY XIII
TOTAL PLAYED
40 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/42
My Game Stats
My Game Content
20.5 GB
DOWNLOAD
OneShot
OneShot
TOTAL PLAYED
40 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/11
My Game Stats
My Game Content
734.6 MB
DOWNLOAD
MultiVersus
MultiVersus
TOTAL PLAYED
37 minutes
LAST PLAYED
Sep 15, 2022
ACHIEVEMENTS
0/28
My Game Stats
My Game Content
12.5 GB
DOWNLOAD
Jotun: Valhalla Edition
Jotun: Valhalla Edition
TOTAL PLAYED
36 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/36
My Game Stats
My Game Content
3.9 GB
DOWNLOAD
The Incredible Adventures of Van Helsing
The Incredible Adventures of Van Helsing
TOTAL PLAYED
35 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/95
My Game Stats
My Game Content
18.5 GB
DOWNLOAD
I Am Bread
I Am Bread
TOTAL PLAYED
34 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/35
My Game Stats
My Game Content
2.4 GB
DOWNLOAD
3DMark
3DMark
TOTAL PLAYED
33 minutes
LAST PLAYED
Feb 6, 2022
ACHIEVEMENTS
2/29
My Game Stats
My Game Content
903 MB
DOWNLOAD
Master Spy
Master Spy
TOTAL PLAYED
33 minutes
LAST PLAYED
Jan 5, 2021
My Game Content
142.1 MB
DOWNLOAD
Space Pilgrim Episode I: Alpha Centauri
Space Pilgrim Episode I: Alpha Centauri
TOTAL PLAYED
33 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/7
My Game Stats
My Game Content
243.3 MB
DOWNLOAD
Team Racing League
Team Racing League
TOTAL PLAYED
33 minutes
LAST PLAYED
Jun 22, 2021
ACHIEVEMENTS
0/12
My Game Stats
My Game Content
1.4 GB
DOWNLOAD
Aperture Desk Job
Aperture Desk Job
TOTAL PLAYED
32 minutes
LAST PLAYED
Aug 3, 2023
My Game Content
4.3 GB
DOWNLOAD
Neon Prism
Neon Prism
TOTAL PLAYED
32 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/16
My Game Stats
My Game Content
319.6 MB
DOWNLOAD
Headlander
Headlander
TOTAL PLAYED
31 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/31
My Game Stats
My Game Content
3.5 GB
DOWNLOAD
Layers of Fear (2016)
Layers of Fear (2016)
TOTAL PLAYED
31 minutes
LAST PLAYED
Jan 5, 2021
ACHIEVEMENTS
0/27
My Game Stats
My Game Content
4.1 GB
DOWNLOAD
Space Pilgrim Episode IV: Sol
Space Pilgrim Episode IV: Sol
TOTAL PLAYED
31 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/10
My Game Stats
My Game Content
313 MB
DOWNLOAD
Space Pilgrim Episode II: Epsilon Indi
Space Pilgrim Episode II: Epsilon Indi
TOTAL PLAYED
30 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/7
My Game Stats
My Game Content
257 MB
DOWNLOAD
Space Pilgrim Episode III: Delta Pavonis
Space Pilgrim Episode III: Delta Pavonis
TOTAL PLAYED
30 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/7
My Game Stats
My Game Content
281.1 MB
DOWNLOAD
There is no game: Jam Edition 2015
There is no game: Jam Edition 2015
TOTAL PLAYED
30 minutes
LAST PLAYED
Apr 5, 2022
ACHIEVEMENTS
7/7
My Game Stats
My Game Content
99.3 MB
DOWNLOAD
The Bureau: XCOM Declassified
The Bureau: XCOM Declassified
TOTAL PLAYED
29 minutes
LAST PLAYED
Jan 12, 2021
ACHIEVEMENTS
0/41
My Game Stats
My Game Content
10.8 GB
DOWNLOAD
Kerbal Space Program
Kerbal Space Program
TOTAL PLAYED
28 minutes
LAST PLAYED
Jan 5, 2021
My Game Content
4.6 GB
DOWNLOAD
Resident Evil 7 Teaser: Beginning Hour
Resident Evil 7 Teaser: Beginning Hour
TOTAL PLAYED
28 minutes
LAST PLAYED
Apr 28, 2017
My Game Content
3.5 GB
DOWNLOAD
Brawlhalla
Brawlhalla
TOTAL PLAYED
25 minutes
LAST PLAYED
May 21, 2021
ACHIEVEMENTS
0/57
My Game Stats
My Game Content
1.1 GB
DOWNLOAD
Downwell
Downwell
TOTAL PLAYED
25 minutes
LAST PLAYED
Aug 7, 2023
ACHIEVEMENTS
2/20
My Game Stats
My Game Content
41.1 MB
DOWNLOAD
Helltaker
Helltaker
TOTAL PLAYED
25 minutes
LAST PLAYED
Aug 31, 2021
ACHIEVEMENTS
4/10
My Game Stats
My Game Content
332 MB
DOWNLOAD
On Rusty Trails
On Rusty Trails
TOTAL PLAYED
25 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/44
My Game Stats
My Game Content
509 MB
DOWNLOAD
Refunct
Refunct
TOTAL PLAYED
25 minutes
LAST PLAYED
Jan 4, 2021
ACHIEVEMENTS
6/10
My Game Stats
My Game Content
135.2 MB
DOWNLOAD
Observer
Observer
TOTAL PLAYED
24 minutes
LAST PLAYED
Jan 6, 2021
ACHIEVEMENTS
0/19
My Game Stats
My Game Content
8.2 GB
DOWNLOAD
Trolley Problem, Inc.
Trolley Problem, Inc.
TOTAL PLAYED
21 minutes
LAST PLAYED
Jun 4, 2022
ACHIEVEMENTS
4/12
My Game Stats
My Game Content
2.9 GB
DOWNLOAD
Argo
Argo
TOTAL PLAYED
20 minutes
LAST PLAYED
Mar 4, 2017
My Game Content
13.3 GB
DOWNLOAD
Deceit
Deceit
TOTAL PLAYED
19 minutes
LAST PLAYED
Aug 17, 2018
ACHIEVEMENTS
1/14
My Game Stats
My Game Content
14.2 GB
DOWNLOAD
Crab Game
Crab Game
TOTAL PLAYED
17 minutes
LAST PLAYED
Nov 7, 2021
My Game Content
501.2 MB
DOWNLOAD
DiRT ShowdownDiRT Showdown
DiRT Showdown
TOTAL PLAYED
17 minutes
LAST PLAYED
Jan 22, 2017
ACHIEVEMENTS
0/49
My Game Stats
My Game Content
9.6 GB
DOWNLOAD
American Conquest
American Conquest
TOTAL PLAYED
15 minutes
LAST PLAYED
Oct 31, 2017
My Game Content
1 GB
DOWNLOAD
Sniper Elite 4
Sniper Elite 4
TOTAL PLAYED
15 minutes
LAST PLAYED
Jan 28, 2023
ACHIEVEMENTS
0/85
My Game Stats
My Game Content
54.1 GB
DOWNLOAD
PAC-MAN Championship Edition DX+
PAC-MAN Championship Edition DX+
TOTAL PLAYED
13 minutes
LAST PLAYED
Jan 6, 2022
ACHIEVEMENTS
5/12
My Game Stats
My Game Content
434.8 MB
DOWNLOAD
NBA Playgrounds
NBA Playgrounds
TOTAL PLAYED
11 minutes
LAST PLAYED
Sep 30, 2017
ACHIEVEMENTS
1/13
My Game Stats
My Game Content
11 GB
DOWNLOAD
OLDTV
OLDTV
TOTAL PLAYED
10 minutes
LAST PLAYED
Jul 17, 2017
ACHIEVEMENTS
4/48
My Game Stats
My Game Content
392.4 MB
DOWNLOAD
One Finger Death Punch
One Finger Death Punch
TOTAL PLAYED
10 minutes
LAST PLAYED
Aug 27, 2017
ACHIEVEMENTS
12/152
My Game Stats
My Game Content
155.9 MB
DOWNLOAD
Crusader Kings III
Crusader Kings III
TOTAL PLAYED
9 minutes
LAST PLAYED
Jun 4
ACHIEVEMENTS
0/138
My Game Stats
My Game Content
UNINSTALL
Mortal Kombat 11
Mortal Kombat 11
TOTAL PLAYED
9 minutes
LAST PLAYED
Jun 29, 2021
ACHIEVEMENTS
0/58
My Game Stats
My Game Content
116.5 GB
DOWNLOAD
8-Bit Bayonetta8-Bit Bayonetta
8-Bit Bayonetta
TOTAL PLAYED
8 minutes
LAST PLAYED
Jun 28, 2017
ACHIEVEMENTS
6/16
My Game Stats
My Game Content
54.5 MB
DOWNLOAD
1982
1982
TOTAL PLAYED
7 minutes
LAST PLAYED
Jul 11, 2017
ACHIEVEMENTS
0/20
My Game Stats
My Game Content
15.4 MB
DOWNLOAD
Super Hexagon
Super Hexagon
TOTAL PLAYED
7 minutes
LAST PLAYED
May 15
ACHIEVEMENTS
0/6
My Game Stats
My Game Content
UNINSTALL
Clustertruck
Clustertruck
TOTAL PLAYED
6 minutes
LAST PLAYED
Aug 24, 2017
ACHIEVEMENTS
1/19
My Game Stats
My Game Content
453.5 MB
DOWNLOAD
Krunker
Krunker
TOTAL PLAYED
5 minutes
LAST PLAYED
Feb 15, 2021
ACHIEVEMENTS
1/1
My Game Stats
My Game Content
290 MB
DOWNLOAD
Heavy Rain
Heavy Rain
TOTAL PLAYED
3 minutes
LAST PLAYED
Jan 9, 2021
ACHIEVEMENTS
0/56
My Game Stats
My Game Content
UNINSTALL
Dying Light
Dying Light
TOTAL PLAYED
2 minutes
LAST PLAYED
Jun 12, 2022
ACHIEVEMENTS
0/78
My Game Stats
My Game Content
37.5 GB
DOWNLOAD
Cities: Skylines
Cities: Skylines
TOTAL PLAYED
1 minutes
LAST PLAYED
Jun 2, 2022
ACHIEVEMENTS
0/127
My Game Stats
My Game Content
16.7 GB
DOWNLOAD
ELDEN RING
ELDEN RING
TOTAL PLAYED
1 minutes
LAST PLAYED
Dec 26, 2022
ACHIEVEMENTS
0/42
My Game Stats
My Game Content
UNINSTALL
Overlord
Overlord
TOTAL PLAYED
1 minutes
LAST PLAYED
May 24, 2020
My Game Content
3.6 GB
DOWNLOAD
Totally Accurate Battlegrounds
Totally Accurate Battlegrounds
TOTAL PLAYED
1 minutes
LAST PLAYED
May 18, 2021
My Game Content
4.4 GB
DOWNLOAD
We Were Here
We Were Here
TOTAL PLAYED
1 minutes
LAST PLAYED
Mar 11, 2019
ACHIEVEMENTS
0/26
My Game Stats
My Game Content
1.5 GB
DOWNLOAD
Who's Your Daddy?!
Who's Your Daddy?!
TOTAL PLAYED
1 minutes
LAST PLAYED
Aug 9, 2017
ACHIEVEMENTS
0/43
My Game Stats
My Game Content
5.4 GB
DOWNLOAD
100 Aliens Cats
100 Aliens Cats
ACHIEVEMENTS
0/100
My Game Stats
My Game Content
383.9 MB
DOWNLOAD
100 Asian Cats
100 Asian Cats
ACHIEVEMENTS
0/100
My Game Stats
My Game Content
171.8 MB
DOWNLOAD
100 Capitalist Cats
100 Capitalist Cats
ACHIEVEMENTS
0/100
My Game Stats
My Game Content
214.3 MB
DOWNLOAD
100 Christmas Cats
100 Christmas Cats
ACHIEVEMENTS
0/100
My Game Stats
My Game Content
207 MB
DOWNLOAD
100 Dino Cats
100 Dino Cats
ACHIEVEMENTS
0/100
My Game Stats
My Game Content
309.7 MB
DOWNLOAD
100 Funny Cats
100 Funny Cats
ACHIEVEMENTS
0/100
My Game Stats
My Game Content
315.4 MB
DOWNLOAD
100 Istanbul Cats
100 Istanbul Cats
ACHIEVEMENTS
0/100
My Game Stats
My Game Content
287.2 MB
DOWNLOAD
100 March Cats
100 March Cats
ACHIEVEMENTS
0/100
My Game Stats
My Game Content
313.4 MB
DOWNLOAD
100 Ninja Cats
100 Ninja Cats
ACHIEVEMENTS
0/100
My Game Stats
My Game Content
210.9 MB
DOWNLOAD
100 Robo Cats
100 Robo Cats
ACHIEVEMENTS
0/100
My Game Stats
My Game Content
305.4 MB
DOWNLOAD
100% Orange Juice
100% Orange Juice
ACHIEVEMENTS
0/327
My Game Stats
My Game Content
1.7 GB
DOWNLOAD
112 Operator
112 Operator
ACHIEVEMENTS
0/45
My Game Stats
My Game Content
3.5 GB
DOWNLOAD
20 Minutes Till Dawn
20 Minutes Till Dawn
ACHIEVEMENTS
0/34
My Game Stats
My Game Content
127.1 MB
DOWNLOAD
20 Small Mazes
20 Small Mazes
ACHIEVEMENTS
0/1
My Game Stats
My Game Content
73.1 MB
DOWNLOAD
911 Operator
911 Operator
ACHIEVEMENTS
0/18
My Game Stats
My Game Content
1.1 GB
DOWNLOAD
A Hat in Time
A Hat in Time
ACHIEVEMENTS
0/46
My Game Stats
My Game Content
7.3 GB
DOWNLOAD
A Short Hike
A Short Hike
ACHIEVEMENTS
0/12
My Game Stats
My Game Content
316.3 MB
DOWNLOAD
A.V.A Global
A.V.A Global
ACHIEVEMENTS
0/6
My Game Stats
My Game Content
25.6 GB
DOWNLOAD
Aegis Defenders
Aegis Defenders
ACHIEVEMENTS
0/31
My Game Stats
My Game Content
1.3 GB
DOWNLOAD
Age of Empires II: Definitive EditionAge of Empires II: Definitive Edition
Age of Empires II: Definitive Edition
My Game Stats
My Game Content
Age of Empires III: Definitive EditionAge of Empires III: Definitive Edition
Age of Empires III: Definitive Edition
My Game Stats
My Game Content
Agent A: A puzzle in disguiseAgent A: A puzzle in disguise
Agent A: A puzzle in disguise
My Game Stats
My Game Content
Agent in DepthAgent in Depth
Agent in Depth
My Game Stats
My Game Content
AimiAimi
Aimi
My Game Content
AimlabsAimlabs
Aimlabs
My Game Stats
My Game Content
Alan Wake's American NightmareAlan Wake's American Nightmare
Alan Wake's American Nightmare
My Game Stats
My Game Content
Alchemist's CastleAlchemist's Castle
Alchemist's Castle
My Game Stats
My Game Content
Alchemy GardenAlchemy Garden
Alchemy Garden
My Game Stats
My Game Content
ARCADE GAME SERIES: DIG DUG
ARCADE GAME SERIES: DIG DUG
ACHIEVEMENTS
0/20
My Game Stats
My Game Content
763.2 MB
DOWNLOAD
ARCADE GAME SERIES: GALAGA
ARCADE GAME SERIES: GALAGA
ACHIEVEMENTS
0/20
My Game Stats
My Game Content
763.2 MB
DOWNLOAD
ARCADE GAME SERIES: PAC-MAN
ARCADE GAME SERIES: PAC-MAN
ACHIEVEMENTS
0/20
My Game Stats
My Game Content
781.9 MB
DOWNLOAD
Arcade Spirits
Arcade Spirits
ACHIEVEMENTS
0/21
My Game Stats
My Game Content
497.8 MB
DOWNLOAD
Arcanum
Arcanum
My Game Content
1.1 GB
DOWNLOAD
ARK: Survival Evolved
ARK: Survival Evolved
ACHIEVEMENTS
0/32
My Game Stats
My Game Content
128.2 GB
DOWNLOAD
ARK: Survival Of The Fittest
ARK: Survival Of The Fittest
My Game Content
68.7 GB
DOWNLOAD
Arma 2Arma 2
Arma 2
My Game Content
8.3 GB
DOWNLOAD
Arma 2: British Armed Forces
Arma 2: British Armed Forces
My Game Content
474.9 MB
DOWNLOAD
Arma 2: Operation Arrowhead
Arma 2: Operation Arrowhead
My Game Content
9.5 GB
DOWNLOAD
Arma 2: Operation Arrowhead Beta (Obsolete)Arma 2: Operation Arrowhead Beta (Obsolete)
Arma 2: Operation Arrowhead Beta (Obsolete)
My Game Content
50.1 MB
DOWNLOAD
Arma 2: Private Military Company
Arma 2: Private Military Company
My Game Content
970.3 MB
DOWNLOAD
Arma: Cold War Assault
Arma: Cold War Assault
My Game Content
768.2 MB
DOWNLOAD
Arma: Gold Edition
Arma: Gold Edition
My Game Content
6.3 GB
DOWNLOAD
Armello
Armello
ACHIEVEMENTS
0/50
My Game Stats
My Game Content
1.4 GB
DOWNLOAD
Arx Fatalis
Arx Fatalis
My Game Content
958.1 MB
DOWNLOAD
Ascend- Reborn
Ascend- Reborn
ACHIEVEMENTS
0/30
My Game Stats
My Game Content
3.7 GB
DOWNLOAD
Ashes to Ashes
Ashes to Ashes
My Game Content
1,022.6 MB
DOWNLOAD
Assetto Corsa
Assetto Corsa
ACHIEVEMENTS
0/709
My Game Stats
My Game Content
25.6 GB
DOWNLOAD
Aveyond 3-2: Gates of Night
Aveyond 3-2: Gates of Night
My Game Content
69.5 MB
DOWNLOAD
Awesomenauts
Awesomenauts
ACHIEVEMENTS
0/59
My Game Stats
My Game Content
3.4 GB
DOWNLOAD
Back 4 Blood
Back 4 Blood
ACHIEVEMENTS
0/93
My Game Stats
My Game Content
46.2 GB
DOWNLOAD
Banana Hell
Banana Hell
My Game Content
290.5 MB
DOWNLOAD
Valve Logo
© Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the US and other countries.
Some geospatial data on this website is provided by geonames.org.
Privacy Policy   |  Legal  |  Steam Subscriber Agreement  |  Cookies
  `
  if (data) {
    try {
      const response = await fetch("http://127.0.0.1:8500/user_games", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
        credentials: "include", // Important for handling cookies in cross-origin requests
      });
      console.log("Data submitted:", response);
      const result = await response.json();
      alert("Data submitted successfully!");
    } catch (error) {
      console.error("Failed to submit data:", error);
    }
  } else {
    alert("Please paste the Steam data into the text area.");
  }
}
