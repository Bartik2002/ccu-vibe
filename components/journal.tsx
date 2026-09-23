"use client";

import Image from "next/image";
import { articles } from "@/data/site";
import { toast } from "@/lib/toast";
import { Reveal, SectionTag, SplitWords } from "@/components/ui";

export default function Journal() {
  return (
    <section id="journal" className="mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-36">
      <SectionTag color="bg-mint">The Journal</SectionTag>
      <h2 className="mt-6 font-heading text-5xl font-semibold leading-[1.02] sm:text-7xl">
        <SplitWords text="Stories From The Movement." />
      </h2>

      <div className="mt-14">
        {articles.map((article, i) => (
          <Reveal key={article.title} delay={0.06 * i}>
            <a
              href="#journal"
              data-cursor
              onClick={(e) => {
                e.preventDefault();
                toast("📓 The Journal opens with the first reveal. Dreamlist reads it first.");
              }}
              className="group grid grid-cols-[3rem_1fr] items-center gap-4 border-t border-(--line) py-8 transition-all duration-300 last:border-b hover:pl-3 sm:grid-cols-[5rem_7rem_1fr_auto] sm:gap-8"
            >
              <span className="font-display text-4xl text-(--muted)/40 transition-colors group-hover:text-coral sm:text-5xl">
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className="relative hidden h-20 w-28 -rotate-2 overflow-hidden rounded-xl border border-(--line) shadow-sm transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105 sm:block">
                <Image
                  src={article.photo.src}
                  alt={article.photo.alt}
                  fill
                  sizes="112px"
                  className="object-cover grayscale-[30%] transition-all duration-500 group-hover:grayscale-0"
                />
              </span>

              <span>
                <span className="font-heading text-2xl font-semibold leading-tight transition-colors group-hover:text-coral sm:text-4xl">
                  {article.title}
                </span>
                <span className="mt-2 block max-w-xl text-(--muted)">{article.excerpt}</span>
              </span>

              <span className="col-span-2 flex items-center gap-4 sm:col-span-1 sm:flex-col sm:items-end">
                <span className="rounded-full border border-(--line) px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-(--muted)">
                  {article.tag} · {article.time}
                </span>
                <span
                  aria-hidden
                  className="text-2xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-coral"
                >
                  ↗
                </span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
