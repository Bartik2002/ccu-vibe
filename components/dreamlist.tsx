"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { benefits } from "@/data/site";
import { confettiBurst } from "@/lib/confetti";
import { saveSignup } from "@/lib/supabase";
import { toast } from "@/lib/toast";
import { Magnetic, Reveal, SectionTag, SplitWords } from "@/components/ui";

type Dreamer = { name: string; email: string; num: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const STORAGE_KEY = "ccu-dreamer";

export default function Dreamlist() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [dreamer, setDreamer] = useState<Dreamer | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setDreamer(JSON.parse(saved));
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
      setError("Tell us your name, dreamer.");
      return;
    }
    if (!EMAIL_RE.test(trimmedEmail)) {
      setError("That email doesn't look right — try again?");
      return;
    }
    setError(null);
    setSaving(true);
    const result = await saveSignup({ name: trimmedName, email: trimmedEmail, source: "dreamlist" });
    setSaving(false);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    if (result.duplicate) toast("✦ Good news: that email is already on the Dreamlist.");
    const next: Dreamer = {
      name: trimmedName,
      email: trimmedEmail,
      num: String(Math.floor(Math.random() * 899) + 101).padStart(4, "0"),
    };
    setDreamer(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore storage failures
    }
    confettiBurst(120);
  };

  const reset = () => {
    setDreamer(null);
    setName("");
    setEmail("");
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore storage failures
    }
  };

  return (
    <section id="dreamlist" className="mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-36">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-(--line) bg-lilac/15 p-8 sm:p-14">
        {/* Décor */}
        <div aria-hidden className="absolute -right-20 -top-20 size-72 rounded-full bg-sun/30 blur-3xl" />
        <div aria-hidden className="absolute -bottom-24 -left-16 size-72 rounded-full bg-coral/20 blur-3xl" />

        <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: pitch */}
          <div>
            <SectionTag color="bg-lilac">The Dreamlist</SectionTag>
            <h2 className="mt-6 font-heading text-4xl font-semibold leading-[1.04] sm:text-6xl">
              <SplitWords text="Become A Founding Member." />
            </h2>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-lg text-(--muted)">
                Before the artists. Before the tickets. Before the city knows what hit it — the
                Dreamlist knows first.
              </p>
            </Reveal>

            <ul className="mt-8 space-y-3">
              {benefits.map((b, i) => (
                <Reveal key={b} delay={0.12 + i * 0.07}>
                  <li className="flex items-center gap-3 font-heading text-lg font-medium">
                    <span
                      className={`grid size-7 shrink-0 place-items-center rounded-full text-xs text-ink ${
                        ["bg-coral", "bg-sun", "bg-sky", "bg-mint", "bg-tangerine"][i % 5]
                      }`}
                      aria-hidden
                    >
                      ✦
                    </span>
                    {b}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Right: form / member card */}
          <div className="flex items-center">
            <AnimatePresence mode="wait">
              {dreamer ? (
                <motion.div
                  key="card"
                  initial={{ opacity: 0, rotateY: 90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full rounded-3xl bg-ink p-8 text-cream shadow-2xl"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-heading text-xs font-semibold uppercase tracking-[0.25em] text-sun">
                      Founding Dreamer
                    </p>
                    <Image
                      src="/logo-calcutta-dreams.jpg"
                      alt="The Calcutta Dreams logo"
                      width={80}
                      height={63}
                      className="h-12 w-auto rounded-lg"
                    />
                  </div>
                  <p className="mt-8 font-display text-5xl sm:text-6xl">{dreamer.name}</p>
                  <p className="mt-2 font-heading text-cream/60">Member #{dreamer.num}</p>
                  <div className="mt-8 border-t border-cream/15 pt-6">
                    <p className="text-sm leading-relaxed text-cream/70">
                      You&apos;re on the Dreamlist. You&apos;ll hear the first artist announcement
                      before the rest of the city does. 🤫
                    </p>
                  </div>
                  <button
                    onClick={reset}
                    data-cursor
                    className="mt-6 text-xs uppercase tracking-[0.18em] text-cream/40 underline-offset-4 transition-colors hover:text-coral hover:underline"
                  >
                    Wrong details? Start over
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.5 }}
                  onSubmit={submit}
                  noValidate
                  className="w-full rounded-3xl border border-(--line) bg-(--card) p-8 shadow-xl"
                >
                  <label htmlFor="dl-name" className="block font-heading text-sm font-semibold">
                    Full Name
                  </label>
                  <input
                    id="dl-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Rabindranath Dreamer"
                    autoComplete="name"
                    className="mt-2 w-full rounded-xl border border-(--line) bg-(--bg) px-4 py-3.5 outline-none transition-colors placeholder:text-(--muted)/50 focus:border-coral"
                  />

                  <label htmlFor="dl-email" className="mt-5 block font-heading text-sm font-semibold">
                    Email Address
                  </label>
                  <input
                    id="dl-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@dreams.in"
                    autoComplete="email"
                    className="mt-2 w-full rounded-xl border border-(--line) bg-(--bg) px-4 py-3.5 outline-none transition-colors placeholder:text-(--muted)/50 focus:border-coral"
                  />

                  <AnimatePresence>
                    {error && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-3 text-sm font-medium text-coral"
                        role="alert"
                      >
                        {error}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <Magnetic className="mt-6 w-full">
                    <button
                      type="submit"
                      data-cursor
                      disabled={saving}
                      className="w-full rounded-full bg-(--fg) px-7 py-4 font-heading font-semibold text-(--bg) transition-colors duration-300 hover:bg-coral hover:text-ink disabled:cursor-wait disabled:opacity-60"
                    >
                      {saving ? "Joining…" : "Join The Dreamlist ✦"}
                    </button>
                  </Magnetic>

                  <p className="mt-4 text-center text-xs text-(--muted)">
                    No spam. Only dreams. Unsubscribe anytime.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
