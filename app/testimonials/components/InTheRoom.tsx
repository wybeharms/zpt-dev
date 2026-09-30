import { Section, SectionEyebrow, SectionHeading } from "../../components/Sections";

const ROOMS = [
  {
    file: "/testimonials/soho_house_photo.webp",
    alt: "Wybe Harms and Ryan Cohen presenting Deploying Agents at Soho House Chicago",
    title: "Soho House Chicago · Talk",
    caption: "Wybe and Ryan Cohen on deploying AI agents.",
    // Portrait source: bias the crop low so the slide, both speakers and
    // the first rows of the audience are in frame, not the ceiling.
    position: "object-[center_72%]",
  },
  {
    file: "/testimonials/cfa_society_photo.webp",
    alt: "Wybe presenting at a CFA Society Istanbul event",
    title: "CFA Society Istanbul · Keynote",
    caption:
      "Wybe on stage: practical ways for investment teams to put agents to work.",
    // Portrait source in a landscape frame: bias the crop low so the
    // speaker is in frame instead of only the screen above.
    position: "object-[center_72%]",
  },
];

/**
 * Photo band for rooms that have a great photo but no quote: talks and
 * events. Navy section so the photos pop between the light quote rows
 * and the cream teaser band below. New Vintage Partners moved up to
 * a quote row once Brian Downs approved his quote. Keep the Soho House
 * caption to Wybe and Ryan's own talk.
 *
 * A single photo sits centered at the width it has in the two-up grid,
 * so the band holds together with one room or two.
 */
export default function InTheRoom() {
  const layout =
    ROOMS.length === 1
      ? "mx-auto max-w-[540px]"
      : "grid gap-8 md:grid-cols-2 md:gap-10";
  return (
    <Section id="in-the-room" bg="navy" backgroundWord="On Site">
      <div className="max-w-[720px]">
        <SectionEyebrow bg="navy">On Site</SectionEyebrow>
        <SectionHeading bg="navy">In The Room</SectionHeading>
      </div>
      <div className={`mt-12 ${layout}`}>
        {ROOMS.map((room) => (
          <figure key={room.title}>
            <img
              src={room.file}
              alt={room.alt}
              className={`aspect-[4/3] w-full rounded-xl object-cover ${room.position}`}
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
