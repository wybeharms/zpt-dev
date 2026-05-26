import {
  SectionEyebrow,
  SectionHeading,
} from "../../components/Sections";

const PAINTING_SRC = "/landing_page/What You Get page.webp";

/**
 * /resources hero. Two-column grid on desktop so the painting and text
 * scale together as viewport width changes. Earlier version pinned the
 * painting to viewport width (w-[58vw]) while text floated inside a
 * max-w-[1400px] container, which caused the title to slide on top of
 * the painting at mid-range widths.
 */
export default function ResourcesHero() {
  return (
    <section
      id="resources-hero"
      className="relative w-full overflow-hidden bg-navy text-cream"
    >
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 pt-28 pb-10 md:grid-cols-[1.15fr_1fr] md:gap-12 md:px-10 md:py-0 md:h-[78vh] md:min-h-[640px]">
        {/* Painting column (desktop) */}
        <div
          aria-hidden="true"
          className="pointer-events-none relative hidden md:block md:h-full"
        >
          <img
            src={PAINTING_SRC}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-left"
            style={{
              maskImage:
                "linear-gradient(to left, transparent 0%, #000 5%, #000 100%)",
              WebkitMaskImage:
                "linear-gradient(to left, transparent 0%, #000 5%, #000 100%)",
            }}
          />
        </div>

        {/* Text column. Vertically centered against the painting on desktop. */}
        <div className="md:flex md:flex-col md:justify-center md:max-w-[560px]">
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
