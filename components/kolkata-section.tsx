"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { kolkataLocations } from "@/data/site";

export default function KolkataSection() {
  const [activeLoc, setActiveLoc] = useState(0);
  const current = kolkataLocations[activeLoc];

  return (
    <section
      id="kolkata"
      className="relative border-b border-ink bg-mint text-ink py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-ink/20 pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-ink font-bold">
              <span>AROUND THE CITY // NORTH TO SOUTH</span>
            </div>
            <h2 className="mt-2 font-display text-7xl sm:text-8xl lg:text-9xl font-bold tracking-tight text-ink uppercase leading-[0.85] select-none">
              WHERE IT&apos;S AT<span className="text-ink">.</span>
            </h2>
            <p className="mt-2 font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-ink/80">
              THE CITY IS THE STAGE // 09 CULTURAL CIRCUITS
            </p>
          </div>

          <p className="max-w-md font-mono text-xs uppercase tracking-[0.18em] text-ink/80 leading-relaxed">
            Not monuments or colonial nostalgia. An active field guide to the auditoriums,
            amphitheatres, and pavements where Kolkata gathers to make noise.
          </p>
        </div>

        {/* Location Selector Bar */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 border-2 border-ink divide-x divide-y lg:divide-y-0 divide-ink">
          {kolkataLocations.map((loc, idx) => {
            const isSelected = activeLoc === idx;
            return (
              <button
                key={loc.id}
                type="button"
                onClick={() => setActiveLoc(idx)}
                data-cursor
                className={`flex flex-col p-3 sm:p-3.5 text-left transition-colors last:col-span-2 sm:last:col-span-1 lg:last:col-span-1 ${
                  isSelected
                    ? "bg-ink text-mint font-bold"
                    : "bg-mint text-ink/80 hover:bg-ink/10 hover:text-ink"
                }`}
              >
                <span className="font-mono text-[9px] uppercase opacity-75">
                  0{idx + 1}.
                </span>
                <span className="font-heading text-xs sm:text-sm font-semibold mt-1 leading-snug">
                  {loc.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Location Showcase: Large Editorial Spread */}
        {current && (
          <div className="mt-8 border-2 border-ink bg-cream text-ink grid grid-cols-1 lg:grid-cols-12">
            {/* Left 6 Columns: Photography & Plate Framing */}
            <div className="relative min-h-[360px] lg:col-span-7 lg:min-h-[520px] overflow-hidden border-b lg:border-b-0 lg:border-r border-ink">
              <Image
                src={current.photo.src}
                alt={current.photo.alt}
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              <div
                aria-hidden
                className="halftone absolute inset-0 opacity-15 pointer-events-none"
              />

              {/* District Badge with Map Ping Landmark Dot */}
              <div className="absolute top-4 left-4 flex items-center gap-2 border border-ink bg-mint px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-ink">
                <span className="relative flex size-2.5 items-center justify-center">
                  <span className="map-ping absolute inline-flex size-full rounded-full bg-ink opacity-75" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-ink" />
                </span>
                <span>{current.badge}</span>
              </div>

              {/* Bottom Vibe Banner */}
              <div className="absolute bottom-4 left-4 right-4 bg-ink border-t border-ink p-4 text-cream">
                <span className="font-mono text-[10px] text-mint uppercase tracking-widest block font-bold">
                  CULTURAL VIBE
                </span>
                <span className="font-heading text-base font-semibold">
                  “{current.vibe}”
                </span>
              </div>
            </div>

            {/* Right 5 Columns: Cultural Analysis & Famous For */}
            <div className="flex flex-col justify-between p-6 sm:p-10 lg:col-span-5">
              <div>
                <div className="flex items-center justify-between border-b border-ink/15 pb-3 font-mono text-xs text-ink/70">
                  <span className="text-ink font-bold uppercase tracking-wider">
                    KOLKATA DISTRICT DISPATCH
                  </span>
                  <span>ACTIVE PROGRAMME</span>
                </div>

                <h3 className="mt-8 font-display text-5xl sm:text-6xl font-bold tracking-tight text-ink leading-none">
                  {current.name}
                </h3>

                <p className="mt-6 text-sm sm:text-base text-ink/80 leading-relaxed font-body">
                  {current.blurb}
                </p>

                {/* What Happens Here */}
                <div className="mt-8 border-t border-ink/15 pt-6">
                  <p className="font-mono text-xs uppercase tracking-widest text-ink font-semibold">
                    Known In The Circuit For:
                  </p>
                  <ul className="mt-4 space-y-2">
                    {current.famousFor.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 font-heading text-sm text-ink"
                      >
                        <span className="text-ink font-bold font-mono text-xs">✦</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="mt-10 pt-6 border-t border-ink/15 flex items-center justify-between font-mono text-xs">
                <span className="text-ink/70">
                  See events tagged with this location
                </span>
                <Link
                  href="/events"
                  data-cursor
                  className="font-heading font-semibold uppercase text-ink underline underline-offset-4 hover:opacity-75"
                >
                  Explore Directory →
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
