const PAINTING_SRC = "/landing_page/Our Work.webp";

/**
 * /our-work hero — painting banner only, no text band. The Our Work
 * painting is panoramic (~2:1) and serves as the visual hero on its
 * own; the page's identity is conveyed by URL, browser tab, and the
 * painting itself. The "THE PROCESS / The Shape Of The Work." section
 * (FiveSteps) immediately below acts as the de facto top-of-page
 * heading.
 *
 * The painting renders at native 2:1 aspect on mobile and is capped
 * vertically on larger screens (max 460px) so the hero doesn't grow
 * past a sensible height on tall desktops.
 *
 * `data-hero-watch` opts this element into the Header's transparent-
 * over-hero treatment: the header reads as translucent cream over the
 * painting, then transitions to solid cream once the painting scrolls
 * past — matching the home page.
 */
export default function OurWorkHero() {
  return (
    <section
      id="our-work-hero"
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
