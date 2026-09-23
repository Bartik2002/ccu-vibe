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
      toast("You are already on the list. See you outside.");
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
      className="relative border-b border-(--line) bg-(--bg) text-(--fg) py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          {/* Left 6 Columns: Manifesto & Member Benefits */}
          <div className="lg:col-span-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-lilac font-semibold">
              EARLY DISPATCH
            </p>

            <h2 className="mt-3 font-display text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-(--fg) uppercase leading-[0.85] select-none">
              THE DREAMLIST<span className="text-lilac">.</span>
            </h2>

            <p className="mt-6 font-body text-lg text-(--muted) leading-relaxed max-w-xl">
              Dates before they hit social media. Direct passes, zero markup, no scalpers. Private box office access arrives in your inbox before public announcement.
            </p>
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
                        FOUNDING PASS
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
                        PASS NO. #{dreamer.num}
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
                      You&apos;re on the list. Private box office links arrive before dates go public.
                    </p>

                    <button
                      type="button"
                      onClick={reset}
                      className="mt-6 text-xs font-mono uppercase tracking-wider text-cream/40 hover:text-lilac transition-colors underline underline-offset-4"
                    >
                      Reset Pass
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
                      Direct Entry Pass
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
                      {saving ? "Saving…" : "Join The Dreamlist →"}
                    </button>

                    <p className="mt-4 text-center font-mono text-[10px] text-(--muted) uppercase tracking-widest">
                      NO SPAM. JUST THE DATES.
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
