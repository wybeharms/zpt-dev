const PAINTING_SRC = "/landing_page/Main Landing Page.webp";

// The painting stays solid over its upper half, then dissolves into the
// cream of the page below, so the hero has no hard bottom edge.
const FADE = "linear-gradient(to bottom, #000 0%, #000 48%, transparent 100%)";

/**
 * /testimonials hero: painting banner only, same pattern as the other
 * sub-page heroes (see OurWorkHero), except that this one fades into
 * the page. The section background is cream, the same cream as the
 * section below, and a mask fades the painting out toward the bottom.
 * The "The Teams We Work With" section immediately below acts as the
 * de facto top-of-page heading.
 *
 * `data-hero-watch` opts this element into the Header's transparent-
 * over-hero treatment, matching the rest of the site.
 */
export default function TestimonialsHero() {
  return (
    <section
      id="testimonials-hero"
      // -mb-px tucks the hero 1px under the section below. Both are cream
      // now, so a sub-pixel seam between them would show the navy page
      // background as a hairline.
      className="relative -mb-px w-full overflow-hidden bg-cream"
      data-hero-watch
      style={{ aspectRatio: "2 / 1", maxHeight: "460px" }}
    >
      <img
        src={PAINTING_SRC}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
        style={{ maskImage: FADE, WebkitMaskImage: FADE }}
      />
    </section>
  );
}
