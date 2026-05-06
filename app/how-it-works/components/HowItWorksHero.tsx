import {
  SectionEyebrow,
  SectionHeading,
} from "../../components/Sections";

const PAINTING_SRC = "/landing_page/How It Works page.png";

/**
 * Sub-page hero: navy band, ~60vh tall on desktop. The Shipwright painting
 * sits anchored to the right edge at native 3:2 aspect and is allowed to
 * overflow leftward into the navy band on narrow laptops; a left-edge mask
 * fades the painting into the navy so there is no hard vertical seam.
 *
 * On mobile the painting drops below the text block at full viewport width,
 * native aspect, no mask.
 */
export default function HowItWorksHero() {
  return (
    <section
      id="how-it-works-hero"
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
              "linear-gradient(to right, transparent 0%, transparent 6%, #000 20%, #000 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, transparent 6%, #000 20%, #000 100%)",
          }}
        />
      </div>

      {/* Content — container widened to 1400px so the eyebrow + heading
          align with the header logo's left edge. */}
      <div className="relative mx-auto max-w-[1400px] px-6 pt-28 pb-10 md:flex md:h-full md:items-center md:px-10 md:py-0">
        <div className="md:max-w-[560px]">
          <SectionEyebrow bg="navy">Engagement</SectionEyebrow>
          <SectionHeading bg="navy">
            How The Work Comes Together.
          </SectionHeading>
          <p className="mt-6 text-[15px] leading-[1.7] text-cream/75 md:text-[17px]">
            Every voyage starts with knowing the waters it sails.
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
