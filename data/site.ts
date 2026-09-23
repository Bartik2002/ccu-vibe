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
  headline: "Where Kolkata Comes Alive.",
  tagline: "Kolkata has things happening.",
  mission:
    "A city-wide cultural calendar and ticketing collective celebrating music, theatre, comedy, art, culture and independent experiences — built by Kolkata, for Kolkata.",
  flagship: {
    name: "The Calcutta Dreams",
    type: "Music • Culture • Food • Art • Lifestyle",
    status: "Coming Soon",
  },
  year: "2026",
};

export const marqueeWords = [
  "TONIGHT IN KOLKATA",
  "PARK STREET JAZZ",
  "RABINDRA SADAN PROSCENIUM",
  "COLLEGE STREET BOI-PARA",
  "NAZRUL MANCHA DECIBELS",
  "HOOGHLY RIVERFRONT",
  "NORTH TO SOUTH",
  "AFTER HOURS",
  "THIS WEEK AROUND THE CITY",
];

export const featuredEvent: KolkataEvent = {
  id: "calcutta-dreams-winter-2026",
  num: "01 // PICK OF THE MONTH",
  title: "The Calcutta Dreams: Sound & Soil Festival",
  category: "MUSIC",
  date: "SAT, 14 NOV 2026",
  dayOfWeek: "SATURDAY",
  time: "03:00 PM — 11:30 PM",
  venue: "Nazrul Mancha & Southern Lawns",
  area: "Rabindra Sarobar // South Kolkata",
  price: "₹899 ONWARDS",
  status: "Selling Fast",
  photo: {
    src: `${WM}/d/d9/Live_rock_concert_featuring_musicians_playing_electric_guitars_on_stage_at_night_with_vibrant_lights_and_an_enthusiastic_crowd_present.jpg/1280px-Live_rock_concert_featuring_musicians_playing_electric_guitars_on_stage_at_night_with_vibrant_lights_and_an_enthusiastic_crowd_present.jpg`,
    alt: "Live concert stage with vibrant lights and an enthusiastic crowd at Nazrul Mancha",
  },
  blurb:
    "Open-air amphitheatres under winter skies beside the Dhakuria lakes. Three stages of Bengali alt-rock, delta blues, brass sections and Kolkata street gastronomy. Founding members get door privileges.",
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
    venue: "Rabindra Sadan (Main Proscenium)",
    area: "Exide / Nandan Cultural Complex",
    price: "₹350",
    status: "Filling Up",
    photo: {
      src: `${WM}/2/24/Star_theatre%2C_a_heritage_building_in_North_Kolkata_02.jpg/1280px-Star_theatre%2C_a_heritage_building_in_North_Kolkata_02.jpg`,
      alt: "Historic theatre proscenium in Kolkata",
    },
    blurb:
      "A three-act psychological drama exploring modern Kolkata tenements, heritage tram routes, and sharp Bengali proscenium dialogue.",
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
    venue: "Someplace Else (The Park)",
    area: "17 Park Street // Central CCU",
    price: "₹600 (Cover)",
    status: "Limited Passes",
    photo: {
      src: `${WM}/b/b3/Vagator%2C_Goa%2C_India%2C_DJ_playing_music_on_turntable.jpg/1280px-Vagator%2C_Goa%2C_India%2C_DJ_playing_music_on_turntable.jpg`,
      alt: "Intimate live music setup with vintage amplifiers",
    },
    blurb:
      "Where Kolkata's six-decade jazz lineage meets experimental saxophonists. Dim lights, wooden counters, and unreleased local compositions.",
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
    venue: "Indian Coffee House & Bookstall Lanes",
    area: "College Street // Boi-Para",
    price: "FREE ENTRY",
    status: "Free Entry",
    photo: {
      src: `${WM}/f/fc/Indian_Coffee_House%2C_Kolkata_02.jpg/1280px-Indian_Coffee_House%2C_Kolkata_02.jpg`,
      alt: "Crowded adda inside Indian Coffee House College Street",
    },
    blurb:
      "A roving celebration through 1.5 million second-hand paperbacks. Spoken word beneath yellow ceiling fans, followed by smoked clay-cup cha on the pavement.",
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
    area: "Ashutosh Chowdhury Ave // Ballygunge",
    price: "₹499",
    status: "Selling Fast",
    photo: {
      src: `${WM}/9/92/Buiobuione_Madhya_Pradesh_India_Street_Photography_of_People_life_-_06.jpg/1280px-Buiobuione_Madhya_Pradesh_India_Street_Photography_of_People_life_-_06.jpg`,
      alt: "Lively street gathering laughing together",
    },
    blurb:
      "Six comics dissecting Shyambazar vs Salt Lake, auto-rickshaw route diplomacy, football derby loyalties, and why no adda ever finishes before midnight.",
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
    venue: "Kolkata Centre for Creativity (KCC)",
    area: "EM Bypass // Anandapur",
    price: "₹250",
    status: "Filling Up",
    photo: {
      src: `${WM}/0/07/Captured_in_the_heart_of_Kumartuli%2C_this_photograph_showcases_an_unfinished_yet_deeply_powerful_clay_idol_of_Goddess_Durga._Crafted_by_the_skilled_hands_of_a_traditional_artisan%2C_the_image_captures_not_just_a_sculpture%2C_but_the_soul_of.jpg/1280px-thumbnail.jpg`,
      alt: "Hands shaping clay sculpture at Kumartuli workshop",
    },
    blurb:
      "Traditional riverbank clay masters meet contemporary installations. Interactive potter's wheels, straw armatures, and raw Hooghly terracotta sculptures.",
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
    venue: "Prinsep Ghat & River Barges",
    area: "Strand Road // Hooghly Waterfront",
    price: "₹650",
    status: "Limited Passes",
    photo: {
      src: `${WM}/0/00/Tram_in_Kolkata_%289448992166%29.jpg/1280px-Tram_in_Kolkata_%289448992166%29.jpg`,
      alt: "Vintage transit car moving along Kolkata street near the riverfront",
    },
    blurb:
      "An ambient sunset listening session along the river ghats. Classical strings layered over modular synthesis as wooden country boats drift past in the winter dusk.",
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
    vibe: "Live brass, retro cellars & after-hours bistros",
    blurb:
      "Since the 1960s, this neon corridor has been the nocturnal spine of Kolkata's live music scene. From Someplace Else jams to late-night tea rooms, it is where the night never officially shuts down.",
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
    vibe: "Miles of paperbacks, academic fire & smoking coffee",
    blurb:
      "The largest second-hand book market in the world. Wooden stalls stacked ceiling-high with rare editions, where fiery debates at Indian Coffee House run from morning lectures to midnight.",
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
    vibe: "Experimental theatre, cinema queues & clay cups",
    blurb:
      "The undisputed citadel of Bengali cultural expression. Step outside between acts into the Nandan courtyard, where playwrights, students, and cinephiles debate until the last tram bell.",
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
    vibe: "Open-air lit fests & morning acoustic riyaaz",
    blurb:
      "Surrounded by the vast open winds of the Maidan, the sprawling lawns host open-air literature conclaves, sunrise classical sessions, and acoustic gatherings beneath winter mist.",
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
    vibe: "Roaring college fests & lakefront soundchecks",
    blurb:
      "Tucked beside the Rabindra Sarobar waters, this 3,000-seat amphitheatre has hosted legendary Bengali rock concerts, overnight classical all-nighters, and high-energy university festivals.",
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
    vibe: "Massive arena fests, night markets & electronic sound",
    blurb:
      "Wide grid boulevards, Yuva Bharati grounds, and open fairgrounds that transform into massive weekend craft carnivals, indie music spectacles, and electronic music pop-ups.",
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
    vibe: "Sovabazar thakurdalans, Kumartuli clay & heritage lanes",
    blurb:
      "The ancestral spine of the city. Century-old rajbari courtyards hosting intimate classical soirees, tram wires criss-crossing overhead, and Kumartuli sculptors working late by lantern light.",
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
    vibe: "Indie art spaces, Southern Avenue cafes & Jadavpur adda",
    blurb:
      "Leafy avenues, experimental contemporary spaces, and intimate performance corners. From Gariahat flea walks to Jadavpur basement jam sessions, South Kolkata fuels alternative culture.",
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
    vibe: "Prinsep Ghat breezes, drifting barges & dusk ragas",
    blurb:
      "The tidal river that gave Kolkata its soul. Wooden country boats, sunset chai on stone steps, ambient listening sessions on river barges, and illuminated riverfront promenades.",
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
    tagline: "From Park Street brass to Jadavpur basement indie.",
    count: 24,
    highlightVenue: "Nazrul Mancha & Someplace Else",
  },
  {
    id: "theatre",
    name: "THEATRE",
    tagline: "Original Bengali drama, absurdist monologues & proscenium stages.",
    count: 12,
    highlightVenue: "Rabindra Sadan & Academy of Fine Arts",
  },
  {
    id: "comedy",
    name: "COMEDY",
    tagline: "Bilingual punchlines, local roasts & unapologetic CCU banter.",
    count: 9,
    highlightVenue: "GD Birla Sabhaghar & Kala Mandir",
  },
  {
    id: "art",
    name: "ART",
    tagline: "Printmakers, clay workshops & boundary-pushing galleries.",
    count: 16,
    highlightVenue: "KCC & CIMA Gallery",
  },
  {
    id: "culture",
    name: "CULTURE",
    tagline: "Heritage trails, boi-para addas & culinary midnight crawls.",
    count: 19,
    highlightVenue: "College Street & North Kolkata Paras",
  },
  {
    id: "experiences",
    name: "EXPERIENCES",
    tagline: "Vintage tram pop-ups, rooftop listening sessions & boat gigs.",
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
    vibe: "The historic cradle of Bengali performing arts.",
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
    vibe: "High-decibel concerts with lake breeze acoustics.",
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
    vibe: "Precision acoustics for stand-up comedy and classical recitals.",
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
    vibe: "The temple of Kolkata rock, blues, and unamplified banter.",
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
    vibe: "Sprawling grass fields under the winter afternoon sun.",
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
    vibe: "Experimental exhibitions, avant-garde workshops, and zine fairs.",
  },
];

export const articles: Article[] = [
  {
    title: "Why Kolkata Still Owns The Night",
    excerpt:
      "Beyond the nostalgia and the trams: an insider dispatch on the underground venues, indie creators, and midnight addas shaking the city awake.",
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
      "Tracing six decades of brass sections, jazz drummers, and rock residencies along Calcutta's most musical quarter-mile.",
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
      "How a younger generation of sculptors is taking riverbank straw and Ganga clay into digital projections and experimental stages.",
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
    caption: "Slow is a vibe 🚋",
    rotate: "rotate-2",
  },
  {
    src: `${WM}/3/30/Pavilion_at_the_Victoria_Memorial%2C_Kolkata_01.jpg/1280px-Pavilion_at_the_Victoria_Memorial%2C_Kolkata_01.jpg`,
    alt: "Victoria Memorial, Kolkata",
    caption: "Marble & moonlight",
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
    title: "Music Festivals",
    emoji: "🎶",
    blurb: "Open-air stages under city skylines.",
    tint: "bg-coral/20",
    chip: "bg-coral",
    photo: {
      src: `${WM}/d/d9/Live_rock_concert_featuring_musicians_playing_electric_guitars_on_stage_at_night_with_vibrant_lights_and_an_enthusiastic_crowd_present.jpg/1280px-Live_rock_concert_featuring_musicians_playing_electric_guitars_on_stage_at_night_with_vibrant_lights_and_an_enthusiastic_crowd_present.jpg`,
      alt: "Live concert stage with vibrant lights",
    },
  },
  {
    title: "House Parties",
    emoji: "🪩",
    blurb: "Intimate. Loud. Legendary.",
    tint: "bg-sun/25",
    chip: "bg-sun",
    photo: {
      src: `${WM}/b/b3/Vagator%2C_Goa%2C_India%2C_DJ_playing_music_on_turntable.jpg/1280px-Vagator%2C_Goa%2C_India%2C_DJ_playing_music_on_turntable.jpg`,
      alt: "DJ playing music on turntable",
    },
  },
];

export const benefits = [
  "First artist announcement",
  "Priority access",
  "Exclusive updates",
  "Secret experiences",
  "VIP opportunities",
];

export const timelineSteps: TimelineStep[] = [
  { title: "Dreamlist Opens", desc: "You're early. That's the whole point.", status: "live", color: "bg-mint" },
  { title: "Community Events", desc: "Pop-ups, parties and walks across the city.", status: "next", color: "bg-sun" },
  { title: "Location Reveal", desc: "An iconic venue, hiding in plain sight.", status: "locked", color: "bg-sky" },
];

export const mysteryCards: MysteryCard[] = [
  { label: "Artist 01", emoji: "🧑‍🎤", hint: "Their bass once shook the tram lines." },
  { label: "Artist 02", emoji: "🎸", hint: "Last spotted humming near College Street." },
  { label: "Artist 03", emoji: "🎧", hint: "They said: “Kolkata first. Always.”" },
];

export const landmarks: Landmark[] = [
  { name: "Howrah Bridge", emoji: "🌉", x: 150, y: 140, tease: "Sunrise photo walk above the Hooghly." },
  { name: "Kumartuli", emoji: "🏺", x: 205, y: 82, tease: "Clay, craft and creator stories." },
  { name: "College Street", emoji: "📚", x: 350, y: 200, tease: "Boi para book crawl + adda session." },
  { name: "New Market", emoji: "🛍️", x: 310, y: 300, tease: "Midnight food trail headquarters." },
  { name: "Park Street", emoji: "🎷", x: 385, y: 362, tease: "Where the music never really stopped." },
  { name: "Maidan", emoji: "🌳", x: 285, y: 395, tease: "Big skies. Bigger plans. 👀" },
  { name: "Victoria Memorial", emoji: "🏛️", x: 300, y: 480, tease: "Open-air heritage sessions on the lawns." },
  { name: "Prinsep Ghat", emoji: "🌅", x: 190, y: 510, tease: "Golden-hour acoustic sets by the river." },
];
