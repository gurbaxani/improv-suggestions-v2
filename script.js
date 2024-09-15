document.addEventListener('DOMContentLoaded', function () {
    // Elements for random suggestions    
    const resultDiv = document.getElementById('result');
    const objects = ["banana", "lamp", "keyboard", "book", "guitar", "umbrella", "television", "clock", "chair", "bicycle", "socks", "basketball", "sunglasses", "flowerpot", "camera", "wallet", "microphone", "paintbrush", "pillow", "hammer", "bottle", "tree", "keyboard", "shirt", "globe", "mirror", "scissors", "candle", "bracelet", "phone", "spoon", "basket", "helmet", "ruler", "towel", "couch", "frisbee", "hat", "gloves", "painting", "calendar", "skateboard", "chocolate", "toothbrush", "pen", "oven", "table", "socks", "mug", "plant", "keyboard", "guitar", "window", "rug", "headphones", "backpack", "cup", "tie", "magazine", "basketball", "bag", "lampshade", "chair", "remote", "keyboard", "keyboard", "candlestick", "keychain", "paperclip", "toaster", "dish", "game", "tissue", "charger", "pencil", "glasses", "tape", "trash can", "broom", "vase", "laptop", "notebook", "fork", "paint", "mouse", "pillowcase", "alarm clock", "shoes", "plate", "watch", "keyboard", "scarf", "wallet", "camera", "pen", "mirror", "book", "socks"];
    const relationships = ["sibling rivalry", "co-adventurers", "unexpected allies", "reunion after years", "neighbors with a shared secret", "community volunteers", "co-conspirators", "festival buddies", "co-workers planning a surprise", "partners in a baking competition", "childhood friends reunited", "study group buddies", "neighbors sharing a hobby", "travel companions", "artists collaborating on a project", "podcast co-hosts", "pet owners in the same building", "people stuck in an elevator", "strangers at a bus stop", "fans of the same obscure band", "members of a support group", "teammates in a scavenger hunt", "students preparing for a test together", "volunteers at a charity event", "participants in a flash mob", "attendees at a speed dating event", "siblings planning a surprise party", "neighbors organizing a block party", "strangers bonding over a lost pet", "strangers sharing a cab ride", "parents at a school fundraiser", "cousins working on a family tree", "tourists exploring a new city", "board game enthusiasts", "participants in a community garden", "strangers in a waiting room", "co-passengers on a long flight", "online gaming buddies meeting in person", "classmates at a reunion", "volunteers at an animal shelter", "coworkers at a team-building retreat", "neighbors competing in a neighborhood contest", "participants in a cooking class", "fellow commuters on a crowded train", "book club members", "art class partners", "members of a flash mob", "frequenters of the same coffee shop", "people waiting in line for a movie premiere", "participants in a community theater production", "colleagues at a retirement party", "roommates navigating a disagreement", "couples taking a dance class together", "strangers sharing a park bench", "team members in an escape room", "neighbors sharing a community garden plot", "attendees at a wellness retreat", "siblings planning a surprise trip for parents", "participants in a charity run", "volunteers at a beach cleanup", "parents on the sidelines of a kids' soccer game", "neighbors organizing a street festival", "strangers bonding over a shared interest", "coworkers at a company picnic", "tourists on a guided walking tour", "participants in a group meditation session", "classmates working on a group project", "volunteers at a food bank", "participants in a community choir", "neighbors carpooling to an event", "couples attending a wine tasting", "strangers on a group hike", "team members at a corporate training session", "neighbors collaborating on a community art project", "friends planning a themed party", "siblings on a road trip", "colleagues at a work conference", "neighbors sharing a backyard barbecue", "strangers helping each other during a blackout", "coworkers at a company retreat", "tourists on a sightseeing tour", "participants in a group fitness class", "classmates at a study session"];
    const locations = ["beach", "airport", "amusement park", "library", "zoo", "movie theater", "restaurant", "coffee shop", "hospital waiting room", "school cafeteria", "subway station", "mountain cabin", "farmers' market", "shopping mall", "concert venue", "art gallery", "community center", "sports stadium", "city park", "beauty salon", "spa", "campground", "wedding reception", "college dormitory", "gas station", "bookstore", "museum", "city street", "forest", "beach boardwalk", "carnival", "karaoke bar", "hotel lobby", "playground", "college lecture hall", "yoga studio", "roller skating rink", "food truck festival", "miniature golf course", "ferry boat", "rooftop garden", "jazz club", "petting zoo", "vineyard", "skate park", "aquarium", "botanical garden", "arcade", "fishing pier", "brewery tour", "planetarium", "horse stable", "movie set", "bed and breakfast", "skyscraper rooftop", "snowy mountain peak", "music festival", "farmhouse kitchen", "college campus quad", "ice cream parlor", "historic mansion", "cruise ship deck", "surf shop", "community garden", "tea house", "lake dock", "dessert buffet", "train station platform", "gymnasium", "yacht club", "gondola ride", "board game cafe", "flower shop", "dessert bakery", "farm stand", "kayak rental shop", "thrift store", "waterfall", "orchard", "dive bar", "outdoor amphitheater", "campfire circle", "bungee jumping platform", "glamping site", "castle courtyard", "windmill", "greenhouse", "cave", "observatory", "coral reef", "hot air balloon", "ancient ruins"];
    const occupations = ["firefighter", "teacher", "chef", "doctor", "police officer", "actor", "nurse", "mechanic", "artist", "lawyer", "plumber", "veterinarian", "pilot", "musician", "waiter/waitress", "scientist", "farmer", "architect", "journalist", "electrician", "librarian", "dentist", "construction worker", "hairdresser", "soldier", "social worker", "paramedic", "barista", "pharmacist", "software developer", "photographer", "astronaut", "psychologist", "personal trainer", "truck driver", "flight attendant", "entrepreneur", "park ranger", "banker", "graphic designer", "baker", "chef", "CEO", "fashion designer", "film director", "judge", "landscaper", "military officer", "nanny", "nutritionist", "oceanographer", "paralegal", "potter", "radiologist", "referee", "sommelier", "taxi driver", "tour guide", "veterinary assistant", "wedding planner", "yoga instructor", "zoologist", "bartender", "butcher", "chauffeur", "chiropractor", "comedian", "concierge", "copywriter", "crossing guard", "demolition expert", "embalmer", "event planner", "film critic", "florist", "forensic scientist", "furniture maker", "glassblower", "insurance agent", "jeweler", "magician", "makeup artist", "marine biologist", "martial arts instructor", "mortician", "nutritionist", "optometrist", "paleontologist", "personal shopper", "phlebotomist", "real estate agent", "sailor", "sommelier", "speech therapist", "sports coach", "surveyor", "tattoo artist", "travel agent", "veterinary technician", "web developer", "wine steward"];
    const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const phrases = [
        "The early bird catches the worm.",
        "Actions speak louder than words.",
        "Break a leg!",
        "Bite the bullet.",
        "Piece of cake.",
        "It's raining cats and dogs.",
        "A penny for your thoughts.",
        "Better late than never.",
        "Blessing in disguise.",
        "Cost an arm and a leg.",
        "Curiosity killed the cat.",
        "Don't count your chickens before they hatch.",
        "Don't put all your eggs in one basket.",
        "Every cloud has a silver lining.",
        "Haste makes waste.",
        "Kill two birds with one stone.",
        "Let sleeping dogs lie.",
        "Out of the frying pan and into the fire.",
        "The ball is in your court.",
        "The best thing since sliced bread.",
        "The devil is in the details.",
        "The grass is always greener on the other side.",
        "The whole nine yards.",
        "To steal someone's thunder.",
        "You can't judge a book by its cover.",
        "You can't make an omelette without breaking eggs.",
        "You reap what you sow.",
        "A stitch in time saves nine.",
        "A watched pot never boils.",
        "An apple a day keeps the doctor away.",
        "Absence makes the heart grow fonder.",
        "Behind every cloud is a silver lining.",
        "Birds of a feather flock together.",
        "Don't cry over spilled milk.",
        "Don't put off until tomorrow what you can do today.",
        "Easy come, easy go.",
        "Every dog has its day.",
        "Fortune favors the bold.",
        "Good things come to those who wait.",
        "Home is where the heart is.",
        "If it ain't broke, don't fix it.",
        "It takes two to tango.",
        "Like father, like son.",
        "Make hay while the sun shines.",
        "No pain, no gain.",
        "Nothing ventured, nothing gained.",
        "One man's trash is another man's treasure.",
        "Rome wasn't built in a day.",
        "The apple doesn't fall far from the tree.",
        "The bigger they are, the harder they fall.",
        "The early bird gets the worm.",
        "The squeaky wheel gets the grease.",
        "There's no smoke without fire.",
        "Time is money.",
        "Two heads are better than one.",
        "When in Rome, do as the Romans do.",
        "You can lead a horse to water, but you can't make him drink.",
        "You can't have your cake and eat it too.",
        "You can't teach an old dog new tricks.",
        "You're never too old to learn.",
        "A fool and his money are soon parted.",
        "A leopard can't change its spots.",
        "A picture is worth a thousand words.",
        "All good things must come to an end.",
        "All's fair in love and war.",
        "Beauty is in the eye of the beholder.",
        "Better safe than sorry.",
        "Blood is thicker than water.",
        "Charity begins at home.",
        "Cleanliness is next to godliness.",
        "Don't bite the hand that feeds you.",
        "Don't judge a book by its cover.",
        "Every man has his price.",
        "Familiarity breeds contempt.",
        "Good things come to those who wait.",
        "Great minds think alike.",
        "Honesty is the best policy.",
        "If at first you don't succeed, try, try again.",
        "If the shoe fits, wear it.",
        "If you can't beat 'em, join 'em.",
        "If you want something done right, do it yourself.",
        "Ignorance is bliss.",
        "Keep your friends close and your enemies closer.",
        "Laughter is the best medicine.",
        "Love conquers all.",
        "Money doesn't grow on trees.",
        "Necessity is the mother of invention.",
        "One man's meat is another man's poison.",
        "Practice makes perfect.",
        "Put your best foot forward.",
        "The pen is mightier than the sword.",
        "There's no place like home.",
        "Two wrongs don't make a right.",
        "Variety is the spice of life.",
        "When the going gets tough, the tough get going.",
        "You can't judge a book by its cover.",
        "You can't make an omelette without breaking eggs.",
        "You can't make bricks without straw.",
        "You can't take it with you when you go.",
        "You catch more flies with honey than with vinegar."
    ];
    const emotions = ["Joy", "Anger", "Sadness", "Fear", "Surprise", "Disgust", "Excitement", "Love", "Hate", "Jealousy", "Envy", "Guilt", "Shame", "Pride", "Embarrassment", "Anxiety", "Hope", "Despair", "Loneliness", "Contentment", "Relief", "Curiosity", "Confusion", "Anticipation", "Satisfaction", "Sympathy", "Empathy", "Boredom", "Frustration", "Compassion", "Gratitude", "Regret", "Nostalgia", "Amusement", "Irritation", "Awe", "Disappointment", "Resentment", "Elation", "Disbelief", "Delight", "Grief", "Melancholy", "Triumph", "Enthusiasm", "Impatience", "Disappointment", "Euphoria", "Contempt", "Indignation", "Apathy", "Optimism", "Pessimism", "Determination", "Desperation", "Empowerment", "Vulnerability", "Disinterest", "Admiration", "Disdain", "Wonder", "Amazement", "Arousal", "Calmness", "Restlessness", "Eagerness", "Hesitation", "Disappointment", "Acceptance", "Rejection", "Fright", "Terror", "Panic", "Sorrow", "Misery", "Elation", "Agony", "Rapture", "Reticence", "Apprehension", "Anxiety", "Paranoia", "Grumpiness", "Cheerfulness", "Despondency", "Depression", "Impassivity", "Mirth", "Lamentation", "Panic", "Horror", "Delight", "Joviality", "Tranquility", "Bliss", "Fervor", "Ambivalence", "Yearning", "Discontent", "Serenity"];
    const genres = ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror", "Mystery", "Romance", "Science Fiction", "Thriller", "Crime", "Animation", "Biography", "Documentary", "Family", "Historical", "Musical", "War", "Western", "Satire", "Tragedy", "Fiction", "Non-Fiction", "Poetry", "Memoir", "Suspense", "Psychological", "Political", "Fantasy", "Folklore", "Mythology", "Absurdist", "Realistic", "Dystopian", "Surreal", "Adventure", "Travel", "Autobiography", "Erotica", "Humor", "Thriller", "Legal", "Romantic Comedy", "Sci-Fi", "Fantasy", "Superhero", "Space Opera", "Historical Fiction", "Young Adult", "Children's", "Epic", "Urban Fantasy", "Gothic", "Paranormal", "Post-Apocalyptic", "Historical Romance", "Adventure", "Dark Fantasy", "Military", "Espionage", "Spy", "Neo-Noir", "Coming-of-Age", "Metafiction", "Magical Realism", "Fairy Tale", "Black Comedy", "Musical Comedy", "Heist", "Gangster", "Mockumentary", "Time Travel", "Alternate History", "Sword and Sorcery", "Hardboiled", "Space Western", "Superhero", "Cyberpunk", "Steampunk", "Film Noir", "Political Thriller", "Psychological Horror", "Survival", "Naturalistic", "Philosophical", "Tragicomedy", "Historical Drama", "Social Commentary", "Alien Invasion", "Apocalyptic", "Zombie", "Teen", "Adventure", "Magic Realism"];
    const quirks = [
        "Walks on tiptoes, pretending to be a stealthy spy",
        "Does exaggerated karate moves while waiting in line",
        "Performs a little victory dance after completing simple tasks",
        "Has a habit of hopping instead of walking when excited",
        "Does cartwheels instead of regular turns",
        "Practices yoga poses randomly throughout the day",
        "Walks sideways like a crab when avoiding confrontation",
        "Moonwalks out of awkward situations",
        "Pretends to be a mime when explaining things",
        "Invents a secret handshake for every new person they meet",
        "Does the robot dance when thinking deeply",
        "Has a habit of striking dramatic poses for no reason",
        "Engages in imaginary sword fights with everyday objects",
        "Does interpretive dance to express emotions",
        "Acts out scenes from action movies during conversations",
        "Practices their balance by walking on imaginary tightropes",
        "Has a habit of twirling like a ballerina when happy",
        "Dances salsa while cooking in the kitchen",
        "Walks in slow motion during serious conversations",
        "Pretends to be a ninja, sneaking around corners",
        "Breakdances instead of sitting down on chairs",
        "Strikes superhero poses before making important decisions",
        "Skips instead of walking when feeling playful",
        "Does the Macarena when celebrating achievements",
        "Dances the tango while waiting for the bus",
        "Engages in impromptu dance battles with strangers",
        "Walks backward while having intense conversations",
        "Performs magic tricks with everyday objects",
        "Does acrobatic flips to avoid obstacles",
        "Pretends to be a robot malfunctioning when stressed",
        "Has a habit of tap-dancing instead of regular walking",
        "Does the conga line when leading a group",
        "Practices parkour moves in everyday situations",
        "Strikes a superhero pose before entering a room",
        "Stands on one leg like a flamingo while thinking",
        "Hums their own theme song while walking",
        "Acts out scenes from their favorite movie during downtime",
        "Pretends to be a mime stuck in an invisible box during boring meetings",
        "Bounces like a kangaroo when excited",
        "Pretends to be a spy, scanning the room for hidden clues",
        "Flaps their arms like a bird when they're happy",
        "Stomps their feet in rhythm with their thoughts",
        "Walks backward while reciting Shakespearean soliloquies",
        "Pretends to be a runway model, strutting down the sidewalk",
        "Hula hoops while waiting for the bus",
        "Skips rope instead of walking when they need to get somewhere quickly",
        "Pretends to be a mime trapped in an invisible box whenever they're bored",
        "Slides down banisters instead of taking stairs",
        "Climbs trees during lunch breaks",
        "Pretends to be a rockstar, air guitaring to imaginary music",
        "Wears a cape and pretends to fly when they're alone",
        "Spins in circles when they're excited about something",
        "Pretends to be a cat, arching their back and purring when they're happy",
        "Walks on all fours like a dog when they're alone at home",
        "Pretends to be a robot, moving in jerky mechanical motions",
        "Does handstands whenever they're feeling particularly energetic",
        "Pretends to be a mime trapped in an invisible box whenever they're waiting in line",
        "Hops on one foot whenever they're waiting for something",
        "Slides across the floor in their socks instead of walking normally",
        "Pretends to be a tightrope walker, balancing on curbs or lines on the sidewalk",
        "Does cartwheels down hallways instead of walking",
        "Pretends to be a mime, mimicking the actions of people around them",
        "Twirls an imaginary mustache when they're plotting something mischievous",
        "Pretends to be a ninja, sneaking around corners and making stealthy movements",
        "Wears rollerblades or skates everywhere they go, even indoors",
        "Pretends to be a dancer, gracefully leaping and twirling as they move",
        "Does somersaults instead of walking when they're feeling playful",
        "Pretends to be a robot, speaking in monotone and making mechanical movements",
        "Skips everywhere they go, even in formal settings",
    ];
    const superpowers = [
        "The ability to turn invisible but only when no one is looking",
        "The power to summon a single bubble when you sneeze",
        "Telekinetically move objects weighing less than a pound",
        "Control the temperature of a cup of coffee",
        "Make your hair stand on end at will",
        "Summon a gentle breeze on command",
        "Speak to animals but they don't understand",
        "Predict what you had for breakfast yesterday",
        "Make your fingers glow in the dark",
        "Control the growth rate of your fingernails",
        "Teleport one inch to the left",
        "Summon a single raindrop from a clear sky",
        "Change the color of your saliva at will",
        "Turn your skin slightly translucent",
        "Change the flavor of your saliva",
        "Perfectly mimic the sound of a seagull",
        "Teleport one inch to the right",
        "Summon a single snowflake in summer",
        "Control the growth rate of your hair",
        "Make your voice echo in small spaces",
        "Turn your shadow slightly darker",
        "Make objects levitate one inch off the ground",
        "Predict when someone is about to sneeze",
        "Teleport one inch forward",
        "Summon a single leaf in autumn",
        "Change the scent of your breath",
        "Summon a single snowflake indoors",
        "Predict when it's going to rain in the next hour",
        "Make your ears wiggle independently",
        "Teleport one inch backward",
        "Summon a single raincloud over your head",
        "Change the color of your belly button lint",
        "Predict the next digit of pi",
        "Make objects levitate one inch higher",
        "Summon a single firefly at night",
        "Change the taste of your tears",
        "Predict the next coin flip",
        "Make your eyebrows dance independently",
        "Summon a single gust of wind",
        "Change the color of your sweat",
        "Predict the next lottery number",
        "Make your toes wiggle independently",
        "Summon a single flower to bloom",
        "Change the color of your sneeze",
        "Predict when someone will blink next",
        "Make your belly button glow in the dark",
        "Summon a single shooting star",
        "Change the sound of your laugh",
        "Predict when someone will hiccup next",
    ];
    const titles = [
        "The Time-Traveler's Guide to Forgotten Museums",
        "The Secret Ingredient in Moonlight Soup",
        "The Haunted Bookshop on Elm Street",
        "The Mystery of the Vanishing Blueprints",
        "The Chronicles of the Hidden Room",
        "The Enigma of the Phantom Record Player",
        "The Puzzle That Solved Itself",
        "The Forgotten World of Outdated Gadgets",
        "The Day the Calendar Stopped",
        "The Lost Art of Invisible Paintings",
        "The Secret History of Misplaced Luggage",
        "The Labyrinth of Disappearing Shadows",
        "The Case of the Floating Lantern",
        "The Ghost Writer's Last Manuscript",
        "The Hidden Diary of a Forgotten Explorer",
        "The Curious Journey of the Unmarked Trail",
        "The Haunted Record of Abandoned Amusement Parks",
        "The Enchanted Path of Lost Maps",
        "The Disappearance of the Midnight Library",
        "The Enigma of the Vanishing Manuscript",
        "The Puzzle Box That Never Opens",
        "The Secret Life of an Outdated Calendar",
        "The Case of the Mysterious Stolen Artefacts",
        "The Forgotten Tales of an Abandoned Carnival",
        "The Mystery of the Unseen Footprints",
        "The Chronicles of the Invisible Museum",
        "The Enchanted Chronicles of Lost Timepieces",
        "The Secret Garden of Vanishing Plants",
        "The Disappearing Ink Mystery",
        "The Haunted Blueprint of a Forgotten Building",
        "The Puzzle of the Hidden Vault",
        "The Secret of the Invisible Ink",
        "The Chronicles of the Abandoned Observatory",
        "The Case of the Lost Time Capsule",
        "The Enigma of the Vanishing Sculpture",
        "The Mystery of the Abandoned Ice Cream Factory",
        "The Hidden Chamber of Forgotten Artifacts",
        "The Lost Archives of the Unseen Library",
        "The Secret Recipe of Forgotten Cuisines",
        "The Disappearance of the Midnight Train",
        "The Chronicles of the Vanishing Island",
        "The Mystery of the Unfinished Symphony",
        "The Enchanted Land of Forgotten Instruments",
        "The Case of the Stolen Historical Documents",
        "The Hidden World of Outdated Technology",
        "The Haunted Laboratory of Lost Experiments",
        "The Secret Society of Disappearing Art",
        "The Chronicles of the Lost Astronomical Data",
        "The Enigma of the Vanishing Telescope",
        "The Puzzle of the Abandoned Opera House",
        "The Case of the Missing Historical Figures",
        "The Forgotten Diary of a Vanished Historian",
        "The Mystery of the Unsolved Puzzle Pieces",
        "The Haunted Warehouse of Lost Inventions",
        "The Secret Map to the Invisible Island",
        "The Chronicles of the Abandoned Circus",
        "The Disappearing Artifacts of an Ancient Civilization",
        "The Enigma of the Hidden Observatory",
        "The Case of the Vanishing Museum Exhibits",
        "The Forgotten Gallery of Lost Paintings",
        "The Mystery of the Vanishing Star Maps",
        "The Haunted Crypt of Unopened Letters",
        "The Secret Code of the Abandoned Monastery",
        "The Chronicles of the Lost Music Scores",
        "The Enigma of the Vanished Research Lab",
        "The Puzzle of the Hidden Vault",
        "The Case of the Stolen Artifacts",
        "The Forgotten Recordings of the Abandoned Studio",
        "The Mystery of the Unsolved Time Paradox",
        "The Haunted Garden of Missing Blueprints",
        "The Secret Life of an Abandoned Bookstore",
        "The Chronicles of the Lost Time Machine",
        "The Enigma of the Vanishing Book Club",
        "The Puzzle of the Hidden Chamber",
        "The Case of the Disappearing Manuscript",
        "The Forgotten World of Lost Innovations",
        "The Mystery of the Uncharted Island",
        "The Haunted Archive of Vanished Records",
        "The Secret Recipe of Lost Cuisines",
        "The Chronicles of the Abandoned Theme Park",
        "The Enigma of the Vanished Expedition",
        "The Puzzle of the Hidden Artifact",
        "The Case of the Missing Historical Relics",
        "The Forgotten Diary of a Lost Archaeologist",
        "The Mystery of the Unseen Landscape",
        "The Haunted Attic of Forgotten Memories",
        "The Secret Map of the Invisible City",
        "The Chronicles of the Vanished Observatory",
        "The Enigma of the Hidden Gallery",
        "The Puzzle of the Abandoned Research Facility",
        "The Case of the Stolen Historical Objects",
        "The Forgotten Archive of Lost Science",
        "The Mystery of the Vanishing Lab Equipment",
        "The Haunted Studio of Lost Creations",
        "The Secret Life of the Disappearing Artifacts",
        "The Chronicles of the Abandoned Library",
        "The Enigma of the Vanishing Manuscripts",
        "The Puzzle of the Hidden Time Capsule",
        "The Case of the Disappearing Art Gallery",
        "The Forgotten Garden of Lost Treasures",
        "The Mystery of the Unsolved Puzzle",
        "The Haunted Vault of Vanishing Records",
        "The Secret Code of Abandoned Theories",
        "The Chronicles of the Vanished Art Collection",
        "The Enigma of the Lost Timepieces",
        "The Puzzle of the Hidden Records",
        "The Case of the Missing Observatory Equipment",
        "The Forgotten Museum of Lost Exhibits"
      ];
    const occasions = [
        "Birth",
        "First Day of School",
        "Graduation",
        "First Job",
        "Getting a Driver's License",
        "Buying a First Car",
        "Moving Out of Parents' Home",
        "Engagement",
        "Wedding",
        "First Child",
        "Buying a First House",
        "Child's First Day of School",
        "Child's Graduation",
        "Promotion at Work",
        "Retirement",
        "Golden Anniversary",
        "Major Health Milestone",
        "Starting a Business",
        "Becoming a Grandparent",
        "Winning an Award",
        "Receiving a Major Scholarship",
        "Publishing a Book",
        "First International Trip",
        "Big Career Change",
        "Celebrating a Milestone Birthday (e.g., 30, 40, 50)",
        "Family Reunion",
        "Surviving a Major Illness",
        "Overcoming a Personal Challenge",
        "Adopting a Pet",
        "Hosting a Major Event (e.g., Family Wedding, Big Party)",
        "Completion of a Major Project or Goal",
        "Moving to a New City or Country",
        "Starting a New Relationship",
        "Ending a Long-Term Relationship",
        "Reaching a Personal Fitness Goal",
        "Becoming a Mentor",
        "Buying an Investment Property",
        "Learning a New Skill or Hobby",
        "Celebrating a Significant Work Anniversary",
        "Winning a Competition or Contest",
        "Receiving a Major Promotion",
        "Publishing an Article or Paper",
        "Participating in a Major Community Event",
        "Attending a Major Milestone Event (e.g., Olympic Games, World Expo)",
        "Celebrating a Cultural or Religious Milestone",
        "Reaching a Personal Financial Goal",
        "Surviving a Natural Disaster",
        "Taking a Sabbatical or Extended Leave",
        "Being Featured in the Media",
        "Receiving a Significant Grant or Donation",
        "Starting a Nonprofit or Charity",
        "Experiencing a Major Personal Achievement",
        "Reconnecting with an Estranged Loved One",
        "Celebrating a Significant Family Tradition",
        "Buying a Dream Home",
        "Achieving a Long-Term Dream or Aspiration",
        "Becoming a Published Author",
        "Launching a New Product or Service",
        "Receiving a Major Recognition or Honor",
        "Celebrating an Important Anniversary",
        "Participating in a Significant Public Campaign",
        "Winning a Prestigious Award",
        "Completing a Major Educational Milestone (e.g., PhD)",
        "Witnessing a Significant Historical Event",
        "Reaching a Major Personal Development Goal",
        "Experiencing a Major Life Transition",
        "Celebrating a Cultural or Artistic Milestone",
        "Receiving an Honorary Degree",
        "Starting a New Chapter in Life",
        "Participating in a Major Charity Event",
        "Celebrating a Major Family Milestone",
        "Completing a Major Creative Project",
        "New Year's Day",
        "Valentine's Day",
        "Easter",
        "Halloween",
        "Thanksgiving",
        "Christmas",
        "Hanukkah",
        "Diwali",
        "Chinese New Year",
        "Super Bowl Sunday",
        "Oscar Night",
        "Comic-Con",
        "The Emmys",
        "The Grammys",
        "Coachella",
        "The Met Gala",
        "Star Wars Day",
        "Harry Potter Day",
        "International Women's Day",
        "Pride Month",
        "Independence Day",
        "Black Friday",
        "Cyber Monday",
        "Record Store Day",
        "Punk Rock Bowling",
        "Glastonbury Festival",
        "The Nobel Prize Ceremony",
        "The Daytona 500",
        "The Cannes Film Festival",
        "San Diego Comic-Con",
        "The Grand Prix",
        "The Sundance Film Festival"
      ];
            

    // Function to set a random item from a given array to resultDiv
    function setRandomResult(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        resultDiv.textContent = array[randomIndex];
    }

    // Event listeners for buttons
    document.getElementById('object-btn').addEventListener('click', () => setRandomResult(objects));
    document.getElementById('relationship-btn').addEventListener('click', () => setRandomResult(relationships));
    document.getElementById('location-btn').addEventListener('click', () => setRandomResult(locations));
    document.getElementById('occupation-btn').addEventListener('click', () => setRandomResult(occupations));
    document.getElementById('alphabet-btn').addEventListener('click', () => setRandomResult(alphabets));
    document.getElementById('phrase-btn').addEventListener('click', () => setRandomResult(phrases));
    document.getElementById('emotion-btn').addEventListener('click', () => setRandomResult(emotions));
    document.getElementById('genre-btn').addEventListener('click', () => setRandomResult(genres));
    document.getElementById('quirk-btn').addEventListener('click', () => setRandomResult(quirks));
    document.getElementById('superpower-btn').addEventListener('click', () => setRandomResult(superpowers));
    document.getElementById('title-btn').addEventListener('click', () => setRandomResult(titles));
    document.getElementById('occasion-btn').addEventListener('click', () => setRandomResult(occasions));

    // Timer functionality
    const startButton = document.getElementById('start-timer');
    const stopButton = document.getElementById('stop-timer');
    const timerDisplay = document.getElementById('timer-display');

    let timer;
    let seconds = 0;
    let isRunning = false;
    stopButton.disabled = true;

    function updateDisplay() {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    function startTimer() {
        if (!isRunning) {
            isRunning = true;
            stopButton.disabled = false;
            startButton.disabled = true;
            stopButton.textContent = '✋ Stop'; 
            timer = setInterval(() => {
                seconds++;
                updateDisplay();
            }, 1000);
        }
    }

    function stopOrResetTimer() {
        if (isRunning) {
            clearInterval(timer);
            isRunning = false;
            startButton.disabled = false; // Enable the start button when stopped
            stopButton.textContent = '🔄 Reset'; // Change text to Reset
        } else {
            // Reset the timer
            seconds = 0;
            updateDisplay();
            stopButton.disabled = true;
            stopButton.textContent = '✋ Stop'; // Change text back to Stop
        }
    }

    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopOrResetTimer);

    // Initial display update for the timer
    updateDisplay();

    // Add sound effect functionality
    const bellSound = new Audio('sounds/bell.mp3'); // Update the path as needed

    resultDiv.addEventListener('click', function() {
        bellSound.currentTime = 0.5; // Restart the audio from the beginning
        bellSound.play(); // Play the sound effect
    });

    const buzzerSound = new Audio('sounds/buzzer.mp3');

    timerDisplay.addEventListener('click', function() {
        buzzerSound.currentTime = 0;
        buzzerSound.play();
    });

    
});
