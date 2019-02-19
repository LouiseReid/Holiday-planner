use holiday_builder
db.dropDatabase()


db.experiences.insertMany([
  {
    'location': 'Barcelona',
    'cost': 20,
    'name': 'Sagrada Família',
    'categories': ['tour', 'art', 'history'],
    'description': 'This is where to begin your adventure through Barcelona and the dreamlike works of Antoni Gaud\xed.\n\nHis minor basilica is a project of incredible scale and ambition that is still only around three quarters complete more than a 140 years after Gaud\xed first became involved.\n\nWhen its spires are finished it will be the tallest church building in the world, and hardly resembles any religious structure you\u2019ll have seen in your life.\n\nThe Sagrada Fam\xedlia combines several architectural styles including Catalan Modernism, Art Nouveau and Spanish Late-Gothic, but Gaud\xed\u2019s masterpiece defies these kinds of definitions when you look up open-mouthed at the ceiling of the nave.\n\nTicket price includes fast track entrance and a guided tour by one of our experts.',
    'includes': ['Tour guide', 'Fast track entrance ticket to Sagrada Familia', 'Audio guide'],
    'disable-days': [0, 1, 5, 6]
  },
  {
    'location': 'Barcelona',
    'cost': 30,
    'name': 'Camp Nou Experience: F.C. Barcelona Museum and Tour',
    'categories': ['tour', 'sport'],
    'description': 'In the western Les Corts neighbourhood is the 99,000-seater stadium that has been the home ground of FC Barcelona since 1957.\n\nIt\u2019s one of Europe\u2019s football cathedrals and even if you have no affinity for the team you have to visit Camp Nou to appreciate the dizzying scale of the arena.\n\nAnd if you are a fan you\u2019ll be in heaven, touring the stadium and browsing the memorabilia of one of the world\u2019s most prestigious teams at the museum.\n\nThe stadium tour is unavailable on or just before match days.',
    'includes': ['Museum entrance fee', 'Camp Nou interactive visit', 'Tour guide', 'Audio guide'],
    'disable-days': [6, 0]
  },
  {
    'location': 'Barcelona',
    'cost': 40,
    'name': '6-Hour Costa Brava Kayak and Snorkel Tour',
    'categories': ['adventure', 'sport'],
    'description': 'Depart Barcelona at 12:00, and journey along the Costa Brava for approximately 1 hour to reach the start point of your exciting kayak and snorkel adventure.\n\nUpon arrival at the beach, get outfitted with all the necessary equipment and listen to the instructions from your guide. Explore secluded beaches and rocky caves by kayak, and swim and snorkel amongst the native marine life. Encounter volcanic cliffs towering above the shimmering waters, brimming with fish, sea urchins, coral formations and more.\n\nAlong the way, enjoy a picnic lunch and complimentary water, and get plenty of free time to chill out on a white sand beach. Head back into the heart of Barcelona at the end of your 6-hour adventure, and enjoy a round of beer or sangria at a bar on arrival.',
    'includes': ['6-hour return day trip', 'Kayaking guide', 'Equipment (wetsuit, snorkel gear and kayak)', 'Return transfers from Barcelona', 'Packed picnic lunch and water', 'Drinks (beer or sangria) at a city centre bar on your return to Barcelona', 'Changing rooms, toilets and lockers available at the kayaking centre'],
    'disable-days': [0, 1, 3, 5]
  },
  {
    'location': 'London',
    'cost': 60,
    'name': 'Buckingham Palace Tour Including Changing of the Guard Ceremony',
    'categories': ['tour'],
    'description': 'Delve into London’s rich royal heritage during a 2.5-hour visit to Buckingham Palace to see the Changing of the Guard Ceremony.\n\n Marvel at the traditional Changing of the Guard performance, which involves meticulously dressed soldiers marching to the rhythm of military drums. Then, enjoy an exclusive experience as you enter the opulent State Rooms of Buckingham Palace for an independent audio tour.\n\n See lavish chambers during a tour only available for two months of the year, and gain fascinating insight into the history of the British monarchy.',
    'includes': ['2.5 hour Buckingham Palace Tour', 'Changing of the Guard ceremony', 'Tour host', 'Entry/Admission - Buckingham Palace', 'Headsets, when needed'],
    'disable-days': [0, 1, 2]
  },
  {
    'location': 'London',
    'cost': 35,
    'name': 'London Eye',
    'categories': ['adventure'],
    'description': 'At a height of 135 m (443 ft), this is the tallest Ferris wheel in Europe and one of the tallest in the world. Ever since its completion in 1999, the Eye has provided one of the highest vantage points in London. On a clear day, you can see across London, with the Thames River, Big Ben, and Parliament sitting directly below you.\n\n Each of the 32 sealed, air-conditioned ovoid capsule can hold up to 25 passengers, though you can also reserve an entire capsule for yourself and your companions for an extra fee.\n\n Purchase your tickets online to save on the price of admission and to avoid waiting in line when you arrive. Try not to book too far ahead, though, because there\u2019s no guaranteeing the sun will shine on your chosen date. ',
    'includes': ['London Eye admission ticket'],
    'disable-days': []
  },
  {
    'location': 'London',
    'cost': 29,
    'name': 'Madame Tussauds',
    'categories': ['art'],
    'description': 'Marvel at lifelike wax figures of the world\u2019s most famous actors and actresses, athletes, entertainers, and politicians at Madame Tussauds London. This is the original site of the museum that\u2019s become a franchise in nine other cities around the globe.\n\n Wax sculptor Marie Tussaud established the museum in 1884, and today it houses over 300 figures. The figures on display change frequently to keep up with the times, but you can expect to find sculptures of famous people from both the past and present. After viewing the exhibits, sit for a 4-D movie on a 360-degree screen, and then enter the Scream! house of horrors. Purchase your tickets online before you visit to reduce both the price of admission and your wait to enter. ',
    'includes': ['London Eye admission ticket'],
    'disable-days': []
  },
  {
    'location': 'New York',
    'cost': 50,
    'name': 'NYC Liberty Cruise',
    'categories': ['tour'],
    'description': 'Don’t have a lot of time in New York City? Make the most of it with this 60-minute harbor cruise that gives you prime views of one of the most recognizable skylines in the world. Snap memorable shots of Midtown and Lower Manhattan, and sail within 100 feet of the Statue of Liberty. Learn fun facts about the iconic green-hued goddess as an informative guide brings the city’s sights and fascinating history to life.',
    'includes': ['1-hour Sightseeing Cruise', 'Live narration by Circle Line’s world famous guides (in English)', 'Recorded narration in seven languages available via free app download', 'Free Wi-Fi on board'],
    'disable-days': [6]
  }
])
