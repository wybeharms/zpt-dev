/**
 * Photo collage beside the Watch ZPT video: four team photos with
 * slight rotations and small overlaps, like prints laid on a table.
 * Cream borders lift the photos off the tan section background. The
 * caption links to /testimonials, where the same photos appear full
 * size with their stories.
 *
 * Overlaps are deliberate but small: the right column is nudged down
 * and left, and each column's lower photo tucks under the one above
 * it by a few pixels.
 */
const FRAME =
  "w-full rounded-lg border-[3px] border-cream object-cover shadow-[0_14px_34px_-14px_rgba(12,12,40,0.4)]";

export default function WatchCollage() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-[53%]">
          <img
            src="/testimonials/capital_industrial_photo.webp"
            alt="ZPT working session with the Capital Industrial team in London"
            className={`${FRAME} h-36 -rotate-[1.6deg] md:h-40`}
          />
          <img
            src="/testimonials/marquette_photo.webp"
            alt="With the Marquette Associates team in Chicago"
            className={`${FRAME} relative -mt-2 h-48 rotate-[1.1deg] md:h-56`}
          />
        </div>
        <div className="relative z-10 mt-7 w-[47%] -translate-x-3">
          <img
            src="/testimonials/new_vintage_partners_photo.webp"
            alt="With New Vintage Partners in New York"
            className={`${FRAME} h-48 rotate-[1.8deg] md:h-56`}
          />
          <img
            src="/testimonials/cfa_society_photo.webp"
            alt="Wybe presenting at CFA Society Istanbul"
            className={`${FRAME} relative -mt-2 h-36 -rotate-[1.2deg] md:h-40`}
          />
        </div>
      </div>
      <p className="mt-7 text-center text-[12px] tracking-wide text-navy/60">
        Capital Industrial · Marquette Associates · New Vintage Partners ·
        CFA Society
      </p>
      <p className="mt-2 text-center">
        <a
          href="/testimonials"
          className="group inline-flex items-center gap-1.5 text-[13px] font-medium tracking-wide text-cognac transition-colors duration-150 hover:text-cognac-deep"
        >
          See Testimonials
          <span
            aria-hidden="true"
            className="transition-transform duration-150 group-hover:translate-x-0.5"
          >
            →
          </span>
        </a>
      </p>
    </div>
  );
}
