import {
  Section,
  SectionEyebrow,
  SectionHeading,
} from "../../components/Sections";

type Download = {
  label: string;
  size: string;
  buttonLabel: string;
  href: string;
};

/**
 * Both PDFs live in /public/resources/. Sizes are pulled from the actual
 * files on disk: the one-pager is ~230 KB, the deck is ~4 MB.
 */
const DOWNLOADS: Download[] = [
  {
    label: "One-Pager",
    size: "230 KB",
    buttonLabel: "Download ZPT One-Pager (PDF)",
    href: "/resources/zpt-one-pager.pdf",
  },
  {
    label: "Presentation",
    size: "4 MB",
    buttonLabel: "Download Agentic Workflows Deck (PDF)",
    href: "/resources/2026_Agentic-Workflows.pdf",
  },
];

/**
 * Cream band. Two-column body on desktop: heading + lede on the left, a
 * single downloads card on the right with both PDFs stacked one above
 * the other and separated by a thin hairline. On mobile the card stacks
 * below the body; the buttons span the full card width on every viewport.
 */
export default function OnePagerDownload() {
  return (
    <Section id="downloads" bg="cream" align="header">
      <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,420px)] md:items-start md:gap-16">
        <div>
          <SectionEyebrow bg="cream">Downloads</SectionEyebrow>
          <SectionHeading bg="cream">
            What ZPT Is, In Two Reads.
          </SectionHeading>
          <p className="mt-6 max-w-[560px] text-[16px] leading-[1.7] text-navy/75">
            Two short documents that explain what ZPT builds, how an
            engagement runs, and what your team owns at the end. Useful
            for anyone considering an engagement or sharing the model
            internally.
          </p>
        </div>

        <div className="rounded-md border border-navy/15 bg-cream p-7 shadow-[0_8px_24px_-16px_rgba(12,12,40,0.18)]">
          {DOWNLOADS.map((doc, i) => (
            <div
              key={doc.href}
              className={
                i === 0 ? "" : "mt-5 border-t border-navy/10 pt-5"
              }
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-navy/55">
                {doc.label} · {doc.size}
              </p>
              <a
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-[5px] bg-cognac px-5 py-3 text-[14px] font-medium tracking-wide text-cream transition-colors duration-150 hover:bg-cognac-deep"
              >
                {doc.buttonLabel}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
