"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { experiences } from "@/data/site";
import { SectionTag, SplitWords } from "@/components/ui";

export default function Experiences() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-66%"]);

  return (
    <section id="experiences" className="relative">
      {/* Header (normal flow) */}
      <div className="mx-auto max-w-7xl px-4 pb-4 pt-10 sm:px-6">
        <SectionTag color="bg-sky">What We Do</SectionTag>
        <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-heading text-5xl font-semibold leading-[1.02] sm:text-7xl">
            <SplitWords text="Pick Your Vibe." />
          </h2>
          <p className="mb-2 hidden text-sm uppercase tracking-[0.2em] text-(--muted) md:block" aria-hidden>
            Keep scrolling — it goes sideways →
          </p>
        </div>
      </div>

      {/* Horizontal scroll gallery */}
      <div ref={ref} className="relative h-[320vh]">
        <div className="sticky top-0 flex h-svh items-center overflow-hidden">
          <motion.div style={{ x }} className="flex w-max gap-5 px-4 sm:gap-8 sm:px-6">
            {experiences.map((exp, i) => (
              <article
                key={exp.title}
                data-cursor
                className="group relative flex h-[62svh] w-[78vw] flex-col justify-between overflow-hidden rounded-3xl border border-(--line) bg-(--card) p-7 shadow-sm transition-transform duration-500 hover:-translate-y-2 sm:w-[46vw] lg:w-[30vw]"
              >
                {/* Color blob */}
                <div
                  aria-hidden
                  className={`absolute -right-16 -top-16 size-56 rounded-full ${exp.tint} blur-2xl transition-transform duration-700 group-hover:scale-150`}
                />

                <div className="relative flex items-start justify-between">
                  <span
                    className={`grid size-11 place-items-center rounded-full ${exp.chip} font-display text-lg text-ink`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-5xl transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                    {exp.emoji}
                  </span>
                </div>

                {/* Photo band */}
                <div className="relative my-6 min-h-0 flex-1 overflow-hidden rounded-2xl border border-(--line)">
                  <Image
                    src={exp.photo.src}
                    alt={exp.photo.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 78vw"
                    className="object-cover grayscale-[35%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>

                <div className="relative">
                  <h3 className="font-heading text-3xl font-semibold sm:text-4xl">{exp.title}</h3>
                  <p className="mt-3 text-(--muted)">{exp.blurb}</p>
                  <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-(--muted) transition-colors group-hover:text-coral">
                    Coming to a para near you
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </p>
                </div>
              </article>
            ))}

            {/* End card */}
            <a
              href="#dreamlist"
              data-cursor
              className="group flex h-[62svh] w-[78vw] flex-col items-center justify-center gap-4 rounded-3xl bg-ink p-7 text-center text-cream sm:w-[46vw] lg:w-[30vw]"
            >
              <span className="text-5xl" aria-hidden>
                ✦
              </span>
              <span className="font-heading text-3xl font-semibold sm:text-4xl">
                And one more thing…
              </span>
              <span className="text-cream/70">It starts with a festival. Join the Dreamlist.</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
