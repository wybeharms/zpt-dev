# ZPT Website Agent Instructions

Updated September 5th, 2026. This file owns standing instructions for the public ZPT marketing website. `CLAUDE.md` is a compatibility pointer. Read [Website Context](website-context.md) for the project map and asset-handling details.

## Purpose And Sources

This is the Next.js marketing site deployed on Vercel. The separate portal lives in `../portal/`. Business context lives in `../business/`. Read `../business/AGENTS.md` and the relevant business guide sections before drafting public copy.

The current website is the brand reference: `app/globals.css`, `app/layout.tsx`, `app/components/Hero.tsx`, `app/components/Footer.tsx`, and `public/brand/`. Business surfaces follow `../business/STYLE-GUIDE.md`. Historical build briefs do not override current code or a newer approved design decision.

## Rules

- For portal UI reference work, read `../business/portal/agent-coordination.md`. Work on the portal's styles. Do not change this marketing site as a side effect.
- Keep client-confidential content out of the public site. Naming a specific client publicly requires Wybe's explicit approval.
- `public/` is deployed and publicly served. Uncompressed originals stay in `design-sources/landing-page/`. Export web-ready assets before using them.
- Preserve current branding. Coordinate accepted brand changes between the relevant website file and the business style guide.
- Other tasks may edit concurrently. Re-read before narrow changes and preserve unrelated work.
- Global writing, filesystem, and git conventions apply. Commit or push only when authorized for this task. Pull with rebase first, inspect changes, stage by name, and stop on conflicts.

Maintain instructions here, project context in `website-context.md`, and verified hosting details in `infrastructure.md`. Update the affected context and system map after structural changes.
