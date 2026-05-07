import {
  SectionEyebrow,
  SectionHeading,
} from "../../components/Sections";

/**
 * /team hero. Text-only navy band. No fixed height — generous top
 * padding pushes the eyebrow well below the header bar so it doesn't
 * feel cramped, and the section flows to the height of its content.
 *
 * No `data-hero-watch` here on purpose: there's no painting, so the
 * header sits as solid cream above this band rather than translucent.
 */
export default function TeamHero() {
  return (
    <section
      id="team-hero"
      className="relative w-full bg-navy text-cream"
    >
      <div className="mx-auto max-w-[1400px] px-6 pt-32 pb-20 md:px-10 md:pt-44 md:pb-28">
        <div className="md:max-w-[720px]">
          <SectionEyebrow bg="navy">The Team</SectionEyebrow>
          <SectionHeading bg="navy">Meet The ZPTers.</SectionHeading>
          <p className="mt-6 text-[15px] leading-[1.7] text-cream/75 md:text-[17px]">
            A small, talented, distributed team of AI experts. ZPTers
            have shipped across 10+ organizations and dozens of projects,
            and we&apos;re growing.
          </p>
          <a
            href="#join-us"
            className="group mt-4 inline-flex items-center gap-2 text-[14px] font-medium tracking-wide text-cognac-light transition-colors duration-150 hover:text-cream"
          >
            Apply to join
            <span
              aria-hidden="true"
              className="transition-transform duration-150 group-hover:translate-x-0.5"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
