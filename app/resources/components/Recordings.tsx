import {
  Section,
  SectionEyebrow,
  SectionHeading,
} from "../../components/Sections";

/**
 * Single placeholder card for the Recordings grid. 16:9 cream-bordered
 * rectangle on a slightly lighter navy fill, with a small cognac play
 * triangle centered. "Coming soon" caption beneath.
 */
function PlaceholderCard() {
  return (
    <div>
      <div className="flex aspect-video w-full items-center justify-center overflow-hidden rounded-md border border-cream/15 bg-[#16163a]">
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          aria-hidden="true"
          className="text-cognac"
        >
          <path d="M 22 18 L 40 28 L 22 38 Z" fill="currentColor" />
        </svg>
      </div>
      <p className="mt-3 text-center text-[12px] tracking-wide text-cream/40">
        Coming soon
      </p>
    </div>
  );
}

/**
 * Navy band. Heading + lede across the top, then a 3-up grid of
 * placeholder video cards. No real thumbnails — these only sketch the
 * future shape of the section.
 */
export default function Recordings() {
  return (
    <Section id="recordings" bg="navy" align="header">
      <div className="max-w-[760px]">
        <SectionEyebrow bg="navy">Recordings</SectionEyebrow>
        <SectionHeading bg="navy">Walkthroughs Coming Soon.</SectionHeading>
        <p className="mt-6 text-[16px] leading-[1.7] text-cream/75">
          ZPT is recording a series of short walkthroughs: setting up the
          package, designing skills, working with MCPs, and managing context
          across a team. The first will land here.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
        <PlaceholderCard />
        <PlaceholderCard />
        <PlaceholderCard />
      </div>
    </Section>
  );
}
