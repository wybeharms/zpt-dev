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
    name: "Setup",
    duration: "Usually one to two days for a company, shorter for one person",
    copy: "A ZPTer teaches your team to use agents in their own work and sets up the shared folder, instructions and company context with you. We map your workflows and agree what should happen next.",
  },
  {
    Icon: SextantIcon,
    name: "Build",
    duration: "Optional, scoped per project",
    copy: "The workflows you choose, built from real example inputs and outputs, judged against success criteria agreed before the work starts, tested with the people who use them, and handed over with instructions.",
  },
  {
    Icon: SailboatIcon,
    name: "Retainer",
    duration: "Monthly, scope agreed per client",
    copy: "Ongoing support, maintenance and small improvements to your setup, a monthly folder review and a written monthly recap. Larger new workflows are scoped as a separate Build.",
  },
];

export default function EntryPoints() {
  return (
    <Section id="entry-points" bg="cream" backgroundWord="Process" align="header">
      <div className="max-w-[880px]">
        <SectionEyebrow bg="cream">Flexibility Is Key</SectionEyebrow>
        <SectionHeading bg="cream">Setup, Build, Retainer.</SectionHeading>
        <p className="mt-6 max-w-[880px] text-[16px] leading-[1.7] text-navy/70">
          Every engagement starts with a Setup. Build is optional: many
          teams go straight from Setup to a Retainer. Every engagement
          includes the ZPT Portal.
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
