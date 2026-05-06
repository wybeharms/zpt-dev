"use client";

import { useEffect, useRef, useState } from "react";
import {
  Section,
  SectionEyebrow,
  SectionHeading,
} from "../../components/Sections";
import {
  ChartIcon,
  HelmIcon,
  KnotIcon,
  LiferingIcon,
  LighthouseIcon,
} from "../../components/MarineIcons";

type Step = {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  copy: string;
};

const steps: Step[] = [
  {
    Icon: LighthouseIcon,
    label: "Educate",
    copy: "A working session on what agents can and can't do, with real examples.",
  },
  {
    Icon: ChartIcon,
    label: "Understand",
    copy: "On-site interviews and workflow mapping, with feasibility estimates.",
  },
  {
    Icon: KnotIcon,
    label: "Build",
    copy: "Construct the package: context, skills, templates, connections.",
  },
  {
    Icon: HelmIcon,
    label: "Test",
    copy: "Your team runs the workflows with real data; ZPT refines until the output is right.",
  },
  {
    Icon: LiferingIcon,
    label: "Maintain",
    copy: "Regular check-ins to keep the foundation current as the team grows it.",
  },
];

/**
 * One-shot intersection hook. Sets `inView` true the first time the
 * referenced element scrolls into view. Respects prefers-reduced-motion.
 */
function useInViewOnce(rootMargin = "0px 0px -20% 0px") {
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
      { rootMargin },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, inView };
}

export default function FiveSteps() {
  const { ref, inView } = useInViewOnce();
  const lineDuration = 500;
  const markerStagger = 80;

  return (
    <Section id="process" bg="navy" align="header">
      <div className="max-w-[860px]">
        <SectionEyebrow bg="navy">The Process</SectionEyebrow>
        <SectionHeading bg="navy">The Shape Of The Work.</SectionHeading>
      </div>

      {/* Five-step flow */}
      <div ref={ref} className="mt-16 md:mt-20">
        {/* Desktop: horizontal flow with line draw */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connecting line, runs between the centers of marker 1 and 5 */}
            <div className="pointer-events-none absolute left-[10%] right-[10%] top-6 h-px overflow-visible">
              <svg
                viewBox="0 0 100 1"
                preserveAspectRatio="none"
                className="h-px w-full text-cognac/40"
              >
                <line
                  x1="0"
                  y1="0.5"
                  x2="100"
                  y2="0.5"
                  stroke="currentColor"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                  strokeDasharray="100 100"
                  strokeDashoffset={inView ? 0 : 100}
                  style={{
                    transition: `stroke-dashoffset ${lineDuration}ms ease-out`,
                  }}
                />
              </svg>
            </div>

            <div className="relative grid grid-cols-5 gap-4">
              {steps.map(({ Icon, label, copy }, i) => (
                <div
                  key={label}
                  className="flex flex-col items-center text-center"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(8px)",
                    transition: `opacity 400ms ease-out ${
                      lineDuration + i * markerStagger
                    }ms, transform 400ms ease-out ${
                      lineDuration + i * markerStagger
                    }ms`,
                  }}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-cognac-light">
                    <Icon className="h-7 w-7" />
                  </span>
                  <p className="mt-5 font-serif text-[24px] leading-snug text-cream">
                    {label}
                  </p>
                  <p className="mt-3 max-w-[200px] text-[13px] leading-[1.6] text-cream/65">
                    {copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical list, no line draw */}
        <ul className="space-y-8 md:hidden">
          {steps.map(({ Icon, label, copy }) => (
            <li key={label} className="flex gap-4">
              <span className="mt-1 text-cognac-light">
                <Icon className="h-7 w-7" />
              </span>
              <div>
                <p className="font-serif text-[24px] leading-snug text-cream">
                  {label}
                </p>
                <p className="mt-2 text-[14px] leading-[1.6] text-cream/65">
                  {copy}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <p className="mx-auto mt-16 max-w-[640px] text-center text-[15px] leading-[1.7] text-cream/75 md:mt-20">
        Capturing years of expert process for an agent takes care and
        judgment. The work is real engineering, done patiently, by someone
        who has shipped this many times.
      </p>
    </Section>
  );
}
