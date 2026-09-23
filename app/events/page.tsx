"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Marquee from "@/components/marquee";
import { allEvents } from "@/data/site";
import { toast } from "@/lib/toast";
import type { KolkataEvent } from "@/types";

const CATEGORIES = [
  "ALL",
  "MUSIC",
  "THEATRE",
  "COMEDY",
  "ART",
  "CULTURE",
  "EXPERIENCES",
] as const;

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const filtered =
    activeCategory === "ALL"
      ? allEvents
      : allEvents.filter((ev) => ev.category === activeCategory);

  const handleQuickReserve = (e: React.MouseEvent, title: string) => {
    e.preventDefault();
    e.stopPropagation();
    toast(`Ticket reserved for "${title}". See you outside.`);
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-(--bg) text-(--fg) pt-20 sm:pt-24">
        {/* Top Editorial Masthead Bar */}
        <div className="border-b border-(--line)">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-(--muted) sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <span>KOLKATA CULTURE ARCHIVE // DIRECTORY</span>
            </div>
            <span className="hidden sm:inline">ALL 144 WARDS // CURATED ACCESS</span>
            <span className="text-coral">SEASON 2026</span>
          </div>
        </div>

        {/* Directory Header */}
        <section className="border-b border-(--line) py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div>
                <div className="inline-flex items-center gap-2 border border-(--line) bg-(--card) px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-(--muted) mb-4">
                  <span className="text-coral">●</span>
                  <span>Live Calendar</span>
                </div>
                <h1 className="font-display text-7xl sm:text-9xl lg:text-[11vw] font-bold tracking-tight text-(--fg) uppercase leading-[0.85] select-none">
                  EVENTS<span className="text-coral">.</span>
                </h1>
                <p className="mt-4 font-heading text-xl sm:text-2xl text-(--muted) italic font-medium">
                  &ldquo;Things worth leaving home for.&rdquo;
                </p>
              </div>

              <div className="max-w-md border-l-2 border-coral pl-6 py-1">
                <p className="font-mono text-xs uppercase tracking-wider text-(--muted) leading-relaxed">
                  No sponsored listings. No algorithms. Direct admission from proscenium stages at Rabindra Sadan to midnight sets on Park Street.
                </p>
                <div className="mt-4 flex items-center gap-4 font-mono text-[11px] uppercase text-coral font-bold tracking-widest">
                  <span>SHOWING {filtered.length} DATES</span>
                  <span>•</span>
                  <span>DIRECT ADMISSION</span>
                </div>
              </div>
            </div>

            {/* Typography-Based Category Filter Bar */}
            <div className="mt-14 pt-8 border-t border-(--line)">
              <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-(--muted)">
                [ GENRE ]
              </div>
              <div className="flex flex-wrap items-baseline gap-x-6 sm:gap-x-10 gap-y-3 font-heading text-lg sm:text-2xl md:text-3xl font-bold tracking-tight uppercase">
                {CATEGORIES.map((cat, i) => {
                  const isSelected = activeCategory === cat;
                  const count =
                    cat === "ALL"
                      ? allEvents.length
                      : allEvents.filter((e) => e.category === cat).length;

                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setActiveCategory(cat)}
                      data-cursor
                      className={`group relative inline-flex items-baseline gap-2 transition-colors ${
                        isSelected
                          ? "text-coral"
                          : "text-(--muted) hover:text-(--fg)"
                      }`}
                    >
                      <span className="font-mono text-[10px] sm:text-xs tracking-widest text-(--muted) group-hover:text-(--fg)">
                        0{i + 1}
                      </span>
                      <span className="relative">
                        {cat}
                        {isSelected && (
                          <span className="absolute -bottom-1 left-0 h-[2.5px] w-full bg-coral animate-in fade-in duration-200" />
                        )}
                      </span>
                      <span className="font-mono text-[10px] tracking-normal opacity-60">
                        [{count}]
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Varied Editorial Layout Directory */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {filtered.length === 0 ? (
              <div className="border border-(--line) bg-(--card) p-12 text-center">
                <p className="font-mono text-sm uppercase tracking-widest text-(--muted)">
                  No events found in this category.
                </p>
                <button
                  type="button"
                  onClick={() => setActiveCategory("ALL")}
                  className="mt-4 border border-(--fg) bg-(--fg) px-6 py-2.5 font-heading text-xs font-bold uppercase tracking-wider text-(--bg) hover:bg-coral hover:border-coral hover:text-ink"
                >
                  Reset To All
                </button>
              </div>
            ) : (
              <div className="space-y-12 sm:space-y-16">
                {/* 1. LEAD BROADSHEET ITEM (First Item) */}
                {filtered[0] && (
                  <LeadBroadsheetItem
                    event={filtered[0]}
                    onReserve={handleQuickReserve}
                  />
                )}

                {/* 2. PAIRED ASYMMETRIC POSTERS (Items 1 & 2) */}
                {filtered.slice(1, 3).length > 0 && (
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-stretch">
                    {filtered[1] && (
                      <div className="lg:col-span-7">
                        <TallPosterItem
                          event={filtered[1]}
                          onReserve={handleQuickReserve}
                        />
                      </div>
                    )}
                    {filtered[2] && (
                      <div className="lg:col-span-5">
                        <InvertedInkItem
                          event={filtered[2]}
                          onReserve={handleQuickReserve}
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* 3. EDITORIAL MAGAZINE DOCKET (Remaining Items) */}
                {filtered.slice(3).length > 0 && (
                  <div className="border-t border-(--line) pt-12">
                    <div className="mb-8 flex items-center justify-between font-mono text-xs uppercase tracking-widest text-(--muted)">
                      <span>CIRCUIT DOCKET // FURTHER DISPATCHES</span>
                      <span>INSPECTION LIST</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {filtered.slice(3).map((ev, index) => (
                        <MagazineDocketItem
                          key={ev.id}
                          event={ev}
                          index={index + 4}
                          onReserve={handleQuickReserve}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Editorial Ticker */}
        <Marquee theme="sun" speed="32s" />
      </main>

      <Footer />
    </>
  );
}

// ----------------------------------------------------------------------
// Varied Layout 1: Lead Broadsheet Split
// ----------------------------------------------------------------------
function LeadBroadsheetItem({
  event,
  onReserve,
}: {
  event: KolkataEvent;
  onReserve: (e: React.MouseEvent, title: string) => void;
}) {
  return (
    <article className="border-2 border-(--line) bg-(--card) overflow-hidden transition-all duration-300 hover:border-coral">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Large Image Block (7 cols) */}
        <div className="relative min-h-[380px] lg:col-span-7 lg:min-h-[520px] overflow-hidden border-b lg:border-b-0 lg:border-r border-(--line)">
          <Image
            src={event.photo.src}
            alt={event.photo.alt}
            fill
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
          <div
            aria-hidden
            className="halftone absolute inset-0 opacity-15 pointer-events-none"
          />

          {/* Top Badges */}
          <div className="absolute top-4 left-4 flex items-center gap-2 border border-ink bg-sun px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-ink">
            <span>{event.category}</span>
            <span>•</span>
            <span>FLAGSHIP</span>
          </div>

          <div className="absolute top-4 right-4 border border-cream/30 bg-ink/90 px-3 py-1 font-mono text-xs uppercase tracking-wider text-sun font-bold">
            ● {event.status}
          </div>

          {/* Location Corner Badge */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between border border-cream/20 bg-ink/95 p-3.5 text-cream">
            <span className="font-heading text-sm font-semibold tracking-wide">
              {event.venue}
            </span>
            <span className="font-mono text-xs text-cream/70 uppercase">
              {event.area}
            </span>
          </div>
        </div>

        {/* Typographic Dossier (5 cols) */}
        <div className="flex flex-col justify-between p-6 sm:p-10 lg:col-span-5 bg-(--card)">
          <div>
            <div className="flex items-center justify-between border-b border-(--line) pb-3 font-mono text-xs uppercase tracking-widest text-(--muted)">
              <span className="font-bold text-coral">PLATE {event.num}</span>
              <span>SEASON 2026</span>
            </div>

            <Link href={`/events/${event.id}`} className="group block mt-6">
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-(--fg) uppercase leading-[0.9] group-hover:text-coral transition-colors">
                {event.title}
              </h2>
            </Link>

            <p className="mt-6 font-body text-sm sm:text-base text-(--muted) leading-relaxed">
              {event.blurb}
            </p>

            {/* Logistics Grid */}
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-b border-(--line) py-4 font-mono text-xs uppercase">
              <div>
                <span className="text-[10px] text-(--muted) block">DATE & TIME</span>
                <span className="font-heading font-semibold text-(--fg) block mt-0.5">
                  {event.date}
                </span>
                <span className="text-[10px] text-(--muted)">{event.time}</span>
              </div>
              <div>
                <span className="text-[10px] text-(--muted) block">PRICE PASS</span>
                <span className="font-display text-2xl font-bold text-coral block mt-0.5">
                  {event.price}
                </span>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-8 flex flex-wrap items-center gap-3 pt-4">
            <Link
              href={`/events/${event.id}`}
              data-cursor
              className="inline-flex items-center gap-2 border border-(--fg) bg-(--fg) px-6 py-3 font-heading text-xs font-bold uppercase tracking-wider text-(--bg) transition-colors hover:bg-coral hover:border-coral hover:text-ink"
            >
              <span>VIEW EVENT DISPATCH</span>
              <span>→</span>
            </Link>

            <button
              type="button"
              onClick={(e) => onReserve(e, event.title)}
              data-cursor
              className="inline-flex items-center gap-2 border border-(--line) bg-transparent px-5 py-3 font-heading text-xs font-bold uppercase tracking-wider text-(--fg) transition-colors hover:border-(--fg)"
            >
              <span>GET TICKETS</span>
              <span className="text-coral">↗</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

// ----------------------------------------------------------------------
// Varied Layout 2: Tall Editorial Poster
// ----------------------------------------------------------------------
function TallPosterItem({
  event,
  onReserve,
}: {
  event: KolkataEvent;
  onReserve: (e: React.MouseEvent, title: string) => void;
}) {
  return (
    <article className="h-full border-2 border-(--line) bg-(--card) flex flex-col justify-between transition-all duration-300 hover:border-coral">
      <div>
        {/* Visual Frame */}
        <div className="relative aspect-[16/10] sm:aspect-[16/11] w-full overflow-hidden border-b border-(--line)">
          <Image
            src={event.photo.src}
            alt={event.photo.alt}
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
          <div
            aria-hidden
            className="halftone absolute inset-0 opacity-15 pointer-events-none"
          />

          <div className="absolute top-4 left-4 border border-ink bg-cream px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-ink">
            {event.category}
          </div>

          <div className="absolute bottom-4 right-4 border border-ink bg-coral px-3 py-1 font-mono text-xs font-bold uppercase text-cream">
            {event.price}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between font-mono text-xs text-(--muted) uppercase tracking-widest pb-3 border-b border-(--line)">
            <span>REF. {event.num}</span>
            <span>{event.status}</span>
          </div>

          <Link href={`/events/${event.id}`} className="group block mt-4">
            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-(--fg) uppercase leading-none group-hover:text-coral transition-colors">
              {event.title}
            </h3>
          </Link>

          <p className="mt-4 font-body text-sm text-(--muted) leading-relaxed">
            {event.blurb}
          </p>

          <div className="mt-6 flex flex-col gap-1 font-mono text-xs text-(--muted) uppercase pt-4 border-t border-(--line)">
            <div className="flex justify-between">
              <span>VENUE</span>
              <span className="font-semibold text-(--fg)">{event.venue}</span>
            </div>
            <div className="flex justify-between">
              <span>DATE</span>
              <span className="text-(--fg)">{event.dayOfWeek}, {event.date}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8 pt-0 flex items-center justify-between border-t border-(--line) mt-4">
        <Link
          href={`/events/${event.id}`}
          data-cursor
          className="font-heading text-xs font-bold uppercase tracking-wider text-(--fg) hover:text-coral"
        >
          DETAILS →
        </Link>
        <button
          type="button"
          onClick={(e) => onReserve(e, event.title)}
          data-cursor
          className="font-mono text-xs text-coral font-bold hover:underline"
        >
          TICKETS ↗
        </button>
      </div>
    </article>
  );
}

// ----------------------------------------------------------------------
// Varied Layout 3: Inverted Ink Block
// ----------------------------------------------------------------------
function InvertedInkItem({
  event,
  onReserve,
}: {
  event: KolkataEvent;
  onReserve: (e: React.MouseEvent, title: string) => void;
}) {
  return (
    <article className="h-full border-2 border-ink bg-ink text-cream p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-sun">
      <div>
        <div className="flex items-center justify-between border-b border-cream/20 pb-3 font-mono text-xs uppercase tracking-widest text-cream/70">
          <span className="text-sun font-bold">REF. {event.num}</span>
          <span>{event.category}</span>
        </div>

        <Link href={`/events/${event.id}`} className="group block mt-6">
          <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-cream uppercase leading-[0.9] group-hover:text-sun transition-colors">
            {event.title}
          </h3>
        </Link>

        {/* Letterbox Photo Preview */}
        <div className="relative my-6 aspect-[16/8] w-full overflow-hidden border border-cream/20">
          <Image
            src={event.photo.src}
            alt={event.photo.alt}
            fill
            sizes="(min-width: 1024px) 38vw, 100vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
          <div
            aria-hidden
            className="halftone absolute inset-0 opacity-20 pointer-events-none"
          />
          <div className="absolute top-2 left-2 border border-ink bg-sun px-2 py-0.5 font-mono text-[9px] font-bold text-ink uppercase">
            {event.status}
          </div>
        </div>

        <p className="font-body text-sm text-cream/80 leading-relaxed">
          {event.blurb}
        </p>

        <div className="mt-6 border-t border-cream/20 pt-4 font-mono text-xs uppercase text-cream/70 space-y-1">
          <div className="flex justify-between">
            <span>SCHEDULE</span>
            <span className="text-cream">{event.date} • {event.time}</span>
          </div>
          <div className="flex justify-between">
            <span>AREA</span>
            <span className="text-cream">{event.area}</span>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-cream/20 flex items-center justify-between">
        <span className="font-display text-2xl text-sun font-bold">
          {event.price}
        </span>
        <Link
          href={`/events/${event.id}`}
          data-cursor
          className="border border-cream bg-cream px-4 py-2 font-heading text-xs font-bold uppercase text-ink hover:bg-sun hover:border-sun"
        >
          DETAILS →
        </Link>
      </div>
    </article>
  );
}

// ----------------------------------------------------------------------
// Varied Layout 4: Magazine Docket Row
// ----------------------------------------------------------------------
function MagazineDocketItem({
  event,
  index,
  onReserve,
}: {
  event: KolkataEvent;
  index: number;
  onReserve: (e: React.MouseEvent, title: string) => void;
}) {
  return (
    <article className="border-2 border-(--line) bg-(--card) p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-coral">
      <div>
        <div className="flex items-center justify-between font-mono text-xs text-(--muted) uppercase tracking-widest pb-3 border-b border-(--line)">
          <span className="font-bold text-(--fg)">0{index} // {event.category}</span>
          <span className="text-coral font-bold">{event.price}</span>
        </div>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
          <div className="sm:col-span-8">
            <Link href={`/events/${event.id}`} className="group block">
              <h4 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-(--fg) uppercase leading-none group-hover:text-coral transition-colors">
                {event.title}
              </h4>
            </Link>
            <p className="mt-3 font-body text-xs sm:text-sm text-(--muted) line-clamp-2">
              {event.blurb}
            </p>
          </div>

          <div className="sm:col-span-4 relative aspect-[4/3] w-full overflow-hidden border border-(--line)">
            <Image
              src={event.photo.src}
              alt={event.photo.alt}
              fill
              sizes="(min-width: 640px) 25vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-5 pt-3 border-t border-(--line) font-mono text-[11px] uppercase text-(--muted) flex flex-wrap justify-between gap-2">
          <span>{event.venue}</span>
          <span className="text-(--fg) font-semibold">{event.date} • {event.time}</span>
        </div>
      </div>

      <div className="mt-6 pt-3 border-t border-(--line) flex items-center justify-between">
        <Link
          href={`/events/${event.id}`}
          data-cursor
          className="font-heading text-xs font-bold uppercase tracking-wider text-coral hover:underline"
        >
          DETAILS →
        </Link>
        <button
          type="button"
          onClick={(e) => onReserve(e, event.title)}
          data-cursor
          className="font-mono text-[10px] uppercase tracking-wider text-(--muted) hover:text-(--fg)"
        >
          TICKETS ↗
        </button>
      </div>
    </article>
  );
}
