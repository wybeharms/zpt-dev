import { Section, SectionEyebrow, SectionHeading } from "../../components/Sections";

const ROOMS = [
  {
    file: "/testimonials/new_vintage_partners_photo.webp",
    alt: "With New Vintage Partners at their New York office",
    title: "New Vintage Partners · New York",
    caption:
      "On site with the NVP team, mapping and building workflows together.",
  },
  {
    file: "/testimonials/cfa_society_photo.webp",
    alt: "Wybe presenting at a CFA Society Istanbul event",
    title: "CFA Society Istanbul · Keynote",
    caption:
      "Wybe on stage: practical ways for investment teams to put agents to work.",
  },
];

/**
 * Photo band for engagements that have a great room but no quote yet.
 * Navy section so the photos pop between the two light quote rows and
 * the cream case-study band below.
 */
export default function InTheRoom() {
  return (
    <Section id="in-the-room" bg="navy" backgroundWord="On Site">
      <div className="max-w-[720px]">
        <SectionEyebrow bg="navy">On Site</SectionEyebrow>
        <SectionHeading bg="navy">In The Room</SectionHeading>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-10">
        {ROOMS.map((room) => (
          <figure key={room.title}>
            <img
              src={room.file}
              alt={room.alt}
              className="aspect-[4/3] w-full rounded-xl object-cover"
            />
            <figcaption className="mt-4">
              <p className="text-[14px] font-medium text-cream">
                {room.title}
              </p>
              <p className="mt-1 text-[13px] leading-[1.6] text-cream/65">
                {room.caption}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
