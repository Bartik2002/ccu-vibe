"use client";

import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLenis } from "@/hooks/use-lenis";
import { confettiBurst } from "@/lib/confetti";
import { toggleNight } from "@/lib/night";

/* ------------------------------------------------------------------ */
/* Custom cursor — dot + trailing ring, mix-blend so it works on both   */
/* themes. Fine pointers only; native cursor is hidden via CSS class.   */
/* ------------------------------------------------------------------ */
function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { stiffness: 320, damping: 28, mass: 0.6 });
  const ringY = useSpring(dotY, { stiffness: 320, damping: 28, mass: 0.6 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    window.queueMicrotask(() => setEnabled(true));
    document.documentElement.classList.add("has-cursor");

    const move = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      setHovering(!!t?.closest?.("a, button, input, textarea, [data-cursor]"));
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    return () => {
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [dotX, dotY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        style={{ x: ringX, y: ringY }}
        className="pointer-events-none fixed left-0 top-0 z-[120] mix-blend-difference"
      >
        <motion.div
          animate={{ scale: hovering ? 1.8 : 1, opacity: hovering ? 0.9 : 0.6 }}
          transition={{ duration: 0.25 }}
          className="-ml-5 -mt-5 size-10 rounded-full border border-white"
        />
      </motion.div>
      <motion.div
        aria-hidden
        style={{ x: dotX, y: dotY }}
        className="pointer-events-none fixed left-0 top-0 z-[120] mix-blend-difference"
      >
        <div className="-ml-[5px] -mt-[5px] size-2.5 rounded-full bg-white" />
      </motion.div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Grain — animated film-grain overlay                                  */
/* ------------------------------------------------------------------ */
const NOISE_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E")`;

function Grain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[110] animate-grain opacity-[0.05]"
      style={{ backgroundImage: NOISE_SVG }}
    />
  );
}

/* ------------------------------------------------------------------ */
/* EasterEggs — Konami code, "dream"/"night" typed triggers, toasts,    */
/* and the full-screen DREAM BIGGER moment.                             */
/* ------------------------------------------------------------------ */
const KONAMI = [
  "arrowup", "arrowup", "arrowdown", "arrowdown",
  "arrowleft", "arrowright", "arrowleft", "arrowright",
  "b", "a",
];

function EasterEggs() {
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [dreamOpen, setDreamOpen] = useState(false);
  const keys = useRef<string[]>([]);
  const letters = useRef("");
  const toastTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    console.log(
      "%c✦ CCU.Vibe",
      "font-size:22px;font-weight:bold;color:#F96E5B;",
      "\nDream Bigger. Type it anywhere. 🌙\nPsst: ↑ ↑ ↓ ↓ ← → ← → B A"
    );

    const showToast = (msg: string) => {
      clearTimeout(toastTimer.current);
      setToastMsg(msg);
      toastTimer.current = setTimeout(() => setToastMsg(null), 3200);
    };

    const openDream = () => {
      setDreamOpen(true);
      confettiBurst(70);
      setTimeout(() => setDreamOpen(false), 2800);
    };

    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) return;

      const key = e.key.toLowerCase();

      // Konami code
      keys.current = [...keys.current, key].slice(-KONAMI.length);
      if (keys.current.join(",") === KONAMI.join(",")) {
        keys.current = [];
        confettiBurst(140);
        showToast("🔓 Secret unlocked. Certified superfan — the Dreamlist remembers.");
      }

      // Typed words
      if (/^[a-z]$/.test(key)) {
        letters.current = (letters.current + key).slice(-12);
        if (letters.current.endsWith("dream")) {
          letters.current = "";
          openDream();
        } else if (letters.current.endsWith("night")) {
          letters.current = "";
          const on = toggleNight();
          showToast(on ? "🌙 Night mode. The city glows different." : "☀️ Back to daylight.");
        }
      }
    };

    const onToastEvent = (e: Event) => showToast((e as CustomEvent<string>).detail);
    const onDreamEvent = () => openDream();

    window.addEventListener("keydown", onKey);
    window.addEventListener("ccu:toast", onToastEvent);
    window.addEventListener("ccu:dream", onDreamEvent);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("ccu:toast", onToastEvent);
      window.removeEventListener("ccu:dream", onDreamEvent);
      clearTimeout(toastTimer.current);
    };
  }, []);

  return (
    <>
      {/* Toast */}
      <AnimatePresence>
        {toastMsg && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 left-1/2 z-[130] w-max max-w-[90vw] -translate-x-1/2 border-2 border-ink bg-sun text-ink px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider"
            role="status"
          >
            {toastMsg}
          </motion.div>
        )}
      </AnimatePresence>

      {/* DREAM BIGGER overlay */}
      <AnimatePresence>
        {dreamOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[125] flex flex-col items-center justify-center bg-ink/95 text-center"
            aria-hidden
          >
            <motion.p
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[18vw] leading-[0.85] text-sun"
            >
              DREAM
              <br />
              <span className="text-coral">BIGGER.</span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 font-heading text-cream/70"
            >
              The city hears you. — CCU.Vibe
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ------------------------------------------------------------------ */
function SmoothScroll() {
  useLenis();
  return null;
}

export function Providers() {
  return (
    <>
      <SmoothScroll />
      <Cursor />
      <Grain />
      <EasterEggs />
    </>
  );
}
