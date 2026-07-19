"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { scrollToId } from "@/hooks/use-lenis";
import { isNight, toggleNight } from "@/lib/night";
import { Magnetic } from "@/components/ui";

const LINKS = [
  ["About", "#about"],
  ["Experiences", "#experiences"],
  ["The Dream", "#dream"],
  ["Map", "#map"],
  ["Timeline", "#timeline"],
  ["Journal", "#journal"],
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [night, setNight] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setNight(isNight());
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e: React.MouseEvent, hash: string) => {
    e.preventDefault();
    setOpen(false);
    scrollToId(hash);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[80]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={`mt-4 flex items-center justify-between rounded-full border border-(--line) bg-(--glass) px-5 py-3 backdrop-blur-xl transition-shadow duration-300 ${
            scrolled ? "shadow-lg shadow-ink/5" : ""
          }`}
        >
          {/* Logo */}
          <a
            href="#top"
            onClick={(e) => go(e, "#top")}
            data-cursor
            className="flex items-center gap-2.5"
            aria-label="CCU.Vibe — back to top"
          >
            <Image
              src="/logo-ccu-vibe.jpg"
              alt="CCU.Vibe logo"
              width={80}
              height={60}
              priority
              className="h-10 w-auto rounded-lg border border-ink/10 object-cover"
            />
            <span className="hidden font-heading text-lg font-bold tracking-tight md:inline">
              CCU<span className="text-coral">.</span>Vibe
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-7 lg:flex">
            {LINKS.map(([label, hash]) => (
              <li key={hash}>
                <a
                  href={hash}
                  onClick={(e) => go(e, hash)}
                  className="text-sm font-medium text-(--muted) transition-colors hover:text-coral"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right cluster */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setNight(toggleNight())}
              aria-label={night ? "Switch to day mode" : "Switch to night mode"}
              data-cursor
              className="grid size-10 place-items-center rounded-full border border-(--line) text-base transition-colors hover:border-coral"
            >
              {night ? "☀️" : "🌙"}
            </button>

            <div className="hidden sm:block">
              <Magnetic>
                <a
                  href="#dreamlist"
                  onClick={(e) => go(e, "#dreamlist")}
                  data-cursor
                  className="inline-flex items-center gap-1.5 rounded-full bg-(--fg) px-5 py-2.5 font-heading text-sm font-semibold text-(--bg) transition-colors hover:bg-coral hover:text-ink"
                >
                  Join The Dreamlist <span aria-hidden>✦</span>
                </a>
              </Magnetic>
            </div>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              data-cursor
              className="grid size-10 place-items-center rounded-full border border-(--line) lg:hidden"
            >
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-full bg-current transition-transform duration-300 ${open ? "translate-y-[5px] rotate-45" : ""}`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-0.5 w-full bg-current transition-transform duration-300 ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="mx-4 mt-2 rounded-3xl border border-(--line) bg-(--card) p-6 shadow-2xl lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {LINKS.map(([label, hash], i) => (
                <motion.li
                  key={hash}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <a
                    href={hash}
                    onClick={(e) => go(e, hash)}
                    className="block rounded-xl px-3 py-3 font-heading text-2xl font-semibold transition-colors hover:bg-(--bg) hover:text-coral"
                  >
                    {label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <a
              href="#dreamlist"
              onClick={(e) => go(e, "#dreamlist")}
              className="mt-4 block rounded-full bg-(--fg) px-6 py-4 text-center font-heading font-semibold text-(--bg)"
            >
              Join The Dreamlist ✦
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
