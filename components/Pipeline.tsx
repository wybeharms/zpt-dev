"use client";

import { useI18n } from "./I18nProvider";

export default function Pipeline() {
  const { tArray } = useI18n();
  const steps = tArray("home.pipeline.steps") as {
    label: string;
    description: string;
  }[];

  return (
    <div className="mt-10">
      {/* Desktop: horizontal pipeline */}
      <div className="hidden md:flex md:items-start md:justify-between md:gap-2">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-1 items-start">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-sm font-medium text-navy">
                {i + 1}
              </div>
              <h3 className="mt-3 text-sm font-medium text-navy">
                {step.label}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-text-muted">
                {step.description}
              </p>
            </div>
            {i < steps.length - 1 && (
              <div className="mt-5 flex-shrink-0 px-1 text-gold/50">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile: vertical pipeline */}
      <div className="space-y-6 md:hidden">
        {steps.map((step, i) => (
          <div key={i} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gold text-xs font-medium text-navy">
                {i + 1}
              </div>
              {i < steps.length - 1 && (
                <div className="mt-1 h-full w-px bg-gold/20" />
              )}
            </div>
            <div className="pb-2">
              <h3 className="text-sm font-medium text-navy">{step.label}</h3>
              <p className="mt-1 text-xs leading-relaxed text-text-muted">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
