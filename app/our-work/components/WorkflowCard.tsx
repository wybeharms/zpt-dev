"use client";

import { useRef } from "react";
import type { MouseEvent as ReactMouseEvent, ReactNode } from "react";

export type WorkflowCardProps = {
  /** Pre-rendered icon node — passed in by the parent server component
   *  since Next.js cannot serialize a component function across the
   *  server/client boundary. */
  icon: ReactNode;
  industry: string;
  title: string;
  body: string;
};

/**
 * /our-work workflow card. Visual treatment matches the Why ZPT
 * differentiator cards (Lerai-inspired cursor-tracking glow) so the
 * page reads as a preview of future case studies. The hover lift and
 * background shift from the earlier static version are kept and
 * layered with the cursor glow on top.
 *
 * Future: wrap the outer div in a Next Link when per-case detail
 * pages are built (one route per workflow).
 */
export default function WorkflowCard({
  icon,
  industry,
  title,
  body,
}: WorkflowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    card.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative flex h-full flex-col overflow-hidden rounded-md border border-navy/10 bg-[#F4ECDE] p-7 transition-all duration-200 hover:-translate-y-1 hover:border-cognac/30 hover:bg-[#DBC5AD] hover:shadow-[0_14px_32px_-14px_rgba(12,12,40,0.18)]"
    >
      {/* Cursor-tracking glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(300px circle at var(--mx, 50%) var(--my, 50%), rgba(165, 102, 60, 0.12), transparent 70%)",
        }}
      />

      <div className="relative flex flex-grow flex-col">
        <span className="text-cognac">{icon}</span>
        <p className="mt-5 text-[12px] font-medium uppercase tracking-[0.22em] text-cognac/85">
          {industry}
        </p>
        <h3 className="mt-2 font-serif text-[22px] leading-snug text-navy">
          {title}
        </h3>
        <p className="mt-4 text-[14px] leading-[1.65] text-navy/75">{body}</p>
      </div>
    </div>
  );
}
