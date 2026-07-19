import type { Article, Experience, Landmark, MysteryCard, Photo, TimelineStep } from "@/types";

// Photography: Wikimedia Commons (hotlinked; see README for credits)
const WM = "https://upload.wikimedia.org/wikipedia/commons/thumb";

export const site = {
  brand: "CCU.Vibe",
  headline: "Where Kolkata Comes Alive.",
  tagline: "Where The City Dreams Together.",
  mission:
    "A city-wide movement celebrating music, culture, creators, food, fashion and unforgettable experiences.",
  flagship: {
    name: "The Calcutta Dreams",
    type: "Music • Culture • Food • Art • Lifestyle",
    status: "Coming Soon",
  },
};

export const marqueeWords = ["Music", "Culture", "Food", "Art", "Lifestyle", "Community", "Kolkata"];

export const experiences: Experience[] = [
  {
    title: "Music Festivals", emoji: "🎶", blurb: "Open-air stages under city skylines.", tint: "bg-coral/20", chip: "bg-coral",
    photo: { src: `${WM}/d/d9/Live_rock_concert_featuring_musicians_playing_electric_guitars_on_stage_at_night_with_vibrant_lights_and_an_enthusiastic_crowd_present.jpg/1280px-Live_rock_concert_featuring_musicians_playing_electric_guitars_on_stage_at_night_with_vibrant_lights_and_an_enthusiastic_crowd_present.jpg`, alt: "Live concert stage with vibrant lights and a crowd at night" },
  },
  {
    title: "House Parties", emoji: "🪩", blurb: "Intimate. Loud. Legendary.", tint: "bg-sun/25", chip: "bg-sun",
    photo: { src: `${WM}/b/b3/Vagator%2C_Goa%2C_India%2C_DJ_playing_music_on_turntable.jpg/1280px-Vagator%2C_Goa%2C_India%2C_DJ_playing_music_on_turntable.jpg`, alt: "DJ playing music on a turntable" },
  },
  {
    title: "Photo Walks", emoji: "📸", blurb: "Golden hour through hundred-year-old lanes.", tint: "bg-sky/25", chip: "bg-sky",
    photo: { src: `${WM}/9/92/Buiobuione_Madhya_Pradesh_India_Street_Photography_of_People_life_-_06.jpg/1280px-Buiobuione_Madhya_Pradesh_India_Street_Photography_of_People_life_-_06.jpg`, alt: "Street photography of everyday life in India" },
  },
  {
    title: "Food Trails", emoji: "🍛", blurb: "From kathi rolls to kosha mangsho.", tint: "bg-tangerine/25", chip: "bg-tangerine",
    photo: { src: `${WM}/7/79/Paratha_roll.jpg/1280px-Paratha_roll.jpg`, alt: "A freshly made kathi roll" },
  },
  {
    title: "Heritage Walks", emoji: "🏛️", blurb: "Stories hiding in every brick.", tint: "bg-mint/30", chip: "bg-mint",
    photo: { src: `${WM}/2/24/Star_theatre%2C_a_heritage_building_in_North_Kolkata_02.jpg/1280px-Star_theatre%2C_a_heritage_building_in_North_Kolkata_02.jpg`, alt: "Star Theatre, a heritage building in North Kolkata" },
  },
  {
    title: "Creator Meetups", emoji: "🎙️", blurb: "The city's makers, finally in one room.", tint: "bg-lilac/25", chip: "bg-lilac",
    photo: { src: `${WM}/f/fc/Indian_Coffee_House%2C_Kolkata_02.jpg/1280px-Indian_Coffee_House%2C_Kolkata_02.jpg`, alt: "Adda at Indian Coffee House, College Street, Kolkata" },
  },
  {
    title: "Pop-ups", emoji: "⚡", blurb: "Blink and you'll miss it.", tint: "bg-coral/20", chip: "bg-coral",
    photo: { src: `${WM}/e/e5/Food_sold_in_New_Market%2C_Kolkata_05.jpg/1280px-Food_sold_in_New_Market%2C_Kolkata_05.jpg`, alt: "Stalls at New Market, Kolkata" },
  },
  {
    title: "Workshops", emoji: "🎨", blurb: "Learn loud. Make louder.", tint: "bg-sky/25", chip: "bg-sky",
    photo: { src: `${WM}/1/1d/From_earth_to_art%E2%80%94hands_shaping_clay_into_timeless_stories_of_culture_and_resilience.jpg/1280px-From_earth_to_art%E2%80%94hands_shaping_clay_into_timeless_stories_of_culture_and_resilience.jpg`, alt: "Hands shaping clay at a pottery workshop" },
  },
];

export const aboutPhotos: (Photo & { caption: string; rotate: string })[] = [
  {
    src: `${WM}/4/46/Howrah_Bridge_Evening1.jpg/1280px-Howrah_Bridge_Evening1.jpg`,
    alt: "A yellow taxi speeding through Kolkata at night",
    caption: "City in motion ✦", rotate: "-rotate-3",
  },
  {
    src: `${WM}/0/00/Tram_in_Kolkata_%289448992166%29.jpg/1280px-Tram_in_Kolkata_%289448992166%29.jpg`,
    alt: "A yellow tram rolling through Kolkata",
    caption: "Slow is a vibe 🚋", rotate: "rotate-2",
  },
  {
    src: `${WM}/3/30/Pavilion_at_the_Victoria_Memorial%2C_Kolkata_01.jpg/1280px-Pavilion_at_the_Victoria_Memorial%2C_Kolkata_01.jpg`,
    alt: "Victoria Memorial, Kolkata",
    caption: "Marble & moonlight", rotate: "-rotate-1",
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
  { title: "Artist Reveal", desc: "The Dreamlist hears it first.", status: "locked", color: "bg-lilac" },
  { title: "Ticket Launch", desc: "Priority access for founding members.", status: "locked", color: "bg-tangerine" },
  { title: "Festival Weekend", desc: "Kolkata comes alive.", status: "locked", color: "bg-coral" },
];

export const articles: Article[] = [
  {
    title: "Why Kolkata Needed This",
    excerpt:
      "The city that gave India its art, poetry and rebellion finally gets the movement it deserves.",
    tag: "Manifesto",
    time: "4 min",
    photo: { src: `${WM}/a/a7/Durga_Puja_crowd.jpg/1280px-Durga_Puja_crowd.jpg`, alt: "A festive crowd during Durga Puja in Kolkata" },
  },
  {
    title: "Behind CCU.Vibe",
    excerpt: "Notes from the crew building Kolkata's culture engine — adda, chai and big plans.",
    tag: "Inside",
    time: "6 min",
    photo: { src: `${WM}/f/f2/Christmas_Lights_Park_Street%2C_Kolkata_5.jpg/1280px-Christmas_Lights_Park_Street%2C_Kolkata_5.jpg`, alt: "Park Street, Kolkata lit up at night" },
  },
  {
    title: "Building The Calcutta Dreams",
    excerpt: "Site visits, sketchbooks and 3AM playlists. A festival diary, before the festival.",
    tag: "Diary",
    time: "5 min",
    photo: { src: `${WM}/0/07/Captured_in_the_heart_of_Kumartuli%2C_this_photograph_showcases_an_unfinished_yet_deeply_powerful_clay_idol_of_Goddess_Durga._Crafted_by_the_skilled_hands_of_a_traditional_artisan%2C_the_image_captures_not_just_a_sculpture%2C_but_the_soul_of.jpg/1280px-thumbnail.jpg`, alt: "An unfinished clay idol taking shape in Kumartuli" },
  },
  {
    title: "Culture Stories",
    excerpt: "College Street bookstalls, Kumartuli clay, tram bells — the sounds we come from.",
    tag: "Stories",
    time: "7 min",
    photo: { src: `${WM}/0/02/Old_second-hand_books_being_sold_by_a_shopkeeper_at_the_College_Street_in_Kolkata%2C_West_Bengal.jpg/1280px-Old_second-hand_books_being_sold_by_a_shopkeeper_at_the_College_Street_in_Kolkata%2C_West_Bengal.jpg`, alt: "Second-hand bookstalls on College Street, Kolkata" },
  },
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

export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/ccu.vibe/" },
];
