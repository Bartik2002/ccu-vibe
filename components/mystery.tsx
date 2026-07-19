"use client";

import { mysteryCards } from "@/data/site";
import { toast } from "@/lib/toast";
import { Reveal, SectionTag, SplitWords } from "@/components/ui";

export default function Mystery() {
  return (
    <section id="mystery" className="mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-36">
      <SectionTag color="bg-coral">Classified ✦ Top Secret</SectionTag>

      <h2 className="mt-6 max-w-3xl font-heading text-5xl font-semibold leading-[1.02] sm:text-7xl">
        <SplitWords text="The Lineup Is Sleeping." />
      </h2>

      <Reveal delay={0.1}>
        <p className="mt-6 max-w-xl text-lg text-(--muted)">
          Blurred silhouettes. Locked cards. Cryptic hints. Everything gets revealed — Dreamlist
          first, city second.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {mysteryCards.map((card, i) => (
          <Reveal key={card.label} delay={0.1 * i}>
            <button
              type="button"
              data-cursor
              onClick={() => toast("🔒 Not yet, dreamer. The Dreamlist hears it first.")}
              aria-label={`${card.label} — locked. Hint: ${card.hint}`}
              className="group relative block h-80 w-full overflow-hidden rounded-3xl bg-ink p-6 text-left text-cream"
            >
              {/* Blurred silhouette */}
              <span
                aria-hidden
                className="absolute inset-0 grid place-items-center text-[9rem] opacity-60 blur-2xl grayscale transition-all duration-700 group-hover:scale-110 group-hover:opacity-80 group-hover:blur-xl"
              >
                {card.emoji}
              </span>
              <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />

              {/* Lock badge */}
              <span className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-cream/25 bg-ink/60 backdrop-blur-sm">
                🔒
              </span>

              {/* NOT YET stamp on hover */}
              <span
                aria-hidden
                className="absolute left-1/2 top-[38%] -translate-x-1/2 -rotate-12 rounded border-2 border-coral px-3 py-1 font-display text-2xl tracking-widest text-coral opacity-0 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
              >
                NOT YET
              </span>

              <span className="relative mt-auto flex h-full flex-col justify-end">
                <span className="font-display text-3xl tracking-wide text-sun">{card.label}</span>
                <span className="font-display text-5xl">???</span>
                <span className="mt-3 text-sm italic leading-relaxed text-cream/60">
                  Hint: {card.hint}
                </span>
              </span>
            </button>
          </Reveal>
        ))}

        {/* The community card */}
        <Reveal delay={0.3}>
          <a
            href="#dreamlist"
            data-cursor
            className="group flex h-80 flex-col justify-between rounded-3xl border-2 border-dashed border-(--line) p-6 transition-colors hover:border-coral"
          >
            <span className="grid size-10 place-items-center rounded-full bg-sun text-ink" aria-hidden>
              ✦
            </span>
            <span>
              <span className="font-display text-3xl tracking-wide text-coral">Headliner 00</span>
              <span className="block font-display text-5xl">YOU</span>
              <span className="mt-3 block text-sm leading-relaxed text-(--muted)">
                The community is the real headliner. Claim your spot on the Dreamlist →
              </span>
            </span>
          </a>
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <p className="mt-12 text-center font-heading text-lg tracking-wide text-(--muted)">
          <span className="text-coral">✦</span> artists you know. stages you don&apos;t expect. one
          city you love. <span className="text-coral">✦</span>
        </p>
      </Reveal>
    </section>
  );
}
