"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { confettiBurst } from "@/lib/confetti";
import { saveSignup } from "@/lib/supabase";
import { toast } from "@/lib/toast";

type Dreamer = { name: string; email: string; num: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const STORAGE_KEY = "ccu-dreamer";

const BENEFITS = [
  "First artist drop & secret lineups",
  "Zero surcharge priority box office passes",
  "Exclusive door privileges for unlisted venues",
  "Direct community addas with festival curators",
  "Founding member commemorative metal token",
];

export default function Dreamlist() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [dreamer, setDreamer] = useState<Dreamer | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Avoid cascading synchronous re-render warning
        window.queueMicrotask(() => setDreamer(parsed));
      }
    } catch {
      // ignore storage failures
    }
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (saving) return;
    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();
    if (trimmedName.length < 2) {
      setError("Please tell us your name.");
      return;
    }
    if (!EMAIL_RE.test(trimmedEmail)) {
      setError("That email doesn't look valid — try again?");
      return;
    }
    setError(null);
    setSaving(true);
    const result = await saveSignup({
      name: trimmedName,
      email: trimmedEmail,
      source: "dreamlist",
    });
    setSaving(false);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    if (result.duplicate) {
      toast("✦ You are already a founding member on the Dreamlist.");
    }
    const next: Dreamer = {
      name: trimmedName,
      email: trimmedEmail,
      num: String(Math.floor(Math.random() * 899) + 101).padStart(4, "0"),
    };
    setDreamer(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore
    }
    confettiBurst(100);
  };

  const reset = () => {
    setDreamer(null);
    setName("");
    setEmail("");
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  return (
    <section
      id="dreamlist"
      className="relative border-b border-(--line) bg-(--bg) text-(--fg) py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Container */}
        <div className="border border-(--line) bg-(--card) p-6 sm:p-10 lg:p-14">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-(--line) pb-4 font-mono text-xs uppercase tracking-widest text-(--muted)">
            <div className="flex items-center gap-2">
              <span className="inline-block size-2 rounded-full bg-lilac animate-pulse" />
              <span className="text-lilac font-bold">
                FOUNDING CREDENTIAL // THE DREAMLIST
              </span>
            </div>
            <span>TIER: FOUNDING MEMBER PASS</span>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
            {/* Left 6 Columns: Manifesto & Member Benefits */}
            <div className="lg:col-span-6">
              <span className="border border-lilac bg-lilac/15 px-3 py-1 font-mono text-xs font-bold uppercase tracking-[0.2em] text-lilac">
                Early Access Pass
              </span>

              <h2 className="mt-6 font-display text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-(--fg) uppercase leading-[0.85] select-none">
                THE DREAMLIST<span className="text-lilac">.</span>
              </h2>
              <p className="mt-2 font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-lilac font-bold">
                FOUNDING MEMBER PASS // EARLY ACCESS
              </p>

              <p className="mt-6 font-body text-sm sm:text-base text-(--muted) leading-relaxed">
                Before festivals announce line-ups. Before auditoriums open public
                box offices. The Dreamlist is Kolkata&apos;s direct cultural
                collective — no bot scalpers, no commercial markups.
              </p>

              {/* Benefits Checklist */}
              <ul className="mt-8 space-y-3 font-mono text-xs uppercase tracking-wider text-(--fg)">
                {BENEFITS.map((benefit, idx) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <span className="text-lilac font-bold font-mono">
                      [0{idx + 1}]
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right 6 Columns: Interactive Ticket Form / Issued Member Credential */}
            <div className="lg:col-span-6">
              <AnimatePresence mode="wait">
                {dreamer ? (
                  <motion.div
                    key="credential"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="border-2 border-(--fg) bg-ink text-cream p-6 sm:p-8 relative"
                  >
                    <div className="flex items-center justify-between border-b border-cream/20 pb-4">
                      <span className="font-mono text-xs text-lilac uppercase tracking-widest font-bold">
                        FOUNDING MEMBER CREDENTIAL
                      </span>
                      <Image
                        src="/logo-calcutta-dreams.jpg"
                        alt="The Calcutta Dreams"
                        width={60}
                        height={48}
                        className="h-8 w-auto border border-cream/20"
                      />
                    </div>

                    <div className="mt-8">
                      <p className="font-mono text-xs text-lilac uppercase tracking-widest">
                        CREDENTIAL NO. #{dreamer.num}
                      </p>
                      <h3 className="font-display text-5xl sm:text-6xl text-cream font-bold mt-2">
                        {dreamer.name}
                      </h3>
                      <p className="font-mono text-xs text-cream/60 mt-1">
                        REGISTERED: {dreamer.email}
                      </p>
                    </div>

                    {/* Perforated Divider */}
                    <div className="my-8 border-t-2 border-dashed border-cream/20 relative">
                      <div className="absolute -left-8 -top-3 size-6 rounded-full bg-(--card) border border-(--line)" />
                      <div className="absolute -right-8 -top-3 size-6 rounded-full bg-(--card) border border-(--line)" />
                    </div>

                    <p className="font-body text-xs text-cream/70 leading-relaxed">
                      You hold an active founding pass. You will receive private box
                      office codes before dates go public.
                    </p>

                    <button
                      type="button"
                      onClick={reset}
                      className="mt-6 text-xs font-mono uppercase tracking-wider text-cream/40 hover:text-lilac transition-colors underline underline-offset-4"
                    >
                      Update Details / Reset Pass
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={submit}
                    noValidate
                    className="border border-(--line) bg-(--bg) p-6 sm:p-8"
                  >
                    <p className="font-mono text-xs uppercase tracking-widest text-lilac font-bold mb-6">
                      Pass Application // Direct Entry
                    </p>

                    <div className="space-y-4 font-mono text-xs">
                      <div>
                        <label
                          htmlFor="dl-name"
                          className="block uppercase tracking-wider text-(--muted) mb-2"
                        >
                          Full Name
                        </label>
                        <input
                          id="dl-name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Satyajit Roy"
                          className="w-full border border-(--line) bg-(--card) px-4 py-3 text-sm text-(--fg) placeholder:text-(--muted)/40 focus:border-lilac focus:outline-none"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="dl-email"
                          className="block uppercase tracking-wider text-(--muted) mb-2"
                        >
                          Email Address
                        </label>
                        <input
                          id="dl-email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@calcutta.in"
                          className="w-full border border-(--line) bg-(--card) px-4 py-3 text-sm text-(--fg) placeholder:text-(--muted)/40 focus:border-lilac focus:outline-none"
                        />
                      </div>
                    </div>

                    {error && (
                      <p className="mt-3 font-mono text-xs text-lilac bg-ink/90 px-3 py-1 font-bold">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={saving}
                      data-cursor
                      className="mt-6 w-full border border-(--fg) bg-(--fg) py-4 font-heading text-xs font-bold uppercase tracking-wider text-(--bg) hover:bg-lilac hover:border-lilac hover:text-ink transition-colors disabled:opacity-60"
                    >
                      {saving ? "Issuing Pass…" : "Claim Founding Pass ✦"}
                    </button>

                    <p className="mt-4 text-center font-mono text-[10px] text-(--muted) uppercase tracking-widest">
                      NO SPAM • FOUNDING MEMBER CODES ONLY
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
