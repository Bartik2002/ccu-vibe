"use client";

import Link from "next/link";
import { useState } from "react";
import { eventCategories } from "@/data/site";

export default function Categories() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="categories"
      className="relative border-b border-ink bg-lilac text-ink py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-ink/20 pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-ink font-bold">
              <span className="inline-block size-2 rounded-full bg-ink" />
              <span>DISCIPLINES // CATEGORY EXPLORER</span>
            </div>
            <h2 className="mt-2 font-display text-7xl sm:text-8xl lg:text-9xl font-bold tracking-tight text-ink uppercase leading-[0.85] select-none">
              WHAT&apos;S ON<span className="text-ink">.</span>
            </h2>
            <p className="mt-2 font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-ink/80">
              EXPLORE BY SOUND, STAGE &amp; FORM // 06 CIRCUITS
            </p>
          </div>

          <p className="max-w-xs font-mono text-xs uppercase tracking-[0.18em] text-ink/80 leading-relaxed">
            Six curated circuits across Kolkata. Hover to reveal active counts and venue circuits.
          </p>
        </div>

        {/* Typography-Driven Category Rows */}
        <div className="mt-8 divide-y divide-ink/20 border-y border-ink/20">
          {eventCategories.map((cat, idx) => {
            const isHovered = hoveredId === cat.id;
            return (
              <Link
                key={cat.id}
                href="/events"
                onMouseEnter={() => setHoveredId(cat.id)}
                onMouseLeave={() => setHoveredId(null)}
                data-cursor
                className="group relative block py-8 sm:py-10 transition-colors duration-200 hover:bg-ink hover:text-lilac"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 px-2 sm:px-4">
                  {/* Category Name & Index */}
                  <div className="flex items-baseline gap-4 sm:gap-8">
                    <span className="font-mono text-xs sm:text-sm text-ink/60 group-hover:text-lilac/70 font-semibold">
                      0{idx + 1}
                    </span>
                    <h3 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-ink group-hover:text-lilac transition-colors leading-none">
                      {cat.name}
                    </h3>
                  </div>

                  {/* Metadata and Hover Reveal Details */}
                  <div className="flex items-center sm:items-end justify-between sm:justify-end gap-6 sm:gap-10 sm:text-right font-mono text-xs">
                    <div>
                      <p className="font-bold text-ink group-hover:text-lilac text-sm sm:text-base">
                        {cat.count} ACTIVE DATES
                      </p>
                      <p className="text-[11px] text-ink/75 group-hover:text-lilac/80 mt-0.5 max-w-xs hidden md:block">
                        {cat.tagline}
                      </p>
                      <p className="text-[10px] text-ink/80 group-hover:text-lilac font-medium mt-1 uppercase">
                        CIRCUIT: {cat.highlightVenue}
                      </p>
                    </div>

                    <span
                      aria-hidden
                      className={`size-10 sm:size-12 grid place-items-center border transition-all duration-300 font-display text-xl sm:text-2xl ${
                        isHovered
                          ? "border-lilac bg-lilac text-ink translate-x-1"
                          : "border-ink bg-ink text-lilac"
                      }`}
                    >
                      ↗
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
