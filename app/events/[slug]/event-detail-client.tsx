"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Marquee from "@/components/marquee";
import { toast } from "@/lib/toast";
import type { KolkataEvent } from "@/types";

type Props = {
  event: KolkataEvent;
  relatedEvents: KolkataEvent[];
};

export default function EventDetailClient({ event, relatedEvents }: Props) {
  const [reserved, setReserved] = useState(false);

  const handleBooking = () => {
    setReserved(true);
    toast(`✦ Pass reserved for "${event.title}". Admission docket added to Dreamlist.`);
  };

  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      toast("✦ Event dispatch link copied to clipboard.");
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-(--bg) text-(--fg) pt-20 sm:pt-24 select-none">
        {/* Top Trail & Masthead */}
        <div className="border-b border-(--line)">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-(--muted) sm:px-6 lg:px-8">
            <Link
              href="/events"
              data-cursor
              className="group flex items-center gap-2 text-(--fg) hover:text-coral transition-colors"
            >
              <span className="transition-transform group-hover:-translate-x-1">←</span>
              <span>ALL EVENTS // DIRECTORY</span>
            </Link>
            <div className="hidden sm:flex items-center gap-4">
              <span>PLATE {event.num}</span>
              <span>•</span>
              <span className="text-coral">WARD // {event.area.split("//")[0]}</span>
            </div>
            <span className="text-coral font-bold">DISPATCH 2026</span>
          </div>
        </div>

        {/* 1. GIGANTIC POSTER HEADER */}
        <header className="border-b border-(--line) py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest text-(--muted) mb-6">
              <span className="border border-(--line) bg-(--card) px-3 py-1 text-coral font-bold">
                {event.category}
              </span>
              <span>●</span>
              <span>{event.area}</span>
              <span>●</span>
              <span className="text-coral font-semibold">{event.status}</span>
            </div>

            {/* Giant Title */}
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[8.5vw] font-bold tracking-tight text-(--fg) uppercase leading-[0.88] max-w-6xl">
              {event.title}
            </h1>

            <p className="mt-6 max-w-3xl font-heading text-lg sm:text-2xl text-(--muted) leading-relaxed">
              {event.blurb}
            </p>
          </div>
        </header>

        {/* 2. MAIN POSTER BODY: Large Visual + Printed Ticket Docket */}
        <section className="border-b border-(--line) py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column (7 cols): Large Tactile Screenprint Image */}
              <div className="lg:col-span-7">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden border-2 border-(--line) bg-(--card)">
                  <Image
                    src={event.photo.src}
                    alt={event.photo.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="object-cover"
                  />

                  {/* Halftone texture overlay */}
                  <div
                    aria-hidden
                    className="halftone absolute inset-0 opacity-15 pointer-events-none"
                  />

                  {/* Corner Map-Ping Coordinate Stamp */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2.5 border border-ink bg-coral px-3.5 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-cream">
                    <span className="relative flex size-2 items-center justify-center">
                      <span className="map-ping absolute inline-flex size-full rounded-full bg-cream opacity-75" />
                      <span className="relative inline-flex size-1.5 rounded-full bg-cream" />
                    </span>
                    <span>{event.venue}</span>
                  </div>

                  {/* Floating Circular Vintage Stamp */}
                  <div
                    className="absolute top-4 right-4 size-20 rounded-full border border-cream/30 bg-ink/90 p-2 text-center text-cream flex flex-col items-center justify-center animate-float-slow select-none"
                    style={{ "--r": "3deg" } as React.CSSProperties}
                  >
                    <svg
                      aria-hidden
                      viewBox="0 0 64 64"
                      className="absolute inset-0 size-full animate-spin-slow pointer-events-none text-coral/40"
                    >
                      <circle
                        cx="32"
                        cy="32"
                        r="29"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                      />
                    </svg>
                    <span className="font-display text-base tracking-wider text-coral leading-none relative z-10">
                      CCU
                    </span>
                    <span className="font-mono text-[8px] uppercase tracking-widest text-cream/70 relative z-10">
                      LIVE ROOM
                    </span>
                  </div>
                </div>

                {/* Photo Caption Strip */}
                <div className="mt-3 flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-(--muted)">
                  <span>ARCHIVE CAPTURE // PROSCENIUM SPEC</span>
                  <span>100% INDEPENDENT</span>
                </div>
              </div>

              {/* Right Column (5 cols): Printed Physical Ticket Docket & Strong CTA */}
              <div className="lg:col-span-5">
                <div className="border-2 border-dashed border-(--fg) bg-(--card) p-6 sm:p-8 relative">
                  {/* Ticket Header */}
                  <div className="flex items-center justify-between border-b-2 border-dashed border-(--line) pb-4 font-mono text-xs uppercase tracking-widest text-(--muted)">
                    <div className="flex items-center gap-2">
                      <span className="inline-block size-2 rounded-full bg-coral animate-ping" />
                      <span className="font-bold text-(--fg)">OFFICIAL ADMISSION DOCKET</span>
                    </div>
                    <span>NO. {event.num.replace(/[^0-9]/g, "") || "01"}</span>
                  </div>

                  {/* Primary Logistics Grid */}
                  <div className="mt-6 space-y-5">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-(--muted) block">
                        CALENDAR DATE
                      </span>
                      <p className="font-display text-3xl sm:text-4xl text-(--fg) tracking-tight leading-none mt-1">
                        {event.dayOfWeek}, {event.date}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 border-t border-(--line) pt-4">
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-(--muted) block">
                          DOORS & TIME
                        </span>
                        <p className="font-heading text-base font-semibold text-(--fg) mt-1">
                          {event.time}
                        </p>
                      </div>
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-(--muted) block">
                          ADMISSION TIER
                        </span>
                        <p className="font-display text-2xl font-bold text-coral mt-0.5">
                          {event.price}
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-(--line) pt-4">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-(--muted) block">
                        STAGE VENUE
                      </span>
                      <p className="font-heading text-lg font-bold text-(--fg) mt-1">
                        {event.venue}
                      </p>
                      <p className="font-mono text-xs text-(--muted) mt-0.5">
                        {event.area}
                      </p>
                    </div>

                    <div className="border-t border-(--line) pt-4">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-(--muted) block">
                        STATUS & CAPACITY
                      </span>
                      <div className="mt-1 flex items-center gap-2">
                        <span className="inline-block size-2 rounded-full bg-coral" />
                        <span className="font-heading text-sm font-semibold uppercase text-coral">
                          {event.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Strong Booking CTA (NOT an ecommerce cart) */}
                  <div className="mt-8 pt-6 border-t-2 border-dashed border-(--line) space-y-3">
                    <button
                      type="button"
                      onClick={handleBooking}
                      data-cursor
                      className="group w-full flex items-center justify-between border-2 border-(--fg) bg-(--fg) px-6 py-4 font-heading text-sm font-bold uppercase tracking-wider text-(--bg) transition-colors hover:border-coral hover:bg-coral hover:text-ink"
                    >
                      <span>
                        {reserved ? "✓ PASS CONFIRMED" : `RESERVE PASS // ${event.price}`}
                      </span>
                      <span
                        aria-hidden
                        className="text-coral transition-transform duration-200 group-hover:translate-x-1 group-hover:text-ink"
                      >
                        →
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={handleShare}
                      data-cursor
                      className="w-full flex items-center justify-center gap-2 border border-(--line) bg-transparent py-3 font-mono text-xs uppercase tracking-wider text-(--muted) transition-colors hover:border-(--fg) hover:text-(--fg)"
                    >
                      <span>SHARE EVENT DISPATCH</span>
                      <span>↗</span>
                    </button>
                  </div>

                  {/* Barcode & Colophon Accent */}
                  <div className="mt-6 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.25em] text-(--muted) pt-4 border-t border-(--line)">
                    <span>CCU.VIBE // DIRECT TICKET</span>
                    <span>||||||| | |||| ||| ||</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. EDITORIAL NARRATIVE & SPECIFICATIONS */}
        <section className="border-b border-(--line) py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column (7 cols): In-depth Cultural Storytelling */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 border border-(--line) bg-(--card) px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-(--muted) mb-6">
                  <span className="text-coral">✦</span>
                  <span>CURATORIAL NOTES</span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-(--fg) uppercase leading-none">
                  THE ATMOSPHERE &amp; THE STAGE
                </h2>

                <div className="mt-8 space-y-6 font-body text-base sm:text-lg text-(--muted) leading-relaxed">
                  <p>
                    {event.blurb}
                  </p>
                  <p>
                    In a city where evening discussions outlast the performance itself, this session
                    brings together artists and audiences without the sanitized distance of corporate
                    arenas. Expect unscripted moments, acoustic intimacy, and the electric buzz of
                    Kolkata&apos;s active cultural circuit.
                  </p>
                </div>

                {/* Cultural Pullquote */}
                <div className="mt-10 border-y-2 border-(--line) py-6 font-heading text-xl italic font-medium text-(--fg)">
                  &ldquo;Kolkata does not sit quietly in auditoriums. The crowd is part of the instrumentation.&rdquo;
                </div>
              </div>

              {/* Right Column (5 cols): Technical Event Information Dossier */}
              <div className="lg:col-span-5 border border-(--line) bg-(--card) p-6 sm:p-8">
                <div className="border-b border-(--line) pb-4 font-mono text-xs uppercase tracking-widest text-(--muted) flex items-center justify-between">
                  <span>SPECIFICATIONS // VENUE FIELD GUIDE</span>
                  <span className="text-coral">04 PARAMS</span>
                </div>

                <div className="divide-y divide-(--line) text-sm font-mono uppercase">
                  <div className="py-4">
                    <span className="text-[10px] text-(--muted) block">VENUE SETUP</span>
                    <span className="font-heading font-semibold text-(--fg) block mt-1 normal-case text-base">
                      {event.venue} — Dedicated proscenium stage with tiered floor seating and open acoustics.
                    </span>
                  </div>

                  <div className="py-4">
                    <span className="text-[10px] text-(--muted) block">NEAREST TRANSIT</span>
                    <span className="font-heading font-semibold text-(--fg) block mt-1 normal-case text-base">
                      Direct access via Metro station and arterial bus routes. Auto-rickshaw stands immediately outside the gates.
                    </span>
                  </div>

                  <div className="py-4">
                    <span className="text-[10px] text-(--muted) block">DOOR POLICY</span>
                    <span className="font-heading font-semibold text-(--fg) block mt-1 normal-case text-base">
                      Doors open 45 minutes prior to scheduled start. Direct confirmation name check at entrance; zero bot scalping.
                    </span>
                  </div>

                  <div className="py-4">
                    <span className="text-[10px] text-(--muted) block">ADDA &amp; REFRESHMENTS</span>
                    <span className="font-heading font-semibold text-(--fg) block mt-1 normal-case text-base">
                      Local tea vendors, street snack counters, and courtyard gathering spaces open before and after the session.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. RELATED EVENTS: Varied Editorial Cards */}
        {relatedEvents.length > 0 && (
          <section className="py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap items-end justify-between gap-4 border-b border-(--line) pb-6">
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-coral font-bold">
                    <span className="inline-block size-2 rounded-full bg-coral" />
                    <span>NEXT ON THE CIRCUIT</span>
                  </div>
                  <h3 className="mt-2 font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-(--fg) uppercase leading-none">
                    RELATED EVENTS<span className="text-coral">.</span>
                  </h3>
                </div>

                <Link
                  href="/events"
                  data-cursor
                  className="font-mono text-xs uppercase tracking-wider text-coral hover:underline"
                >
                  VIEW ALL DIRECTORY (07) →
                </Link>
              </div>

              {/* Varied Cards Grid */}
              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedEvents.map((rel, idx) => (
                  <article
                    key={rel.id}
                    className="border-2 border-(--line) bg-(--card) flex flex-col justify-between transition-all duration-300 hover:border-coral"
                  >
                    <div>
                      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-(--line)">
                        <Image
                          src={rel.photo.src}
                          alt={rel.photo.alt}
                          fill
                          sizes="(min-width: 768px) 33vw, 100vw"
                          className="object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute top-3 left-3 border border-ink bg-sun px-2.5 py-0.5 font-mono text-[9px] font-bold text-ink uppercase">
                          {rel.category}
                        </div>
                        <div className="absolute bottom-3 right-3 border border-ink bg-coral px-2.5 py-0.5 font-mono text-[10px] font-bold text-cream uppercase">
                          {rel.price}
                        </div>
                      </div>

                      <div className="p-5">
                        <div className="font-mono text-[10px] uppercase text-(--muted) tracking-wider">
                          PLATE {rel.num} • {rel.date}
                        </div>

                        <Link href={`/events/${rel.id}`} className="group block mt-2">
                          <h4 className="font-display text-2xl font-bold uppercase text-(--fg) group-hover:text-coral transition-colors leading-tight">
                            {rel.title}
                          </h4>
                        </Link>

                        <p className="mt-2 font-body text-xs text-(--muted) line-clamp-2">
                          {rel.blurb}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 pt-0 border-t border-(--line) mt-4 flex items-center justify-between font-mono text-xs">
                      <span className="text-(--muted) text-[11px] truncate max-w-[140px]">
                        {rel.venue}
                      </span>
                      <Link
                        href={`/events/${rel.id}`}
                        data-cursor
                        className="font-bold text-coral hover:underline"
                      >
                        VIEW DISPATCH →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        <Marquee theme="mint" speed="36s" />
      </main>

      <Footer />
    </>
  );
}
