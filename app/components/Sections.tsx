import type { ReactNode } from "react";

type Bg = "cream" | "navy";

function Section({
  id,
  bg,
  children,
  className = "",
}: {
  id: string;
  bg: Bg;
  children: ReactNode;
  className?: string;
}) {
  const palette =
    bg === "cream" ? "bg-cream text-navy" : "bg-navy text-cream";
  return (
    <section
      id={id}
      className={`relative w-full ${palette} py-24 md:py-32 ${className}`}
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">{children}</div>
    </section>
  );
}

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.18em] opacity-60">
      {children}
    </p>
  );
}

function SectionHeading({
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
    "Cypress Creek",
    "New Vintage",
    "MDV Design",
    "Brutalia",
  ];
  return (
    <Section id="trusted-by" bg="cream" className="py-16 md:py-20">
      <p className="mb-10 text-center text-[12px] font-medium uppercase tracking-[0.22em] text-navy/55">
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

/* ---------- 3. What You Get ---------- */
export function WhatYouGet() {
  const items = [
    {
      label: "Equipment",
      copy: "Skills, integrations, and automated workflows tuned to your team.",
    },
    {
      label: "Documentation",
      copy: "Context files, terminology, templates, and instructions the agent reads.",
    },
    {
      label: "Ownership",
      copy: "Your code, your data, your infrastructure. No vendor lock-in.",
    },
  ];
  return (
    <Section id="what-you-get" bg="navy">
      <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-20">
        <div>
          <SectionEyebrow>What You Get</SectionEyebrow>
          <SectionHeading bg="navy">
            A working AI directory, custom-built for your company.
          </SectionHeading>
        </div>
        <div className="pt-2">
          <p className="text-[17px] leading-[1.7] text-cream/85">
            Each engagement produces a directory your team runs through Claude,
            ChatGPT, or Codex. Equipment plus documentation, sized to your
            workflows. You own everything.
          </p>
          <ul className="mt-9 space-y-5">
            {items.map((item) => (
              <li key={item.label} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="mt-3 inline-block h-px w-6 shrink-0 bg-cognac-light"
                />
                <p className="text-[16px] leading-[1.65] text-cream/90">
                  <span className="text-cream">{item.label}.</span>{" "}
                  <span className="text-cream/75">{item.copy}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

/* ---------- 4. How We Work ---------- */
export function HowWeWork() {
  const types = [
    {
      label: "Education Workshop",
      copy: "Half- or full-day session for leadership teams who want to learn before they build.",
    },
    {
      label: "Discovery",
      copy: "One to two days mapping workflows and shipping a first proof of concept.",
    },
    {
      label: "Focused Build",
      copy: "Two to three days automating one or two well-defined workflows end to end.",
    },
    {
      label: "Comprehensive",
      copy: "Four or more days of full discovery followed by a multi-workflow build.",
    },
    {
      label: "Embedded",
      copy: "Ongoing weekly or monthly sessions that grow the directory over time.",
    },
  ];
  return (
    <Section id="how-we-work" bg="cream">
      <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-20">
        <div>
          <SectionEyebrow>How We Work</SectionEyebrow>
          <SectionHeading bg="cream">
            Five ways to engage, sized to where your team is.
          </SectionHeading>
        </div>
        <ul className="divide-y divide-navy/10 border-y border-navy/10">
          {types.map((t) => (
            <li
              key={t.label}
              className="grid gap-2 py-5 md:grid-cols-[200px_minmax(0,1fr)] md:gap-8"
            >
              <span className="font-serif text-[20px] leading-snug text-navy">
                {t.label}
              </span>
              <span className="text-[16px] leading-[1.65] text-navy/75">
                {t.copy}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* ---------- 5. Watch ZPT in Action ---------- */
export function WatchZpt() {
  return (
    <Section id="watch" bg="navy">
      <div className="mx-auto max-w-[760px] text-center">
        <SectionEyebrow>Watch ZPT in Action</SectionEyebrow>
        <SectionHeading bg="navy">
          A two-minute walk through the directory.
        </SectionHeading>
        <p className="mx-auto mt-6 max-w-[560px] text-[17px] leading-[1.65] text-cream/75">
          A short introduction to what ZPT builds and how your team runs it.
        </p>
        <div className="mt-12 aspect-video w-full overflow-hidden rounded-sm border border-cream/15 bg-[#08081c]">
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-[14px] uppercase tracking-[0.2em] text-cream/55">
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
  const items = [
    {
      title: "Built across industries",
      copy: "ZPT has built directories for investment consultants, PE funds, secondaries VCs, interior design firms, and restaurant operators. Same architecture, custom content every time.",
    },
    {
      title: "Working systems, not decks",
      copy: "Other firms leave you with a recommendation. ZPT leaves you with a directory your team owns and runs from day one.",
    },
    {
      title: "Depth is the moat",
      copy: "Permissions, naming, authentication, the trade-offs between Claude, ChatGPT, and Codex. The nuances are where the value compounds.",
    },
  ];
  return (
    <Section id="why-zpt" bg="cream">
      <div className="max-w-[720px]">
        <SectionEyebrow>Why ZPT</SectionEyebrow>
        <SectionHeading bg="cream">
          The reason this works is the people who build it.
        </SectionHeading>
      </div>
      <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
        {items.map((item) => (
          <div key={item.title}>
            <h3 className="font-serif text-[22px] leading-snug text-navy">
              {item.title}
            </h3>
            <p className="mt-4 text-[16px] leading-[1.65] text-navy/75">
              {item.copy}
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
        <SectionEyebrow>Is ZPT Right for Your Company</SectionEyebrow>
        <SectionHeading bg="navy">
          A short test before we get on a call.
        </SectionHeading>
      </div>
      <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <p className="text-[14px] font-medium uppercase tracking-[0.18em] text-cognac-light">
            Yes, If
          </p>
          <ul className="mt-6 space-y-4">
            {yes.map((line) => (
              <li
                key={line}
                className="flex gap-3 text-[16px] leading-[1.6] text-cream/85"
              >
                <span aria-hidden="true" className="mt-2 inline-block h-px w-4 shrink-0 bg-cognac-light" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[14px] font-medium uppercase tracking-[0.18em] text-cream/55">
            Not Yet, If
          </p>
          <ul className="mt-6 space-y-4">
            {notYet.map((line) => (
              <li
                key={line}
                className="flex gap-3 text-[16px] leading-[1.6] text-cream/70"
              >
                <span aria-hidden="true" className="mt-2 inline-block h-px w-4 shrink-0 bg-cream/30" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

/* ---------- 8. Team Preview ---------- */
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
        <SectionEyebrow>Team Preview</SectionEyebrow>
        <SectionHeading bg="cream">
          The people building your directory.
        </SectionHeading>
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
      {/* Subtle painting backdrop */}
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
            "linear-gradient(180deg, rgba(12,12,40,0.5) 0%, rgba(12,12,40,0.85) 60%, #0C0C28 100%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-[900px] px-6 text-center md:px-10">
        <SectionEyebrow>Start Here</SectionEyebrow>
        <h2 className="font-serif text-[clamp(2.25rem,4.5vw,3.75rem)] font-normal leading-[1.06] tracking-[-0.01em] text-cream">
          Build Your AI Directory
        </h2>
        <p className="mx-auto mt-6 max-w-[560px] text-[17px] leading-[1.65] text-cream/80">
          Wybe handles all initial conversations personally.
        </p>
        <div className="mt-10">
          <a
            href="mailto:wybe@zptpartners.com"
            className="inline-flex items-center justify-center rounded-full bg-cognac px-9 py-4 text-[16px] font-medium tracking-wide text-cream transition-colors duration-150 hover:bg-[var(--color-cognac-deep)]"
          >
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
}
