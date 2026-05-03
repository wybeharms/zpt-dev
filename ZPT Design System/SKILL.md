---
name: zpt-design
description: Use this skill to generate well-branded interfaces and assets for ZPT (ZPT Partners, zptpartners.com — an AI consulting and implementation agency), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files. **Brand was redesigned 2026-05-02** — see `../../BRAND.md` at repo root for the canonical summary.

Key files to consult, in order:

1. `../../BRAND.md` — single-source-of-truth summary of the new logo + palette + type system.
2. `README.md` — full brand overview, content fundamentals, visual foundations, iconography.
3. `colors_and_type.css` — canonical CSS tokens (navy, cognac, cream + legacy gold/off-white/sand kept for backward compat; Instrument Serif + Old Standard TT for logo, Cormorant Garamond / Geist / Source Code Pro for site).
4. `preview/` — small HTML specimens for colors, type, components, motion — good references when building new cards/buttons/lists.
5. `ui_kits/marketing/` — home-page recreation with header, hero, quote, problem, process (4 animated visuals), agent diagram, proof, pricing, CTA, footer. *(Note: still encodes the old gold/Cormorant brand. Refer to it for layout patterns; refer to BRAND.md for current colors.)*
6. `ui_kits/portal/` — customer portal shell with sign-in, sidebar, onboarding uploader, prospects table, competitors table.
7. `assets/` — new wordmark + monogram system (zpt-wordmark-*, zpt-monogram-*), favicon source, OG image, partner PNGs, founder profile pics. Old prism mark archived in `assets/Old_Logos/`.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc.), copy assets out of `assets/` and create static HTML files for the user to view. Load the three Google Fonts via `<link href="https://fonts.googleapis.com/...">` — the codebase uses them via `next/font/google` and no local TTF files exist.

If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand — the token names in `colors_and_type.css` match the Tailwind utilities used in the live repo (`bg-navy`, `text-gold`, `border-border-warm`, `font-heading`, `font-logo`, etc.), so patterns transfer cleanly.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions (audience, surface, fidelity, variations), and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Non-negotiables

**Logo system (NEW 2026-05-02):**
- Wordmark = "ZPT Partners" in **Instrument Serif** 400. "ZPT" in cream `#EDE4D3` (on navy) or navy `#0C0C28` (on cream). "Partners" subtitle in cognac — `#A5663C` on light, `#B97A4B` on navy (for WCAG AA contrast).
- Monogram = `./Z`. The `.` and `/` are set in **Old Standard TT** (gives the punctuation more breathing room than Instrument Serif's `./` would). The `Z` is in Instrument Serif. The slash is colored cognac and angled to match the Z's diagonal stroke.
- Never use the old prism mark — it's deprecated. Pull from `assets/zpt-wordmark-*` or `assets/zpt-monogram-*`.

**Site type (live, under review pending landing rebuild):**
- Headings: Cormorant Garamond, weight 300/400, tight tracking. Italic + cognac on the most important line.
- Body: Geist. Short, declarative sentences. Second person ("you/your team").
- Chrome (nav links, button labels): Source Code Pro.

**Visual rules:**
- Never use emoji. Bullets use a literal `+`, not disc markers. Checks are Heroicons v2 solid.
- Borders are `1px solid #E7E2D4` (warm beige) on light; `rgba(255,255,255,0.10)` on dark.
- Cognac (`#A5663C` on light / `#B97A4B` on dark) is the accent — reserve it for CTAs, active states, and one italic phrase per section. Replaces the old gold `#C9A96E` (which is deprecated but still present in legacy CSS).
- Cream (`#EDE4D3`) is the warm canvas + primary text on dark. Replaces old off-white `#FAFAF7` (deprecated).
- Backgrounds alternate solid bands — navy, cream, navy — never gradients-as-decoration.
- No backdrop-blur, no glass, no 2xl rounding, no glows (outside the one quote-mark glow), no scale-on-hover.
- CTA copy is always `Book a Call`.
