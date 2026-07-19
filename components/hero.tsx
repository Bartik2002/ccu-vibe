"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { site } from "@/data/site";
import { CTAButton, SplitLetters, Sticker } from "@/components/ui";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const cueRef = useRef<HTMLDivElement>(null);

  // Scroll parallax + fade, written straight to the DOM. Deliberately not
  // framer's useScroll: its hooks trip React 19 strict-mode hook-order
  // warnings in this component, and a passive listener is cheaper anyway.
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const h = sectionRef.current?.offsetHeight || window.innerHeight;
      const p = Math.min(1, Math.max(0, window.scrollY / h));
      const fade = Math.max(0, 1 - p / 0.75);
      if (contentRef.current) {
        contentRef.current.style.transform = `translateY(${p * 140}px)`;
        contentRef.current.style.filter = `opacity(${fade})`;
      }
      if (cueRef.current) cueRef.current.style.opacity = String(fade);
      if (blobRef.current) blobRef.current.style.transform = `translateY(${p * -120}px)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden px-4 pb-24 pt-36 sm:px-6"
    >
      {/* Background décor */}
      <div aria-hidden ref={blobRef} className="absolute inset-0 -z-10">
        <div className="absolute -left-[10%] top-[8%] size-[46vw] rounded-full bg-sun/35 blur-3xl" />
        <div className="absolute -right-[12%] bottom-[4%] size-[42vw] rounded-full bg-coral/25 blur-3xl" />
        <div className="absolute left-[36%] top-[52%] size-[30vw] rounded-full bg-lilac/25 blur-3xl" />
        <div className="halftone absolute right-[6%] top-[16%] h-56 w-56 text-ink/15 night:text-cream/10" />
        <div className="halftone absolute bottom-[12%] left-[4%] h-40 w-64 text-ink/10 night:text-cream/10" />
      </div>

      {/* Brand sticker */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: 12 }}
        animate={{ opacity: 1, y: 0, rotate: 6 }}
        transition={{ duration: 0.9, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-[6%] top-[16%] hidden w-[24vw] max-w-[360px] md:block"
      >
        <div className="animate-float-slow">
          <Image
            src="/logo-ccu-vibe.jpg"
            alt=""
            aria-hidden
            width={720}
            height={540}
            priority
            className="rotate-0 rounded-3xl border-2 border-ink/80 shadow-2xl shadow-ink/20"
          />
        </div>
      </motion.div>

      {/* Spinning star */}
      <div aria-hidden className="absolute right-[30%] top-[12%] hidden animate-spin-slow lg:block">
        <svg width="70" height="70" viewBox="0 0 100 100" fill="none">
          <path
            d="M50 0 L58 38 L96 30 L64 52 L84 86 L50 64 L16 86 L36 52 L4 30 L42 38 Z"
            fill="#F96E5B"
          />
        </svg>
      </div>

      {/* Floating stickers */}
      <Sticker rotate={-8} className="left-[6%] top-[24%] hidden lg:block">
        <span className="rounded-full bg-sky px-4 py-2 font-heading text-sm font-semibold text-ink shadow-md">
          🚕 Kolkata, WB
        </span>
      </Sticker>
      <Sticker rotate={6} slow className="right-[14%] top-[58%] hidden lg:block">
        <span className="rounded-full bg-mint px-4 py-2 font-heading text-sm font-semibold text-ink shadow-md">
          ☕ Adda approved
        </span>
      </Sticker>
      <Sticker rotate={-4} slow className="left-[16%] bottom-[18%] hidden text-5xl lg:block">
        🎶
      </Sticker>

      <div className="mx-auto w-full max-w-7xl">
        <div ref={contentRef}>
          {/* Coming soon badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-(--line) bg-(--card) px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] sm:text-sm"
          >
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-coral" />
            </span>
            {site.flagship.name} — {site.flagship.status}
          </motion.div>

          {/* Display headline */}
          <h1 className="font-display leading-[0.82] tracking-tight">
            <SplitLetters
              text="CCU.VIBE"
              delay={0.35}
              className="block text-[24vw] sm:text-[19vw] lg:text-[15rem]"
            />
          </h1>

          {/* Subheadline */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-3xl font-heading text-3xl font-semibold leading-tight sm:text-5xl"
          >
            Where Kolkata{" "}
            <span className="relative inline-block text-coral">
              comes alive
              <svg
                aria-hidden
                viewBox="0 0 220 14"
                className="absolute -bottom-2 left-0 w-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M3 10 C 50 2, 120 12, 217 5"
                  stroke="#FFD85E"
                  strokeWidth="5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
            .
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-(--muted) sm:text-lg"
          >
            {site.mission} {site.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <CTAButton href="#dreamlist">Join The Dreamlist ✦</CTAButton>
            <CTAButton href="#about" variant="ghost">
              Explore The Movement ↓
            </CTAButton>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <div ref={cueRef} className="absolute bottom-8 left-1/2 -translate-x-1/2" aria-hidden>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="flex flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-(--muted)"
        >
          Scroll to dream
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="block h-6 w-px bg-current"
          />
        </motion.div>
      </div>
    </section>
  );
}
