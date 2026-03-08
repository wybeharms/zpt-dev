"use client";

import { useI18n } from "@/components/I18nProvider";

interface TrialProgressBarProps {
  currentStep: number;
}

const stepKeys = [
  "trial.steps.about",
  "trial.steps.icp",
  "trial.steps.deliverable",
] as const;

export default function TrialProgressBar({ currentStep }: TrialProgressBarProps) {
  const { t } = useI18n();

  return (
    <div className="flex items-center justify-center gap-0">
      {stepKeys.map((key, i) => {
        const stepNum = i + 1;
        const isActive = stepNum === currentStep;
        const isComplete = stepNum < currentStep;

        return (
          <div key={key} className="flex items-center">
            {i > 0 && (
              <div
                className={`h-px w-8 sm:w-12 ${
                  isComplete ? "bg-gold" : "bg-white/20"
                }`}
              />
            )}
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-gold text-navy"
                    : isComplete
                      ? "bg-gold/80 text-navy"
                      : "border border-white/30 text-white/50"
                }`}
              >
                {isComplete ? (
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                ) : (
                  stepNum
                )}
              </div>
              <span
                className={`text-xs ${
                  isActive ? "text-white" : isComplete ? "text-white/70" : "text-white/40"
                }`}
              >
                {t(key)}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
