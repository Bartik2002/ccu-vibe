"use client";

import Image from "next/image";
import { useState } from "react";
import { site, socials } from "@/data/site";
import { saveSignup } from "@/lib/supabase";
import { dreamBigger, toast } from "@/lib/toast";
import { Magnetic } from "@/components/ui";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function Footer() {
  const [email, setEmail] = useState("");
  const [saving, setSaving] = useState(false);

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (saving) return;
    const trimmed = email.trim().toLowerCase();
    if (!EMAIL_RE.test(trimmed)) {
      toast("Hmm, that email looks off. One more try?");
      return;
    }
    setSaving(true);
    const result = await saveSignup({ email: trimmed, source: "newsletter" });
    setSaving(false);
    if (!result.ok) {
      toast(result.message);
      return;
    }
    setEmail("");
    toast(
      result.duplicate
        ? "✦ You're already on the list — patience, dreamer."
        : "✦ You're on the list, dreamer. First signal coming soon."
    );
  };

  return (
    <footer className="mt-16 rounded-t-[3rem] bg-ink px-4 pb-10 pt-20 text-cream sm:px-6">
      <div className="mx-auto max-w-7xl">
        {/* Big statement */}
        <p className="font-display leading-[0.85]">
          <span className="block text-[10vw] sm:text-[7vw]">WHERE THE CITY</span>
          <span
            className="block text-[10vw] text-transparent sm:text-[7vw]"
            style={{
              backgroundImage: "linear-gradient(95deg,#F96E5B,#FFD85E 50%,#C9B7FF)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            DREAMS TOGETHER.
          </span>
        </p>

        {/* Newsletter + socials */}
        <div className="mt-14 grid gap-10 border-t border-cream/15 pt-10 md:grid-cols-2">
          <div>
            <h3 className="font-heading text-xl font-semibold">Get the first signal.</h3>
            <form onSubmit={subscribe} noValidate className="mt-4 flex max-w-md gap-2">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@dreams.in"
                autoComplete="email"
                className="w-full rounded-full border border-cream/20 bg-cream/5 px-5 py-3.5 text-cream outline-none transition-colors placeholder:text-cream/35 focus:border-sun"
              />
              <button
                type="submit"
                data-cursor
                disabled={saving}
                className="shrink-0 rounded-full bg-sun px-6 py-3.5 font-heading font-semibold text-ink transition-colors hover:bg-coral disabled:cursor-wait disabled:opacity-60"
              >
                {saving ? "…" : "Join ✦"}
              </button>
            </form>
          </div>

          <div className="flex flex-wrap items-start gap-3 md:justify-end">
            {socials.map((s) => (
              <Magnetic key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor
                  className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-5 py-3 font-heading text-sm font-medium transition-colors hover:border-sun hover:text-sun"
                >
                  {s.name} <span aria-hidden>↗</span>
                </a>
              </Magnetic>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-cream/15 pt-8 text-xs text-cream/45">
          <p className="flex items-center gap-3">
            <Image
              src="/logo-ccu-vibe.jpg"
              alt="CCU.Vibe logo"
              width={64}
              height={48}
              className="h-9 w-auto rounded-md"
            />
            © {new Date().getFullYear()} {site.brand} — Made with 💛 in Kolkata.
          </p>
          <p className="flex items-center gap-4">
            <a
              href="https://thuk.studio"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor
              className="transition-colors hover:text-sun"
            >
              Developed by <span className="font-heading font-semibold">Thuk.studio</span> ↗
            </a>
            <button
              onClick={dreamBigger}
              data-cursor
              aria-label="A little secret"
              className="text-base opacity-30 transition-opacity hover:opacity-100"
            >
              ✦
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
}
