"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { aboutPhotos } from "@/data/site";

const stats = [
  { value: "08", label: "Experience formats", color: "text-coral" },
  { value: "01", label: "City, one love", color: "text-coral" },
  { value: "∞", label: "Stories to tell", color: "text-coral" },
];

export default function About() {
  return (
    <section id="about" className="relative border-b border-(--line) bg-(--bg) py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header / Masthead */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-(--line) pb-4 font-mono text-xs uppercase tracking-widest text-(--muted)">
          <div className="flex items-center gap-2">
            <span className="inline-block size-1.5 rounded-full bg-coral" />
            <span>Dispatch 01 // The Movement</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">Kolkata Cultural Manifesto</span>
            <span>Vol. 2026 // Season 01</span>
          </div>
        </div>

        {/* Section Headline */}
        <div className="mt-12 sm:mt-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-7xl sm:text-8xl lg:text-9xl font-bold tracking-tight text-(--fg) uppercase leading-[0.85] select-none"
          >
            THE COLLECTIVE<span className="text-coral">.</span>
          </motion.h2>
          <p className="mt-2 font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-coral font-bold">
            A CULTURAL MANIFESTO // NORTH TO SOUTH
          </p>
        </div>

        {/* Asymmetric 12-Column Content Grid */}
        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column (7 cols): Manifesto Lead + Editorial Pullquote */}
          <div className="lg:col-span-7 flex flex-col">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-xl font-normal leading-relaxed text-(--muted) sm:text-2xl lg:text-[26px]"
            >
              CCU.Vibe is an independent cultural index celebrating the living pulse of
              Kolkata — from proscenium experiments at{" "}
              <span className="font-medium text-(--fg) underline decoration-coral decoration-2 underline-offset-4">
                Rabindra Sadan
              </span>{" "}
              and midnight jazz on{" "}
              <span className="font-medium text-(--fg) underline decoration-coral decoration-2 underline-offset-4">
                Park Street
              </span>{" "}
              to heated{" "}
              <span className="font-medium text-(--fg) underline decoration-coral decoration-2 underline-offset-4">
                College Street
              </span>{" "}
              boi-para addas, stadium sounds in{" "}
              <span className="font-medium text-(--fg) underline decoration-coral decoration-2 underline-offset-4">
                Salt Lake
              </span>
              , and riverfront sundown sessions by the{" "}
              <span className="font-medium text-(--fg) underline decoration-coral decoration-2 underline-offset-4">
                Hooghly
              </span>
              . Built by Kolkata, for Kolkata.
            </motion.p>

            {/* Editorial Pullquote */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12 border-y border-(--line) py-8 sm:py-10"
            >
              <blockquote className="font-heading text-xl font-medium italic text-(--fg) sm:text-2xl leading-relaxed">
                “Not another corporate ticket platform. A love letter to the city — from quiet boi-para debates to loud Nazrul Mancha encores.”
              </blockquote>
              <div className="mt-4 flex items-center justify-between font-mono text-xs uppercase tracking-widest text-(--muted)">
                <span>— The CCU.Vibe Crew</span>
                <span>Kolkata, WB</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column (5 cols): Editorial Index / Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="border border-(--line) bg-(--card) p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-(--line) pb-4 font-mono text-xs uppercase tracking-widest text-(--muted)">
                <span>Index // Cultural Metrics</span>
                <span>CCU.01</span>
              </div>

              <div className="divide-y divide-(--line)">
                {stats.map((s, i) => (
                  <div key={s.label} className="py-6 first:pt-6 last:pb-2">
                    <div className="flex items-baseline justify-between">
                      <span className={`font-display text-5xl sm:text-6xl tracking-tight ${s.color}`}>
                        {s.value}
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-widest text-(--muted)">
                        Ref. 0{i + 1}
                      </span>
                    </div>
                    <h3 className="mt-2 font-heading text-sm font-semibold uppercase tracking-wider text-(--fg)">
                      {s.label}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Photographic Essay (Asymmetric Triptych) */}
        <div className="mt-20 sm:mt-28">
          <div className="mb-6 flex items-center justify-between border-b border-(--line) pb-3 font-mono text-xs uppercase tracking-widest text-(--muted)">
            <span>Plates // City In Motion</span>
            <span>Archive 01–03</span>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-8">
            {aboutPhotos.map((p, i) => {
              const colSpan =
                i === 0
                  ? "md:col-span-5"
                  : i === 1
                  ? "md:col-span-4 md:mt-10"
                  : "md:col-span-3 md:mt-20";
              const heightClass =
                i === 0
                  ? "h-72 sm:h-96"
                  : i === 1
                  ? "h-64 sm:h-80"
                  : "h-56 sm:h-72";

              return (
                <motion.figure
                  key={p.caption}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className={`group flex flex-col ${colSpan}`}
                >
                  <div
                    className={`relative w-full ${heightClass} overflow-hidden border border-(--line) bg-ink/5`}
                  >
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption className="mt-3 flex items-baseline justify-between border-t border-(--line)/60 pt-2 font-mono text-xs text-(--muted)">
                    <span className="font-heading text-xs font-medium uppercase tracking-wide text-(--fg)">
                      {p.caption}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest">
                      Plate 0{i + 1}
                    </span>
                  </figcaption>
                </motion.figure>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
