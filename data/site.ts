import type {
  Article,
  CategoryItem,
  Experience,
  KolkataEvent,
  KolkataLocation,
  Landmark,
  MysteryCard,
  TimelineStep,
  VenueItem,
} from "@/types";

// Photography: Wikimedia Commons (hotlinked; see README for credits)
const WM = "https://upload.wikimedia.org/wikipedia/commons/thumb";

export const site = {
  brand: "CCU.Vibe",
  headline: "Kolkata has plans.",
  tagline: "Park Street after 8. Rabindra Sadan at dusk.",
  mission:
    "Kolkata's live cultural calendar. Direct admission, no corporate clutter.",
  flagship: {
    name: "The Calcutta Dreams",
    type: "Music • Food • Culture",
    status: "November 2026",
  },
  year: "2026",
};

export const marqueeWords = [
  "TONIGHT IN KOLKATA",
  "PARK STREET AFTER 8",
  "RABINDRA SADAN PROSCENIUM",
  "COLLEGE STREET BOI-PARA",
  "NAZRUL MANCHA DECIBELS",
  "PRINSEP GHAT AT SUNSET",
  "NORTH TO SOUTH",
  "THREE THINGS WORTH LEAVING HOME FOR",
  "SEE YOU OUTSIDE",
];

export const featuredEvent: KolkataEvent = {
  id: "calcutta-dreams-winter-2026",
  num: "01 // HEADLINER",
  title: "The Calcutta Dreams: Sound & Soil Festival",
  category: "MUSIC",
  date: "SAT, 14 NOV 2026",
  dayOfWeek: "SATURDAY",
  time: "03:00 PM — 11:30 PM",
  venue: "Nazrul Mancha & Southern Lawns",
  area: "Rabindra Sarobar",
  price: "₹899",
  status: "Selling Fast",
  photo: {
    src: `${WM}/d/d9/Live_rock_concert_featuring_musicians_playing_electric_guitars_on_stage_at_night_with_vibrant_lights_and_an_enthusiastic_crowd_present.jpg/1280px-Live_rock_concert_featuring_musicians_playing_electric_guitars_on_stage_at_night_with_vibrant_lights_and_an_enthusiastic_crowd_present.jpg`,
    alt: "Live concert stage with vibrant lights and an enthusiastic crowd at Nazrul Mancha",
  },
  blurb:
    "Three stages by the Dhakuria lakes. Bengali alt-rock, delta blues, and brass sections until late.",
  accentColor: "bg-sun text-ink",
};

export const upcomingEvents: KolkataEvent[] = [
  {
    id: "bohuruppi-theatre",
    num: "02",
    title: "Bohuruppi: Modern Stage Monologues",
    category: "THEATRE",
    date: "THU, 08 OCT",
    dayOfWeek: "THURSDAY",
    time: "06:30 PM",
    venue: "Rabindra Sadan (Main Hall)",
    area: "Exide / Nandan Complex",
    price: "₹350",
    status: "Filling Up",
    photo: {
      src: `${WM}/2/24/Star_theatre%2C_a_heritage_building_in_North_Kolkata_02.jpg/1280px-Star_theatre%2C_a_heritage_building_in_North_Kolkata_02.jpg`,
      alt: "Historic theatre proscenium in Kolkata",
    },
    blurb:
      "North Kolkata tenements on stage. Three-act psychological drama, stage smoke, zero intermission.",
    accentColor: "bg-coral text-cream",
  },
  {
    id: "park-street-jazz-midnight",
    num: "03",
    title: "Park Street Midnight Sessions: Live Brass & Alt-Jazz",
    category: "MUSIC",
    date: "FRI, 16 OCT",
    dayOfWeek: "FRIDAY",
    time: "09:30 PM",
    venue: "Someplace Else",
    area: "17 Park Street",
    price: "₹600",
    status: "Limited Passes",
    photo: {
      src: `${WM}/b/b3/Vagator%2C_Goa%2C_India%2C_DJ_playing_music_on_turntable.jpg/1280px-Vagator%2C_Goa%2C_India%2C_DJ_playing_music_on_turntable.jpg`,
      alt: "Intimate live music setup with vintage amplifiers",
    },
    blurb:
      "Late sets at Someplace Else. Upright bass, live brass, and unreleased local charts.",
    accentColor: "bg-lilac text-ink",
  },
  {
    id: "boi-para-lit-crawl",
    num: "04",
    title: "Boi-Para Midnight Adda & Poetry Duel",
    category: "CULTURE",
    date: "SUN, 25 OCT",
    dayOfWeek: "SUNDAY",
    time: "05:00 PM — LATE",
    venue: "Indian Coffee House Lanes",
    area: "College Street",
    price: "FREE",
    status: "Free Entry",
    photo: {
      src: `${WM}/f/fc/Indian_Coffee_House%2C_Kolkata_02.jpg/1280px-Indian_Coffee_House%2C_Kolkata_02.jpg`,
      alt: "Crowded adda inside Indian Coffee House College Street",
    },
    blurb:
      "Spoken word beneath Coffee House ceiling fans, then hot smoked cha on College Street pavements.",
    accentColor: "bg-sun text-ink",
  },
  {
    id: "standup-kolkata-roast",
    num: "05",
    title: "Stand-Up Kolkata: North vs South Calcutta Showdown",
    category: "COMEDY",
    date: "SAT, 31 OCT",
    dayOfWeek: "SATURDAY",
    time: "07:00 PM",
    venue: "GD Birla Sabhaghar",
    area: "Ballygunge",
    price: "₹499",
    status: "Selling Fast",
    photo: {
      src: `${WM}/9/92/Buiobuione_Madhya_Pradesh_India_Street_Photography_of_People_life_-_06.jpg/1280px-Buiobuione_Madhya_Pradesh_India_Street_Photography_of_People_life_-_06.jpg`,
      alt: "Lively street gathering laughing together",
    },
    blurb:
      "Six comics on Shyambazar vs Salt Lake, auto routes, and why no adda ends on time.",
    accentColor: "bg-tangerine text-ink",
  },
  {
    id: "clay-and-canvas-kumartuli",
    num: "06",
    title: "Clay & Canvas: Living Sculptors of Kumartuli",
    category: "ART",
    date: "WED, 04 NOV",
    dayOfWeek: "WEDNESDAY",
    time: "11:00 AM — 08:00 PM",
    venue: "Kolkata Centre for Creativity",
    area: "EM Bypass",
    price: "₹250",
    status: "Filling Up",
    photo: {
      src: `${WM}/0/07/Captured_in_the_heart_of_Kumartuli%2C_this_photograph_showcases_an_unfinished_yet_deeply_powerful_clay_idol_of_Goddess_Durga._Crafted_by_the_skilled_hands_of_a_traditional_artisan%2C_the_image_captures_not_just_a_sculpture%2C_but_the_soul_of.jpg/1280px-thumbnail.jpg`,
      alt: "Hands shaping clay sculpture at Kumartuli workshop",
    },
    blurb:
      "Straw armatures, potter's wheels, and raw river clay. Live from the Kumartuli studios.",
    accentColor: "bg-mint text-ink",
  },
  {
    id: "hooghly-riverfront-sundown",
    num: "07",
    title: "Hooghly Sundown Sessions: Sarod & Ambient Synth",
    category: "EXPERIENCES",
    date: "SUN, 08 NOV",
    dayOfWeek: "SUNDAY",
    time: "04:30 PM — 08:30 PM",
    venue: "Prinsep Ghat & Barges",
    area: "Strand Road",
    price: "₹650",
    status: "Limited Passes",
    photo: {
      src: `${WM}/0/00/Tram_in_Kolkata_%289448992166%29.jpg/1280px-Tram_in_Kolkata_%289448992166%29.jpg`,
      alt: "Vintage transit car moving along Kolkata street near the riverfront",
    },
    blurb:
      "Classical sarod layered over ambient synths while wooden country boats drift past Prinsep Ghat.",
    accentColor: "bg-sky text-ink",
  },
];

export const allEvents: KolkataEvent[] = [featuredEvent, ...upcomingEvents];

export function getEventBySlug(slug: string): KolkataEvent | undefined {
  return allEvents.find((e) => e.id === slug);
}

export const kolkataLocations: KolkataLocation[] = [
  {
    id: "park-street",
    name: "Park Street",
    badge: "01 // THE NIGHT PULSE",
    vibe: "Basement brass, vintage amps & after-hours tables",
    blurb:
      "Basement pubs, brass sections, and tearooms that stay open. The city's late spine.",
    famousFor: ["Live Rock & Jazz", "Heritage Pubs", "After Hours Bites"],
    photo: {
      src: `${WM}/f/f2/Christmas_Lights_Park_Street%2C_Kolkata_5.jpg/1280px-Christmas_Lights_Park_Street%2C_Kolkata_5.jpg`,
      alt: "Park Street Kolkata illuminated with evening crowds and classic street lamps",
    },
  },
  {
    id: "college-street",
    name: "College Street",
    badge: "02 // BOI-PARA & ADDA",
    vibe: "Paperback towers, boiled coffee & furious adda",
    blurb:
      "Piles of paperbacks and Coffee House arguments that run until the lights go out.",
    famousFor: ["Boi-Para Stalls", "Indian Coffee House", "Literary Zines"],
    photo: {
      src: `${WM}/0/02/Old_second-hand_books_being_sold_by_a_shopkeeper_at_the_College_Street_in_Kolkata%2C_West_Bengal.jpg/1280px-Old_second-hand_books_being_sold_by_a_shopkeeper_at_the_College_Street_in_Kolkata%2C_West_Bengal.jpg`,
      alt: "Second-hand bookstalls stacked high along College Street pavement",
    },
  },
  {
    id: "rabindra-sadan",
    name: "Rabindra Sadan",
    badge: "03 // PROSCENIUM & NANDAN",
    vibe: "Proscenium bells, arthouse queues & clay cups",
    blurb:
      "Art-house cinema queues, stage actors, and courtyard debates over clay cups.",
    famousFor: ["Bengali Drama", "Art Cinema", "Courtyard Addas"],
    photo: {
      src: `${WM}/2/24/Star_theatre%2C_a_heritage_building_in_North_Kolkata_02.jpg/1280px-Star_theatre%2C_a_heritage_building_in_North_Kolkata_02.jpg`,
      alt: "Auditorium entrance and cultural buildings near Rabindra Sadan",
    },
  },
  {
    id: "victoria-memorial",
    name: "Victoria Memorial",
    badge: "04 // MAIDAN & MARBLE",
    vibe: "Maidan winds, winter lawns & morning riyaaz",
    blurb:
      "Wind off the Maidan, morning riyaaz, and winter afternoons on the grass.",
    famousFor: ["Open-Air Lit Fests", "Maidan Breezes", "Morning Classical"],
    photo: {
      src: `${WM}/3/30/Pavilion_at_the_Victoria_Memorial%2C_Kolkata_01.jpg/1280px-Pavilion_at_the_Victoria_Memorial%2C_Kolkata_01.jpg`,
      alt: "Victoria Memorial monument and gardens during sunset",
    },
  },
  {
    id: "nazrul-mancha",
    name: "Nazrul Mancha",
    badge: "05 // LAKE AMPHITHEATRE",
    vibe: "Lakefront soundchecks & high-decibel crowds",
    blurb:
      "Sound checks by the water. 3,000 voices singing back across the Dhakuria lakes.",
    famousFor: ["Large Music Fests", "Open-Air Acoustics", "Lake Breeze"],
    photo: {
      src: `${WM}/d/d9/Live_rock_concert_featuring_musicians_playing_electric_guitars_on_stage_at_night_with_vibrant_lights_and_an_enthusiastic_crowd_present.jpg/1280px-Live_rock_concert_featuring_musicians_playing_electric_guitars_on_stage_at_night_with_vibrant_lights_and_an_enthusiastic_crowd_present.jpg`,
      alt: "Live music performance crowd at Nazrul Mancha",
    },
  },
  {
    id: "salt-lake",
    name: "Salt Lake",
    badge: "06 // ARENAS & SECTOR V",
    vibe: "Grid boulevards, arena stages & night food",
    blurb:
      "Wide grid boulevards, arena stages, and electronic sets after hours.",
    famousFor: ["Arena Concerts", "Night Markets", "Electronic Sound"],
    photo: {
      src: `${WM}/a/a7/Durga_Puja_crowd.jpg/1280px-Durga_Puja_crowd.jpg`,
      alt: "Festival gathering and night carnival crowds in Salt Lake",
    },
  },
  {
    id: "north-kolkata",
    name: "North Kolkata",
    badge: "07 // RAJBARI COURTYARDS",
    vibe: "Thakurdalans, red-brick alleys & potter studios",
    blurb:
      "Thakurdalans, red-brick alleys, and sculptors working late under bare bulbs.",
    famousFor: ["Courtyard Classical", "Kumartuli Workshops", "Heritage Lanes"],
    photo: {
      src: `${WM}/0/07/Captured_in_the_heart_of_Kumartuli%2C_this_photograph_showcases_an_unfinished_yet_deeply_powerful_clay_idol_of_Goddess_Durga._Crafted_by_the_skilled_hands_of_a_traditional_artisan%2C_the_image_captures_not_just_a_sculpture%2C_but_the_soul_of.jpg/1280px-thumbnail.jpg`,
      alt: "Artisan sculpting clay sculpture in North Kolkata studio",
    },
  },
  {
    id: "south-kolkata",
    name: "South Kolkata",
    badge: "08 // CAFES & GALLERIES",
    vibe: "Rooftop jams, indie spaces & Southern Avenue",
    blurb:
      "Tree-lined avenues, rooftop jams, and indie gallery spaces hidden behind quiet lanes.",
    famousFor: ["Boutique Galleries", "Rooftop Jams", "Southern Avenue Cafes"],
    photo: {
      src: `${WM}/1/1d/From_earth_to_art%E2%80%94hands_shaping_clay_into_timeless_stories_of_culture_and_resilience.jpg/1280px-From_earth_to_art%E2%80%94hands_shaping_clay_into_timeless_stories_of_culture_and_resilience.jpg`,
      alt: "Artisanal hands crafting contemporary ceramics in South Kolkata",
    },
  },
  {
    id: "hooghly",
    name: "Hooghly",
    badge: "09 // RIVERFRONT & GHATS",
    vibe: "Prinsep Ghat stone, drifting boats & dusk ragas",
    blurb:
      "Stone steps at Prinsep Ghat, drifting boats, and dusk ragas on the water.",
    famousFor: ["Prinsep Ghat Sunsets", "River Barge Gigs", "Breeze & Chai"],
    photo: {
      src: `${WM}/0/00/Tram_in_Kolkata_%289448992166%29.jpg/1280px-Tram_in_Kolkata_%289448992166%29.jpg`,
      alt: "Vintage transit car moving along Kolkata street near the riverfront",
    },
  },
];

export const eventCategories: CategoryItem[] = [
  {
    id: "music",
    name: "MUSIC",
    tagline: "Park Street brass, basement indie, lakefront stages.",
    count: 24,
    highlightVenue: "Nazrul Mancha & Someplace Else",
  },
  {
    id: "theatre",
    name: "THEATRE",
    tagline: "Original proscenium drama, street plays, and absurd monologues.",
    count: 12,
    highlightVenue: "Rabindra Sadan & Academy of Fine Arts",
  },
  {
    id: "comedy",
    name: "COMEDY",
    tagline: "Bilingual sets, roasts, and rooms that don't hold back.",
    count: 9,
    highlightVenue: "GD Birla Sabhaghar & Kala Mandir",
  },
  {
    id: "art",
    name: "ART",
    tagline: "Printmakers, clay studios, and contemporary galleries.",
    count: 16,
    highlightVenue: "KCC & CIMA Gallery",
  },
  {
    id: "culture",
    name: "CULTURE",
    tagline: "Boi-para book crawls, courtyard addas, and late tea.",
    count: 19,
    highlightVenue: "College Street & North Kolkata Paras",
  },
  {
    id: "experiences",
    name: "EXPERIENCES",
    tagline: "Tram pop-ups, barge gigs, and rooftop sessions.",
    count: 11,
    highlightVenue: "Esplanade Depot & Prinsep Ghat",
  },
];

export const venues: VenueItem[] = [
  {
    id: "rabindra-sadan",
    num: "01",
    name: "Rabindra Sadan",
    neighborhood: "Exide / Nandan Complex",
    type: "Proscenium Theatre & Auditorium",
    capacity: "1,100 Seats",
    activeEvents: 8,
    photo: {
      src: `${WM}/2/24/Star_theatre%2C_a_heritage_building_in_North_Kolkata_02.jpg/1280px-Star_theatre%2C_a_heritage_building_in_North_Kolkata_02.jpg`,
      alt: "Rabindra Sadan cultural complex",
    },
    vibe: "The city's historic stage for Bengali theatre and art cinema.",
  },
  {
    id: "nazrul-mancha",
    num: "02",
    name: "Nazrul Mancha",
    neighborhood: "Southern Avenue / Rabindra Sarobar",
    type: "Open-Air Amphitheatre",
    capacity: "3,200 Capacity",
    activeEvents: 5,
    photo: {
      src: `${WM}/d/d9/Live_rock_concert_featuring_musicians_playing_electric_guitars_on_stage_at_night_with_vibrant_lights_and_an_enthusiastic_crowd_present.jpg/1280px-Live_rock_concert_featuring_musicians_playing_electric_guitars_on_stage_at_night_with_vibrant_lights_and_an_enthusiastic_crowd_present.jpg`,
      alt: "Nazrul Mancha outdoor stage setup",
    },
    vibe: "Open-air decibels and lake breezes.",
  },
  {
    id: "gd-birla-sabhaghar",
    num: "03",
    name: "GD Birla Sabhaghar",
    neighborhood: "Ballygunge / South CCU",
    type: "Intimate Concert Hall",
    capacity: "650 Seats",
    activeEvents: 6,
    photo: {
      src: `${WM}/f/fc/Indian_Coffee_House%2C_Kolkata_02.jpg/1280px-Indian_Coffee_House%2C_Kolkata_02.jpg`,
      alt: "Chamber auditorium interior",
    },
    vibe: "Chamber acoustics for comedy and classical recitals.",
  },
  {
    id: "someplace-else",
    num: "04",
    name: "Someplace Else",
    neighborhood: "Park Street",
    type: "Legendary Live Music Pub",
    capacity: "220 Standing",
    activeEvents: 12,
    photo: {
      src: `${WM}/f/f2/Christmas_Lights_Park_Street%2C_Kolkata_5.jpg/1280px-Christmas_Lights_Park_Street%2C_Kolkata_5.jpg`,
      alt: "Park Street nighttime pub ambiance",
    },
    vibe: "Park Street's basement rock and blues institution.",
  },
  {
    id: "victoria-memorial-lawns",
    num: "05",
    name: "Victoria Memorial Lawns",
    neighborhood: "Queens Way / Maidan",
    type: "Open-Air Heritage Grounds",
    capacity: "5,000+ Outdoors",
    activeEvents: 3,
    photo: {
      src: `${WM}/3/30/Pavilion_at_the_Victoria_Memorial%2C_Kolkata_01.jpg/1280px-Pavilion_at_the_Victoria_Memorial%2C_Kolkata_01.jpg`,
      alt: "Victoria Memorial grounds in Kolkata",
    },
    vibe: "Open-air grass fields by the Maidan.",
  },
  {
    id: "kcc-anandapur",
    num: "06",
    name: "Kolkata Centre for Creativity",
    neighborhood: "EM Bypass / Anandapur",
    type: "Contemporary Multi-Disciplinary Space",
    capacity: "450 Flexible",
    activeEvents: 7,
    photo: {
      src: `${WM}/1/1d/From_earth_to_art%E2%80%94hands_shaping_clay_into_timeless_stories_of_culture_and_resilience.jpg/1280px-From_earth_to_art%E2%80%94hands_shaping_clay_into_timeless_stories_of_culture_and_resilience.jpg`,
      alt: "Contemporary art gallery and maker space",
    },
    vibe: "Experimental exhibitions, print labs, and zine fairs.",
  },
];

export const articles: Article[] = [
  {
    title: "Why Kolkata Still Owns The Night",
    excerpt:
      "Underground rooms, indie stages, and midnight addas shaking the city awake.",
    tag: "DISPATCH",
    time: "4 MIN",
    photo: {
      src: `${WM}/a/a7/Durga_Puja_crowd.jpg/1280px-Durga_Puja_crowd.jpg`,
      alt: "A festive crowd during an evening in Kolkata",
    },
  },
  {
    title: "The Architecture of Park Street Sound",
    excerpt:
      "Six decades of live brass, jazz drummers, and rock residencies along one street.",
    tag: "HISTORY",
    time: "6 MIN",
    photo: {
      src: `${WM}/f/f2/Christmas_Lights_Park_Street%2C_Kolkata_5.jpg/1280px-Christmas_Lights_Park_Street%2C_Kolkata_5.jpg`,
      alt: "Park Street illuminated at night",
    },
  },
  {
    title: "Kumartuli to the Gallery: Clay in Contemporary CCU",
    excerpt:
      "How younger sculptors are taking river clay into digital light and experimental stages.",
    tag: "STUDIO",
    time: "5 MIN",
    photo: {
      src: `${WM}/0/07/Captured_in_the_heart_of_Kumartuli%2C_this_photograph_showcases_an_unfinished_yet_deeply_powerful_clay_idol_of_Goddess_Durga._Crafted_by_the_skilled_hands_of_a_traditional_artisan%2C_the_image_captures_not_just_a_sculpture%2C_but_the_soul_of.jpg/1280px-thumbnail.jpg`,
      alt: "Clay sculptures in Kumartuli studio",
    },
  },
];

export const aboutPhotos = [
  {
    src: `${WM}/f/fc/Indian_Coffee_House%2C_Kolkata_02.jpg/1280px-Indian_Coffee_House%2C_Kolkata_02.jpg`,
    alt: "Smoky afternoon adda at Indian Coffee House, College Street",
    caption: "College Street adda ✦",
    rotate: "-rotate-3",
  },
  {
    src: `${WM}/0/00/Tram_in_Kolkata_%289448992166%29.jpg/1280px-Tram_in_Kolkata_%289448992166%29.jpg`,
    alt: "A yellow tram rolling through Kolkata",
    caption: "Trams still run 🚋",
    rotate: "rotate-2",
  },
  {
    src: `${WM}/3/30/Pavilion_at_the_Victoria_Memorial%2C_Kolkata_01.jpg/1280px-Pavilion_at_the_Victoria_Memorial%2C_Kolkata_01.jpg`,
    alt: "Victoria Memorial, Kolkata",
    caption: "Maidan at dusk",
    rotate: "-rotate-1",
  },
];

export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/ccu.vibe/" },
  { name: "Telegram Dispatch", href: "#dreamlist" },
  { name: "Substack Gazette", href: "#dreamlist" },
];

export const experiences: Experience[] = [
  {
    title: "Stage & Sound",
    emoji: "🎶",
    blurb: "Open-air decibels by the Dhakuria lakes.",
    tint: "bg-coral/20",
    chip: "bg-coral",
    photo: {
      src: `${WM}/d/d9/Live_rock_concert_featuring_musicians_playing_electric_guitars_on_stage_at_night_with_vibrant_lights_and_an_enthusiastic_crowd_present.jpg/1280px-Live_rock_concert_featuring_musicians_playing_electric_guitars_on_stage_at_night_with_vibrant_lights_and_an_enthusiastic_crowd_present.jpg`,
      alt: "Live concert stage with vibrant lights",
    },
  },
  {
    title: "Late Rooms",
    emoji: "🪩",
    blurb: "Basement sets. Loud, tight, and unlisted.",
    tint: "bg-sun/25",
    chip: "bg-sun",
    photo: {
      src: `${WM}/b/b3/Vagator%2C_Goa%2C_India%2C_DJ_playing_music_on_turntable.jpg/1280px-Vagator%2C_Goa%2C_India%2C_DJ_playing_music_on_turntable.jpg`,
      alt: "DJ playing music on turntable",
    },
  },
];

export const benefits = [
  "Lineup announcements first",
  "Door access for unlisted sessions",
  "Direct box office, zero fees",
  "Closed rehearsals & soundchecks",
  "Founding pass number",
];

export const timelineSteps: TimelineStep[] = [
  { title: "Dreamlist Opens", desc: "Get on before dates go public.", status: "live", color: "bg-mint" },
  { title: "Calendar Drops", desc: "First 40 dates confirmed.", status: "next", color: "bg-sun" },
  { title: "Doors Open", desc: "See you outside.", status: "locked", color: "bg-sky" },
];

export const mysteryCards: MysteryCard[] = [
  { label: "Artist 01", emoji: "🧑‍🎤", hint: "Bass that rattles the tram tracks." },
  { label: "Artist 02", emoji: "🎸", hint: "Spotted with a guitar off College Street." },
  { label: "Artist 03", emoji: "🎧", hint: "Strictly Kolkata-first." },
];

export const landmarks: Landmark[] = [
  { name: "Howrah Bridge", emoji: "🌉", x: 150, y: 140, tease: "Sunrise photo walk above the Hooghly." },
  { name: "Kumartuli", emoji: "🏺", x: 205, y: 82, tease: "Straw, clay, and studio lights." },
  { name: "College Street", emoji: "📚", x: 350, y: 200, tease: "Paperback towers and hot cha." },
  { name: "New Market", emoji: "🛍️", x: 310, y: 300, tease: "Midnight food counters." },
  { name: "Park Street", emoji: "🎷", x: 385, y: 362, tease: "The band starts at nine." },
  { name: "Maidan", emoji: "🌳", x: 285, y: 395, tease: "Wind off the grass." },
  { name: "Victoria Memorial", emoji: "🏛️", x: 300, y: 480, tease: "Winter afternoon sessions on the lawn." },
  { name: "Prinsep Ghat", emoji: "🌅", x: 190, y: 510, tease: "Dusk sets beside the water." },
];
