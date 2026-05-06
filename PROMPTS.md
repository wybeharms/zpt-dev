# ZPT Landing Page Prompts

> Three prompts for kicking off the landing-page rebuild: one for Claude Design (frontend agent), one for ChatGPT image generation, one for Google Veo video generation. All written in English. The ChatGPT and Veo prompts are self-contained because those tools have no project context; the Claude Design prompt assumes the working directory is `~/Sites/zpt/dev/` so it can read the brand docs directly.
>
> Saved 2026-05-04. Iterate as needed.

---

## 1. Claude Design (frontend agent)

Paste into a fresh Claude session with the working directory at `~/Sites/zpt/dev/`. Claude will read the brand docs, audit the existing codebase, and build the new home page.

```
You are designing the new ZPT Partners landing page (zptpartners.com). ZPT is an AI implementation agency that builds custom AI directories for organizations: equipment plus documentation, custom-built per company, owned by the client. The redesign direction is captured in three documents in this working directory:

1. BRAND.md — canonical brand reference: logo, colors, typography, asset paths, theme principles, voice rules, motion principles.
2. LANDING_BRAINSTORM.md — the design brief. Read this first. It has the section-by-section vision, page-by-page narrative, voice rules, motion principles, hierarchy fixes, things to avoid, and open questions.
3. ZPT Design System/ — existing component library, color and type tokens, HTML specimens. The folder also contains the marketing UI kit (still on legacy gold/Cormorant brand; refer for layout patterns, not for current colors).

Read all three before starting.

YOUR TASK
Build the new home page in the existing Next.js 16 / React 19 / Tailwind CSS v4 codebase, matching the ten-section structure in LANDING_BRAINSTORM.md. Use existing brand tokens from app/globals.css and Tailwind utilities. The five sub-pages (How It Works, Case Studies, Resources, About, Team) are out of scope for this first pass; focus on the home page only.

LOCKED DECISIONS (do not re-litigate)
- Hero copy: "Your company knows AI is powerful. We make it happen." Subhead: "ZPT builds a custom AI directory for your company. Your team uses it through Claude, ChatGPT, or any compatible app. You own everything."
- Two CTAs in the hero: primary "Book a Call" and secondary "Download the One-Pager" (the PDF link can be a stub for now; Wybe is updating the one-pager separately).
- Trusted By band uses cream (#EDE4D3), not cognac. Five client marks: Marquette Associates, Cypress Creek Partners, New Vintage Partners, MDV Design, Brutalia. Monochrome by default, hover-to-color, click navigates to /case-studies.
- The package object in "What You Get" is a captain's sea chest, illustrated in 1700s pencil-and-wash style. Not childish, not too abstract.
- Top nav (five items): How It Works · Case Studies · Resources · About · [Book a Call].
- Existing How We Work section: keep the pedagogical intent and animations, restyle to the maritime theme, remove the scroll-jacking. The user must always control scroll.
- Existing Is ZPT Right For Your Company section: keep, restyle to the new brand.

OUT OF SCOPE (Wybe handles separately)
- Painting generation. The three hero paintings (Sailing Ship for home, Shipwright for /how-it-works, Expedition for /about) are being generated separately via ChatGPT/Gemini. Use placeholder image components with the right aspect ratios; Wybe will swap in finals.
- Team portraits. Use placeholder portrait components; Wybe will supply finals.
- One-pager PDF. The download link is a stub for now.
- The Veo-rendered hero loop. May or may not ship; the three-frame scroll-triggered fallback is the design baseline.
- The customer portal at /portal. Untouched.

APPROACH
1. Read BRAND.md, LANDING_BRAINSTORM.md, and skim ZPT Design System/README.md.
2. Audit the existing home page at app/(marketing)/page.tsx. Identify what to keep, what to restyle, what to replace. Pay attention to the existing How We Work animations (good, keep) and the existing Is ZPT Right qualifier section (good, keep).
3. Propose a section-by-section plan back to Wybe before writing code. Flag any section where the brief and the codebase conflict (e.g., legacy gold tokens, missing components, animations that would be hard to restyle).
4. Once Wybe approves the plan, build the components. Use existing Header and Footer where possible. Match the brand tokens (navy #0C0C28, cream #EDE4D3, cognac #A5663C and #B97A4B).
5. Run the local dev server and screenshot each section for review.

CONSTRAINTS
- Motion must be earned by user action. No autonomous loops, no marquees, no scale-on-hover. See BRAND.md Motion section.
- No emoji anywhere. No pure white. No gradients on the wordmark or monogram.
- Bullets use a literal "+", not disc markers. Checks are Heroicons v2 solid.
- The legacy gold (#C9A96E) and off-white (#FAFAF7) tokens are deprecated. Use navy / cream / cognac only.
- Hero motion plays only on scroll, never autonomously. Use the three-frame scroll-triggered approach (three slightly different versions of the painting, swapped as the user scrolls 100-300px).
- Trusted By: cream band, monochrome marks, full-color and one-line description on hover. Click navigates to /case-studies.
- Watch ZPT in Action: clickable thumbnail. Click to play, no autoplay, no sound on autoplay.

DELIVERABLE
A working home page on the local dev server, organized into the ten sections from LANDING_BRAINSTORM.md, with placeholder images sized correctly:
1. Hero
2. Trusted By
3. What You Get
4. How We Work
5. Watch ZPT in Action
6. Why ZPT
7. Is ZPT Right for Your Company
8. Team Preview
9. Final CTA
10. Footer Ornament + Footer

Real images, copy refinements, and sub-page builds will follow in later passes.

BEFORE YOU WRITE CODE
Ask clarifying questions if anything in the brief is ambiguous. Especially flag any conflict between the brief and the existing codebase (component names, file paths, styles, missing tokens).
```

---

## 2. ChatGPT (or Gemini) image generation

ChatGPT and Gemini have no project context. Each image prompt has to be self-contained. The recommended pattern: paste the **Style Block** first, then the specific image prompt, then attach reference images.

### Style Block (paste before every image prompt)

```
You are generating a brand image for ZPT Partners, an AI implementation consulting firm. The brand uses 17th-century Dutch maritime painting as a visual anchor. Style reference: Willem van de Velde the Younger, Aelbert Cuyp, Ludolf Bakhuizen. Painterly oil-on-canvas texture, weathered, atmospheric, contemplative. Not modern. Not slick. Not photorealistic. Not 3D-rendered. Not cartoon. Not whimsical.

Brand color palette (use these exact tones):
- Deep navy: dark, near-black blue (similar to #0C0C28). Sea, sky shadows, deep tones.
- Cream: warm off-white (similar to #EDE4D3). Clouds, sails, sky highlights, light.
- Cognac: warm tan / saddle brown (similar to #A5663C). Hull accents, brass fittings, weathered wood.
- Dark brown: deeper cognac (similar to #7A3E1F). Shadowed wood, rigging, hull shadows.

Composition rules across all images:
- No bright primary colors (no saturated red, blue, green, yellow).
- No emoji, no text, no logos, no watermarks.
- Atmospheric, weathered, with visible brush texture.
- Deep navy seas, cream-beige clouds, cognac and dark brown ships and wood.
- Painterly, not photorealistic. Visible brushwork.

Reference images attached below show the style I want. Match this aesthetic.

[ATTACH: original 17th century Dutch maritime painting]
[ATTACH: ChatGPT modern reinterpretation reference]
```

### Image 1: The Sailing Ship (home page hero)

```
Generate the brand image for ZPT Partners (use the Style Block and reference images above).

Subject: A three-masted Dutch warship sailing to the right across a moving sea. The ship leans slightly with the wind, sails full and bowed. The Dutch tri-color flag flies from the stern.

Setting: Daytime with atmospheric beige-cream clouds piling up behind the ship. Light breaks through the clouds onto the water. Deep navy sea with cream-cap waves. The horizon is visible behind the ship.

Details:
- Hull and rigging in cognac and dark brown.
- Sails in cream and beige tones, with visible weathering and shadow.
- No people in detail (faint silhouettes on deck are fine).
- The ship is the dominant element, but framed so there is breathing room around it (sky above, sea below).

Aspect ratio: 3:2 landscape (1500x1000 or similar high resolution).

Mood: Patient navigation through working seas. Confident but not aggressive. The sense of a vessel that has done this journey before.
```

### Image 2: The Shipwright (How It Works page hero)

```
Generate the brand image for ZPT Partners (use the Style Block and reference images above).

Subject: A Dutch ship under construction in a dry dock. The ribbed wooden frame of the hull is exposed, showing the ship's structure mid-build. Workers (faint silhouettes, not detailed) are tending to ropes, planks, and joinery.

Setting: Daytime, dock-side. Soft cream-beige sky. The dry dock is a wooden working environment, weathered.

Details:
- The ship's wooden frame in cognac and dark brown.
- Tools scattered on the dock: ropes, planks, hammers, chisels, barrels.
- Sails are not yet hung; the structure is the focus.
- The composition emphasizes craft, patience, and skilled labor. Not industrial. Not modern.

Aspect ratio: 3:2 landscape.

Mood: Skilled craftsmanship in progress. ZPT builds the package piece by piece, the way a shipwright builds a vessel from the keel up.
```

### Image 3: The Expedition (About page hero)

```
Generate the brand image for ZPT Partners (use the Style Block and reference images above).

Subject: Two figures (silhouetted, not detailed faces) stand on the deck of a sailing ship at sea. They are looking at a large nautical chart unrolled on a wooden table between them.

Setting: On the deck of a moving ship. The horizon is visible in the distance, with deep navy sea and cream-beige clouds. The figures are partners in mid-conversation about the route ahead.

Details:
- A brass compass and a captain's sea chest are visible on the deck near the figures.
- The chart on the table shows a coastline with handwritten markings.
- The wood of the ship and the chest is cognac and dark brown.
- The two figures are dressed in 17th-century maritime clothing, but rendered as silhouettes so the focus stays on the chart and the sea.

Aspect ratio: 3:2 landscape.

Mood: Embedded partnership. Shared mission. ZPT sails with the client, not just briefs them and disappears.
```

### Image 4: The Captain's Chest (What You Get section)

```
Generate the brand image for ZPT Partners (use the Style Block and reference images above).

Subject: A wooden captain's sea chest with brass corner fittings, slightly open, sitting on a wooden surface or shelf. The chest is the entire focus of the image.

Visible inside the chest:
- A folded nautical chart (cream parchment with cognac line work).
- A brass compass.
- A leather-bound logbook.
- A pen or quill.
- Possibly a few wax-sealed letters.

Details:
- Wood is cognac and dark brown, weathered and well-worn.
- Brass fittings have a slight patina.
- The chest looks like a working tool, not a decorative prop. Not childish, not whimsical, not toy-like.
- Background is muted: cream or weathered wood.

Aspect ratio: 1:1 square (1200x1200) or 4:3.

Mood: Solid, functional, professional. The package as a tangible object. Something a craftsman or navigator would actually use.
```

### Image 5: Footer Ornament (etched line art)

```
Generate a small decorative ornament for the footer of the ZPT Partners website.

Style: A 1700s-style etched line drawing. Single color. Low-density, elegant line work, like a colophon or print flourish. Not a detailed scene; a decorative band.

Subject: Cresting waves with a small compass rose embedded in or above them. The compass rose has the cardinal points (N, E, S, W) implied by line direction, not labeled with text.

Color: Single color. Provide two versions if possible:
- Cognac (#A5663C) on cream (#EDE4D3) background.
- Cream (#EDE4D3) on navy (#0C0C28) background.

Aspect ratio: Wide horizontal, roughly 12:1 (e.g., 2400x200).

Mood: Restrained, editorial, like a watermark or printer's ornament. Not a decorative banner. Should sit quietly above a footer band.
```

---

## 3. Google Veo (8-second hero loop, exploratory)

Veo has limited context too. The prompt below is self-contained. Attach the still painting (Image 1: The Sailing Ship) as a reference if Veo accepts image-to-video input.

```
Generate an 8-second seamlessly looping video clip for the hero of a website (ZPT Partners, an AI implementation consulting firm). The aesthetic is a 17th-century Dutch maritime oil painting brought to life with subtle motion.

SUBJECT
A three-masted Dutch warship sailing slowly to the right across a working sea. The Dutch tri-color flag flies from the stern. The sails are full and the ship leans slightly with the wind.

STYLE
Painterly, oil-on-canvas texture throughout. Visible brushwork. Style reference: Willem van de Velde the Younger, Ludolf Bakhuizen. Not photorealistic. Not 3D-rendered. Not cartoon. Not photographic.

MOTION
- The ship moves at a gentle, steady pace from left to right (or stays mostly centered if camera follows it).
- The sails flutter subtly with wind. Not violent flapping.
- The ship rocks slightly on the swell.
- The sea has slow rolling motion. Cream-cap waves break and drift. Not turbulent, not still.
- Beige and cream clouds drift slowly across the sky at a slower pace than the ship and waves.
- Light catches the wavetops and the sails.

CAMERA
Static camera, or a very slow horizontal pan that follows the ship. No zoom. No fast cuts. No dramatic camera moves. Cinematic, contemplative.

COLOR PALETTE
- Sea: deep navy (similar to #0C0C28) with cream wave-caps.
- Sky: beige and cream clouds with darker atmospheric tones in the background.
- Ship: hull and rigging in cognac (#A5663C) and dark brown (#7A3E1F).
- Sails: cream with weathered shadow.
- No bright primary colors. No saturated red, blue, green, or yellow.

TECHNICAL
- Duration: 8 seconds.
- Aspect ratio: 16:9 landscape.
- Loop point: the first and last frames must match seamlessly so the clip loops without a visible cut.
- No audio (the clip will play muted on the website).

WHAT TO AVOID
- Modern boats, motorboats, sailboats with white fiberglass hulls.
- Photorealistic CGI water with refraction and caustics.
- Bright sunny skies. Storm scenes with lightning. Dead-flat calm seas.
- Fast camera movements. Zooms. Cuts.
- Cartoon style. Anime style. Flat illustration. Pixel art.
- Cropping that loses the Dutch flag at the stern.
- Text, logos, watermarks, captions.

MOOD
Patient navigation through working seas. Confident but not aggressive. A vessel that has done this journey before. The atmosphere of a Dutch maritime painting that happens to breathe.

[ATTACH: still painting reference (Image 1: The Sailing Ship), the original 17th century painting, and the modern ChatGPT reinterpretation if available]
```

---

## Notes on usage

- **Iterate.** None of these will produce the perfect output on the first try. ChatGPT will probably get the composition right but the colors slightly off; Veo will get the mood right but maybe over-animate the sea. Plan on 3-5 iterations per image.
- **Attach the references.** The Style Block tells the model what aesthetic to target, but the original 17th-century painting and the modern reinterpretation as image references will do more work than any text prompt.
- **Save the good ones.** When an output lands, save it to `dev/public/brand/paintings/` (or similar) and update `BRAND.md` with the new asset paths.
- **The Veo loop is exploratory.** If it does not produce something editorial within 3-5 iterations, fall back to the three-frame scroll-triggered approach in the design brief. No pressure to ship Veo.
