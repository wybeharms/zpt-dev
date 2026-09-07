import {
  Section,
  SectionEyebrow,
  SectionHeading,
} from "../../components/Sections";
import {
  CompassIcon,
  SailboatIcon,
  SextantIcon,
} from "../../components/MarineIcons";
import EntryPointsRow from "./EntryPointsRow";

type Entry = {
  Icon: React.ComponentType<{ className?: string }>;
  name: string;
  duration: string;
  copy: string;
};

const entries: Entry[] = [
  {
    Icon: CompassIcon,
    name: "ZPT Onboarding",
    duration: "45 minutes per person, remote",
    copy: "Your agent installed and set up for your role and company, permissions and privacy done right, a first folder built together, and portal access to keep going.",
  },
  {
    Icon: SextantIcon,
    name: "ZPT Discovery",
    duration: "Lite: half a day. Pro: one day on-site, two for larger firms",
    copy: "ZPT sets the team up, builds the shared folder, interviews the departments, and ranks the workflows by impact and feasibility. Ends with a scaffolded folder your team works in the same week.",
  },
  {
    Icon: SailboatIcon,
    name: "ZPT Build",
    duration: "One to five days per workflow, over months",
    copy: "Workflows built one by one from the discovery list, each judged against countable success criteria agreed before the work starts and checked together on real cases.",
  },
];

export default function EntryPoints() {
  return (
    <Section id="entry-points" bg="cream" backgroundWord="Process" align="header">
      <div className="max-w-[880px]">
        <SectionEyebrow bg="cream">Flexibility Is Key</SectionEyebrow>
        <SectionHeading bg="cream">Pick Your Entry Point.</SectionHeading>
        <p className="mt-6 max-w-[880px] text-[16px] leading-[1.7] text-navy/70">
          Most teams start with Onboarding or Discovery. Each package
          includes everything before it.*
        </p>
      </div>

      <ul className="mt-10 border-t border-navy/10">
        {entries.map(({ Icon, name, duration, copy }) => (
          <EntryPointsRow
            key={name}
            // Pre-render the icon here so a ReactNode crosses the
            // server -> client boundary instead of a function ref.
            icon={
              <Icon className="h-7 w-7 transition-colors duration-200 group-hover:text-cognac-deep md:h-8 md:w-8" />
            }
            name={name}
            duration={duration}
            copy={copy}
          />
        ))}
      </ul>

      <p className="mt-5 text-[13px] italic leading-[1.6] text-navy/55">
        * ZPT also offers subscriptions for individuals and retainers for
        the companies we work with, so the line stays open after any
        package.
      </p>

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
