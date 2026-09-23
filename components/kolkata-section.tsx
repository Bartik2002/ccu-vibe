"use client";

import Image from "next/image";
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
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/75 font-semibold">
              NEIGHBOURHOODS
            </p>
            <h2 className="mt-2 font-display text-7xl sm:text-8xl lg:text-9xl font-bold tracking-tight text-ink uppercase leading-[0.85] select-none">
              THE CIRCUIT<span className="text-ink">.</span>
            </h2>
          </div>

          <p className="max-w-md font-mono text-xs uppercase tracking-[0.18em] text-ink/80 leading-relaxed">
            Nine neighbourhoods. One city that refuses to go to sleep early.
          </p>
        </div>

        {/* Location Selector: Minimal Typographic Nav */}
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-ink/20 pb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-ink/60 mr-2">
            PICK A NEIGHBOURHOOD:
          </span>
          {kolkataLocations.map((loc, idx) => {
            const isSelected = activeLoc === idx;
            return (
              <button
                key={loc.id}
                type="button"
                onClick={() => setActiveLoc(idx)}
                data-cursor
                className={`group font-mono text-xs uppercase tracking-wider transition-colors pb-1 ${
                  isSelected
                    ? "text-ink font-bold border-b-2 border-ink"
                    : "text-ink/60 hover:text-ink"
                }`}
              >
                <span>0{idx + 1}. {loc.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Location Showcase: Large Typography + Image Composition */}
        {current && (
          <div className="mt-12">
            <div className="border-b border-ink/20 pb-6">
              <h3 className="font-display text-6xl sm:text-8xl lg:text-[9vw] font-bold tracking-tight text-ink leading-[0.82] select-none uppercase">
                {current.name}
              </h3>
            </div>

            {/* Asymmetric Image + Atmosphere Narrative */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              {/* Left Column (7 cols): Visual Plate */}
              <div className="lg:col-span-7">
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden border border-ink/25">
                  <Image
                    src={current.photo.src}
                    alt={current.photo.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* Right Column (5 cols): Cultural Atmosphere */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <p className="font-heading text-xl sm:text-2xl text-ink leading-relaxed font-normal">
                    {current.blurb}
                  </p>

                  <p className="mt-8 pt-6 border-t border-ink/20 font-mono text-xs uppercase tracking-widest text-ink/75 leading-relaxed">
                    “{current.vibe}”
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
