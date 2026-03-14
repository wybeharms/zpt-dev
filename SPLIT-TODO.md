# ZPT Website Split — TODO for Future Chat

## Context

As of 2026-03-14, ZPT was split into two separate companies:
1. **ZPT Advisory** (zpteam.ai) — AI consulting/implementation agency
2. **Claudester** (separate domain TBD) — managed AI sales product

This website (zpteam.ai) currently contains pages for BOTH products. It needs to be stripped down to advisory-only. The sales product pages, trial flow, and customer portal will move to the new Claudester website (at `~/Sites/claudester/dev/`).

## What to REMOVE from zpteam.ai

### Pages to Remove
- `/sales` — `app/(marketing)/sales/page.tsx` + `components/pages/SalesContent.tsx`
- `/trial` — `app/(marketing)/trial/page.tsx` + `components/pages/TrialContent.tsx` + `components/trial/*`
- `/portal/*` — `app/portal/` (all portal pages: onboarding, prospects, competitors)

### API Routes to Remove
- `app/api/trial/submit/` — trial form submission
- `app/api/trial/upload/` — trial file upload
- `app/api/portal/` — portal data + upload endpoints

### Components to Remove
- `components/pages/SalesContent.tsx`
- `components/pages/TrialContent.tsx`
- `components/trial/` (entire directory)
- `components/portal/` (entire directory: PortalShell, PortalHeader, PortalSidebar)
- `components/EnrichmentTabs.tsx` (sales page component)
- `components/SalesFunnel.tsx` (sales page component)
- `components/ToolLogos.tsx` (sales page component)
- `components/FaqAccordion.tsx` (sales page component)

### Libraries/Utilities to Remove (or keep if advisory portal needed later)
- `lib/s3.ts` — S3 client (only used by portal)
- `lib/auth.ts` — NextAuth config (only used by portal)
- `proxy.ts` — route protection for `/portal/*`

### Dependencies to Possibly Remove
- `@aws-sdk/client-s3` + `@aws-sdk/s3-request-presigner` (portal only)
- `next-auth` (portal only — unless advisory portal is planned)

## What to UPDATE on zpteam.ai

### Homepage (`app/(marketing)/page.tsx` + `components/pages/HomeContent.tsx`)
- Remove the "Sales" product card (keep only Advisory)
- Update hero section: remove "I want help with sales" CTA
- Update copy to be advisory-focused only

### Navigation (`components/Header.tsx` + `components/Footer.tsx`)
- Remove `/sales` link
- Remove `/trial` link
- Remove any portal login links
- Keep: `/advisory`, `/about`, `/resources`

### Resources Page (`components/pages/ResourcesContent.tsx`)
- Remove or update case studies that are sales-product focused
- Keep advisory-relevant case studies

### Locales (`locales/*.json`)
- Remove all sales/trial/portal translation keys from en.json, nl.json, es.json, it.json

## What to KEEP on zpteam.ai

- `/advisory` page — this IS the product
- `/about` page — company info, team profiles
- `/resources` page — advisory case studies
- Auth infrastructure — may be needed for advisory client portal later
- i18n system — still needed
- Design system, fonts, colors — still needed (may evolve)

## Notes for the Developer (Future Claude Chat)

- The portal code has been copied to `~/Sites/claudester/dev/` as a starting point for the Claudester website.
- Wybe wants to design the Claudester website theme and structure in a dedicated chat before building.
- The zpteam.ai design (navy/gold, Cormorant Garamond headings) may stay or evolve for advisory.
- Do NOT delete the sales/portal code until the Claudester website has been built and verified.
