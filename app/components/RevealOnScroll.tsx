"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export default function RevealOnScroll({
  children,
  className = "",
  rootMargin = "0px 0px -25% 0px",
}: {
  children: ReactNode;
  className?: string;
  rootMargin?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHidden(!entry.isIntersecting);
        setArmed(true);
      },
      { rootMargin }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div
      ref={ref}
      style={{
        opacity: hidden ? 0 : 1,
        transform: hidden ? "translateY(24px)" : "translateY(0)",
        transition: armed
          ? "opacity 700ms ease-out, transform 700ms ease-out"
          : "none",
      }}
      className={className}
    >
      {children}
    </div>
  );
}
