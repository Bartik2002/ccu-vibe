"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { venues } from "@/data/site";
import { scrollToId } from "@/hooks/use-lenis";

export default function Venues() {
  const [activeVenueIndex, setActiveVenueIndex] = useState(0);
  const activeVenue = venues[activeVenueIndex];

  const handleVenueClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToId("#events");
  };

  return (
    <section
      id="venues"
      className="relative border-b border-ink/20 bg-coral text-cream py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-cream/20 pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-cream font-bold">
              <span className="inline-block size-2 rounded-full bg-cream" />
              <span>INDEPENDENT INFRASTRUCTURE // LIVE ROOMS</span>
            </div>
            <h2 className="mt-2 font-display text-7xl sm:text-8xl lg:text-9xl font-bold tracking-tight text-cream uppercase leading-[0.85] select-none">
              VENUES<span className="text-cream">.</span>
            </h2>
            <p className="mt-2 font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-cream/80">
              THE VENUES THAT MATTER // NORTH TO SOUTH
            </p>
          </div>

          <p className="max-w-xs font-mono text-xs uppercase tracking-[0.18em] text-cream/80 leading-relaxed">
            The prosceniums, amphitheatres, and listening rooms defining Kolkata&apos;s live schedule.
          </p>
        </div>

        {/* Asymmetric Grid: Venue List on Left, Live Image Reveal Frame on Right */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 7 Columns: Editorial Venue List */}
          <div className="lg:col-span-7 divide-y divide-cream/20 border-y border-cream/20">
            {venues.map((venue, idx) => {
              const isSelected = activeVenueIndex === idx;
              return (
                <div
                  key={venue.id}
                  onMouseEnter={() => setActiveVenueIndex(idx)}
                  className={`group block p-5 sm:p-6 transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-cream text-ink font-bold"
                      : "bg-coral hover:bg-cream/10 text-cream"
                  }`}
                  onClick={handleVenueClick}
                  role="button"
                  tabIndex={0}
                  aria-label={`${venue.name} in ${venue.neighborhood}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span
                        className={`font-mono text-xs font-semibold ${
                          isSelected ? "text-ink/60" : "text-cream/70"
                        }`}
                      >
                        {venue.num}.
                      </span>
                      <div>
                        <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight">
                          {venue.name}
                        </h3>
                        <p
                          className={`font-mono text-xs mt-1 ${
                            isSelected ? "text-ink/80" : "text-cream/85"
                          }`}
                        >
                          {venue.neighborhood} • {venue.type}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 sm:text-right font-mono text-xs">
                      <div>
                        <span
                          className={`font-bold block ${
                            isSelected ? "text-ink font-mono" : "text-cream font-mono"
                          }`}
                        >
                          {venue.activeEvents} EVENTS
                        </span>
                        <span
                          className={`text-[10px] ${
                            isSelected ? "text-ink/70" : "text-cream/75"
                          }`}
                        >
                          {venue.capacity}
                        </span>
                      </div>
                      <span
                        aria-hidden
                        className={`text-lg transition-transform group-hover:translate-x-1 ${
                          isSelected ? "text-ink" : "text-cream"
                        }`}
                      >
                        →
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right 5 Columns: Dynamic Image Reveal Frame */}
          {activeVenue && (
            <div className="lg:col-span-5 lg:sticky lg:top-28 border border-cream/30 bg-cream text-ink p-6">
              <div className="flex items-center justify-between border-b border-ink/15 pb-3 font-mono text-xs text-ink/70">
                <span className="text-coral font-bold uppercase">
                  VENUE PLATE #{activeVenue.num}
                </span>
                <span>{activeVenue.capacity}</span>
              </div>

              {/* Reveal Image with halftone accent */}
              <div className="relative my-6 aspect-[4/3] w-full overflow-hidden border border-ink/20">
                <Image
                  src={activeVenue.photo.src}
                  alt={activeVenue.photo.alt}
                  fill
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div
                  aria-hidden
                  className="halftone absolute inset-0 opacity-15 pointer-events-none"
                />
                <div className="absolute bottom-2 left-2 flex items-center gap-1.5 border border-ink bg-coral px-2.5 py-0.5 font-mono text-[10px] font-bold text-cream">
                  <span className="relative flex size-2 items-center justify-center">
                    <span className="map-ping absolute inline-flex size-full rounded-full bg-cream opacity-75" />
                    <span className="relative inline-flex size-1 rounded-full bg-cream" />
                  </span>
                  <span>{activeVenue.neighborhood}</span>
                </div>
              </div>

              <h4 className="font-heading text-2xl font-bold text-ink">
                {activeVenue.name}
              </h4>
              <p className="mt-2 text-xs text-ink/60 font-mono uppercase tracking-wider">
                {activeVenue.type}
              </p>
              <p className="mt-4 text-sm text-ink/80 leading-relaxed font-body">
                {activeVenue.vibe}
              </p>

              <div className="mt-6 pt-4 border-t border-ink/15 flex items-center justify-between font-mono text-xs">
                <span className="text-coral font-bold">
                  {activeVenue.activeEvents} Upcoming Dates
                </span>
                <Link
                  href="/events"
                  data-cursor
                  className="font-heading font-semibold uppercase text-ink hover:text-coral transition-colors"
                >
                  View Listings ↗
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
