import {
  SectionEyebrow,
  SectionHeading,
} from "../../components/Sections";

const PAINTING_SRC = "/landing_page/Technology.png";

/**
 * /technology hero. Mirrors the HowItWorksHero layout: navy band, ~78vh
 * tall on desktop, painting anchored to the right edge with a left-edge
 * mask gradient that fades into navy. Mobile drops the painting below
 * the text block.
 */
export default function TechnologyHero() {
  return (
    <section
      id="technology-hero"
      className="relative w-full overflow-hidden bg-navy text-cream md:h-[78vh] md:min-h-[640px]"
    >
      {/* Desktop painting: absolute, anchored right, top aligned to header
          bottom (~80px) so it doesn't disappear behind the opaque header */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 hidden w-[58vw] md:block"
        style={{ top: "80px", bottom: 0 }}
      >
        <img
          src={PAINTING_SRC}
          alt=""
          aria-hidden="true"
          className="absolute right-0 top-0 h-full w-auto max-w-none"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, #000 3%, #000 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, #000 3%, #000 100%)",
          }}
        />
      </div>

      {/* Content — container widened to 1400px so the eyebrow + heading
          align with the header logo's left edge. */}
      <div className="relative mx-auto max-w-[1400px] px-6 pt-28 pb-10 md:flex md:h-full md:items-center md:px-10 md:py-0">
        <div className="md:max-w-[560px]">
          <SectionEyebrow bg="navy">Technology</SectionEyebrow>
          <SectionHeading bg="navy">Below The Deck.</SectionHeading>
          <p className="mt-6 text-[15px] leading-[1.7] text-cream/75 md:text-[17px]">
            What an agent is and where it runs. The architecture in plain
            terms.
          </p>
        </div>
      </div>

      {/* Mobile painting: full-width block below the text */}
      <div className="md:hidden">
        <img
          src={PAINTING_SRC}
          alt=""
          aria-hidden="true"
          className="block w-full"
        />
      </div>
    </section>
  );
}
