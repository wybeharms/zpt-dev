import RevealOnScroll from "../../components/RevealOnScroll";
import {
  Section,
  SectionEyebrow,
  SectionHeading,
} from "../../components/Sections";
import {
  AnchorIcon,
  CompassIcon,
  SailboatIcon,
  SextantIcon,
} from "../../components/MarineIcons";

type Entry = {
  Icon: React.ComponentType<{ className?: string }>;
  name: string;
  duration: string;
  copy: string;
};

const entries: Entry[] = [
  {
    Icon: CompassIcon,
    name: "Education Workshop",
    duration: "Half-day, on-site or remote",
    copy: "A practical session on how agents actually work, with live demos drawn from real workflows. The team leaves with a shared vocabulary and a short list of places worth exploring next.",
  },
  {
    Icon: SextantIcon,
    name: "Discovery",
    duration: "One to two days",
    copy: "ZPT comes on-site, interviews the team, and maps work across departments. We size each candidate by time saved and feasibility, then close with a working proof of concept.",
  },
  {
    Icon: SailboatIcon,
    name: "Focused Build",
    duration: "One to ten days",
    copy: "A focused build takes one defined workflow all the way through with real data. ZPT builds the package around it: context, skills, templates, and tool connections, then refines until the output is good enough to use.",
  },
  {
    Icon: AnchorIcon,
    name: "Embedded",
    duration: "Ongoing, weekly or monthly",
    copy: "Regular sessions to add workflows and maintain the package as the team learns where agents help. ZPT stays close enough to keep the foundation healthy without making your team dependent.",
  },
];

export default function EntryPoints() {
  return (
    <Section id="entry-points" bg="cream" align="header">
      <div className="max-w-[880px]">
        <SectionEyebrow bg="cream">Flexibility Is Key</SectionEyebrow>
        <SectionHeading bg="cream">Pick Your Entry Point.</SectionHeading>
        <p className="mt-6 max-w-[880px] text-[16px] leading-[1.7] text-navy/70">
          Most engagements start with Education or Discovery and grow from
          there.
        </p>
      </div>

      <ul className="mt-14 border-t border-navy/10">
        {entries.map(({ Icon, name, duration, copy }) => (
          <li
            key={name}
            className="group border-b border-navy/10 transition-colors duration-200 hover:bg-cognac/[0.08]"
          >
            <RevealOnScroll className="grid grid-cols-[56px_minmax(0,1fr)] gap-5 px-3 py-9 md:grid-cols-[100px_300px_minmax(0,1fr)] md:gap-10 md:px-5">
              <div className="text-cognac md:flex md:items-start md:pt-2">
                <Icon className="h-9 w-9 transition-colors duration-200 group-hover:text-cognac-deep md:h-10 md:w-10" />
              </div>
              <div className="md:pt-1">
                <p className="font-serif text-[22px] leading-snug text-navy md:text-[26px]">
                  {name}
                </p>
                <p className="mt-2 text-[13px] italic text-cognac/85">
                  {duration}
                </p>
              </div>
              <p className="col-span-2 text-[15px] leading-[1.65] text-navy/75 transition-colors duration-200 group-hover:text-navy md:col-span-1 md:pt-2">
                {copy}
              </p>
            </RevealOnScroll>
          </li>
        ))}
      </ul>

      {/* Bridge link to /our-work */}
      <div className="mt-12 text-center">
        <a
          href="/our-work"
          className="group inline-flex items-center gap-2 text-[14px] font-medium tracking-wide text-cognac transition-colors duration-150 hover:text-cognac-deep"
        >
          See examples of the work
          <span
            aria-hidden="true"
            className="transition-transform duration-150 group-hover:translate-x-0.5"
          >
            →
          </span>
        </a>
      </div>
    </Section>
  );
}
