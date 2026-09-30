/**
 * Photo collage on the right of the Our Approach section: five photos
 * from real rooms with slight rotations and small overlaps, like prints
 * laid on a table. Cream borders lift the photos off the navy section
 * background. The link goes to /testimonials, where the same photos
 * appear full size with their stories.
 *
 * Two rows keep the collage as short as the package list beside it: two
 * large prints on top, three smaller ones tucked under them. Overlaps
 * are deliberate but small.
 */
const FRAME =
  "w-full rounded-lg border-[3px] border-cream object-cover shadow-[0_14px_34px_-14px_rgba(12,12,40,0.4)]";

export default function WatchCollage() {
  return (
    <div>
      <div className="flex items-start justify-center">
        <div className="w-[50%]">
          <img
            src="/testimonials/marquette_photo.webp"
            alt="With the Marquette Associates team in Chicago"
            className={`${FRAME} aspect-[5/4] rotate-[-1.4deg] object-[center_45%]`}
          />
        </div>
        <div className="relative z-10 mt-5 w-[50%] -translate-x-2">
          <img
            src="/testimonials/soho_house_photo.webp"
            alt="Wybe Harms co-presenting at Soho House Chicago"
            className={`${FRAME} aspect-[5/4] rotate-[1.6deg] object-[center_68%]`}
          />
        </div>
      </div>
      <div className="relative z-20 -mt-3 flex items-start justify-center">
        <div className="w-[34%]">
          <img
            src="/testimonials/capital_industrial_photo.webp"
            alt="ZPT working session with the Capital Industrial team in London"
            className={`${FRAME} aspect-[4/3] rotate-[1.2deg]`}
          />
        </div>
        <div className="relative z-10 mt-3 w-[33%] -translate-x-1">
          <img
            src="/testimonials/new_vintage_partners_photo.webp"
            alt="With New Vintage Partners in New York"
            className={`${FRAME} aspect-[4/3] rotate-[-1.5deg] object-[center_22%]`}
          />
        </div>
        <div className="w-[33%] -translate-x-2">
          <img
            src="/testimonials/cfa_society_photo.webp"
            alt="Wybe presenting at a CFA Society Netherlands event in Amsterdam"
            className={`${FRAME} aspect-[4/3] rotate-[1deg] object-[center_78%]`}
          />
        </div>
      </div>
      <p className="mt-6 text-center">
        <a
          href="/testimonials"
          className="group inline-flex items-center gap-1.5 text-[13px] font-medium tracking-wide text-cognac-light transition-colors duration-150 hover:text-cream"
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
