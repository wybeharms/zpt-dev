# dev-v1 TODO

Open items flagged during code review on 2026-05-06. Captured here so they
don't get lost when sub-pages are still in flight.

## Pre-launch fixes

- [ ] **Sector text on /our-work cards.** `app/our-work/components/ExampleWorkflows.tsx`
  shows "Investment consulting", "Asset management", and "Private equity" as
  industry tags above each workflow title. LANDING_BRAINSTORM.md is explicit
  that case studies should never show sector text alongside the Trusted By
  logo wall: combined, they make it trivial to identify which client did
  which workflow. Decide before launch: drop the industry tag, replace with
  a non-revealing tag (e.g., "document workflow"), or remove the Trusted By
  logos from the home page.

- [ ] **Header anchors will need to update once real sub-pages exist.**
  `app/components/Header.tsx` currently routes:
  - "Testimonials" → `/#trusted-by`
  - "Resources" → `/#watch`
  - "About" → `/#why-zpt`
  Labels and destinations don't match (Testimonials ≠ TrustedBy; Resources ≠
  Watch ZPT placeholder). Rewire when `/testimonials`, `/resources`, and
  `/about` are built.

## Discoverability

- [ ] **"Our Work" only lives in the How It Works submenu.** Top-level nav
  scanners won't see it. Acceptable for now since the EntryPoints bridge
  link funnels traffic. Revisit once Technology lands; if the submenu has
  three items it may warrant promoting one to top-level.

## Copy nits

- [ ] **`OurWorkHero` subhead** ("Valuable phases of an engagement, plus
  examples from past builds.") reads slightly off. "Valuable phases" is a
  strange modifier. Rewrite, candidate: "The phases every engagement
  passes through, plus examples of what we have shipped."

- [ ] **`HowItWorksHero` subhead** ("Every voyage starts with knowing the
  waters it sails.") is pure metaphor. Beautiful, but doesn't orient the
  reader. Consider adding a second grounding sentence, candidate: "Below,
  the four ways an engagement can start and how the work comes together."

- [ ] **`EntryPoints` eyebrow** ("Flexibility Is Key") is a bit corporate
  next to the other eyebrows on the page. Candidate: "Four Ways In" or
  "Pick Your Pace."

## Once /technology is live

- [x] Add /technology to the How It Works submenu in `Header.tsx` (third
  sibling alongside How It Works and Our Work).

## Punted from current build (2026-05-06 / 07)

- [ ] **Build `/about`.** Source a hero painting when building (an earlier
  `Expedition.png` candidate is available in git history if useful). Three
  blocks proposed: why ZPT exists, how ZPT is built, where ZPT is going.
  Firm-focused, no founder signature, no personal info. Adds large
  portraits below the body.

- [ ] **FAQ section on `/how-it-works`.** 6-8 Q&A items between the
  engagement types and ToolsSetup section, called "Common Questions."
  Doubles as buyer education and GEO content for AI-search engines.
  Candidate questions captured in conversation summary.

- [ ] **SEO + GEO technical pass.** Dedicated prompt covering:
  - Per-page `metadata` blocks tightening (title + description + OG)
  - `app/sitemap.ts` and `app/robots.ts`
  - 1200×630 `og-image.png` at `/public/og-image.png`
  - Twitter card meta
  - JSON-LD: `Organization` on layout, `Person` on `/team`, `FAQPage`
    once FAQ lands
  - `llms.txt` at the root for AI crawlers
  - Alt text and heading hierarchy audit

- [ ] **Email signup provider.** Currently UI-only (preventDefault
  no-op). Pick a provider (Buttondown leans best for indie/founder use)
  and wire the form. Until then, the form looks functional but does
  nothing.

- [ ] **Trusted By logo regeneration.** Current JPGs in
  `public/testimonials/` are inconsistent (mixed PNG/JPG, varying
  quality). Regenerate as monochrome navy PNGs with transparent
  backgrounds at a consistent height (~180-220px) before going live.
  Until then, keep the home Trusted By as text marks.

- [ ] **`/testimonials` page.** Wait until public attribution is locked
  per `business/marketing/customer-stories.md`. Header anchor
  (`/#trusted-by`) stays as a stopgap for now.

- [ ] **Cookie + Privacy policies.** Footer has placeholder links to
  `/privacy` and `/cookies` after the rebuild. Real policy copy and
  routes need to land before launch.
