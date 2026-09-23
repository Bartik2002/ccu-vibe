"use client";

import Image from "next/image";
import Link from "next/link";
import { featuredEvent } from "@/data/site";
import { toast } from "@/lib/toast";

export default function FeaturedEvent() {
  const handleBooking = () => {
    toast(`✦ Pass reserved for "${featuredEvent.title}". Check your Dreamlist confirmation.`);
  };

  return (
    <section
      id="featured"
      className="relative border-b border-(--line) bg-ink text-cream py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-cream/20 pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-sun">
              <span className="inline-block size-2 rounded-full bg-sun animate-pulse" />
              <span>TONIGHT IN KOLKATA // HEADLINER</span>
            </div>
            <h2 className="mt-2 font-display text-7xl sm:text-8xl lg:text-9xl font-bold tracking-tight text-cream uppercase leading-[0.85] select-none">
              TONIGHT<span className="text-sun">.</span>
            </h2>
          </div>
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-cream/60">
            <span>VOL. 2026 • ISSUE NO. 11</span>
          </div>
        </div>

        {/* Poster Composition */}
        <div className="mt-12 grid grid-cols-1 gap-8 border border-cream/20 bg-ink lg:grid-cols-12">
          {/* Left Column (7 cols): Large Visual Plate */}
          <div className="relative min-h-[380px] lg:col-span-7 lg:min-h-[580px] overflow-hidden border-b border-cream/20 lg:border-b-0 lg:border-r">
            <Image
              src={featuredEvent.photo.src}
              alt={featuredEvent.photo.alt}
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Halftone texture overlay */}
            <div
              aria-hidden
              className="halftone absolute inset-0 opacity-20 pointer-events-none"
            />

            {/* Poster Corner Badges */}
            <div className="absolute top-4 left-4 border border-ink bg-sun px-3 py-1 font-mono text-xs font-bold uppercase tracking-[0.18em] text-ink">
              {featuredEvent.category} • FLAGSHIP
            </div>

            <div
              className="absolute top-4 right-4 border border-cream/30 bg-ink/90 px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] text-sun font-bold animate-float-slow select-none"
              style={{ "--r": "-2deg" } as React.CSSProperties}
            >
              ● {featuredEvent.status}
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between border border-cream/20 bg-ink/95 p-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream/60">LOCATION</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="relative flex size-2 items-center justify-center">
                    <span className="map-ping absolute inline-flex size-full rounded-full bg-sun opacity-75" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-sun" />
                  </span>
                  <p className="font-heading text-lg font-semibold text-cream">
                    {featuredEvent.venue}
                  </p>
                </div>
              </div>
              <span className="font-mono text-xs text-sun uppercase tracking-[0.2em] font-bold">
                {featuredEvent.area}
              </span>
            </div>
          </div>

          {/* Right Column (5 cols): Editorial Event Card / Ticket Stub */}
          <div className="flex flex-col justify-between p-6 sm:p-10 lg:col-span-5">
            <div>
              {/* Oversized Event Number & Category */}
              <div className="flex items-baseline justify-between border-b border-cream/15 pb-4">
                <span className="font-display text-8xl sm:text-9xl tracking-tight text-sun leading-none select-none">
                  01
                </span>
                <div className="text-right font-mono text-xs uppercase tracking-[0.2em] text-cream/60">
                  <p>SEASON 2026</p>
                  <p className="text-sun font-bold">OFFICIAL SELECTION</p>
                </div>
              </div>

              {/* Title */}
              <Link href={`/events/${featuredEvent.id}`} className="group block mt-8">
                <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-cream leading-[1.05] group-hover:text-sun transition-colors">
                  {featuredEvent.title}
                </h3>
              </Link>

              {/* Blurb */}
              <p className="mt-6 text-sm sm:text-base text-cream/75 leading-relaxed font-body">
                {featuredEvent.blurb}
              </p>

              {/* Editorial Specs / Ticket Data */}
              <div className="mt-8 divide-y divide-cream/15 border-y border-cream/15 font-mono text-xs">
                <div className="flex items-center justify-between py-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream/50">Date</span>
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold text-cream">{featuredEvent.date}</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream/50">Time</span>
                  <span className="font-mono text-xs uppercase tracking-wider text-cream">{featuredEvent.time}</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream/50">Price</span>
                  <span className="font-display text-2xl tracking-tight text-sun font-bold leading-none">{featuredEvent.price}</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream/50">Access</span>
                  <span className="font-mono text-xs uppercase tracking-wider text-sun font-semibold">Priority Entry for Dreamlist</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-3 pt-6 border-t border-cream/15">
              <button
                type="button"
                onClick={handleBooking}
                data-cursor
                className="group flex-1 inline-flex items-center justify-center gap-2 border border-sun bg-sun px-6 py-4 font-heading text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-cream hover:border-cream hover:text-ink"
              >
                <span>BOOK PASSES</span>
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
                className="inline-flex items-center justify-center border border-cream/25 px-5 py-4 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-cream transition-colors hover:border-cream hover:bg-cream/10"
              >
                <span>FULL DOSSIER →</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
