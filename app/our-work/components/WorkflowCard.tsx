"use client";

import { useRef } from "react";
import type { MouseEvent as ReactMouseEvent, ReactNode } from "react";

/**
 * /our-work example card shell: the featured example and the three
 * compact ones share it. Visual treatment matches the Why ZPT
 * differentiator cards (Lerai-inspired cursor-tracking glow), layered
 * on the hover lift and background shift the cards always had. The
 * content is rendered by the parent server component and passed in as
 * children, so only the mouse tracking runs on the client.
 *
 * Future: wrap the outer div in a Next Link when per-case detail
 * pages are built (one route per workflow).
 */
export default function WorkflowCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
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
      className={`group relative h-full overflow-hidden rounded-md border border-navy/10 bg-[#F4ECDE] transition-all duration-200 hover:-translate-y-1 hover:border-cognac/30 hover:bg-[#DBC5AD] hover:shadow-[0_14px_32px_-14px_rgba(12,12,40,0.18)] ${className}`}
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

      <div className="relative h-full">{children}</div>
    </div>
  );
}
