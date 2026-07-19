"use client";

import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { site } from "@/data/site";
import { CTAButton } from "@/components/ui";

export default function Flagship() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Fades ride inside useMotionTemplate filters: framer-motion delegates plain
  // keyframe opacity/filter values to native ViewTimeline animations, which
  // break inside position:sticky containers (frozen at the initial frame).
  // Templates are computed per-frame in JS and can't be delegated.
  const scale = useTransform(scrollYProgress, [0, 0.55], [0.62, 1]);
  const rotate = useTransform(scrollYProgress, [0, 0.55], [-9, -3]);
  const blurValue = useTransform(scrollYProgress, [0, 0.5], [14, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.35], [0, 1]);
  const filter = useMotionTemplate`blur(${blurValue}px) opacity(${titleOpacity})`;
  const detailOpacity = useTransform(scrollYProgress, [0.55, 0.8], [0, 1]);
  const detailFilter = useMotionTemplate`opacity(${detailOpacity})`;
  const detailY = useTransform(scrollYProgress, [0.55, 0.8], [40, 0]);

  return (
    <section id="dream" className="relative bg-ink text-cream">
      <div ref={ref} className="relative h-[260vh]">
        <div className="sticky top-0 flex h-svh flex-col items-center justify-center overflow-hidden px-4 text-center">
          {/* Glow orbs */}
          <div aria-hidden className="absolute inset-0">
            <div className="absolute left-[8%] top-[18%] size-[34vw] rounded-full bg-coral/25 blur-3xl" />
            <div className="absolute bottom-[10%] right-[6%] size-[38vw] rounded-full bg-lilac/25 blur-3xl" />
            <div className="absolute left-[42%] top-[55%] size-[24vw] rounded-full bg-sun/15 blur-3xl" />
            <div className="halftone absolute bottom-[16%] left-[10%] h-44 w-72 text-cream/10" />
          </div>

          {/* Rotating COMING SOON stamp */}
          <div aria-hidden className="absolute right-[6%] top-[12%] hidden animate-spin-slow md:block">
            <svg width="130" height="130" viewBox="0 0 130 130">
              <defs>
                <path id="stampCircle" d="M 65,65 m -48,0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0" />
              </defs>
              <circle cx="65" cy="65" r="62" fill="none" stroke="#FFD85E" strokeWidth="1.5" strokeDasharray="4 6" />
              <text fill="#FFD85E" fontSize="13.5" fontWeight="600" letterSpacing="3">
                <textPath href="#stampCircle">COMING SOON • THE CALCUTTA DREAMS •</textPath>
              </text>
              <text x="65" y="72" textAnchor="middle" fontSize="22" fill="#FFD85E">✦</text>
            </svg>
          </div>

          <p className="relative mb-6 font-heading text-xs font-semibold uppercase tracking-[0.3em] text-cream/60 sm:text-sm">
            ✦ The First Flagship Experience From CCU.Vibe ✦
          </p>

          {/* Cinematic logo reveal */}
          <motion.h2
            style={{ scale, rotate, filter }}
            className="relative will-change-transform"
          >
            <span className="sr-only">The Calcutta Dreams</span>
            <Image
              src="/logo-calcutta-dreams.jpg"
              alt=""
              aria-hidden
              width={960}
              height={760}
              className="w-[min(80vw,30rem)] rounded-[2rem] border-4 border-cream/10 shadow-2xl shadow-coral/20"
            />
          </motion.h2>

          {/* Details fade in after the title lands */}
          <motion.div style={{ filter: detailFilter, y: detailY }} className="relative mt-8 max-w-xl">
            <p className="font-heading text-lg font-medium text-cream/85 sm:text-xl">{site.flagship.type}</p>
            <p className="mt-4 text-cream/60">
              No lineup yet. No dates yet. Just a promise — you&apos;ll want to say{" "}
              <span className="text-sun">“I was there before it was announced.”</span>
            </p>
            <div className="mt-8 flex justify-center">
              <CTAButton href="#dreamlist" className="!bg-cream !text-ink hover:!bg-sun">
                Get First Access ✦
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
