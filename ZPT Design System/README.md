# ZPT — Design System

**ZPT Partners** (ZPT, `zptpartners.com`) is an **AI consulting and implementation agency**. They visit companies, map workflows, and build tailored, company-owned AI setups — local folders + agentic workflows + tool integrations — that plug into the tools teams already use. Tagline: *Turn AI into a co-worker, not a chatbot.* Currently advisory-only (a previous "ZPT Sales" product has been sunset).

> "Your company knows AI is powerful. **We make it happen.**"

## Sources

- **Codebase:** mounted locally at `dev/` — a Next.js 16 / React 19 / Tailwind v4 marketing site + customer portal, deployed to `zptpartners.com` on Vercel.
- **Key files consulted:**
  - `dev/app/globals.css` — authoritative token definitions (colors + font variables).
  - `dev/app/layout.tsx` — font loading (Cormorant Garamond, Plus Jakarta Sans in source; substituted with **Geist** in this design system — see note below).
  - `dev/components/Header.tsx`, `dev/components/Footer.tsx` — global chrome.
  - `dev/components/pages/HomeContent.tsx`, `HowItWorksContent.tsx`, `TechnologyContent.tsx` — core marketing page patterns.
  - `dev/components/portal/*` — customer portal shell, sidebar, header.
  - `dev/locales/en.json` — the definitive source of brand voice and copy.
  - `dev/public/` — logos, favicons, partner logos, screenshots, profile photos, decks.
  - `dev/CLAUDE.md` — stated design tokens.

## Products represented

1. **Marketing site** (`zptpartners.com`) — hero, problem framing, process explainer, workflow comparison, advisory tiers, case studies, about, technology deep-dive.
2. **Customer Portal** (`/portal/*`) — auth-gated shell with sidebar (Onboarding, Prospects, Competitors), customer switcher for admin, S3-backed data.

Both share the same token system and chrome; the portal is a plainer, data-oriented subset.

---

## Content Fundamentals

**Tone:** Confident, plain-spoken, senior. Advisor-to-operator voice — talks to a founder or ops lead, not a developer. No hype, no exclamation marks, no AI buzzword soup.

**Person:** Second person (*you / your company / your team*) when speaking to the customer; first-person plural (*we visit, we configure*) when describing ZPT's actions. Rarely "I".

**Casing:** Title Case for section headings ("How We Work", "Good Fit If"). Sentence case for supporting copy. Acronyms stay upper (AI, MCP, CRM).

**Sentence length:** Short. Declarative. One idea per sentence. Subordinate clauses are cut in favor of full stops. Example pattern: *"You own everything. No vendor lock-in. No data leaves the building."*

**Structure:** Headline → gold-italicized subhead → short paragraph → proof bullets. Bullets use `+` markers rather than discs, reinforcing the "addition / capability" mental model.

**Emoji:** Not used in product UI or marketing copy. (The codebase has a single `⋯` ellipsis character used as a "more steps" indicator, and Unicode box-drawing `├── └──` in a folder tree — these are the only decorative glyphs.)

**Specificity:** Numbers and time savings are concrete ("~10 hours → ~1 hour", "1-2 weeks", "5 funds or 50"). No "10x", no "revolutionize".

**Bolding:** Used to surface product names (**Skills**, **MCPs**, **Plugins**, **CLIs**), brand names the reader already knows (**Claude**, **ChatGPT**), and punchy conclusions (*ZPT simplifies this for you.*). Bold also highlights integration logos inline (e.g. `<strong class="text-[#D04A02]">PowerPoint</strong>`) — brand colors tint the word itself.

**Italics on gold:** A signature copy treatment — a key phrase in italic gold to land the point, e.g. *"the tools actually know how the company works"*.

**Examples to match the voice:**
- "ZPT builds a custom AI directory for your company. Your team uses it through Claude, ChatGPT, or any compatible app. **You own everything.**"
- "Every week, new AI concepts land: **Skills**, **MCPs**, **Plugins**, **CLIs**. It's overwhelming…"
- "Most companies don't need another tool. They need a better setup around the tools they already have."
- "Full company ownership. No lock-in."
- CTA label is always the same two words: **Book a Call**.

---

## Visual Foundations

**Core palette** (three colors do almost all the work):

| Role | Hex | Name | Used for |
|---|---|---|---|
| Ink | `#0C0C28` | Navy | Hero sections, header, footer, body text on light |
| Accent | `#C9A96E` | Gold | Every CTA, every highlight, every "it lit up" moment |
| Canvas | `#FAFAF7` | Off-white | Page background |

Supporting: `#161640` navy-light (elevated on navy), `#F5F4ED` cream (alt band), `#EAE8DE` sand (emphasis band — the "problem" section), `#E7E2D4` warm border (every hairline), `#64748B` muted text. The palette reads warm — nothing is pure white, borders are beige, not grey.

**Type:**
- **Cormorant Garamond** — headings, display, pull-quotes. Always set **light (300/400)** with **tight tracking** and **italic for emphasis**. This is where all the elegance lives.
- **Geist** — body. Modern neutral sans — tight spacing, flat apertures, purpose-built for interfaces. Provides sharp contrast with Cormorant's editorial warmth. *(Substituted for Plus Jakarta Sans used in the live site; see caveats.)*
- **Source Code Pro** — logo, nav links, button labels, folder structure listings. This is ZPT's signature: UI chrome is typeset in mono. It's how you know you're on a ZPT surface.

**Backgrounds:** No gradients-as-decoration. Sections alternate solid bands — navy, off-white, cream, sand, navy — to pace the page. One full-bleed video (subtle, brightness-0.95/contrast-1.08) lives inside the hero only. No repeating patterns, no hand-drawn illustrations, no grain, no textures.

**Imagery:** Warm and slightly desaturated. Partner/integration logos (Claude, HubSpot, Slack…) are PNGs placed on off-white tiles with warm borders. Profile photos are unprocessed. News screenshots are shown **tilted ±1–2°** in a collage — the only "casual" visual moment on the whole site.

**Animation:** Purposeful, slow, subtle. Three recurring motifs:
1. **Shimmer** on the gold CTA (3s ease-in-out, infinite).
2. **Glow** — color cycling navy→gold with a soft text-shadow — on quote marks.
3. **Breathe** — font-size 1 → 1.15em on a hero phrase.
Scroll-reveal cards translate `translate-y-6 opacity-0 → 0 opacity-100` over **700ms** with a `150ms` stagger. Terminals type character-by-character (25ms/char). A hero helicopter animation scrolls a stickman down a rope onto a building (custom scroll-linked SVG). Easing is gentle; nothing bounces or overshoots.

**Hover states:**
- Primary buttons: gold → gold-light (solid swap, no lift).
- Text links: `underline-offset-2` + color darkens to navy or lightens to gold.
- Nav links on dark: opacity 70% → 100%.
- No scale transforms, no shadows-on-hover.

**Press states:** Inherited browser defaults; no custom active scale/colour. Reflects the restrained aesthetic.

**Borders:** Always `1px` (or `border` in Tailwind terms — 1px), always `border-border-warm` (`#E7E2D4`) on light, always `rgba(255,255,255,0.10–0.20)` on dark. Gold borders (`border-gold/40`, `border-gold/25`) mark **active** or **highlighted** cards, never the default state.

**Corner radii:** `rounded-md` (6) for small chips, `rounded-lg` (8) for cards, `rounded-xl` (12) for hero/pricing cards, `rounded` (4) for buttons, `rounded-full` for avatars + step number bubbles. No 2xl or 3xl anywhere.

**Shadows:** Almost none. `shadow-sm` only, on white cards over off-white bg. One *inset* shadow on the hero video (`inset 0 0 20px 10px #0C0C28`) to vignette its edges into the navy bg. No outer glow, no neumorphism.

**Cards:** White or navy, 1px warm border, `rounded-lg`/`xl`, light padding (`p-5` to `p-8`). Two consistent variants: (a) **paper card** — white + warm border + shadow-sm, (b) **navy card** — `bg-navy` + `border-white/10`. Active tier cards trade their border for `border-gold/40`.

**Layout:** `max-w-5xl` to `max-w-7xl` container, 6–8 vertical rhythm (`py-24` sections). Content is frequently two-column: left = headline + description, right = visual/card. Sticky-scroll is used once (the "How We Work" story on desktop). Grid uses CSS grid or flex — no fancy masonry.

**Fixed elements:** Sticky navy header. Nothing else floats.

**Transparency/blur:** Sparingly. A gold tile uses `bg-gold/10` (10% gold over navy or white). No backdrop-blur anywhere — the look is flat and confident, not glassy.

**Imagery colour vibe:** Warm, desaturated, neutral. Hero video is explicitly tinted `brightness(0.95) contrast(1.08) saturate(0.9)`.

**Keywords the brand is NOT:** glassy, neon, gradient-heavy, playful, illustrative, rounded-everything, emoji-laden, glowy.

---

## Iconography

**Primary system: Heroicons v2 (outline).** The entire codebase uses inline SVGs whose path data comes from the Heroicons outline set: `strokeWidth={1.5}`, `strokeLinecap="round"`, `strokeLinejoin="round"`, `viewBox="0 0 24 24"`. Sizes are set in Tailwind (`h-3.5 w-3.5`, `h-4 w-4`, `h-5 w-5`, `h-8 w-8`). Color is always `currentColor` so icons inherit from `text-navy/40`, `text-gold`, `text-white/70`, etc.

**Heroicons v2 solid** is used for a handful of marks that need filled emphasis: the green ✓ tick on "Good Fit If" bullets, the gold ↓/↑ chevrons in the agent diagram, the red ⚠ x-in-circle.

**Logos (PNG):** Partner/integration logos (`claude.png`, `openai.png`, `hubspot.png`, `salesforce.png`, `google-drive.png`, `excel.png`, `powerpoint.png`, `notion.png`, `slack.png`, `sharepoint.png`, `google_maps.png`) live in `assets/logos/` and are placed on 56×56 or 64×64 off-white tiles with a warm border. LinkedIn is an SVG.

**Brand marks:**
- `logo-icon.svg` — the ZPT prism mark (triangle + three input lines refracting into a single gold output beam). 64×64 master.
- `logo-horizontal.svg` — prism + "ZPT Partners" wordmark set in Source Code Pro.
- `favicon.svg` / `favicon.png` — navy rounded-rect with a stylized gold prism, three gold dots, and lines through it. Used as the nav logo on dark.
- `favicon-glass.*` — alternate treatment.
- Light variants with `-light` suffix for use on navy.

**Unicode used as glyphs:**
- `+` (literal plus, in bullet lists) — the "additive capability" marker.
- `→` in the "step → step" workflow arrows.
- `⋯` (horizontal ellipsis) for "and N more steps" rows.
- `├── └──` box-drawing for folder trees (rendered in mono).
- Curly quote marks `“ ”` on the quote block (with a gold `glow` animation).

**Emoji:** Never.

**Substitutions flagged:** None — all icon asset sources in the codebase are available either as PNGs (copied into `assets/`) or as inline SVG that matches Heroicons v2 exactly, which is free and CDN-available.

---

## Fonts — substitutions flagged

All three fonts are loaded from **Google Fonts** in production and in this design system:

- Cormorant Garamond — 300, 400, 500, 600
- Geist — 300, 400, 500, 600, 700
- Source Code Pro — 400, 500

No local TTF files exist in the upstream codebase (they're streamed via `next/font/google`). No substitution required — this design system pulls the same Google Fonts at runtime. **If you need offline assets**, please drop TTF/WOFF2 files into `fonts/` and update `colors_and_type.css` to reference them locally.

---

## Index — what's where

```
/
├── README.md                  ← you are here
├── SKILL.md                   ← skill definition for Agent Skills / Claude Code
├── colors_and_type.css        ← canonical tokens (colors, fonts, spacing, radius, shadows, motion)
├── assets/
│   ├── favicon.(png|svg)      ← square prism mark (for dark)
│   ├── favicon-glass.(png|svg)← alt treatment
│   ├── logo-icon[-light].svg  ← prism icon
│   ├── logo-horizontal[-light].svg ← prism + wordmark
│   ├── linkedin-banner.svg
│   ├── logos/                 ← partner PNGs (Claude, OpenAI, HubSpot, Salesforce, GDrive, Excel, PPT, Notion, Slack, SharePoint, Google Maps) + linkedin.svg
│   ├── profile_pic/           ← Arnau.png, Beer.png (founders)
│   ├── decks/                 ← ZPT_Advisory_Deck.pptx
│   └── zpt-one-pager.pdf
├── preview/                   ← design-system preview cards (rendered in the Design System tab)
└── ui_kits/
    ├── marketing/             ← full marketing-site recreation
    └── portal/                ← customer portal shell + pages
```
