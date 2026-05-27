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
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 pt-28 pb-10 xl:grid-cols-[1.15fr_1fr] xl:gap-12 xl:px-10 xl:py-0 xl:h-[78vh] xl:min-h-[640px]">
        {/* Painting column (desktop) */}
        <div
          aria-hidden="true"
          className="pointer-events-none relative hidden xl:block xl:h-full"
        >
          {/* object-position shifts the painting right inside its column
              so the navy geometric block on the painting's left edge is
              cropped off and the wooden chest sits closer to center.
              Right-edge mask still feathers the painting into the navy
              column gutter. */}
          <img
            src={PAINTING_SRC}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover [object-position:75%_center]"
            style={{
              maskImage:
                "linear-gradient(to left, transparent 0%, #000 5%, #000 100%)",
              WebkitMaskImage:
                "linear-gradient(to left, transparent 0%, #000 5%, #000 100%)",
            }}
          />
        </div>

        {/* Text column. Vertically centered against the painting on desktop. */}
        <div className="xl:flex xl:flex-col xl:justify-center xl:max-w-[560px]">
          <SectionEyebrow bg="navy">Reference</SectionEyebrow>
          <SectionHeading bg="navy">Resources.</SectionHeading>
          <p className="mt-6 text-[15px] leading-[1.7] text-cream/75 xl:text-[17px]">
            Documents, recordings, and references for teams exploring or
            starting a ZPT engagement.
          </p>
        </div>
      </div>

      {/* Stacked painting below the text on mobile + small desktop.
          The side-by-side grid only kicks in at xl (1280px) so the
          title never has to fight the painting at narrow widths. */}
      <div className="xl:hidden">
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
