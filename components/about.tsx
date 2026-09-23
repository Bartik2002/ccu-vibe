"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { aboutPhotos } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="relative border-b border-(--line) bg-(--bg) py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-(--line) pb-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-coral font-semibold">
              EDITORIAL
            </p>
            <h2 className="mt-2 font-display text-7xl sm:text-8xl lg:text-9xl font-bold tracking-tight text-(--fg) uppercase leading-[0.85] select-none">
              WHY WE&apos;RE HERE<span className="text-coral">.</span>
            </h2>
          </div>

          <p className="max-w-xs font-mono text-xs uppercase tracking-[0.18em] text-(--muted) leading-relaxed">
            No sponsored listings. No booking fees. Just what&apos;s on.
          </p>
        </div>

        {/* Editorial Manifesto */}
        <div className="mt-12 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-xl font-normal leading-relaxed text-(--muted) sm:text-2xl lg:text-3xl"
          >
            We track what Kolkata actually does after dark. Proscenium stages at{" "}
            <span className="font-medium text-(--fg)">
              Rabindra Sadan
            </span>
            , live brass on{" "}
            <span className="font-medium text-(--fg)">
              Park Street
            </span>
            , addas on{" "}
            <span className="font-medium text-(--fg)">
              College Street
            </span>
            , arena crowds in{" "}
            <span className="font-medium text-(--fg)">
              Salt Lake
            </span>
            , and dusk sessions by the{" "}
            <span className="font-medium text-(--fg)">
              Hooghly
            </span>
            .
          </motion.p>

          {/* Editorial Pullquote */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 border-y border-(--line) py-8 sm:py-10"
          >
            <blockquote className="font-heading text-2xl sm:text-3xl font-medium italic text-(--fg) leading-relaxed">
              “No booking fees. No algorithms telling you where to go. Just the rooms and the people making noise.”
            </blockquote>
            <div className="mt-4 flex items-center justify-between font-mono text-xs uppercase tracking-widest text-(--muted)">
              <span>— CCU.Vibe Desk</span>
              <span>Kolkata, WB</span>
            </div>
          </motion.div>
        </div>

        {/* Photographic Essay (Asymmetric Triptych) */}
        <div className="mt-20 sm:mt-28">
          <div className="mb-6 flex items-center justify-between border-b border-(--line) pb-3 font-mono text-xs uppercase tracking-widest text-(--muted)">
            <span>Plates // Kolkata Archive</span>
            <span>Archive 01–03</span>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-8">
            {aboutPhotos.map((p, i) => {
              const colSpan =
                i === 0
                  ? "md:col-span-5"
                  : i === 1
                  ? "md:col-span-4 md:mt-10"
                  : "md:col-span-3 md:mt-20";
              const heightClass =
                i === 0
                  ? "h-72 sm:h-96"
                  : i === 1
                  ? "h-64 sm:h-80"
                  : "h-56 sm:h-72";

              return (
                <motion.figure
                  key={p.caption}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className={`group flex flex-col ${colSpan}`}
                >
                  <div
                    className={`relative w-full ${heightClass} overflow-hidden border border-(--line) bg-ink/5`}
                  >
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption className="mt-3 flex items-baseline justify-between border-t border-(--line)/60 pt-2 font-mono text-xs text-(--muted)">
                    <span className="font-heading text-xs font-medium uppercase tracking-wide text-(--fg)">
                      {p.caption}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest">
                      Plate 0{i + 1}
                    </span>
                  </figcaption>
                </motion.figure>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
