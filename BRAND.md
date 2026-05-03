# ZPT Brand — Single Source of Truth

> Brand redesigned **2026-05-02**. This file is canonical. If `CLAUDE.md`, `ZPT Design System/`, or `app/globals.css` disagree with this file, this file wins. Live site code may still reference legacy tokens until the landing-page rebuild — that's expected.
>
> Brand theme and landing-page direction added 2026-05-03. Strategic and theme content lives below; the canonical asset reference (logo, colors, typography, files) follows. Companion document: [LANDING_BRAINSTORM.md](LANDING_BRAINSTORM.md).

## Brand vision

ZPT delivers a **custom AI package** for organizations. The package contains both **equipment** (skills, integrations, automated workflows) and **documentation** (context files, templates, instructions). The client team runs the package independently using Claude or Codex. The client owns everything.

The brand is built on two woven metaphors:

- **The package** is the structural metaphor. It is what ZPT sells, ships, and what the client can hold in their hands. Public-facing copy uses "package," not "folder" or "directory." Internal and technical copy can still use folder, directory, skills, CLAUDE.md, etc.
- **The maritime journey** is the emotional metaphor. ZPT helps organizations sail through the turbulent AI revolution. Custom 17th-century-style Dutch maritime paintings carry this register: ships sailing, ships being built, expeditions underway. One painting per page, plus an etched ornament in every footer.

The two metaphors connect because ships carry packages. The client organization is the ship. ZPT provisions the ship and joins the journey.

## Positioning

ZPT sits in the **craft studio** category, with the visual restraint of a boutique advisory.

- The visual layer feels like advisory: cream and navy bands, generous whitespace, no decoration for its own sake. The maritime art does the elegance work.
- The content layer feels like craft: specific examples, real workflows, real before-and-after numbers, real client names.

**Reference sites:** [linear.app](https://linear.app), [anrok.com](https://anrok.com), [mast.com](https://mast.com), Sigma Computing's pre-2024 site. These pair clean visual systems with substantive content density.

**Anti-references:** Stripe and Vercel (too tech-coded for non-technical buyers), McKinsey (too cold), generic AI-agency Webflow templates (too hype).

The voice is calm, professional, and specific. Founder-voice is allowed on the About page and YouTube only, never on the main landing page.

## Voice

- **Use "package" in landing-page copy.** "Folder," "directory," and "skills" are jargon that loses half the buyer base on first read. Lead with package. Reserve technical terms for the Technology page and for the buyer who is evaluating depth.
- **Lead with the deliverable, not the philosophy.** Say what the client gets before explaining the systems thinking behind it.
- **Be specific.** Specific clients (Marquette, NVP, MDV Design, Brutalia, Cypress Creek Partners). Specific workflows (RFP drafting, share-class review, custodian extraction). Specific numbers when available (4 hours to 30 minutes).
- **Be calm.** Short, declarative sentences. Second person ("you," "your team"). No exclamation marks. No words like "transform," "supercharge," "unlock," "revolutionize," "AI-powered."
- **Avoid these phrases:** "Your folders are messy." "We mirror your workflows." Anything implying a 1:1 copy of the human process. ZPT improves broken workflows, not mirrors them.

## Motion

**Motion must be earned by user action.** No autonomous loops, no marquees, no glow pulses. Nothing that competes with the headline for attention while the user reads.

- Scroll-triggered reveals are allowed when they enhance the maritime imagery: parallax of waves, three-frame ship motion, fade-in transitions.
- A Veo-rendered 8-second hero loop is **exploratory**. Ship it if the quality is editorial. Fall back on scroll-triggered three-frame motion if not.
- Hover transitions stay short (150ms) and subtle (color or border, not transform). No scale-on-hover.

## Logo system

The brand is a **wordmark + monogram** lockup. No symbol-only mark.

- **Wordmark** — "ZPT Partners" (or just "ZPT"). Used wherever the full brand fits: site header, email signatures, business cards, presentations, OG images.
- **Monogram** — `./Z`. The compressed mark for tight contexts: favicon, app icon, social avatar, watermarks. References Unix path syntax / Claude Code slash commands.

The two share the same `Z` letterform — the entire brand collapses into one letter at small sizes.

## Typography

| Use | Font | Weight | Notes |
|-----|------|--------|-------|
| Wordmark letters (Z, P, T, "Partners") | **Instrument Serif** | 400 | Modern transitional serif. Loaded via Google Fonts. |
| Monogram `./` punctuation | **Old Standard TT** | 400 | Used specifically for the dot and slash because it gives the punctuation more breathing room than Instrument Serif's `./` would. |
| Monogram `Z` | Instrument Serif | 400 | Same as wordmark, for visual continuity. |

Site body/heading/chrome fonts (Cormorant Garamond / Geist / Source Code Pro) remain unchanged for now and may be revisited during the landing-page rebuild.

## Colors

| Role | Hex | Used for |
|------|-----|----------|
| Navy | `#0C0C28` | Primary background, header, footer, "ZPT" wordmark on cream |
| Cream | `#EDE4D3` | Wordmark on navy, primary text on dark, warm canvas |
| Cognac | `#A5663C` | Accent, CTAs, "Partners" subtitle on cream/light backgrounds |
| Cognac (on navy) | `#B97A4B` | Lighter cognac variant for use on navy — meets WCAG AA (5.2:1 contrast). Use this for "Partners" subtitle and accent text on dark. |
| Cognac deep | `#7A3E1F` | Gradient terminus, hover state on light |

**Why two cognacs:** the chic dark cognac (`#A5663C`) reads beautifully on cream but only achieves ~3:1 contrast on navy — borderline for accessibility. The lighter cognac (`#B97A4B`) hits 5.2:1 on navy, passing WCAG AA for body text, while still reading as cognac (not orange). Use the right one for the surface.

**Legacy palette (DEPRECATED):** Gold `#C9A96E`, Off-white `#FAFAF7`, Sand `#EAE8DE`. Live site still references these. Do not use in new components.

## Asset locations

**Production (`dev/public/`):**
```
public/
├── favicon.ico
├── favicon.svg
├── favicon-96x96.png
├── apple-touch-icon.png
├── web-app-manifest-192x192.png
├── web-app-manifest-512x512.png
├── site.webmanifest
├── og-image.png                                     ← 1200×630, navy ground, centered wordmark
├── Old_Logos/                                       ← deprecated prism mark
└── brand/
    ├── zpt-wordmark-{dark,light,cognac}.{svg,png}
    ├── zpt-monogram-{dark,light,cognac}.{svg,png}
    └── zpt-favicon-source.png                       ← 512×512, source for favicon generator
```

**Design system mirror (`dev/ZPT Design System/assets/`):** same brand files, alongside the partner logos, profile pics, decks, and one-pager. Old logos archived in `assets/Old_Logos/`.

## When to use which variant

| Surface | Use |
|---------|-----|
| Site header on navy | `zpt-wordmark-dark.svg` |
| Site header on cream/white section | `zpt-wordmark-light.svg` |
| Cognac feature block / pricing card | `zpt-wordmark-cognac.svg` |
| Favicon, browser tab | favicon files at `public/` root |
| App icon, social avatar, watermark | `zpt-monogram-dark.svg` (or light/cognac variant matching the surface) |
| LinkedIn / Twitter / Slack link previews | `og-image.png` (auto-served via `<meta property="og:image">`) |

## What NOT to do

- Don't use the old prism mark (triangle + refraction lines). It's deprecated. Files moved to `Old_Logos/`.
- Don't pair `Z` with anything other than Instrument Serif. Don't pair `./` with anything other than Old Standard TT.
- Don't use cognac `#A5663C` as foreground text on navy — contrast fails. Use `#B97A4B` instead.
- Don't use pure white (`#FFFFFF`). Always use cream `#EDE4D3` for warmth.
- Don't introduce gradients on the wordmark or monogram. The mark is solid color only.
- Don't introduce a fourth color into the palette. The system is navy, cream, cognac (with the cognac-on-dark variant). Pastel blue was considered and rejected.
- Don't use photography for ship or ocean imagery. The maritime layer is always painted or illustrated.
- Don't use autonomous animation. Motion must be earned by user action.

## Open questions (landing-page rebuild)

- Whether headings move from Cormorant Garamond to Instrument Serif (would unify the typographic system but is a bigger lift). Decide during the landing-page redesign.
- Whether the legacy gold/off-white tokens get fully removed or retained for backward compat with marketing-page recreations in `ZPT Design System/ui_kits/`.
- Whether the hero motion uses a Veo-rendered 8-second loop or scroll-triggered three-frame ship motion. Veo is exploratory; the three-frame approach is the fallback if Veo does not look editorial. Full landing-page brief in [LANDING_BRAINSTORM.md](LANDING_BRAINSTORM.md).
