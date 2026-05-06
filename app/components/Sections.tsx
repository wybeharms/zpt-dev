import type { ReactNode } from "react";
import RevealOnScroll from "./RevealOnScroll";
import {
  AnchorIcon,
  CompassIcon,
  FogIcon,
  SailboatIcon,
  SextantIcon,
} from "./MarineIcons";

export type Bg = "cream" | "navy";
export type SectionAlign = "default" | "header";

export function Section({
  id,
  bg,
  align = "default",
  bgColor,
  children,
  className = "",
}: {
  id: string;
  bg: Bg;
  align?: SectionAlign;
  /** Optional bg-color override (e.g. "#E0CDB0") so a section can break
      the alternating cream/navy rhythm with a custom shade. The text color
      still follows `bg`. */
  bgColor?: string;
  children: ReactNode;
  className?: string;
}) {
  const textColor = bg === "cream" ? "text-navy" : "text-cream";
  const bgClass = bgColor
    ? ""
    : bg === "cream"
      ? "bg-cream"
      : "bg-navy";
  // align="header" widens the inner container to 1400px so eyebrows /
  // headings line up with the header logo's left edge. Default 1200px
  // stays for the home page.
  const innerMax = align === "header" ? "max-w-[1400px]" : "max-w-[1200px]";
  return (
    <section
      id={id}
      className={`relative w-full ${bgClass} ${textColor} py-24 md:py-32 ${className}`}
      style={bgColor ? { backgroundColor: bgColor } : undefined}
    >
      <div className={`mx-auto ${innerMax} px-6 md:px-10`}>{children}</div>
    </section>
  );
}

export function SectionEyebrow({
  children,
  bg,
}: {
  children: ReactNode;
  bg: Bg;
}) {
  const color = bg === "cream" ? "text-cognac" : "text-cognac-light";
  return (
    <p
      className={`mb-5 text-[12px] font-medium uppercase tracking-[0.22em] ${color}`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  children,
  bg,
}: {
  children: ReactNode;
  bg: Bg;
}) {
  const accent = bg === "cream" ? "text-navy" : "text-cream";
  return (
    <h2
      className={`font-serif text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.08] tracking-[-0.01em] ${accent}`}
    >
      {children}
    </h2>
  );
}

/* ---------- 2. Trusted By ---------- */
export function TrustedBy() {
  const clients = [
    "Marquette",
    "CFA Society",
    "New Vintage",
    "MDV Design",
    "Brutalia",
  ];
  return (
    <Section id="trusted-by" bg="cream" className="py-16 md:py-20">
      <p className="mb-10 text-center text-[12px] font-medium uppercase tracking-[0.22em] text-cognac">
        Trusted By
      </p>
      <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 md:gap-x-16">
        {clients.map((name) => (
          <li
            key={name}
            className="font-serif text-[20px] tracking-[0.01em] text-navy md:text-[22px]"
          >
            {name}
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* ---------- 3. Our Approach (editorial vertical list) ---------- */
export function OurApproach() {
  const steps = [
    {
      number: "01",
      label: "Education",
      copy: "A hands-on session for your leadership and operating team. Your team leaves understanding what AI can and cannot do for the work they already run.",
    },
    {
      number: "02",
      label: "Discovery",
      copy: "On-site mapping of your real workflows. We surface the highest-leverage opportunities to automate.",
    },
    {
      number: "03",
      label: "Build",
      copy: "We build the workflows your team runs every day. Your team uses them through Claude, Codex, or any compatible AI app, and you own everything we deliver.",
    },
  ];
  return (
    <section
      id="our-approach"
      className="relative w-full bg-navy py-20 text-cream md:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="max-w-[860px]">
          <SectionEyebrow bg="navy">How We Help</SectionEyebrow>
          <SectionHeading bg="navy">Our Approach</SectionHeading>
          <p className="mt-6 text-[16px] leading-[1.7] text-cream/85">
            Every company is different. ZPT meets your team where you are.
            Engagements range from a half-day education session to a full
            multi-workflow build, sized to where your team is ready. Three
            steps anchor the work.
          </p>

          <ul className="mt-6 border-t border-cream/15">
            {steps.map((step) => (
              <li
                key={step.label}
                className="border-b border-cream/15"
              >
                <RevealOnScroll className="grid grid-cols-[64px_minmax(0,1fr)] gap-6 py-5 md:grid-cols-[80px_minmax(0,1fr)] md:gap-10 md:py-5">
                  <span
                    aria-hidden="true"
                    className="select-none font-serif text-[28px] leading-none text-cognac-light md:text-[32px]"
                  >
                    {step.number}
                  </span>
                  <div>
                    <p className="font-serif text-[22px] leading-snug text-cream md:text-[24px]">
                      {step.label}
                    </p>
                    <p className="mt-3 text-[15px] leading-[1.65] text-cream/75">
                      {step.copy}
                    </p>
                  </div>
                </RevealOnScroll>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- 5. Watch ZPT in Action ---------- */
export function WatchZpt() {
  return (
    <Section id="watch" bg="navy">
      <div className="mx-auto max-w-[760px] text-center">
        <SectionEyebrow bg="navy">Preview</SectionEyebrow>
        <SectionHeading bg="navy">Watch ZPT in Action</SectionHeading>
        <p className="mx-auto mt-6 max-w-[560px] text-[16px] leading-[1.65] text-cream/75">
          A short introduction to what ZPT builds and how your team runs it.
        </p>
        <div className="mt-12 aspect-video w-full overflow-hidden rounded-[5px] border border-cream/15 bg-[#08081c]">
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-[12px] font-medium uppercase tracking-[0.22em] text-cream/55">
              Video Walkthrough Coming Soon
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------- 6. Why ZPT ---------- */
export function WhyZpt() {
  const blocks = [
    {
      Icon: CompassIcon,
      lead: "Track Record Across Industries.",
      copy: "Custom Claude, Codex, and Copilot setups shipped across investment consulting, private equity, secondaries, design, and hospitality. After 100+ conversations with leaders adopting AI, most of the wrong turns are already mapped. Depth is the moat your team inherits.",
    },
    {
      Icon: SextantIcon,
      lead: "Built by Practitioners.",
      copy: "ZPT originated out of a software company that lives and breathes AI. We test every new tool as it ships and know first-hand how they reshape how teams operate. That experience comes directly to your team, in production form.",
    },
    {
      Icon: SailboatIcon,
      lead: "Start Small, No Commitment.",
      copy: "Every engagement is low risk by design. Even when a workflow is only partially automatable, what we build becomes a foundation the team grows over time. The setup is AI agnostic and nothing is locked in.",
    },
  ];
  return (
    <Section id="why-zpt" bg="cream">
      <div className="max-w-[720px]">
        <SectionEyebrow bg="cream">Proven</SectionEyebrow>
        <SectionHeading bg="cream">Why ZPT</SectionHeading>
      </div>
      <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
        {blocks.map(({ Icon, lead, copy }) => (
          <div key={lead}>
            <Icon className="mb-3 h-8 w-8 text-cognac" />
            <h3 className="font-serif text-[22px] leading-snug text-navy">
              {lead}
            </h3>
            <p className="mt-4 text-[15px] leading-[1.65] text-navy/75">
              {copy}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- 7. Is ZPT Right for Your Company ---------- */
export function IsZptRight() {
  const yes = [
    "You have repeatable workflows worth codifying.",
    "Your team is open to working alongside agents.",
    "You want ownership, not subscription.",
    "You want a working system, not a recommendation.",
  ];
  const notYet = [
    "You want a chatbot.",
    "You haven't decided what to automate.",
    "You expect ZPT to run the workflows for your team.",
    "You're looking for a one-time install with no follow-on.",
  ];
  return (
    <Section id="is-zpt-right" bg="navy">
      <div className="max-w-[720px]">
        <SectionEyebrow bg="navy">Qualify</SectionEyebrow>
        <SectionHeading bg="navy">Is ZPT Right for Your Company</SectionHeading>
      </div>
      <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <div className="flex items-center gap-3 text-cognac-light">
            <AnchorIcon className="h-7 w-7" />
            <p className="font-serif text-[26px] leading-none">Yes, If</p>
          </div>
          <ul className="mt-6 space-y-4 pl-10">
            {yes.map((line) => (
              <li
                key={line}
                className="text-[15px] leading-[1.6] text-cream/85"
              >
                {line}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-3 text-cream/55">
            <FogIcon className="h-7 w-7" />
            <p className="font-serif text-[26px] leading-none text-cream/85">
              Not Yet, If
            </p>
          </div>
          <ul className="mt-6 space-y-4 pl-10">
            {notYet.map((line) => (
              <li
                key={line}
                className="text-[15px] leading-[1.6] text-cream/70"
              >
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

/* ---------- 8. Team Preview (basic stub) ---------- */
export function TeamPreview() {
  const team = [
    { name: "Wybe Harms", role: "Founder" },
    { name: "Team Member 2", role: "Forward-Deployed Engineer" },
    { name: "Team Member 3", role: "Forward-Deployed Engineer" },
    { name: "Team Member 4", role: "Forward-Deployed Engineer" },
    { name: "Team Member 5", role: "Forward-Deployed Engineer" },
  ];
  return (
    <Section id="team" bg="cream">
      <div className="max-w-[720px]">
        <SectionEyebrow bg="cream">Team</SectionEyebrow>
        <SectionHeading bg="cream">Team Preview</SectionHeading>
      </div>
      <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-6">
        {team.map((member) => (
          <li key={member.name} className="border-t border-navy/15 pt-5">
            <p className="font-serif text-[20px] leading-snug text-navy">
              {member.name}
            </p>
            <p className="mt-1 text-[14px] tracking-wide text-navy/65">
              {member.role}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* ---------- 9. Final CTA ---------- */
export function FinalCta() {
  return (
    <section
      id="final-cta"
      className="relative w-full overflow-hidden bg-navy py-32 text-cream md:py-40"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 opacity-[0.15]"
        style={{
          backgroundImage: "url('/landing_page/Main Landing Page.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(12,12,40,0.05) 0%, rgba(12,12,40,0.55) 50%, #0C0C28 100%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-[900px] px-6 text-center md:px-10">
        <SectionEyebrow bg="navy">Start Here</SectionEyebrow>
        <h2 className="font-serif text-[clamp(2.25rem,4.5vw,3.75rem)] font-normal leading-[1.06] tracking-[-0.01em] text-cream">
          Build Your AI Directory
        </h2>
        <p className="mx-auto mt-6 max-w-[560px] text-[16px] leading-[1.65] text-cream/80">
          Every engagement begins with a conversation. Book a 30-minute call
          to talk through your team's situation.
        </p>
        <div className="mt-10">
          <a
            href="mailto:wybe@zptpartners.com"
            className="inline-flex items-center justify-center rounded-[5px] bg-cognac px-9 py-4 text-[16px] font-medium tracking-wide text-cream transition-colors duration-150 hover:bg-cognac-deep"
          >
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
}
