import type { ReactNode } from "react";

/**
 * Three miniature documents (Word memo, Excel model, slide deck), fanned
 * like papers on a desk. Used by the featured example on /our-work and
 * by the teaser on /testimonials.
 *
 * Drawn in markup on purpose. Real client deliverables keep their
 * figures readable at thumbnail size, even when the names are
 * anonymized, so no screenshot of client work ships in public/. Bars
 * stand in for text and nothing here is real content.
 *
 * Every length is in em, so the whole fan scales with the font-size on
 * the wrapper: pass a text size in `className` to resize it.
 */

const PAGE =
  "relative flex-shrink-0 rounded-[0.5em] border border-navy/15 shadow-[0_1.2em_2.4em_-1.2em_rgba(12,12,40,0.5)]";

/** File-type tab in the corner of each page: W, X, P. */
function Badge({ letter, color }: { letter: string; color: string }) {
  return (
    <span
      className="flex h-[1.7em] w-[1.7em] flex-shrink-0 items-center justify-center rounded-[0.35em] text-white"
      style={{ backgroundColor: color }}
    >
      <span className="font-sans text-[1.05em] font-bold leading-none">
        {letter}
      </span>
    </span>
  );
}

/** One line of stand-in text. */
function Line({ width, tone = "bg-navy/20" }: { width: string; tone?: string }) {
  return (
    <span
      className={`mt-[0.45em] block h-[0.3em] rounded-full ${tone}`}
      style={{ width }}
    />
  );
}

function Heading({ width }: { width: string }) {
  return (
    <span
      className="mt-[0.8em] block h-[0.32em] rounded-full bg-cognac/80"
      style={{ width }}
    />
  );
}

function SheetRow({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-[2fr_1fr_1fr] gap-[0.3em]">{children}</div>
  );
}

export default function ExampleDocsFan({
  className = "text-[10px]",
}: {
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label="Illustration of a Word memo, an Excel model and a slide deck"
      className={`flex items-end justify-center ${className}`}
    >
      {/* Word memo */}
      <div
        className={`${PAGE} z-[1] mr-[-1.6em] h-[13.8em] w-[10.6em] rotate-[-5deg] bg-white p-[1em]`}
      >
        <Badge letter="W" color="#185ABD" />
        <span className="mt-[0.8em] block h-[0.45em] w-[72%] rounded-full bg-navy/70" />
        <span className="mt-[0.6em] flex h-[1.5em] border border-navy/15 bg-navy/[0.04]">
          <span className="block w-[42%] border-r border-navy/15" />
        </span>
        <Heading width="40%" />
        <Line width="100%" />
        <Line width="92%" />
        <Line width="96%" />
        <Line width="58%" />
        <Heading width="30%" />
        <Line width="100%" />
        <Line width="74%" />
      </div>

      {/* Excel model */}
      <div className={`${PAGE} z-[2] mb-[-0.6em] w-[12.6em] bg-white p-[0.9em]`}>
        <div className="flex items-center gap-[0.6em]">
          <Badge letter="X" color="#107C41" />
          <span className="block h-[0.42em] w-[52%] rounded-full bg-navy/70" />
        </div>
        <div className="mt-[0.7em] space-y-[0.3em]">
          <SheetRow>
            <span className="block h-[0.85em] bg-[#107C41]/80" />
            <span className="block h-[0.85em] bg-[#107C41]/80" />
            <span className="block h-[0.85em] bg-[#107C41]/80" />
          </SheetRow>
          {[0, 1, 2, 3, 4].map((row) => (
            <SheetRow key={row}>
              <span className="block h-[0.6em] bg-navy/20" />
              <span className="block h-[0.6em] bg-navy/10" />
              <span className="block h-[0.6em] bg-navy/10" />
            </SheetRow>
          ))}
          <SheetRow>
            <span className="block h-[0.6em] bg-navy/45" />
            <span className="block h-[0.6em] bg-navy/30" />
            <span className="block h-[0.6em] bg-navy/30" />
          </SheetRow>
        </div>
      </div>

      {/* Slide deck */}
      {/* Extra left padding keeps the badge clear of the sheet on top. */}
      <div
        className={`${PAGE} z-[1] ml-[-1.4em] w-[13.4em] rotate-[4deg] bg-[#FBF8F1] py-[0.9em] pl-[2em] pr-[0.9em]`}
      >
        <div className="flex items-center gap-[0.6em]">
          <Badge letter="P" color="#C43E1C" />
          <span className="block h-[0.5em] w-[58%] rounded-full bg-navy/70" />
        </div>
        <div className="mt-[0.8em] space-y-[0.4em]">
          {["92%", "64%", "46%", "28%"].map((width) => (
            <span key={width} className="block h-[0.45em] bg-navy/[0.07]">
              <span
                className="block h-full bg-cognac/80"
                style={{ width }}
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
