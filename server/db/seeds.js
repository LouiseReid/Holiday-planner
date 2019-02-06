use holiday_builder
db.dropDatabase()


db.experiences.insertMany([
  {
    'location': 'Barcelona',
    'cost': 20,
    'name': 'Sagrada Família',
    'category': ['tour', 'art', 'history'],
    'description': 'This is where to begin your adventure through Barcelona and the dreamlike works of Antoni Gaud\xed.\n\nHis minor basilica is a project of incredible scale and ambition that is still only around three quarters complete more than a 140 years after Gaud\xed first became involved.\n\nWhen its spires are finished it will be the tallest church building in the world, and hardly resembles any religious structure you\u2019ll have seen in your life.\n\nThe Sagrada Fam\xedlia combines several architectural styles including Catalan Modernism, Art Nouveau and Spanish Late-Gothic, but Gaud\xed\u2019s masterpiece defies these kinds of definitions when you look up open-mouthed at the ceiling of the nave.\n\nTicket price includes fast track entrance and a guided tour by one of our experts.',
    'includes': ['Tour guide', 'Fast track entrance ticket to Sagrada Familia', 'Audio guide'],
    'disable-days': [0, 1, 5, 6]
  },
  {
    'location': 'Barcelona',
    'cost': 30,
    'name': 'Camp Nou Experience: F.C. Barcelona Museum and Tour',
    'category': ['tour', 'sport'],
    'description': 'In the western Les Corts neighbourhood is the 99,000-seater stadium that has been the home ground of FC Barcelona since 1957.\n\nIt\u2019s one of Europe\u2019s football cathedrals and even if you have no affinity for the team you have to visit Camp Nou to appreciate the dizzying scale of the arena.\n\nAnd if you are a fan you\u2019ll be in heaven, touring the stadium and browsing the memorabilia of one of the world\u2019s most prestigious teams at the museum.\n\nThe stadium tour is unavailable on or just before match days.',
    'includes': ['Museum entrance fee', 'Camp Nou interactive visit', 'Tour guide', 'Audio guide'],
    'disable-days': [6, 0]
  },
  {
    'location': 'Barcelona',
    'cost': 40,
    'name': '6-Hour Costa Brava Kayak and Snorkel Tour',
    'category': ['adventure', 'sport'],
    'description': 'Depart Barcelona at 12:00, and journey along the Costa Brava for approximately 1 hour to reach the start point of your exciting kayak and snorkel adventure.\n\nUpon arrival at the beach, get outfitted with all the necessary equipment and listen to the instructions from your guide. Explore secluded beaches and rocky caves by kayak, and swim and snorkel amongst the native marine life. Encounter volcanic cliffs towering above the shimmering waters, brimming with fish, sea urchins, coral formations and more.\n\nAlong the way, enjoy a picnic lunch and complimentary water, and get plenty of free time to chill out on a white sand beach. Head back into the heart of Barcelona at the end of your 6-hour adventure, and enjoy a round of beer or sangria at a bar on arrival',
    'includes': ['6-hour return day trip', 'Kayaking guide', 'Equipment (wetsuit, snorkel gear and kayak)', 'Return transfers from Barcelona', 'Packed picnic lunch and water', 'Drinks (beer or sangria) at a city centre bar on your return to Barcelona', 'Changing rooms, toilets and lockers available at the kayaking centre'],
    'disable-days': [0, 1, 3, 5]
  }
])
