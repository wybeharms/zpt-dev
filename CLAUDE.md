# ZPT Dev — Project Instructions

> Company name: **ZPT Partners** (renamed from "Zero-Person Team" on 2026-05-01). Product/abbrev "ZPT" stays. Domain: `zptpartners.com` (migrated from `zpteam.ai`; both run in parallel during cutover). Logo system was redesigned on 2026-05-02 — see `BRAND.md` at repo root for the full system (colors, typography, asset paths). Live site code may still reference old tokens until the landing-page rebuild.

## What ZPT Is

ZPT Partners is an AI consulting and implementation agency (advisory-only). Wybe visits companies, understands workflows, and builds custom AI setups — local folders, agentic workflows, tool integrations — that the company owns and operates.

- **ZPT Advisory** — Builds tailored AI setups for non-technical teams across sales, marketing, content, and operations. No new software; plugs into existing tools.

Core philosophy: companies own their setup. No vendor lock-in. No data leaves the building.

**Note:** The site previously had a separate "ZPT Sales" product. That has been removed. The site is now advisory-only.

## Tech Stack

- **Framework**: Next.js 16, TypeScript 5, React 19, Tailwind CSS v4
- **Hosting**: Vercel (auto-deploys from `main`)
- **Auth**: NextAuth v5 (beta) + AWS Cognito OIDC
- **Storage**: AWS S3 bucket `zpt-portal-data` (eu-north-1)
- **i18n**: Custom I18nProvider (en, nl, es, it)
- **Domain**: zptpartners.com

## Repo Structure

```
app/
├── (marketing)/          Public pages (Header + Footer via layout)
│   ├── page.tsx          Homepage
│   ├── advisory/         /advisory
│   ├── about/            /about
│   └── resources/        /resources (case studies)
├── portal/               Auth-gated customer portal (PortalShell wrapper)
│   ├── onboarding/       File upload
│   ├── prospects/        Enriched contacts table
│   └── competitors/      Competitor analysis cards
└── api/
    ├── auth/             NextAuth handlers
    └── portal/           S3 data + upload endpoints

components/               Reusable UI (Header, Footer, portal shell)
lib/                      Utilities (auth.ts, s3.ts, i18n.ts)
locales/                  Translation JSON files
docs/                     Architecture docs (architecture.md)
proxy.ts                  Route protection (/portal/*)
```

## Key Commands

```bash
npm run dev       # Dev server (localhost:3000)
npm run build     # Production build
npm run lint      # ESLint
```

## Design Tokens

Source of truth: `BRAND.md` at repo root.

- **Colors**: Navy `#0C0C28`, Cream `#EDE4D3`, Cognac `#A5663C` (default) / `#B97A4B` (on navy, for AA contrast)
- **Logo fonts**: Instrument Serif (letters), Old Standard TT (`./` punctuation in monogram)
- **Body/heading fonts (live site, pending review)**: Cormorant Garamond (headings), Plus Jakarta Sans (body), Source Code Pro (chrome) — these may be updated as part of the landing-page rebuild
- **Logo assets**: `public/brand/zpt-{wordmark,monogram}-{dark,light,cognac}.{svg,png}`
- **Favicon**: `public/favicon.{ico,svg}`, `apple-touch-icon.png`, `web-app-manifest-{192x192,512x512}.png`
- **OG image**: `public/og-image.png` (1200×630)

---

## Planning Protocol

- Confirm the objective before acting.
- Ask clarifying questions one at a time.
- Make plans concise: bullet points, minimal prose.
- Think step by step. Explain reasoning before proceeding.
- After drafting, self-critique against communication guidelines.

## i18n Rule

When Claude changes any text in a locale file (e.g. `locales/en.json`), Claude must apply the equivalent change to all other locale files (`nl.json`, `es.json`, `it.json`) in the same session.

## Interaction Style

Claude should:
- Ask follow-up questions until reaching full clarity
- Challenge assumptions when appropriate
- Be direct and specific — no hedging
- Be critical and objective — honest feedback, not validation
- Keep all outputs concise — cut aggressively
- Reference startup best practices when relevant
