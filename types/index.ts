export type Photo = {
  src: string;
  alt: string;
};

export type KolkataEvent = {
  id: string;
  num: string;
  title: string;
  category: "MUSIC" | "THEATRE" | "COMEDY" | "ART" | "CULTURE" | "EXPERIENCES";
  date: string;
  dayOfWeek: string;
  time: string;
  venue: string;
  area: string;
  price: string;
  status: "Selling Fast" | "Filling Up" | "Limited Passes" | "Free Entry" | "Exclusive";
  photo: Photo;
  blurb: string;
  accentColor?: string;
};

export type KolkataLocation = {
  id: string;
  name: string;
  badge: string;
  vibe: string;
  blurb: string;
  photo: Photo;
  famousFor: string[];
};

export type VenueItem = {
  id: string;
  num: string;
  name: string;
  neighborhood: string;
  type: string;
  capacity: string;
  activeEvents: number;
  photo: Photo;
  vibe: string;
};

export type CategoryItem = {
  id: string;
  name: "MUSIC" | "THEATRE" | "COMEDY" | "ART" | "CULTURE" | "EXPERIENCES";
  tagline: string;
  count: number;
  highlightVenue: string;
};

export type Experience = {
  title: string;
  emoji: string;
  blurb: string;
  tint: string;
  chip: string;
  photo: Photo;
};

export type Landmark = {
  name: string;
  emoji: string;
  x: number;
  y: number;
  tease: string;
};

export type TimelineStep = {
  title: string;
  desc: string;
  status: "live" | "next" | "locked";
  color: string;
};

export type Article = {
  title: string;
  excerpt: string;
  tag: string;
  time: string;
  photo: Photo;
};

export type MysteryCard = {
  label: string;
  emoji: string;
  hint: string;
};

