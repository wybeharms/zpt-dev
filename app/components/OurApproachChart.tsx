"use client";

import { useEffect, useRef, useState } from "react";

type Step = {
  number: string;
  label: string;
  copy: string;
  /** Bar height as a share of the chart area, ascending across steps. */
  barHeight: string;
  barColor: string;
  delay: string;
};

const STEPS: Step[] = [
  {
    number: "01",
    label: "Setup & Education",
    copy: "The right foundation first: folder architecture, permissions, and security, set up with you. Then we train the whole team on how to use agents well.",
    barHeight: "h-[37%]",
    barColor: "bg-cognac-deep",
    delay: "delay-0",
  },
  {
    number: "02",
    label: "Discovery",
    copy: "On-site mapping of your real workflows. We surface the highest-leverage opportunities to improve.",
    barHeight: "h-[68%]",
    barColor: "bg-cognac",
    delay: "delay-150",
  },
  {
    number: "03",
    label: "Build",
    copy: "We mirror your workflows so agents run them in practice, through Claude, Codex, or Copilot.",
    barHeight: "h-full",
    barColor: "bg-cognac-light",
    delay: "delay-300",
  },
];

/**
 * The Our Approach chart: three ascending bars, one per step, with a
 * dotted trend line rising over their tops. The bars grow in (scaleY
 * from the baseline) the first time the chart scrolls into view, then
 * the trend line fades in. Reduced-motion users get the final state
 * immediately.
 *
 * Layout is one grid column per step so the bar, label, and copy of a
 * step form a single hover group: hovering anywhere in the column
 * brightens that step's bar.
 */
export default function OurApproachChart() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -20% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div className="relative">
        {/* Dotted trend line over the bar tops. preserveAspectRatio
            "none" stretches the 100x100 viewBox to the chart area, so
            the y values track the bars' percentage heights (37% / 68% /
            100% => tops at y 63 / 32 / 0). */}
        <svg
          aria-hidden="true"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className={`pointer-events-none absolute inset-x-0 top-0 h-40 w-full transition-opacity duration-500 delay-700 md:h-48 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          <path
            d="M 16 58 L 50 27 L 82 3"
            fill="none"
            stroke="rgba(237,228,211,0.45)"
            strokeWidth="1.5"
            strokeDasharray="4 5"
            vectorEffect="non-scaling-stroke"
          />
          <path d="M 84 1.5 L 78 2.6 L 81.4 8.4 Z" fill="rgba(237,228,211,0.5)" />
        </svg>

        <div className="grid grid-cols-3 gap-5 md:gap-8">
          {STEPS.map((step) => (
            <div key={step.label} className="group">
              <div className="flex h-40 items-end md:h-48">
                <div
                  className={`w-full origin-bottom rounded-t-md transition-[transform,filter] duration-700 ease-out group-hover:brightness-110 ${step.barHeight} ${step.barColor} ${step.delay} ${
                    inView ? "scale-y-100" : "scale-y-0"
                  }`}
                />
              </div>
              {/* Step text under its own bar (desktop). */}
              <div className="hidden border-t border-cream/25 pt-4 md:block">
                <p>
                  <span className="font-serif text-[17px] text-cognac-light">
                    {step.number}
                  </span>{" "}
                  <span className="font-serif text-[18px] text-cream">
                    {step.label}
                  </span>
                </p>
                <p className="mt-2.5 text-[13px] leading-[1.6] text-cream/70">
                  {step.copy}
                </p>
              </div>
              {/* Mobile: just the number under the bar; full step text
                  is stacked below the chart where it has room. */}
              <p className="border-t border-cream/25 pt-3 text-center font-serif text-[16px] text-cognac-light md:hidden">
                {step.number}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile stacked step text. */}
      <ul className="mt-6 space-y-5 md:hidden">
        {STEPS.map((step) => (
          <li key={step.label}>
            <p>
              <span className="font-serif text-[16px] text-cognac-light">
                {step.number}
              </span>{" "}
              <span className="font-serif text-[17px] text-cream">
                {step.label}
              </span>
            </p>
            <p className="mt-2 text-[13.5px] leading-[1.6] text-cream/70">
              {step.copy}
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-center font-serif text-[15px] italic text-cream/55 md:mt-10">
        From the right foundation to agents running the work.
      </p>
    </div>
  );
}
