"use client";

import { scrollToId } from "@/hooks/use-lenis";

export default function FinalCTA() {
  const go = (e: React.MouseEvent, hash: string) => {
    e.preventDefault();
    scrollToId(hash);
  };

  return (
    <section
      id="cta"
      className="relative border-b border-(--line) bg-sun text-ink py-20 sm:py-28 overflow-hidden select-none"
    >
      {/* Halftone texture overlay */}
      <div
        aria-hidden
        className="halftone absolute inset-0 opacity-15 pointer-events-none"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        {/* Editorial Masthead */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink/20 pb-4 font-mono text-xs uppercase tracking-widest text-ink/75">
          <div className="flex items-center gap-2">
            <span className="inline-block size-2 rounded-full bg-ink animate-ping" />
            <span>KOLKATA CULTURE MOVEMENT // DISPATCH FINAL</span>
          </div>
          <span>ISSUE NO. 2026 // LIVE SCHEDULE</span>
        </div>

        {/* Big Editorial Callout */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink/75 mb-3 font-bold">
              ✦ STEP OUTSIDE // DIRECT DISPATCH ✦
            </p>
            <h2 className="font-display text-[17vw] sm:text-[13vw] lg:text-[10vw] font-bold tracking-tight leading-[0.8] text-ink select-none uppercase">
              SO, WHAT&apos;S ON
              <br />
              <span className="underline decoration-ink decoration-[6px] sm:decoration-[8px] underline-offset-8">TONIGHT</span>?
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end">
            <p className="font-heading text-base sm:text-lg lg:text-xl text-ink/85 leading-relaxed font-medium">
              The city doesn&apos;t wait for an algorithm. From College Street book crawls
              to Nazrul Mancha decibels, your next unforgettable plan is already soundchecking.
            </p>
          </div>
        </div>

        {/* Buttons Row */}
        <div className="mt-12 flex flex-wrap items-center gap-4 pt-8 border-t border-ink/20">
          <a
            href="#events"
            onClick={(e) => go(e, "#events")}
            data-cursor
            className="group inline-flex items-center gap-3 border-2 border-ink bg-ink px-8 py-4 font-heading text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-sun transition-colors hover:bg-cream hover:text-ink"
          >
            <span>EXPLORE EVENTS</span>
            <span
              aria-hidden
              className="text-sun transition-transform duration-200 group-hover:translate-x-1 group-hover:text-ink"
            >
              →
            </span>
          </a>

          <a
            href="#dreamlist"
            onClick={(e) => go(e, "#dreamlist")}
            data-cursor
            className="inline-flex items-center gap-2 border-2 border-ink bg-transparent px-7 py-4 font-heading text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-ink hover:text-sun"
          >
            <span>JOIN THE DREAMLIST</span>
            <span aria-hidden className="text-xs">
              ✦
            </span>
          </a>

          <div className="ml-auto hidden font-mono text-xs uppercase tracking-[0.2em] text-ink/70 sm:block">
            <span>DIRECT BOX OFFICE • ZERO SURCHARGES</span>
          </div>
        </div>
      </div>
    </section>
  );
}
