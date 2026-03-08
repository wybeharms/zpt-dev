"use client";

import { useState } from "react";
import { useI18n } from "@/components/I18nProvider";

export interface ICPData {
  industry: string;
  companySize: string;
  geography: string;
  description: string;
  exampleCustomers: string;
  documents: string[];
}

interface TrialStepICPProps {
  data: ICPData;
  onChange: (data: ICPData) => void;
  onNext: () => void;
  onBack: () => void;
  trialId: string | null;
}

const companySizeOptions = ["1-50", "50-200", "200-1000", "1000+"];

export default function TrialStepICP({ data, onChange, onNext, onBack, trialId }: TrialStepICPProps) {
  const { t } = useI18n();
  const [dragOver, setDragOver] = useState(false);
  const [uploading, setUploading] = useState(false);

  async function uploadFile(file: File) {
    if (!trialId) return;
    setUploading(true);
    try {
      const res = await fetch("/api/trial/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          trialId,
          fileName: file.name,
          contentType: file.type || "application/octet-stream",
          folder: "icp_documents",
        }),
      });
      if (!res.ok) throw new Error("Failed to get upload URL");
      const { url, fileName } = await res.json();

      await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": file.type || "application/octet-stream" },
        body: file,
      });

      onChange({ ...data, documents: [...data.documents, fileName] });
    } catch (err) {
      console.error("Upload failed:", err);
    } finally {
      setUploading(false);
    }
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragOver(false);
    Array.from(e.dataTransfer.files).forEach(uploadFile);
  }

  function handleFileInput(e: React.ChangeEvent<HTMLInputElement>) {
    Array.from(e.target.files ?? []).forEach(uploadFile);
  }

  return (
    <div className="mx-auto max-w-lg space-y-5">
      <p className="text-center text-sm text-white/60">
        {t("trial.icp.subtitle")}
      </p>

      {/* Structured fields */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className="mb-1.5 block text-xs font-medium text-white/70">
            {t("trial.icp.industry")}
          </label>
          <input
            type="text"
            value={data.industry}
            onChange={(e) => onChange({ ...data, industry: e.target.value })}
            className="w-full rounded border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-gold"
            placeholder={t("trial.icp.industryPlaceholder")}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-white/70">
            {t("trial.icp.companySize")}
          </label>
          <select
            value={data.companySize}
            onChange={(e) => onChange({ ...data, companySize: e.target.value })}
            className="w-full rounded border border-white/20 bg-white/5 px-3 py-2 text-sm text-white outline-none transition-colors focus:border-gold"
          >
            <option value="" className="bg-navy">{t("trial.icp.companySizePlaceholder")}</option>
            {companySizeOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-navy">{opt}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-white/70">
            {t("trial.icp.geography")}
          </label>
          <input
            type="text"
            value={data.geography}
            onChange={(e) => onChange({ ...data, geography: e.target.value })}
            className="w-full rounded border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-gold"
            placeholder={t("trial.icp.geographyPlaceholder")}
          />
        </div>
      </div>

      {/* Freeform fields */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-white/80">
          {t("trial.icp.descriptionLabel")}
        </label>
        <textarea
          rows={3}
          value={data.description}
          onChange={(e) => onChange({ ...data, description: e.target.value })}
          className="w-full rounded border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-gold"
          placeholder={t("trial.icp.descriptionPlaceholder")}
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-white/80">
          {t("trial.icp.examplesLabel")}
        </label>
        <textarea
          rows={2}
          value={data.exampleCustomers}
          onChange={(e) => onChange({ ...data, exampleCustomers: e.target.value })}
          className="w-full rounded border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-gold"
          placeholder={t("trial.icp.examplesPlaceholder")}
        />
      </div>

      {/* Document upload */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-white/80">
          {t("trial.icp.uploadLabel")}
        </label>
        <div
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          className={`flex flex-col items-center justify-center rounded border-2 border-dashed p-6 transition-colors ${
            dragOver ? "border-gold bg-gold/5" : "border-white/20 bg-white/5"
          }`}
        >
          <p className="mb-2 text-xs text-white/50">
            {uploading ? t("trial.icp.uploading") : t("trial.icp.uploadHint")}
          </p>
          <label className="cursor-pointer rounded border border-white/20 px-3 py-1.5 text-xs text-white/70 transition-colors hover:border-white/40">
            {t("trial.icp.browse")}
            <input type="file" multiple onChange={handleFileInput} className="hidden" />
          </label>
        </div>
        {data.documents.length > 0 && (
          <ul className="mt-2 space-y-1">
            {data.documents.map((doc) => (
              <li key={doc} className="text-xs text-gold">{doc}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 rounded border border-white/20 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
        >
          {t("trial.back")}
        </button>
        <button
          type="button"
          onClick={onNext}
          className="flex-1 rounded bg-gold py-3 text-sm font-medium text-navy transition-colors hover:bg-gold-light"
        >
          {t("trial.next")}
        </button>
      </div>
    </div>
  );
}
