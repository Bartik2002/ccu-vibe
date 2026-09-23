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
          <span className="text-coral">FRIDAY LOOKS BUSY</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Primary Statement Block */}
        <div className="pt-12 sm:pt-16 pb-10 border-b border-(--line)">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-display text-[19vw] sm:text-[14vw] lg:text-[10vw] font-bold tracking-tight text-(--fg) leading-[0.8] select-none">
                KOLKATA
                <br />
                <span className="text-coral">HAS</span> PLANS
                <span className="text-coral">.</span>
              </h1>
            </div>

            <div className="lg:col-span-4 lg:pb-2">
              <p className="font-heading text-lg sm:text-xl text-(--muted) leading-relaxed">
                Rabindra Sadan at six. Park Street after eight. Somewhere between theatre and chaos.
              </p>
            </div>
          </div>
        </div>

        {/* Action & Dominant Visual Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 py-10 lg:py-16 gap-10 lg:gap-16 items-center">
          {/* Left Column (5 cols): Single Focused Action */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-(--muted) mb-6">
              KOLKATA&apos;S LIVE CULTURAL CALENDAR
            </p>

            <div>
              <a
                href="#events"
                onClick={(e) => go(e, "#events")}
                data-cursor
                className="group inline-flex items-center gap-3 border border-(--fg) bg-(--fg) px-8 py-4 font-heading text-xs sm:text-sm font-semibold uppercase tracking-wider text-(--bg) transition-colors hover:border-coral hover:bg-coral hover:text-ink"
              >
                <span>WHAT&apos;S ON TONIGHT</span>
                <span
                  aria-hidden
                  className="text-coral transition-transform duration-200 group-hover:translate-x-1 group-hover:text-ink"
                >
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Right Column (7 cols): Dominant Visual Plate */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] w-full overflow-hidden border border-(--line) bg-(--card)">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Christmas_Lights_Park_Street%2C_Kolkata_5.jpg/1280px-Christmas_Lights_Park_Street%2C_Kolkata_5.jpg"
                alt="Park Street illuminated at night with evening crowds and classic street lamps"
                fill
                priority
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="mt-3 flex items-center justify-between font-mono text-xs uppercase tracking-widest text-(--muted)">
              <span>PARK STREET AFTER 8</span>
              <span className="text-coral">CALENDAR DISPATCH</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}