# ZPT Dev — Project Instructions

## What ZPT Is

ZPT helps companies operationalize AI — turning tools like Claude and ChatGPT into practical co-workers that understand the business. Two services:

- **ZPT Advisory** — Builds tailored AI setups for non-technical teams across sales, marketing, content, and operations. No new software; plugs into existing tools.
- **ZPT Sales** — Runs AI-powered sales operations end-to-end: prospect sourcing, data enrichment, outreach drafting, pipeline management.

Core philosophy: companies own their setup. No vendor lock-in. No data leaves the building.

## Tech Stack

- **Framework**: Next.js 16, TypeScript 5, React 19, Tailwind CSS v4
- **Hosting**: Vercel (auto-deploys from `main`)
- **Auth**: NextAuth v5 (beta) + AWS Cognito OIDC
- **Storage**: AWS S3 bucket `zpt-portal-data` (eu-north-1)
- **i18n**: Custom I18nProvider (en, nl, es, it)
- **Domain**: zpteam.ai

## Repo Structure

```
app/
├── (marketing)/          Public pages (Header + Footer via layout)
│   ├── page.tsx          Homepage
│   ├── sales/            /sales
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

- **Colors**: Navy `#0C0C28`, Gold `#C9A96E`, Off-white `#FAFAF7`
- **Fonts**: Cormorant Garamond (headings), Plus Jakarta Sans (body), Source Code Pro (logo)

---

## Writing Convention

**Always use "Wybe" (or "the human") and "Claude" instead of pronouns.**
- Never use "I", "you", "me", "my", "your" in any files.
- Example: "Wybe drafts, Claude reviews" (not "I draft, you review").

## Planning Protocol

- Confirm the objective before acting.
- Ask clarifying questions one at a time.
- Make plans concise: bullet points, minimal prose.
- Think step by step. Explain reasoning before proceeding.
- After drafting, self-critique against communication guidelines.

## Interaction Style

Claude should:
- Ask follow-up questions until reaching full clarity
- Challenge assumptions when appropriate
- Be direct and specific — no hedging
- Be critical and objective — honest feedback, not validation
- Keep all outputs concise — cut aggressively
- Reference startup best practices when relevant
