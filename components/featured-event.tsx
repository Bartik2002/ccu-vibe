"use client";

import Image from "next/image";
import Link from "next/link";
import { featuredEvent } from "@/data/site";
import { toast } from "@/lib/toast";

export default function FeaturedEvent() {
  const handleBooking = () => {
    toast(`Pass confirmed for "${featuredEvent.title}". See you outside.`);
  };

  return (
    <section
      id="featured"
      className="relative border-b border-(--line) bg-ink text-cream py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Kicker */}
        <div className="flex items-center justify-between border-b border-cream/20 pb-4 font-mono text-xs uppercase tracking-[0.2em]">
          <span className="text-sun font-bold">HEADLINER // 14 NOV 2026</span>
          <span className="text-cream/50">NAZRUL MANCHA</span>
        </div>

        {/* 1. DOMINANT VISUAL PLATE */}
        <div className="relative mt-8 aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden border border-cream/20 bg-ink">
          <Image
            src={featuredEvent.photo.src}
            alt={featuredEvent.photo.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover transition-transform duration-700 hover:scale-[1.02]"
          />
        </div>

        {/* 2. Typographic Presentation Below Visual */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          {/* Left Column (7 cols): Dominant Title & Blurb */}
          <div className="lg:col-span-7">
            <Link href={`/events/${featuredEvent.id}`} className="group block">
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-cream leading-[1] group-hover:text-sun transition-colors">
                {featuredEvent.title}
              </h2>
            </Link>

            <p className="mt-6 max-w-2xl font-body text-base sm:text-lg text-cream/75 leading-relaxed">
              {featuredEvent.blurb}
            </p>
          </div>

          {/* Right Column (5 cols): Focused Specs & Direct Action */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="divide-y divide-cream/15 border-y border-cream/15 font-mono text-xs">
              <div className="flex items-center justify-between py-3.5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-cream/50">When</span>
                <span className="uppercase font-semibold text-cream">{featuredEvent.date} • {featuredEvent.time}</span>
              </div>
              <div className="flex items-center justify-between py-3.5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-cream/50">Venue</span>
                <span className="uppercase font-semibold text-cream">{featuredEvent.venue} ({featuredEvent.area})</span>
              </div>
              <div className="flex items-center justify-between py-3.5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-cream/50">Pass</span>
                <span className="font-display text-2xl tracking-tight text-sun font-bold leading-none">{featuredEvent.price}</span>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <button
                type="button"
                onClick={handleBooking}
                data-cursor
                className="group inline-flex items-center justify-center gap-3 border border-sun bg-sun px-8 py-4 font-heading text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-cream hover:border-cream"
              >
                <span>GET TICKETS</span>
                <span
                  aria-hidden
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  ↗
                </span>
              </button>

              <Link
                href={`/events/${featuredEvent.id}`}
                data-cursor
                className="font-mono text-xs uppercase tracking-wider text-cream/60 hover:text-cream transition-colors"
              >
                Details →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
