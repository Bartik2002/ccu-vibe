"use client";

import Link from "next/link";
import { eventCategories } from "@/data/site";

export default function Categories() {

  return (
    <section
      id="categories"
      className="relative border-b border-ink bg-lilac text-ink py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-ink/20 pb-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink font-bold">
              DISCIPLINES
            </p>
            <h2 className="mt-2 font-display text-7xl sm:text-8xl lg:text-9xl font-bold tracking-tight text-ink uppercase leading-[0.85] select-none">
              CATEGORIES<span className="text-ink">.</span>
            </h2>
          </div>

          <p className="max-w-xs font-mono text-xs uppercase tracking-[0.18em] text-ink/80 leading-relaxed">
            Forty dates across town. Pick what you&apos;re leaving the house for.
          </p>
        </div>

        {/* Pure Typographic Navigation */}
        <div className="mt-8 divide-y divide-ink/15 border-b border-ink/15">
          {eventCategories.map((cat, idx) => (
            <Link
              key={cat.id}
              href="/events"
              data-cursor
              className="group flex items-baseline justify-between py-6 sm:py-8 transition-colors hover:bg-ink/5 px-2"
            >
              <div className="flex items-baseline gap-4 sm:gap-8">
                <span className="font-mono text-xs sm:text-sm text-ink/50 group-hover:text-ink font-semibold">
                  0{idx + 1}.
                </span>
                <h3 className="font-display text-5xl sm:text-7xl lg:text-[7vw] font-bold tracking-tight text-ink uppercase leading-none transition-transform duration-200 group-hover:translate-x-2">
                  {cat.name}
                </h3>
              </div>

              <div className="flex items-center gap-3 font-mono text-xs text-ink/75">
                <span className="font-bold text-ink">{cat.count} DATES</span>
                <span aria-hidden className="text-lg transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
