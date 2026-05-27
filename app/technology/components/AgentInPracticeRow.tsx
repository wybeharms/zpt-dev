"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import RevealOnScroll from "../../components/RevealOnScroll";

export type AgentInPracticeRowProps = {
  lead: string;
  copy: ReactNode;
};

/**
 * One row of the "Four Things An Agent Does" list. Client component so
 * the row can track the cursor position and update a CSS custom
 * property used by a radial-gradient glow overlay.
 *
 * On hover the row's background flips from navy to a warm cream and
 * the text inverts to navy, then the cognac cursor glow rides on top.
 * Same architecture as OurApproachRow and EntryPointsRow; the colors
 * are tuned for the cream-on-hover treatment specific to this section.
 */
export default function AgentInPracticeRow({
  lead,
  copy,
}: AgentInPracticeRowProps) {
  const rowRef = useRef<HTMLLIElement>(null);

  const handleMouseMove = (e: ReactMouseEvent<HTMLLIElement>) => {
    const row = rowRef.current;
    if (!row) return;
    const rect = row.getBoundingClientRect();
    row.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    row.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <li
      ref={rowRef}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden border-b border-cream/15 transition-colors duration-200 hover:bg-[#E5DBC6]"
    >
      {/* Cursor-tracking glow. Sits above the cream hover tint, fades in
          on group-hover so the radial cognac wash only appears once the
          row is also lit up. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(280px circle at var(--mx, 50%) var(--my, 50%), rgba(165, 102, 60, 0.22), transparent 70%)",
        }}
      />
      <RevealOnScroll className="relative grid gap-4 px-3 py-9 md:grid-cols-[minmax(0,360px)_minmax(0,1fr)] md:gap-12 md:px-5">
        <p className="font-serif text-[22px] leading-snug text-cream transition-colors duration-200 group-hover:text-navy md:text-[24px]">
          {lead}
        </p>
        <p className="text-[15px] leading-[1.65] text-cream/75 transition-colors duration-200 group-hover:text-navy/80 md:pt-2">
          {copy}
        </p>
      </RevealOnScroll>
    </li>
  );
}
