const PAINTING_SRC = "/landing_page/Main Landing Page.webp";

/**
 * /testimonials hero — painting banner only, same pattern as the
 * other sub-page heroes (see OurWorkHero). The marine painting sets
 * the tone; the "The Teams We Work With" section immediately below
 * acts as the de facto top-of-page heading.
 *
 * `data-hero-watch` opts this element into the Header's transparent-
 * over-hero treatment, matching the rest of the site.
 */
export default function TestimonialsHero() {
  return (
    <section
      id="testimonials-hero"
      className="relative w-full overflow-hidden bg-navy"
      data-hero-watch
      style={{ aspectRatio: "2 / 1", maxHeight: "460px" }}
    >
      <img
        src={PAINTING_SRC}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
    </section>
  );
}
