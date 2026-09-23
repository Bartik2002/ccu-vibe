"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { landmarks } from "@/data/site";
import { Reveal, SectionTag, SplitWords } from "@/components/ui";

export default function KolkataMap() {
  const [active, setActive] = useState<number | null>(null);
  const current = active !== null ? landmarks[active] : null;

  return (
    <section id="map" className="mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-36">
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        {/* Copy */}
        <div className="lg:sticky lg:top-32">
          <SectionTag color="bg-tangerine">The City Is The Venue</SectionTag>
          <h2 className="mt-6 font-heading text-5xl font-semibold leading-[1.02] sm:text-6xl">
            <SplitWords text="Dreams, Mapped." />
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-lg text-(--muted)">
              Hover the landmarks — some of them are hiding future plans. From Kumartuli&apos;s clay
              lanes to Prinsep Ghat sunsets, the whole city is on the guest list.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-(--line) px-4 py-2 text-sm text-(--muted)">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-coral" />
              </span>
              {landmarks.length} landmarks · endless possibilities
            </p>
          </Reveal>
        </div>

        {/* Map */}
        <Reveal className="relative">
          <div
            className="relative overflow-hidden rounded-[2.5rem] border border-(--line) bg-(--card) shadow-sm"
            onMouseLeave={() => setActive(null)}
          >
            <svg viewBox="0 0 600 700" className="block w-full" role="img" aria-label="Stylized map of Kolkata with event landmarks">
              {/* Street grid */}
              <g stroke="var(--line)" strokeWidth="1.5" strokeDasharray="5 7">
                <line x1="60" y1="180" x2="560" y2="150" />
                <line x1="80" y1="300" x2="580" y2="270" />
                <line x1="70" y1="440" x2="570" y2="420" />
                <line x1="90" y1="580" x2="560" y2="560" />
                <line x1="260" y1="40" x2="230" y2="680" />
                <line x1="400" y1="60" x2="380" y2="660" />
                <line x1="500" y1="40" x2="490" y2="640" />
              </g>

              {/* Hooghly river */}
              <path
                d="M 150 -20 C 115 120, 90 260, 130 400 C 160 510, 145 610, 110 720"
                stroke="#8CC9FF"
                strokeWidth="46"
                strokeOpacity="0.4"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M 150 -20 C 115 120, 90 260, 130 400 C 160 510, 145 610, 110 720"
                stroke="#8CC9FF"
                strokeWidth="3"
                strokeOpacity="0.7"
                strokeDasharray="2 10"
                fill="none"
              />
              <text
                x="86"
                y="330"
                fill="var(--muted)"
                fontSize="15"
                letterSpacing="4"
                transform="rotate(-80 86 330)"
                opacity="0.7"
              >
                HOOGHLY
              </text>

              {/* Howrah bridge mark */}
              <g stroke="var(--fg)" strokeWidth="3" opacity="0.75">
                <line x1="108" y1="140" x2="192" y2="140" />
                <path d="M 116 140 Q 150 106 184 140" fill="none" />
              </g>

              {/* Maidan green */}
              <ellipse cx="290" cy="398" rx="72" ry="52" fill="#A9E5C2" opacity="0.5" />

              {/* Big city label */}
              <text
                x="575"
                y="655"
                textAnchor="end"
                fill="var(--fg)"
                opacity="0.1"
                fontSize="86"
                fontFamily="Bebas Neue, sans-serif"
                letterSpacing="6"
              >
                KOLKATA
              </text>

              {/* Compass */}
              <g transform="translate(540 60)" opacity="0.7">
                <circle r="24" fill="none" stroke="var(--muted)" strokeWidth="1.5" />
                <path d="M 0 -16 L 5 8 L 0 3 L -5 8 Z" fill="#F96E5B" />
                <text y="-32" textAnchor="middle" fill="var(--muted)" fontSize="13">N</text>
              </g>

              {/* Landmarks */}
              {landmarks.map((lm, i) => (
                <g
                  key={lm.name}
                  transform={`translate(${lm.x} ${lm.y})`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(active === i ? null : i)}
                  tabIndex={0}
                  role="button"
                  aria-label={`${lm.name}: ${lm.tease}`}
                  data-cursor
                  className="outline-none"
                  style={{ cursor: "pointer" }}
                >
                  <circle r="22" fill="transparent" />
                  <circle className="map-ping" r="9" fill="#F96E5B" opacity="0.5" />
                  <circle
                    r={active === i ? 10 : 7}
                    fill={active === i ? "#F96E5B" : "var(--fg)"}
                    stroke="var(--card)"
                    strokeWidth="3"
                    style={{ transition: "all .25s ease" }}
                  />
                </g>
              ))}
            </svg>

            {/* Tooltip */}
            <AnimatePresence>
              {current && (
                <motion.div
                  key={current.name}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.97 }}
                  transition={{ duration: 0.25 }}
                  className="pointer-events-none absolute z-10 w-56 -translate-x-1/2 rounded-2xl border border-(--line) bg-(--card) p-4 shadow-xl"
                  style={{
                    left: `${(current.x / 600) * 100}%`,
                    top: `calc(${(current.y / 700) * 100}% + 20px)`,
                  }}
                >
                  <p className="text-2xl" aria-hidden>{current.emoji}</p>
                  <p className="mt-1 font-heading font-semibold">{current.name}</p>
                  <p className="mt-1 text-sm text-(--muted)">{current.tease}</p>
                  <p className="mt-2 inline-block rounded-full bg-sun px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-ink">
                    Future drop
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
