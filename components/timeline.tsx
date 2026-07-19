"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { timelineSteps } from "@/data/site";
import { Reveal, SectionTag, SplitWords } from "@/components/ui";

const STATUS_STYLES = {
  live: "bg-mint text-ink",
  next: "bg-sun text-ink",
  locked: "border border-(--line) text-(--muted)",
} as const;

const STATUS_LABELS = {
  live: "● Live now",
  next: "Up next",
  locked: "🔒 Locked",
} as const;

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 65%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  return (
    <section id="timeline" className="mx-auto max-w-6xl px-4 py-28 sm:px-6 sm:py-36">
      <div className="text-center">
        <SectionTag color="bg-sky">The Road To The Dreams</SectionTag>
        <h2 className="mt-6 font-heading text-5xl font-semibold leading-[1.02] sm:text-7xl">
          <SplitWords text="How This Unfolds." />
        </h2>
      </div>

      <div ref={ref} className="relative mt-20">
        {/* Track + progress fill */}
        <div
          aria-hidden
          className="absolute bottom-0 left-[19px] top-0 w-px bg-(--line) md:left-1/2 md:-translate-x-1/2"
        >
          <motion.div
            style={{ scaleY }}
            className="absolute inset-0 w-full origin-top bg-gradient-to-b from-coral via-sun to-lilac"
          />
        </div>

        {timelineSteps.map((step, i) => {
          const even = i % 2 === 0;
          return (
            <Reveal
              key={step.title}
              delay={0.05}
              className={`relative mb-14 pl-14 last:mb-0 md:w-1/2 md:pl-0 ${
                even ? "md:pr-16 md:text-right" : "md:ml-auto md:pl-16"
              }`}
            >
              {/* Dot on the line */}
              <span
                aria-hidden
                className={`absolute top-2 size-4 rounded-full border-4 border-(--bg) ${step.color} left-[12px] ${
                  even ? "md:left-auto md:right-[-8px]" : "md:left-[-8px]"
                }`}
              />

              <p className="font-display text-5xl text-(--muted)/40">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-1 font-heading text-2xl font-semibold sm:text-3xl">{step.title}</h3>
              <p className="mt-2 text-(--muted)">{step.desc}</p>
              <span
                className={`mt-4 inline-block rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] ${STATUS_STYLES[step.status]}`}
              >
                {STATUS_LABELS[step.status]}
              </span>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
