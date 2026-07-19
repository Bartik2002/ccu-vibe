# CCU.Vibe — Where Kolkata Comes Alive. ✦

Teaser site for **The Calcutta Dreams**, the first flagship festival from CCU.Vibe.
Built to maximize Dreamlist signups — no artists, no ticket pricing revealed.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** (theme tokens in `app/globals.css`)
- **Framer Motion** — scroll-linked reveals, horizontal gallery, magnetic buttons
- **Lenis** — smooth scrolling

## Run it

```bash
npm install
npm run dev     # http://localhost:3210
npm run build   # production build
```

## Structure

| Path | What lives there |
| --- | --- |
| `app/` | layout (SEO + Festival JSON-LD), homepage, global styles |
| `components/` | one file per homepage section + `ui.tsx` primitives + `providers.tsx` (cursor, grain, smooth scroll, easter eggs) |
| `data/site.ts` | all copy/content — edit here, CMS-ready swap point |
| `hooks/`, `lib/` | Lenis hook, confetti, night mode, toasts |

## Easter eggs 🥚

- **Konami code** (`↑↑↓↓←→←→BA`) — confetti + secret toast
- Type **`dream`** anywhere — DREAM BIGGER takeover
- Type **`night`** (or use the navbar moon) — night mode, persisted

## Notes

- Dreamlist + footer newsletter signups are stored in **Supabase**
  (`dreamlist_signups` table, insert-only for anonymous visitors via RLS).
  Copy `.env.example` → `.env.local` with your project URL + publishable key.
  Without env vars the forms fall back to demo mode (localStorage only).
- Brand logos live in `public/logo-*.jpg`; photos are hotlinked from
  Wikimedia Commons (CC-licensed) — swap for owned photography (with proper
  attribution in the meantime) before launch. URLs live in `data/site.ts`.
- Fonts: Bebas Neue + Inter (Google), Clash Display (Fontshare).
- Respects `prefers-reduced-motion` (smooth scroll + animations disabled).
