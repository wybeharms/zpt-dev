import {
  SectionEyebrow,
  SectionHeading,
} from "../../components/Sections";

const PAINTING_SRC = "/landing_page/Technology.webp";

/**
 * /technology hero. Desktop layout (lg+) mirrors HowItWorksHero: navy
 * band, ~78vh tall, painting anchored to the right edge with a left-edge
 * mask gradient that fades into navy. Below lg the painting stacks above
 * the title block at full viewport width so the title never has to share
 * horizontal space with the painting at widths where they'd crowd.
 */
export default function TechnologyHero() {
  return (
    <section
      id="technology-hero"
      className="relative w-full overflow-hidden bg-navy text-cream lg:h-[78vh] lg:min-h-[640px]"
    >
      {/* Desktop painting (lg+): absolute, anchored right, top aligned
          to header bottom (~80px) so it doesn't disappear behind the
          opaque header */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 hidden w-[58vw] lg:block"
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

      {/* Stacked painting below lg. Sits above the title block; the
          fixed header overlays the top of the painting, same pattern
          as the home Hero. */}
      <div className="lg:hidden">
        <img
          src={PAINTING_SRC}
          alt=""
          aria-hidden="true"
          className="block w-full"
        />
      </div>

      {/* Content — container widened to 1400px so the eyebrow + heading
          align with the header logo's left edge. Padding tightens below
          lg since the painting above provides the buffer to the header. */}
      <div className="relative mx-auto max-w-[1400px] px-6 pt-10 pb-12 lg:flex lg:h-full lg:items-center lg:px-10 lg:py-0">
        <div className="lg:max-w-[560px]">
          <SectionEyebrow bg="navy">Technology</SectionEyebrow>
          <SectionHeading bg="navy">Below The Deck.</SectionHeading>
          <p className="mt-6 text-[15px] leading-[1.7] text-cream/75 lg:text-[17px]">
            What an agent is and where it runs. The architecture in plain
            terms.
          </p>
        </div>
      </div>
    </section>
  );
}
