"use client";

import { marqueeWords } from "@/data/site";

export default function Marquee({
  className = "bg-sun text-ink",
  rotate = "-rotate-1",
}: {
  className?: string;
  rotate?: string;
}) {
  return (
    <div className={`relative z-10 ${rotate} -mx-[2vw] w-[104vw] overflow-hidden border-y-2 border-ink/90 py-3 ${className}`}>
      <div className="flex w-max animate-marquee gap-0 whitespace-nowrap">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
            {marqueeWords.map((word) => (
              <span
                key={`${copy}-${word}`}
                className="flex items-center gap-6 px-3 font-display text-2xl uppercase tracking-wide sm:text-3xl"
              >
                {word} <span className="text-lg">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
