import {
  SectionEyebrow,
  SectionHeading,
} from "../../components/Sections";

export default function OurWorkHero() {
  return (
    <section
      id="our-work-hero"
      className="relative w-full bg-navy text-cream"
    >
      <div className="mx-auto max-w-[1400px] px-6 pt-36 pb-20 md:px-10 md:pt-44 md:pb-28">
        <div className="max-w-[820px]">
          <SectionEyebrow bg="navy">Our Work</SectionEyebrow>
          <SectionHeading bg="navy">
            What An Engagement Actually Looks Like.
          </SectionHeading>
          <p className="mt-6 max-w-[640px] text-[15px] leading-[1.7] text-cream/75 md:text-[17px]">
            Valuable phases of an engagement, plus examples from past
            builds.
          </p>
        </div>
      </div>
    </section>
  );
}
