# Marketing UI Kit — `zptpartners.com`

A click-through recreation of the ZPT marketing site's home page, using the real tokens and exact copy from `dev/locales/en.json`.

## Sections

- **Header** — sticky navy; logo left, nav center (Source Code Pro), gold CTA right.
- **Hero** — navy section; light serif headline, gold italic subhead, gold CTA (shimmer) + ghost PDF link, warm-vignetted video tile on the right.
- **Quote** — off-white band; italic serif with animated gold-glow curly quote marks.
- **Problem section** — sand `#EAE8DE` band; "It's overwhelming..." (breathing gold text), tilted headline-screenshot collage, reveal card.
- **Process** — sticky/tabbed 4-step explainer with four custom live-animated visuals (checklist, terminal, doc-edit, timeline).
- **Agent diagram** — Brain / Hands / Your Setup triptych.
- **Proof** — navy band; Good Fit If (gold ✓) + Why ZPT (gold +).
- **Pricing** — cream band; four navy advisory-tier cards.
- **CTA** — Book a Call with shimmering gold button.
- **Footer** — navy; mono nav + contact.

## Files

- `index.html` — full page composed
- `Header.jsx`, `Footer.jsx` — global chrome
- `Hero.jsx`, `QuoteSection.jsx`, `ProblemSection.jsx`, `ProcessSection.jsx`, `AgentDiagram.jsx`, `ProofSection.jsx`, `PricingSection.jsx`, `CtaSection.jsx` — home-page sections

## Differences from production

- Hero video is a placeholder (real site streams `gemini_video_2.mp4`).
- Process section cycles automatically every 6s; the real site is driven by scroll position.
- Headline screenshots are typeset tiles (real site uses actual screenshot PNGs from news outlets).
- No i18n — copy is inlined in English.
