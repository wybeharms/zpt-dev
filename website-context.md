# ZPT Website Context

Standing instructions live in `AGENTS.md` and take precedence over older wording preserved in this reference. This file preserves the existing project context and is read when relevant.

This is the public marketing website for ZPT Partners. It is a Next.js app deployed on Vercel. Git repo: `wybeharms/zpt-dev`.

This folder is the website only. The ZPT business operations (accounts, playbook, pricing, outreach, marketing, kits, strategy) live in the sibling repo `~/Sites/zpt/business/`. Read `../business/AGENTS.md` and the relevant sections of `../business/business-guide.md` for company context, positioning, and the confidentiality rules before writing any site copy.

## What this is

- **Product:** zptpartners.com, the firm's public site (ZPT Partners is an AI implementation agency; see the business folder for the full pitch).
- **Stack:** Next.js (App Router) on Vercel.
- **Routes:** `app/` holds the pages (`how-it-works`, `our-work`, `resources`, `team`, `technology`, plus `page.tsx`, `layout.tsx`, `robots.ts`, `sitemap.ts`) and `app/components/`.
- **Assets:** `public/` (logos and brand assets in `public/brand/`). Everything in `public/` is served and deployed, so only web-ready files belong there.
- **Design sources:** `design-sources/landing-page/` holds the uncompressed originals (PNG, MP4) behind the `.webp` and `.mp4` files in `public/landing_page/`. Moved here from `~/Desktop/Wybe/ZPT/Images Backup/` on August 3rd, 2026 so they are backed up by git instead of iCloud only. **Keep them out of `public/`**: they are 35MB and Next.js would serve and deploy every one. Re-export to `public/landing_page/` when a visual changes; never point a component at this folder.
- **Build spec:** `BUILD_BRIEF.md` is the landing-page build spec. `infrastructure.md` covers deploy/hosting. `TODO.md` is the working punch list.

## Brand source of truth

For web tokens, motion, and tagline copy, the live code here is canonical: `app/globals.css` (CSS tokens), `app/components/Hero.tsx` and `Footer.tsx` (hero/footer copy and tagline), `public/brand/` (logo assets). For business surfaces (decks, proposals, one-pager, signatures), the canonical brand reference is `~/Sites/zpt/business/STYLE-GUIDE.md`. When brand changes happen, update `STYLE-GUIDE.md` and the relevant file here together.

## Rules

- Global conventions and `AGENTS.md` apply. Use Wybe and Codex in files, or Claude when referring specifically to Claude. Do not create README.md files.
- Keep this site free of any client-confidential content. Never name a specific ZPT client on the public site without explicit approval (see the confidentiality rule in `../business/AGENTS.md`).
- Standard git workflow: pull before committing, stage by name, never force-push.
