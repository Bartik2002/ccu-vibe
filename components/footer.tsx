"use client";

import Image from "next/image";
import { useState } from "react";
import { site, socials } from "@/data/site";
import { saveSignup } from "@/lib/supabase";
import { toast } from "@/lib/toast";
import { scrollToId } from "@/hooks/use-lenis";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function Footer() {
  const [email, setEmail] = useState("");
  const [saving, setSaving] = useState(false);

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (saving) return;
    const trimmed = email.trim().toLowerCase();
    if (!EMAIL_RE.test(trimmed)) {
      toast("Hmm, that email doesn't look right. Try again?");
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
        ? "You're already on the list."
        : "Subscribed. First dispatch lands Friday morning."
    );
  };

  const go = (e: React.MouseEvent, hash: string) => {
    e.preventDefault();
    scrollToId(hash);
  };

  return (
    <footer className="border-t border-(--line) bg-ink text-cream py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Studio Masthead */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 pb-12 border-b border-cream/15">
          {/* Brand & Mission (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <Image
                  src="/logo-ccu-vibe.jpg"
                  alt="CCU.Vibe"
                  width={36}
                  height={36}
                  className="size-9 border border-cream/20 object-cover"
                />
                <span className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-cream leading-none">
                  CCU<span className="text-sun">.</span>VIBE
                </span>
              </div>
              <p className="mt-4 max-w-md font-mono text-xs uppercase tracking-[0.18em] text-cream/70 leading-relaxed">
                Kolkata&apos;s live cultural calendar. Straight from the venue, zero surcharges.
              </p>
            </div>

            <div className="mt-8 font-mono text-[11px] text-cream/50 uppercase tracking-[0.2em]">
              <span>EST. 2026 // KOLKATA</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-sun font-bold mb-4">
              Directory
            </p>
            <ul className="space-y-2.5 font-mono text-xs uppercase tracking-wider text-cream/75">
              <li>
                <a
                  href="#events"
                  onClick={(e) => go(e, "#events")}
                  className="hover:text-sun transition-colors"
                >
                  Dates [07]
                </a>
              </li>
              <li>
                <a
                  href="#venues"
                  onClick={(e) => go(e, "#venues")}
                  className="hover:text-sun transition-colors"
                >
                  Venues [06]
                </a>
              </li>
              <li>
                <a
                  href="#kolkata"
                  onClick={(e) => go(e, "#kolkata")}
                  className="hover:text-sun transition-colors"
                >
                  Neighbourhoods [09]
                </a>
              </li>
              <li>
                <a
                  href="/events"
                  className="hover:text-sun transition-colors"
                >
                  All Listings
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => go(e, "#about")}
                  className="hover:text-sun transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#dreamlist"
                  onClick={(e) => go(e, "#dreamlist")}
                  className="text-sun hover:underline"
                >
                  The Dreamlist ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Box (3 cols) */}
          <div className="lg:col-span-3">
            <p className="font-mono text-xs uppercase tracking-widest text-sun font-bold mb-4">
              Friday Dispatch
            </p>
            <p className="font-mono text-xs text-cream/70 mb-4">
              Three things worth leaving home for. Every Friday morning.
            </p>

            <form onSubmit={subscribe} noValidate className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@calcutta.in"
                className="w-full border border-cream/20 bg-cream/5 px-3.5 py-2.5 font-mono text-xs text-cream placeholder:text-cream/40 focus:border-sun focus:outline-none"
              />
              <button
                type="submit"
                disabled={saving}
                data-cursor
                className="w-full border border-sun bg-sun px-4 py-2.5 font-heading text-xs font-bold uppercase tracking-wider text-ink transition-colors hover:bg-cream hover:border-cream hover:text-ink disabled:opacity-60"
              >
                {saving ? "Saving…" : "Get Friday Dispatch ↗"}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-cream/50 uppercase tracking-widest">
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} {site.brand}</span>
            <span>•</span>
            <span>KOLKATA, WB</span>
          </div>

          <div className="flex items-center gap-6">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sun transition-colors"
              >
                {s.name} ↗
              </a>
            ))}

          </div>
        </div>
      </div>
    </footer>
  );
}
