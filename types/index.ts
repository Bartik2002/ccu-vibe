export type Photo = {
  src: string;
  alt: string;
};

export type Experience = {
  title: string;
  emoji: string;
  blurb: string;
  tint: string; // tailwind bg class for the card blob
  chip: string; // tailwind bg class for the index chip
  photo: Photo;
};

export type Landmark = {
  name: string;
  emoji: string;
  x: number; // svg viewBox coords (0-600)
  y: number; // svg viewBox coords (0-700)
  tease: string;
};

export type TimelineStep = {
  title: string;
  desc: string;
  status: "live" | "next" | "locked";
  color: string; // tailwind bg class for the dot
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
