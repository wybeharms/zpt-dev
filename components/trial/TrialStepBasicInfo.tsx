"use client";

import { useI18n } from "@/components/I18nProvider";

export interface BasicInfoData {
  companyName: string;
  contactName: string;
  email: string;
  website: string;
}

interface TrialStepBasicInfoProps {
  data: BasicInfoData;
  onChange: (data: BasicInfoData) => void;
  onNext: () => void;
}

export default function TrialStepBasicInfo({ data, onChange, onNext }: TrialStepBasicInfoProps) {
  const { t } = useI18n();

  const canProceed = data.companyName.trim() && data.contactName.trim() && data.email.trim();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (canProceed) onNext();
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-5">
      <p className="text-center text-sm text-white/60">
        {t("trial.basicInfo.subtitle")}
      </p>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-white/80">
          {t("trial.basicInfo.companyName")} *
        </label>
        <input
          type="text"
          required
          value={data.companyName}
          onChange={(e) => onChange({ ...data, companyName: e.target.value })}
          className="w-full rounded border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-gold"
          placeholder={t("trial.basicInfo.companyNamePlaceholder")}
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-white/80">
          {t("trial.basicInfo.contactName")} *
        </label>
        <input
          type="text"
          required
          value={data.contactName}
          onChange={(e) => onChange({ ...data, contactName: e.target.value })}
          className="w-full rounded border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-gold"
          placeholder={t("trial.basicInfo.contactNamePlaceholder")}
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-white/80">
          {t("trial.basicInfo.email")} *
        </label>
        <input
          type="email"
          required
          value={data.email}
          onChange={(e) => onChange({ ...data, email: e.target.value })}
          className="w-full rounded border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-gold"
          placeholder={t("trial.basicInfo.emailPlaceholder")}
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-white/80">
          {t("trial.basicInfo.website")}
        </label>
        <input
          type="text"
          value={data.website}
          onChange={(e) => onChange({ ...data, website: e.target.value })}
          className="w-full rounded border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-gold"
          placeholder={t("trial.basicInfo.websitePlaceholder")}
        />
      </div>

      <button
        type="submit"
        disabled={!canProceed}
        className="w-full rounded bg-gold py-3 text-sm font-medium text-navy transition-colors hover:bg-gold-light disabled:opacity-40 disabled:hover:bg-gold"
      >
        {t("trial.next")}
      </button>
    </form>
  );
}
