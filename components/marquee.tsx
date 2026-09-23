"use client";

import { marqueeWords } from "@/data/site";

interface MarqueeProps {
  className?: string;
  speed?: string;
  theme?: "sun" | "coral" | "mint" | "ink" | "default";
}

const THEME_CLASSES = {
  sun: "bg-sun text-ink border-ink",
  coral: "bg-coral text-cream border-(--line)",
  mint: "bg-mint text-ink border-ink",
  ink: "bg-ink text-cream border-cream/20",
  default: "bg-(--card) text-(--fg) border-(--line)",
} as const;

export default function Marquee({
  className = "",
  theme = "sun",
  speed = "28s",
}: MarqueeProps) {
  // Repeating array ensures seamless continuous loop
  const words = [...marqueeWords, ...marqueeWords, ...marqueeWords, ...marqueeWords];

  const themeStyle = THEME_CLASSES[theme] || THEME_CLASSES.sun;

  return (
    <section
      aria-label="Cultural disciplines ticker"
      className={`relative z-10 w-full overflow-hidden border-y py-3 sm:py-3.5 select-none ${themeStyle} ${className}`}
    >
      <div
        className="flex w-max animate-marquee gap-0 whitespace-nowrap hover:[animation-play-state:paused]"
        style={{ animationDuration: speed }}
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex items-center gap-0"
            aria-hidden={copy === 1}
          >
            {words.map((word, idx) => (
              <span
                key={`${copy}-${word}-${idx}`}
                className="inline-flex items-center gap-6 px-4 font-display text-lg tracking-wider sm:px-6 sm:text-2xl"
              >
                <span>{word}</span>
                <span
                  aria-hidden
                  className="text-xs opacity-60 select-none"
                >
                  •
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
