"use client";

import Image from "next/image";
import { scrollToId } from "@/hooks/use-lenis";

export default function Hero() {
  const go = (e: React.MouseEvent, hash: string) => {
    e.preventDefault();
    scrollToId(hash);
  };

  return (
    <section
      id="top"
      className="relative border-b border-(--line) bg-(--bg) text-(--fg) pt-20 sm:pt-24"
    >
      {/* Editorial Top Masthead Bar */}
      <div className="border-b border-(--line)">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-(--muted) sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span>TONIGHT IN KOLKATA // DISPATCH NO. 01</span>
          </div>
          <span className="hidden sm:inline">NORTH TO SOUTH // ALL 144 WARDS</span>
          <span className="text-coral">WHAT&apos;S HAPPENING</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Asymmetric Grid */}
        <div className="grid grid-cols-1 border-b border-(--line) lg:grid-cols-12">
          {/* Left Column (7 cols): Giant Editorial Statement */}
          <div className="flex flex-col justify-between py-10 sm:py-14 lg:col-span-7 lg:border-r lg:border-(--line) lg:pr-10 lg:py-16">
            <div>
              {/* Category pill label */}
              <div className="mb-6 inline-flex items-center gap-2 border border-(--line) bg-(--card) px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-(--muted)">
                <span>The Living Cultural Calendar</span>
              </div>

              {/* Oversized Headline */}
              <h1 className="font-display text-[19vw] sm:text-[15vw] lg:text-[9.5vw] font-bold tracking-tight text-(--fg) leading-[0.8] select-none">
                KOLKATA
                <br />
                <span className="text-coral">IS</span> HAPPENING
                <span className="text-coral">!!</span>
              </h1>

              {/* Editorial Subtitle */}
              <p className="mt-8 max-w-xl font-heading text-lg sm:text-xl text-(--muted) leading-relaxed">
                Not a tourist brochure. An unfiltered cultural index of proscenium
                drama at Rabindra Sadan, live jazz on Park Street, midnight boi-para
                debates, and sound systems by the Hooghly.
              </p>
            </div>

            {/* CTAs and Metadata */}
            <div className="mt-12 flex flex-wrap items-center gap-4 pt-6 border-t border-(--line)">
              <a
                href="#events"
                onClick={(e) => go(e, "#events")}
                data-cursor
                className="group inline-flex items-center gap-3 border border-(--fg) bg-(--fg) px-7 py-3.5 font-heading text-sm font-semibold uppercase tracking-wider text-(--bg) transition-colors hover:border-coral hover:bg-coral hover:text-ink"
              >
                <span>EXPLORE EVENTS</span>
                <span
                  aria-hidden
                  className="text-coral transition-transform duration-200 group-hover:translate-x-1 group-hover:text-ink"
                >
                  →
                </span>
              </a>

              <a
                href="#venues"
                onClick={(e) => go(e, "#venues")}
                data-cursor
                className="inline-flex items-center gap-2 border border-(--line) bg-(--card) px-6 py-3.5 font-heading text-sm font-semibold uppercase tracking-wider text-(--fg) transition-colors hover:border-(--fg)"
              >
                <span>VIEW VENUES</span>
                <span aria-hidden className="text-xs text-(--muted)">
                  ↗
                </span>
              </a>

              <div className="ml-auto hidden font-mono text-xs text-(--muted) xl:block">
                <span>UPDATED DAILY • CCU.VIBE</span>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Strong Kolkata Imagery & Editorial Badges */}
          <div className="flex flex-col justify-between py-10 lg:col-span-5 lg:pl-10 lg:py-16">
            {/* Top metadata tags */}
            <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-(--muted) pb-4 border-b border-(--line)">
              <span>PLATE 01 // CITISCAPE</span>
              <span className="text-coral">22°34&apos;N 88°22&apos;E</span>
            </div>

            {/* Visual Frame: Strong Kolkata Image with graphic border */}
            <div className="relative my-8 aspect-[4/5] w-full overflow-hidden border border-(--line) bg-(--card)">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Christmas_Lights_Park_Street%2C_Kolkata_5.jpg/1280px-Christmas_Lights_Park_Street%2C_Kolkata_5.jpg"
                alt="Park Street illuminated at night with evening crowds and classic street lamps"
                fill
                priority
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Halftone texture overlay accent */}
              <div
                aria-hidden
                className="halftone absolute inset-0 opacity-15 pointer-events-none"
              />

              {/* Corner Stamp with Map Ping Landmark Dot */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 border border-ink bg-coral px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-cream">
                <span>AFTER HOURS // 17 PARK STREET</span>
              </div>

              {/* Floating circular stamp badge with single slow-spin seal ring */}
              <div
                className="absolute top-4 right-4 size-16 rounded-full border border-cream/30 bg-ink/90 p-2 text-center text-cream flex flex-col items-center justify-center animate-float-slow select-none"
                style={{ "--r": "3deg" } as React.CSSProperties}
              >
                <svg
                  aria-hidden
                  viewBox="0 0 64 64"
                  className="absolute inset-0 size-full animate-spin-slow pointer-events-none text-coral/40"
                >
                  <circle
                    cx="32"
                    cy="32"
                    r="29"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                </svg>
                <span className="font-display text-sm tracking-wider text-coral leading-none relative z-10">
                  CCU
                </span>
                <span className="font-mono text-[8px] uppercase tracking-widest text-cream/70 relative z-10">
                  100% LIVE
                </span>
              </div>
            </div>

            {/* Bottom Caption & Mini Grid */}
            <div className="grid grid-cols-2 gap-4 border-t border-(--line) pt-4 font-mono text-xs uppercase">
              <div>
                <span className="text-[10px] text-(--muted) block">CURATION</span>
                <span className="font-heading font-semibold text-(--fg)">
                  INDEPENDENT
                </span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-(--muted) block">SCENE</span>
                <span className="font-heading font-semibold text-coral">
                  ALL 144 WARDS
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Bottom Editorial Metrics Row */}
        <div className="grid grid-cols-2 divide-x divide-(--line) py-6 font-mono text-xs uppercase tracking-wider text-(--muted) sm:grid-cols-4">
          <div className="px-3 py-2 sm:px-4">
            <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-coral leading-none block">
              42+ DATES
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-(--muted) mt-1.5 block">
              CURRENT SEASON
            </span>
          </div>
          <div className="px-3 py-2 sm:px-4">
            <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-coral leading-none block">
              18 VENUES
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-(--muted) mt-1.5 block">
              NORTH TO SOUTH
            </span>
          </div>
          <div className="px-3 py-2 sm:px-4">
            <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-coral leading-none block">
              06 FORMS
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-(--muted) mt-1.5 block">
              MUSIC • DRAMA • ART
            </span>
          </div>
          <div className="px-3 py-2 sm:px-4">
            <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-coral leading-none block">
              ZERO BOTS
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-(--muted) mt-1.5 block">
              DIRECT ACCESS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}