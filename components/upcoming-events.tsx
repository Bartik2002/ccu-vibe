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
    toast(`✦ Pass reserved for "${title}". Confirmation sent to Dreamlist.`);
  };

  // Slice into editorial layouts: lead broadsheet item, paired blocks, and docket rows
  const leadEvent = filtered[0];
  const secondaryEvents = filtered.slice(1, 3);
  const remainingEvents = filtered.slice(3);

  return (
    <section
      id="events"
      className="relative border-b border-(--line) bg-(--bg) text-(--fg) py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-(--line) pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-sky font-bold">
              <span className="inline-block size-2 rounded-full bg-sky" />
              <span>THIS WEEK // DIRECT DISPATCH</span>
            </div>
            <h2 className="mt-2 font-display text-7xl sm:text-8xl lg:text-9xl font-bold tracking-tight text-(--fg) uppercase leading-[0.85] select-none">
              WHAT&apos;S HAPPENING<span className="text-sky">.</span>
            </h2>
            <p className="mt-2 font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-(--muted)">
              AROUND THE CITY // NORTH TO SOUTH // ALL 144 WARDS
            </p>
          </div>

          <p className="max-w-md font-mono text-xs uppercase tracking-[0.18em] text-(--muted) leading-relaxed">
            Every stage curated. From Rabindra Sadan prosceniums and College Street addas to
            Nazrul Mancha decibels and Hooghly riverfront sessions.
          </p>
        </div>

        {/* Category Filter Bar */}
        <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-(--line) pb-6">
          <span className="mr-2 font-mono text-xs uppercase tracking-widest text-(--muted)">
            Filter:
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

        {/* Varied Editorial Content Layout (Not standard cards) */}
        <div className="mt-12 space-y-12">
          {/* 1. Lead Broadsheet Row: Large Split Editorial Layout */}
          {leadEvent && (
            <div className="relative border border-(--line) border-t-4 border-t-sky bg-(--card) p-6 sm:p-8 lg:p-10">
              {/* Floating Entry Marker */}
              <div
                className="absolute -top-3.5 right-6 hidden sm:block border border-ink bg-sky px-3 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-ink animate-float-slow select-none"
                style={{ "--r": "-1.5deg" } as React.CSSProperties}
              >
                DISPATCH // NO. {leadEvent.num}
              </div>

              <div className="flex items-center justify-between border-b border-(--line) pb-3 font-mono text-xs text-(--muted)">
                <span className="text-sky font-bold">
                  ENTRY #{leadEvent.num} • {leadEvent.category}
                </span>
                <span>STATUS: {leadEvent.status}</span>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
                {/* Left Date / Big Number */}
                <div className="lg:col-span-3 flex lg:flex-col justify-between border-b lg:border-b-0 lg:border-r border-(--line) pb-6 lg:pb-0 lg:pr-8">
                  <div>
                    <span className="font-display text-6xl sm:text-7xl font-bold text-(--fg) leading-none block">
                      {leadEvent.date.split(", ")[1]?.split(" ")[0] || "08"}
                    </span>
                    <span className="bg-sky text-ink px-2 py-0.5 font-mono text-xs uppercase tracking-widest font-bold block mt-1 w-max">
                      {leadEvent.date.split(", ")[1]?.split(" ")[1] || "OCT"} •{" "}
                      {leadEvent.dayOfWeek}
                    </span>
                  </div>
                  <div className="mt-4 font-mono text-xs text-(--muted)">
                    <p>{leadEvent.time}</p>
                    <p className="font-bold text-(--fg) mt-1">{leadEvent.price}</p>
                  </div>
                </div>

                {/* Center Content */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <Link href={`/events/${leadEvent.id}`} className="group block">
                    <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-(--fg) leading-tight group-hover:text-sky transition-colors">
                      {leadEvent.title}
                    </h3>
                  </Link>
                  <div className="mt-3 flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-sky">
                    <span className="relative flex size-2 items-center justify-center">
                      <span className="map-ping absolute inline-flex size-full rounded-full bg-sky opacity-75" />
                      <span className="relative inline-flex size-1.5 rounded-full bg-sky" />
                    </span>
                    <span>{leadEvent.venue} ({leadEvent.area})</span>
                  </div>
                  <p className="mt-4 text-sm text-(--muted) leading-relaxed">
                    {leadEvent.blurb}
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => handleBooking(leadEvent.title)}
                      data-cursor
                      className="border border-(--fg) bg-(--fg) px-5 py-2.5 font-heading text-xs font-semibold uppercase tracking-wider text-(--bg) hover:bg-sky hover:border-sky hover:text-ink transition-colors"
                    >
                      Book Ticket ↗
                    </button>
                    <Link
                      href={`/events/${leadEvent.id}`}
                      data-cursor
                      className="font-mono text-xs text-(--muted) hover:text-(--fg) transition-colors"
                    >
                      Full Details →
                    </Link>
                  </div>
                </div>

                {/* Right Image Frame */}
                <div className="relative aspect-[16/10] lg:col-span-4 overflow-hidden border border-(--line) bg-ink/5">
                  <Image
                    src={leadEvent.photo.src}
                    alt={leadEvent.photo.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute bottom-2 right-2 border border-ink bg-sky px-2 py-0.5 font-mono text-[10px] font-bold text-ink">
                    {leadEvent.category}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. Asymmetric Dual Blocks: Tall Feature + Editorial Docket */}
          {secondaryEvents.length > 0 && (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              {/* Left Tall Card (7 cols) */}
              {secondaryEvents[0] && (
                <div className="flex flex-col justify-between border border-(--line) bg-(--card) p-6 sm:p-8 lg:col-span-7">
                  <div>
                    <div className="flex items-center justify-between border-b border-(--line) pb-3 font-mono text-xs text-(--muted)">
                      <span>ENTRY #{secondaryEvents[0].num}</span>
                      <span className="text-sky font-semibold uppercase">
                        {secondaryEvents[0].category}
                      </span>
                    </div>

                    <div className="relative my-6 aspect-[16/9] overflow-hidden border border-(--line)">
                      <Image
                        src={secondaryEvents[0].photo.src}
                        alt={secondaryEvents[0].photo.alt}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>

                    <Link href={`/events/${secondaryEvents[0].id}`} className="group block">
                      <h3 className="font-heading text-2xl sm:text-3xl font-bold text-(--fg) group-hover:text-sky transition-colors">
                        {secondaryEvents[0].title}
                      </h3>
                    </Link>
                    <p className="mt-2 font-mono text-xs text-(--muted)">
                      📍 {secondaryEvents[0].venue} • {secondaryEvents[0].area}
                    </p>
                    <p className="mt-3 text-sm text-(--muted) leading-relaxed">
                      {secondaryEvents[0].blurb}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-(--line) pt-4">
                    <div>
                      <span className="font-mono text-xs text-sky font-bold block">
                        {secondaryEvents[0].date} • {secondaryEvents[0].time}
                      </span>
                      <span className="font-mono text-xs text-(--fg) font-semibold">
                        {secondaryEvents[0].price}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleBooking(secondaryEvents[0].title)}
                      data-cursor
                      className="border border-(--fg) bg-(--fg) px-4 py-2 font-heading text-xs font-semibold uppercase tracking-wider text-(--bg) hover:bg-sky hover:border-sky hover:text-ink transition-colors"
                    >
                      Reserve ↗
                    </button>
                  </div>
                </div>
              )}

              {/* Right Stacked Column (5 cols): Bold Sky Color Block */}
              {secondaryEvents[1] && (
                <div className="flex flex-col justify-between border-2 border-ink bg-sky text-ink p-6 sm:p-8 lg:col-span-5">
                  <div>
                    <div className="flex items-center justify-between border-b border-ink/20 pb-3 font-mono text-xs text-ink/70">
                      <span className="font-bold">ENTRY #{secondaryEvents[1].num}</span>
                      <span className="font-semibold">{secondaryEvents[1].category}</span>
                    </div>

                    <div className="mt-8">
                      <span className="font-display text-5xl font-bold block leading-none text-ink">
                        {secondaryEvents[1].date}
                      </span>
                      <Link href={`/events/${secondaryEvents[1].id}`} className="group block mt-4">
                        <h3 className="font-heading text-2xl font-bold text-ink group-hover:underline">
                          {secondaryEvents[1].title}
                        </h3>
                      </Link>
                      <p className="mt-2 font-mono text-xs text-ink/80 font-medium">
                        📍 {secondaryEvents[1].venue}
                      </p>
                      <p className="mt-4 text-xs text-ink/80 leading-relaxed font-body">
                        {secondaryEvents[1].blurb}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-ink/20 pt-4 flex items-center justify-between">
                    <span className="font-mono text-xs text-ink/90 font-semibold">
                      {secondaryEvents[1].time} • {secondaryEvents[1].price}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleBooking(secondaryEvents[1].title)}
                      data-cursor
                      className="border-2 border-ink bg-ink px-4 py-2 font-heading text-xs font-semibold uppercase tracking-wider text-sky hover:bg-sky hover:text-ink transition-colors"
                    >
                      Book ↗
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 3. Editorial Ledger Table for Remaining Entries */}
          {remainingEvents.length > 0 && (
            <div className="border border-(--line) bg-(--card)">
              <div className="border-b border-(--line) px-6 py-4 font-mono text-xs uppercase tracking-widest text-(--muted) flex items-center justify-between">
                <span>Calendar Docket // Continued</span>
                <span>Direct Access</span>
              </div>
              <div className="divide-y divide-(--line)">
                {remainingEvents.map((ev) => (
                  <div
                    key={ev.id}
                    className="group grid grid-cols-1 items-center gap-4 p-5 sm:grid-cols-12 sm:gap-6 hover:bg-(--bg) transition-colors"
                  >
                    <div className="font-mono text-xs text-sky sm:col-span-2">
                      <span className="font-bold block">{ev.date}</span>
                      <span className="text-[10px] text-(--muted)">
                        {ev.dayOfWeek}
                      </span>
                    </div>

                    <div className="sm:col-span-6">
                      <div className="flex items-center gap-2">
                        <span className="border border-ink bg-sky px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase text-ink">
                          {ev.category}
                        </span>
                        <span className="font-mono text-xs text-(--muted)">
                          {ev.time}
                        </span>
                      </div>
                      <Link href={`/events/${ev.id}`} className="group block">
                        <h4 className="mt-1 font-heading text-lg font-bold text-(--fg) group-hover:text-sky transition-colors">
                          {ev.title}
                        </h4>
                      </Link>
                      <p className="font-mono text-xs text-(--muted)">
                        📍 {ev.venue} • {ev.area}
                      </p>
                    </div>

                    <div className="sm:col-span-2 font-mono text-xs text-(--muted) sm:text-right">
                      <span className="font-semibold text-(--fg) block">
                        {ev.price}
                      </span>
                      <span className="text-[10px] text-sky font-semibold">{ev.status}</span>
                    </div>

                    <div className="sm:col-span-2 sm:text-right">
                      <button
                        type="button"
                        onClick={() => handleBooking(ev.title)}
                        data-cursor
                        className="w-full sm:w-auto border border-(--line) px-4 py-2 font-heading text-xs font-semibold uppercase tracking-wider text-(--fg) hover:border-sky hover:bg-sky hover:text-ink transition-colors"
                      >
                        Passes ↗
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Full Directory CTA */}
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-(--line) pt-8 font-mono text-xs">
            <span className="uppercase text-(--muted) tracking-wider">
              ALL 144 WARDS CURATED // DIRECT DISPATCH
            </span>
            <Link
              href="/events"
              data-cursor
              className="inline-flex items-center gap-2 border border-(--fg) bg-(--fg) px-6 py-3 font-heading text-xs font-bold uppercase tracking-wider text-(--bg) transition-colors hover:border-sky hover:bg-sky hover:text-ink"
            >
              <span>VIEW COMPLETE DIRECTORY (07 EVENTS)</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
