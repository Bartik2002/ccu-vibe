"use client";

import { motion, useSpring } from "framer-motion";
import { useRef } from "react";
import { scrollToId } from "@/hooks/use-lenis";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ------------------------------------------------------------------ */
/* Magnetic — element gently pulls toward the cursor                    */
/* ------------------------------------------------------------------ */
export function Magnetic({
  children,
  strength = 0.32,
  className = "",
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 160, damping: 14, mass: 0.2 });
  const y = useSpring(0, { stiffness: 160, damping: 14, mass: 0.2 });

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      className={`inline-block ${className}`}
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
        y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* CTAButton — primary/ghost pill button with magnetic hover            */
/* ------------------------------------------------------------------ */
export function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const styles =
    variant === "primary"
      ? "bg-(--fg) text-(--bg) hover:bg-coral hover:text-ink"
      : "border border-(--line) text-(--fg) hover:border-coral hover:text-coral";

  return (
    <Magnetic>
      <a
        href={href}
        data-cursor
        onClick={(e) => {
          if (href.startsWith("#")) {
            e.preventDefault();
            scrollToId(href);
          }
        }}
        className={`inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-heading font-semibold tracking-wide transition-colors duration-300 ${styles} ${className}`}
      >
        {children}
      </a>
    </Magnetic>
  );
}

/* ------------------------------------------------------------------ */
/* SectionTag — small editorial label pill                              */
/* ------------------------------------------------------------------ */
export function SectionTag({
  children,
  color = "bg-sun",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 12, rotate: -3 }}
      whileInView={{ opacity: 1, y: 0, rotate: -2 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, ease: EASE }}
      className={`inline-block rounded-full ${color} px-4 py-1.5 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-ink shadow-sm`}
    >
      {children}
    </motion.span>
  );
}

/* ------------------------------------------------------------------ */
/* Reveal — fade/slide-up once in view                                  */
/* ------------------------------------------------------------------ */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* SplitLetters — per-letter rise animation (for display headlines)     */
/* ------------------------------------------------------------------ */
export function SplitLetters({
  text,
  className = "",
  delay = 0,
  whileInView = false,
}: {
  text: string;
  className?: string;
  delay?: number;
  whileInView?: boolean;
}) {
  const animProps = whileInView
    ? { whileInView: { y: "0%" }, viewport: { once: true, margin: "-15%" } }
    : { animate: { y: "0%" } };

  return (
    <span className={className} aria-label={text}>
      {text.split("").map((ch, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom" aria-hidden>
          <motion.span
            className="inline-block"
            initial={{ y: "115%" }}
            {...animProps}
            transition={{ duration: 0.75, delay: delay + i * 0.035, ease: EASE }}
          >
            {ch === " " ? " " : ch}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* SplitWords — per-word rise animation (for heading sentences)         */
/* ------------------------------------------------------------------ */
export function SplitWords({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  return (
    <span className={className} aria-label={text}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom" aria-hidden>
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.7, delay: delay + i * 0.06, ease: EASE }}
          >
            {word}
            {" "}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Sticker — floating decorative element                                */
/* ------------------------------------------------------------------ */
export function Sticker({
  children,
  className = "",
  rotate = 0,
  slow = false,
}: {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
  slow?: boolean;
}) {
  return (
    <div
      aria-hidden
      style={{ "--r": `${rotate}deg` } as React.CSSProperties}
      className={`pointer-events-none absolute select-none ${slow ? "animate-float-slow" : "animate-float"} ${className}`}
    >
      {children}
    </div>
  );
}
