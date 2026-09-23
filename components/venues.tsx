"use client";

import { venues } from "@/data/site";
import { scrollToId } from "@/hooks/use-lenis";

export default function Venues() {
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
        <div className="flex flex-wrap items-end justify-between gap-6 border-cream/20 border-b pb-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cream/80 font-semibold">
              THE ROOMS
            </p>
            <h2 className="mt-2 font-display text-7xl sm:text-8xl lg:text-9xl font-bold tracking-tight text-cream uppercase leading-[0.85] select-none">
              VENUES<span className="text-cream">.</span>
            </h2>
          </div>

          <p className="max-w-xs font-mono text-xs uppercase tracking-[0.18em] text-cream/80 leading-relaxed">
            Basements, auditoriums, lake lawns, and courtyards.
          </p>
        </div>

        {/* Simple Editorial List (No Cards, No Image Sidecar) */}
        <div className="mt-12 divide-y divide-cream/20 border-y border-cream/20">
          {venues.map((venue) => (
            <div
              key={venue.id}
              onClick={handleVenueClick}
              role="button"
              tabIndex={0}
              data-cursor
              className="group py-6 sm:py-8 transition-colors cursor-pointer hover:bg-cream/10"
              aria-label={`${venue.name} in ${venue.neighborhood}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 px-2">
                {/* Left: Number + Large Venue Title */}
                <div className="flex items-baseline gap-4 sm:gap-8">
                  <span className="font-mono text-xs text-cream/60 font-semibold">
                    {venue.num}.
                  </span>
                  <div>
                    <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-cream group-hover:text-ink group-hover:bg-cream transition-all inline-block px-1">
                      {venue.name}
                    </h3>
                    <p className="font-mono text-xs text-cream/75 mt-1 uppercase tracking-wider">
                      {venue.neighborhood} • {venue.type}
                    </p>
                  </div>
                </div>

                {/* Right: Dates Count & Arrow */}
                <div className="flex items-center gap-4 font-mono text-xs text-cream font-bold">
                  <span>{venue.activeEvents} DATES</span>
                  <span
                    aria-hidden
                    className="text-xl transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
