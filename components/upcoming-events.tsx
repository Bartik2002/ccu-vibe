"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { upcomingEvents } from "@/data/site";
import { toast } from "@/lib/toast";

const CATEGORIES = [
  "ALL",
  "MUSIC",
  "THEATRE",
  "COMEDY",
  "ART",
  "CULTURE",
  "EXPERIENCES",
] as const;

export default function UpcomingEvents() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const filtered =
    activeCategory === "ALL"
      ? upcomingEvents
      : upcomingEvents.filter((ev) => ev.category === activeCategory);

  const handleBooking = (title: string) => {
    toast(`Ticket reserved for "${title}". See you outside.`);
  };

  return (
    <section
      id="events"
      className="relative border-b border-(--line) bg-(--bg) text-(--fg) py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-(--line) pb-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-sky font-semibold">
              THIS WEEK
            </p>
            <h2 className="mt-2 font-display text-7xl sm:text-8xl lg:text-9xl font-bold tracking-tight text-(--fg) uppercase leading-[0.85] select-none">
              THE DATES<span className="text-sky">.</span>
            </h2>
          </div>

          <p className="max-w-md font-mono text-xs uppercase tracking-[0.18em] text-(--muted) leading-relaxed">
            Three things worth leaving home for. Plus four more if the night runs long.
          </p>
        </div>

        {/* Category Filter Bar */}
        <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-(--line) pb-6">
          <span className="mr-2 font-mono text-xs uppercase tracking-widest text-(--muted)">
            Genre:
          </span>
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                data-cursor
                className={`border px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors ${
                  isSelected
                    ? "border-2 border-ink bg-sky text-ink font-bold"
                    : "border-(--line) bg-(--card) text-(--muted) hover:border-(--fg) hover:text-(--fg)"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Event Discovery List: One Consistent, Scannable Rhythm */}
        <div className="mt-12 divide-y divide-(--line) border-y border-(--line)">
          {filtered.map((ev) => (
            <article
              key={ev.id}
              className="group py-8 sm:py-10 transition-colors hover:bg-(--card)/50"
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-12 sm:items-center">
                {/* Date Anchor (2 cols) */}
                <div className="sm:col-span-2">
                  <div className="font-mono text-xs font-semibold text-sky uppercase tracking-wider">
                    {ev.dayOfWeek}
                  </div>
                  <div className="mt-1 font-display text-4xl sm:text-5xl font-bold tracking-tight text-(--fg) leading-none select-none">
                    {ev.date.split(", ")[1] || ev.date}
                  </div>
                  <div className="mt-2 font-mono text-xs text-(--muted)">
                    {ev.time}
                  </div>
                </div>

                {/* Event Photo Plate (3 cols) */}
                <div className="sm:col-span-3">
                  <div className="relative aspect-[16/10] w-full overflow-hidden border border-(--line) bg-ink/5">
                    <Image
                      src={ev.photo.src}
                      alt={ev.photo.alt}
                      fill
                      sizes="(min-width: 640px) 25vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-2 left-2 border border-ink bg-sky px-2 py-0.5 font-mono text-[9px] font-bold text-ink uppercase">
                      {ev.category}
                    </div>
                  </div>
                </div>

                {/* Event Details: Title, Venue & Blurb (5 cols) */}
                <div className="sm:col-span-5">
                  <Link href={`/events/${ev.id}`} className="block">
                    <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-(--fg) group-hover:text-sky transition-colors">
                      {ev.title}
                    </h3>
                  </Link>
                  <p className="mt-2 font-mono text-xs uppercase tracking-wide text-sky">
                    {ev.venue} • {ev.area}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-(--muted) leading-relaxed line-clamp-2">
                    {ev.blurb}
                  </p>
                </div>

                {/* Price & Action (2 cols) */}
                <div className="sm:col-span-2 sm:text-right flex sm:flex-col items-center sm:items-end justify-between gap-3">
                  <div>
                    <span className="font-display text-2xl font-bold text-(--fg) block">
                      {ev.price}
                    </span>
                    <span className="font-mono text-[10px] uppercase text-(--muted)">
                      {ev.status}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleBooking(ev.title)}
                    data-cursor
                    className="border border-(--fg) bg-(--fg) px-5 py-2.5 font-heading text-xs font-semibold uppercase tracking-wider text-(--bg) hover:bg-sky hover:border-sky hover:text-ink transition-colors"
                  >
                    TICKETS ↗
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Directory Link */}
        <div className="mt-12 flex items-center justify-between border-t border-(--line) pt-8 font-mono text-xs">
          <span className="uppercase text-(--muted) tracking-wider">
            ALL LISTINGS VERIFIED DAILY
          </span>
          <Link
            href="/events"
            data-cursor
            className="inline-flex items-center gap-2 border border-(--fg) bg-(--fg) px-6 py-3 font-heading text-xs font-bold uppercase tracking-wider text-(--bg) transition-colors hover:border-sky hover:bg-sky hover:text-ink"
          >
            <span>SEE ALL LISTINGS</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
