# Build Brief: ZPT Landing Page Foundation (v1)

> Goal: build the **skeleton** of the new ZPT home page so we can evaluate hero rendering quality, section flow, and scroll behavior. This is a foundation pass, not a final design.
>
> A parallel folder (`../dev-v2/`) is being built by a different coding agent from this same brief. The two will be compared. Don't peek at the other folder.

## Read these first (required)

The landing page is part of an existing brand system. Two reference files in the sibling `dev/` folder are required reading:

1. `../dev/BRAND.md`: brand colors, typography, logo system, voice rules. Authoritative for visual tokens.
2. `../dev/LANDING_BRAINSTORM.md`: full landing-page brief, with 10-section structure, hero copy, voice direction, motion principles. Authoritative for content.

If anything in this brief disagrees with those two files, **those two files win**. Read them before guessing.

Optional context (skim only if confused): `../business/marketing/customer-stories.md` for client names and engagement details.

## Stack (already scaffolded for you)

- Next.js 16.1.6 (App Router, Turbopack)
- React 19.2.3
- Tailwind CSS v4
- TypeScript

The `app/` folder has the default Next.js boilerplate. Replace `app/page.tsx` and update `app/layout.tsx` as needed.

## Scope of this build

**Build the home page only.** Just `/` (the home route). No `/how-it-works`, no `/case-studies`, no other routes.

Build all 10 sections from `LANDING_BRAINSTORM.md` "Page-by-page main landing" structure. Treat sections 2 through 10 as **placeholders below the hero**, with correct headline, one-paragraph body, alternating cream and navy backgrounds, and correct vertical rhythm. **No final visual treatment**: no card components, no icons, no fancy decoration. The point is to see the skeleton's flow, not to finish each section.

The **hero** must be polished. That's the thing we're really testing.

## Hero specifics (the centerpiece)

**Visual:** the Ship Animation video plays as the hero background. If the video fails to load, fall back to the static painting. Both must look editorial, with no letterboxing or obvious crop on common screen sizes (1440×900, 1920×1080, MacBook Pro 14, MacBook Air 13).

**Assets** (in `public/landing_page/`):

- `ShipAnimation.mp4`: ~4 MB seamless loop (optimized from the original). Hero motion.
- `Main Landing Page.webp`: high-res still of the same scene. Used as `poster` AND as fallback if video errors.

**Behavior:**

- Video: `autoplay`, `loop`, `muted`, `playsInline` (mobile compatibility), `preload="auto"`.
- Use `<video>` with `poster` attribute pointing to the static painting so a frame shows during load.
- Implement a graceful fallback: if `onError` fires or video can't decode, swap to the static `<img>`.

**Copy (locked, do not invent or rewrite):**

- Headline: **Your company knows AI is powerful. We make it happen.**
- Subhead: **ZPT builds a custom AI directory for your company. Your team uses it through Claude, ChatGPT, or any compatible app. You own everything.**
- Two CTAs:
  - Primary: **Book a Call** (cognac fill, cream text)
  - Secondary: **Download the One-Pager** (outline, cream border + cream text on dark hero)

**Layout:** hero is full-bleed and takes most of the viewport on first load. Headline, subhead, and CTAs sit over the painting. Test legibility. If the painting overpowers the headline, add a soft navy gradient overlay at the bottom 30 to 40% of the hero (no full-image overlay; the painting must read clearly above it). Header sits transparent over the hero.

## Sections below the hero (placeholder treatment)

Use `LANDING_BRAINSTORM.md` as the source of truth for section names and copy direction. Order:

1. **Hero** (above)
2. **Trusted By**: cream band. Five client names in a single row, monochrome text marks (not images): `Marquette · Cypress Creek · New Vintage · MDV Design · Brutalia`. No hover effects in this pass. Do **not** use cognac for this band.
3. **What You Get**: the "package" section. One-line lead, then 3 to 4 short bullets describing what the package contains.
4. **How We Work**: five engagement types, one line each: Education Workshop, Discovery, Focused Build, Comprehensive, Embedded. (Pull names and descriptions from LANDING_BRAINSTORM.md.)
5. **Watch ZPT in Action**: placeholder. A single dark card with text "Video walkthrough coming soon." No real video embed in this pass.
6. **Why ZPT**: three differentiators, headline + one paragraph each.
7. **Is ZPT Right for Your Company**: two columns, "Yes, if…" vs "Not yet, if…". 3 to 4 bullets each.
8. **Team Preview**: five team members. **Names and role only** for now (no portraits, no bios). Names from LANDING_BRAINSTORM.md if listed; otherwise leave as `Team Member 1` etc.
9. **Final CTA**: large "Book a Call" CTA. Reuse the painting subtly in the background (e.g., very low-opacity around 0.15) or a navy gradient.
10. **Footer with ornament**: see below.

For each section: correct headline, one paragraph of body, alternating cream and navy backgrounds (start with cream after the navy hero), proper vertical rhythm (~py-24 or so). No cards, no icons, no decoration. Just type and color bands.

## Footer

- Dark navy background.
- Centered: the etched ornament from `public/landing_page/Footer Ornament Navy.webp`.
- Below ornament: small print with copyright, minimal links (Privacy, Contact), wordmark.

## Brand quick reference

Read `../dev/BRAND.md` for full detail. Quick notes:

- **Colors:** Navy `#0C0C28`, Cream `#EDE4D3`, Cognac `#A5663C` (on light), Cognac-light `#B97A4B` (on dark). No fourth color, no pure white.
- **Logo files** in `public/brand/`: use `zpt-wordmark-light.svg` on navy, `zpt-wordmark-dark.svg` on cream, `zpt-wordmark-cognac.svg` for cognac feature blocks. The wordmark **is** the brand mark; no separate text logo.
- **Fonts:** load via Google Fonts. Wordmark is Instrument Serif (already baked into the SVG, no need to load for that). For headings and body, see BRAND.md "Typography". The landing-page rebuild may move headings to Instrument Serif (open question); default to Cormorant Garamond plus Geist for body if uncertain.
- **Header:** ZPT wordmark left, nav right (How It Works · Case Studies · Resources · About · "Book a Call" CTA button). Header transparent over the hero (use `zpt-wordmark-light.svg`); sticky behavior after scroll, with a navy or cream background depending on which band the user is over.

## Voice (when filling placeholder copy)

- Use **directory** on the home page. "Package" can appear when explaining deeper.
- Calm, declarative, second person ("you", "your team").
- Forbidden words: "transform", "supercharge", "unlock", "revolutionize", "AI-powered", "leverage", "synergy".
- No exclamation marks.

## Motion principles

- Video hero auto-plays. That's the only autonomous motion allowed.
- **All other motion must be earned by user action**: hover, scroll, click.
- No marquees, no glow pulses, no scroll-jacking.
- Hover transitions: 150ms, color or border changes only, no scale transforms.
- Scroll-triggered fade-in for sections is allowed (subtle, ≤ 400ms).

## Definition of done (foundation pass)

When `npm run dev` is running and you visit `localhost:3000`:

1. Hero loads with video playing seamlessly. Headline, subhead, and 2 CTAs are visible and legible.
2. Static image fallback works (verify by temporarily disabling the video tag or breaking the path).
3. Scrolling reveals 9 stub sections with correct names, alternating cream and navy bands, visible vertical rhythm.
4. Footer ornament renders at the bottom.
5. Header has the wordmark and nav, behaves cleanly on scroll.
6. `npm run build` passes with no errors.
7. No console errors at runtime.

Looks intentional, not WIP-broken.

## What NOT to do

- Don't build sub-pages or extra routes.
- Don't introduce a UI component library (no shadcn, no Radix, no MUI). Tailwind utility classes only.
- Don't use the deprecated prism logo (it's not in this folder anyway).
- Don't use the legacy palette (`#C9A96E`, `#FAFAF7`, `#EAE8DE`).
- Don't invent client names, quotes, or numbers. Use what's in LANDING_BRAINSTORM.md and customer-stories.md.
- Don't create new markdown files documenting your decisions. Just build.
- Don't peek at `../dev-v2/`. Build independently from this brief.

## After you're done

1. Run `npm run build` to confirm the production build passes.
2. Commit your work to the local git repo (already initialized) with a single commit: `feat: foundation home page`.
3. Report back in chat: what worked well, what felt awkward, what decisions you made (especially around hero sizing, image-vs-Small choice, and scroll behavior).
