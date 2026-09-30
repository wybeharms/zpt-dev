import { Section } from "../../components/Sections";
import PortraitSwap from "../../components/PortraitSwap";
import RoleLabel from "../../components/RoleLabel";
import { TEAM } from "../../components/team-data";

/**
 * Cream band. 3-up portrait grid (1 col on mobile, 2 on small tablets,
 * 3 from md up), capped at 1010px and centered so each card keeps the
 * width it had in the earlier 4-up row. Each card: hover-swap portrait,
 * name, role, bio, LinkedIn link. The grid carries the page; no extra
 * eyebrow/heading above it since the hero already framed the section.
 */
export default function TeamGrid() {
  return (
    <Section
      id="team-grid"
      bg="cream"
      align="header"
      backgroundWord="Team"
    >
      <ul className="mx-auto grid max-w-[1010px] gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-x-10">
        {TEAM.map((member) => (
          <li key={member.name} className="flex flex-col">
            <PortraitSwap photo={member.photo} marine={member.marine} alt={member.name} />
            <h3 className="mt-5 font-serif text-[20px] leading-snug text-navy">
              {member.name}
            </h3>
            <p className="mt-1.5 text-[12px] font-medium uppercase tracking-[0.2em] text-cognac/85">
              <RoleLabel role={member.role} />
            </p>
            <p className="mt-3 max-w-[280px] text-[14px] leading-[1.6] text-navy/70">
              {member.bio}
            </p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-cognac transition-colors duration-150 hover:text-cognac-deep"
            >
              LinkedIn
              <span
                aria-hidden="true"
                className="transition-transform duration-150 group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
