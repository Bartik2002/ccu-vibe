"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { scrollToId } from "@/hooks/use-lenis";
import { isNight, toggleNight } from "@/lib/night";
import { upcomingEvents, venues } from "@/data/site";

const NAV_LINKS = [
  { label: "Dates", target: "/events", badge: "07" },
  { label: "Venues", target: "#venues", badge: "06" },
  { label: "Dispatch", target: "#about", badge: null },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [night, setNight] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.queueMicrotask(() => {
      if (isNight()) setNight(true);
    });

    const onScroll = () => {
      const isPast = window.scrollY > 20;
      setScrolled((prev) => (prev !== isPast ? isPast : prev));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setSearchOpen(false);
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const go = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    setOpen(false);
    setSearchOpen(false);
    if (target.startsWith("#")) {
      scrollToId(target);
    } else {
      window.location.href = target;
    }
  };

  const filteredEvents = searchQuery.trim()
    ? upcomingEvents.filter(
        (ev) =>
          ev.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          ev.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          ev.venue.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : upcomingEvents.slice(0, 4);

  const filteredVenues = searchQuery.trim()
    ? venues.filter(
        (v) =>
          v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          v.neighborhood.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : venues.slice(0, 3);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[80] border-b transition-colors duration-200 ${
          scrolled
            ? "border-(--line) bg-(--bg)/95 backdrop-blur-md"
            : "border-(--line) bg-(--bg)"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand on Left */}
          <div className="flex items-center gap-6">
            <a
              href="#top"
              onClick={(e) => go(e, "#top")}
              data-cursor
              className="group flex items-center gap-3"
              aria-label="CCU.Vibe — Kolkata Cultural Dispatch"
            >
              <div className="relative size-8 overflow-hidden border border-(--line) bg-(--card)">
                <Image
                  src="/logo-ccu-vibe.jpg"
                  alt="CCU.Vibe"
                  fill
                  sizes="32px"
                  priority
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg font-bold tracking-tight text-(--fg) leading-none">
                  CCU<span className="text-coral">.</span>VIBE
                </span>
                <span className="mt-0.5 font-mono text-[9px] uppercase tracking-widest text-(--muted)">
                  Kolkata Cultural Index
                </span>
              </div>
            </a>
          </div>

          {/* Primary Navigation: Events, Venues, About */}
          <nav
            aria-label="Main"
            className="hidden items-center gap-8 md:flex font-mono text-xs uppercase tracking-widest"
          >
            {NAV_LINKS.map(({ label, target, badge }) => (
              <a
                key={target}
                href={target}
                onClick={(e) => go(e, target)}
                className="group relative flex items-center gap-1.5 py-1 text-(--muted) transition-colors hover:text-(--fg)"
              >
                <span className="relative">
                  {label}
                  <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-coral transition-all duration-200 group-hover:w-full" />
                </span>
                {badge && (
                  <span className="text-[10px] text-coral opacity-80">
                    [{badge}]
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Right Actions: Search / Menu / Day-Night */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Search Trigger */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search events and venues"
              data-cursor
              className="flex items-center gap-2 border border-(--line) bg-(--card) px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-(--muted) transition-colors hover:border-(--fg) hover:text-(--fg)"
            >
              <span aria-hidden className="text-coral">
                ⌕
              </span>
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden text-[10px] opacity-50 lg:inline">⌘K</kbd>
            </button>

            {/* Night / Day Toggle */}
            <button
              type="button"
              onClick={() => setNight(toggleNight())}
              aria-label={night ? "Switch to daylight" : "Switch to night mode"}
              data-cursor
              className="flex items-center gap-2 border border-(--line) bg-(--card) px-2.5 py-1.5 font-mono text-xs uppercase tracking-wider text-(--muted) transition-colors hover:border-(--fg) hover:text-(--fg)"
            >
              <span
                aria-hidden
                className={`inline-block size-1.5 rounded-full ${
                  night ? "bg-lilac" : "bg-coral"
                }`}
              />
              <span className="hidden sm:inline">{night ? "Night" : "Day"}</span>
              <span className="sm:hidden">{night ? "☾" : "☼"}</span>
            </button>


            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              data-cursor
              className="flex size-9 items-center justify-center border border-(--line) bg-(--card) text-(--fg) transition-colors hover:border-(--fg) md:hidden"
            >
              <span className="relative block h-3.5 w-4">
                <span
                  className={`absolute left-0 top-0.5 h-[1.5px] w-full bg-current transition-transform duration-200 ${
                    open ? "translate-y-[5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute bottom-0.5 left-0 h-[1.5px] w-full bg-current transition-transform duration-200 ${
                    open ? "-translate-y-[5px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-(--line) bg-(--bg) md:hidden"
            >
              <div className="mx-auto max-w-7xl px-5 py-6">
                <ul className="divide-y divide-(--line)/40 border-y border-(--line)/40">
                  {NAV_LINKS.map(({ label, target, badge }, index) => (
                    <li key={target}>
                      <a
                        href={target}
                        onClick={(e) => go(e, target)}
                        className="flex items-center justify-between py-3.5 font-heading text-xl font-semibold tracking-tight text-(--fg) transition-colors hover:text-coral"
                      >
                        <span className="flex items-center gap-2">
                          <span className="font-mono text-xs text-coral">
                            0{index + 1}.
                          </span>
                          <span>{label}</span>
                        </span>
                        {badge && (
                          <span className="font-mono text-xs text-(--muted)">
                            {badge} Active
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href="#events"
                    onClick={(e) => go(e, "#events")}
                    className="flex items-center justify-center gap-2 border border-(--fg) bg-(--fg) py-3 text-center font-heading text-xs font-semibold uppercase tracking-wider text-(--bg) transition-colors hover:border-coral hover:bg-coral hover:text-ink"
                  >
                    <span>What&apos;s On Tonight</span>
                    <span aria-hidden className="text-coral">
                      →
                    </span>
                  </a>
                  <p className="text-center font-mono text-[10px] tracking-widest text-(--muted) uppercase">
                    KOLKATA LIVE CALENDAR • 2026
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Editorial Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center bg-ink/75 p-4 pt-20 sm:pt-28">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-2xl border border-(--line) bg-(--bg) text-(--fg) shadow-2xl"
            >
              {/* Search Bar Header */}
              <div className="flex items-center border-b border-(--line) px-4 py-3 sm:px-6">
                <span className="font-mono text-lg text-coral">⌕</span>
                <input
                  type="text"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search artists, venues, neighbourhoods…"
                  className="ml-3 w-full bg-transparent font-heading text-base sm:text-lg text-(--fg) placeholder:text-(--muted) focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="ml-2 border border-(--line) px-2 py-1 font-mono text-[10px] uppercase text-(--muted) hover:border-(--fg) hover:text-(--fg)"
                >
                  ESC
                </button>
              </div>

              {/* Quick Results */}
              <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 divide-y divide-(--line)/50">
                {/* Events Group */}
                <div className="pb-4">
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-coral">
                    Dates ({filteredEvents.length})
                  </p>
                  <div className="space-y-2">
                    {filteredEvents.map((ev) => (
                      <Link
                        key={ev.id}
                        href={`/events/${ev.id}`}
                        onClick={() => setSearchOpen(false)}
                        className="group flex items-center justify-between border border-(--line) bg-(--card) p-3 transition-colors hover:border-(--fg)"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[10px] uppercase text-coral">
                              {ev.category}
                            </span>
                            <span className="text-[10px] text-(--muted)">•</span>
                            <span className="font-mono text-[10px] text-(--muted)">
                              {ev.date}
                            </span>
                          </div>
                          <p className="font-heading text-sm font-semibold text-(--fg) group-hover:text-coral">
                            {ev.title}
                          </p>
                          <p className="font-mono text-xs text-(--muted)">
                            {ev.venue}
                          </p>
                        </div>
                        <span className="font-mono text-xs text-coral">↗</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Venues Group */}
                <div className="pt-4">
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-sky">
                    Rooms ({filteredVenues.length})
                  </p>
                  <div className="space-y-2">
                    {filteredVenues.map((v) => (
                      <a
                        key={v.id}
                        href="#venues"
                        onClick={(e) => go(e, "#venues")}
                        className="group flex items-center justify-between border border-(--line) bg-(--card) p-3 transition-colors hover:border-(--fg)"
                      >
                        <div>
                          <p className="font-heading text-sm font-semibold text-(--fg) group-hover:text-sky">
                            {v.name}
                          </p>
                          <p className="font-mono text-xs text-(--muted)">
                            {v.neighborhood} • {v.type}
                          </p>
                        </div>
                        <span className="font-mono text-xs text-(--muted)">
                          {v.activeEvents} events
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
