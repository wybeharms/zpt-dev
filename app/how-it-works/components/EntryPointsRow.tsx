"use client";

import { useRef } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import RevealOnScroll from "../../components/RevealOnScroll";

export type EntryPointsRowProps = {
  Icon: React.ComponentType<{ className?: string }>;
  name: string;
  duration: string;
  copy: string;
};

/**
 * One row of the Pick Your Entry Point list. Client component so the
 * row can track the cursor position and update a CSS custom property
 * used by a radial-gradient glow overlay. Same pattern as
 * OurApproachRow on the home page, but rendered on a cream background
 * with cognac glow tuned to read on light cream.
 */
export default function EntryPointsRow({
  Icon,
  name,
  duration,
  copy,
}: EntryPointsRowProps) {
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
      className="group relative overflow-hidden border-b border-navy/10 transition-colors duration-200 hover:bg-cognac/[0.22]"
    >
      {/* Cursor-tracking glow, layered above the static cognac tint. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(280px circle at var(--mx, 50%) var(--my, 50%), rgba(165, 102, 60, 0.22), transparent 70%)",
        }}
      />
      <RevealOnScroll className="relative grid grid-cols-[56px_minmax(0,1fr)] gap-5 px-3 py-9 md:grid-cols-[100px_300px_minmax(0,1fr)] md:gap-10 md:px-5">
        <div className="text-cognac md:flex md:items-start md:pt-2">
          <Icon className="h-9 w-9 transition-colors duration-200 group-hover:text-cognac-deep md:h-10 md:w-10" />
        </div>
        <div className="md:pt-1">
          <p className="font-serif text-[22px] leading-snug text-navy md:text-[26px]">
            {name}
          </p>
          <p className="mt-2 text-[13px] italic text-cognac/85">{duration}</p>
        </div>
        <p className="col-span-2 text-[15px] leading-[1.65] text-navy/75 transition-colors duration-200 group-hover:text-navy md:col-span-1 md:pt-2">
          {copy}
        </p>
      </RevealOnScroll>
    </li>
  );
}
