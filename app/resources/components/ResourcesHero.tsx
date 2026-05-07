import {
  SectionEyebrow,
  SectionHeading,
} from "../../components/Sections";

const PAINTING_SRC = "/landing_page/What You Get page.png";

/**
 * /resources hero. Painting anchored to the LEFT (different left/right
 * rhythm than /technology and /how-it-works, which both anchor right).
 * Mask gradient fades from solid on the painting side to transparent on
 * the inner edge so the artwork blends into the navy band.
 *
 * Note: no `data-hero-watch` here on purpose — the header should sit as
 * solid cream over this page rather than translucent. Header logic falls
 * back to "always solid" when no watch target is present.
 */
export default function ResourcesHero() {
  return (
    <section
      id="resources-hero"
      className="relative w-full overflow-hidden bg-navy text-cream md:h-[78vh] md:min-h-[640px]"
    >
      {/* Desktop painting: absolute, anchored left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 hidden w-[58vw] md:block"
        style={{ top: "80px", bottom: 0 }}
      >
        <img
          src={PAINTING_SRC}
          alt=""
          aria-hidden="true"
          className="absolute left-0 top-0 h-full w-auto max-w-none"
          style={{
            maskImage:
              "linear-gradient(to left, transparent 0%, #000 3%, #000 100%)",
            WebkitMaskImage:
              "linear-gradient(to left, transparent 0%, #000 3%, #000 100%)",
          }}
        />
      </div>

      {/* Content — pushed right via md:justify-end so it sits on the
          painting-free side of the band. */}
      <div className="relative mx-auto max-w-[1400px] px-6 pt-28 pb-10 md:flex md:h-full md:items-center md:justify-end md:px-10 md:py-0">
        <div className="md:max-w-[560px]">
          <SectionEyebrow bg="navy">Reference</SectionEyebrow>
          <SectionHeading bg="navy">Resources.</SectionHeading>
          <p className="mt-6 text-[15px] leading-[1.7] text-cream/75 md:text-[17px]">
            Documents, recordings, and references for teams exploring or
            starting a ZPT engagement.
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
