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
      className="border-b border-(--line) bg-(--bg) text-(--fg) py-28 sm:py-40 select-none"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h2 className="font-display text-[14vw] sm:text-[10vw] lg:text-[8vw] font-bold tracking-tight text-(--fg) leading-[0.82] select-none uppercase">
            SEE YOU
            <br />
            <span className="text-coral">OUTSIDE</span>.
          </h2>

          <div className="mt-12 flex flex-wrap items-center gap-6 font-mono text-xs uppercase tracking-widest">
            <a
              href="#events"
              onClick={(e) => go(e, "#events")}
              data-cursor
              className="border-b-2 border-(--fg) pb-1 font-bold text-(--fg) hover:text-coral hover:border-coral transition-colors"
            >
              See The Dates →
            </a>
            <span className="text-(--muted)">•</span>
            <a
              href="#dreamlist"
              onClick={(e) => go(e, "#dreamlist")}
              data-cursor
              className="text-(--muted) hover:text-(--fg) transition-colors"
            >
              Get On The List
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

