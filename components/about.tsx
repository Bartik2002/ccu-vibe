"use client";

import Image from "next/image";
import { aboutPhotos } from "@/data/site";
import { Reveal, SectionTag, SplitWords, Sticker } from "@/components/ui";

const stats = [
  { value: "08", label: "Experience formats", color: "text-coral" },
  { value: "01", label: "City, one love", color: "text-sky" },
  { value: "∞", label: "Stories to tell", color: "text-lilac" },
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-36">
      <Sticker rotate={10} slow className="right-[2%] top-16 hidden text-5xl xl:block">
        🎭
      </Sticker>

      <SectionTag color="bg-mint">The Movement</SectionTag>

      <h2 className="mt-6 max-w-4xl font-heading text-5xl font-semibold leading-[1.02] sm:text-7xl">
        <SplitWords text="More Than Events." />
      </h2>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="text-xl leading-relaxed text-(--muted) sm:text-2xl">
              CCU.Vibe is a city-wide movement celebrating{" "}
              <em className="font-heading not-italic text-coral">music</em>,{" "}
              <em className="font-heading not-italic text-sky">culture</em>,{" "}
              <em className="font-heading not-italic text-tangerine">creators</em>,{" "}
              <em className="font-heading not-italic text-lilac">food</em>,{" "}
              <em className="font-heading not-italic text-mint">fashion</em> and unforgettable
              experiences — built by Kolkata, for Kolkata.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <blockquote className="mt-10 border-l-4 border-coral pl-6 font-heading text-lg font-medium sm:text-xl">
              “Not another events page. A love letter to the city — one you can dance to.”
              <cite className="mt-2 block text-sm font-normal not-italic text-(--muted)">
                — The CCU.Vibe crew
              </cite>
            </blockquote>
          </Reveal>
        </div>

        <div className="grid content-start gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={0.1 * i} className="border-t border-(--line) pt-6">
              <div className="flex items-baseline gap-4">
                <span className={`font-display text-6xl sm:text-7xl ${s.color}`}>{s.value}</span>
                <span className="font-heading text-lg font-medium text-(--muted)">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Polaroid strip */}
      <div className="mt-20 flex flex-wrap items-start justify-center gap-8 lg:justify-between">
        {aboutPhotos.map((p, i) => (
          <Reveal key={p.caption} delay={0.12 * i} className={p.rotate}>
            <figure className="w-64 rounded-xl border border-(--line) bg-(--card) p-3 pb-4 shadow-lg transition-transform duration-500 hover:rotate-0 hover:scale-105 sm:w-72">
              <div className="relative h-48 overflow-hidden rounded-lg sm:h-52">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 640px) 288px, 256px"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center font-heading text-sm font-medium text-(--muted)">
                {p.caption}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
