"use client";

import { useState } from "react";
import { useI18n } from "@/components/I18nProvider";

export type DeliverableData =
  | { type: ""; prospectCount?: number; uploadedFile?: string; competitors?: string[] }
  | { type: "prospect"; prospectCount: number }
  | { type: "enrich"; uploadedFile: string }
  | { type: "competitor"; competitors: string[] };

interface TrialStepDeliverableProps {
  data: DeliverableData;
  onChange: (data: DeliverableData) => void;
  onBack: () => void;
  onSubmit: () => void;
  submitting: boolean;
  trialId: string | null;
}

const cards = [
  { type: "enrich" as const, icon: "table" },
  { type: "prospect" as const, icon: "search" },
  { type: "competitor" as const, icon: "shield" },
] as const;

const iconSvgs: Record<string, string> = {
  table: "M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M10.875 12c-.621 0-1.125.504-1.125 1.125M12 12c.621 0 1.125.504 1.125 1.125m0-2.25c.621 0 1.125.504 1.125 1.125",
  search: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z",
  shield: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
};

export default function TrialStepDeliverable({
  data,
  onChange,
  onBack,
  onSubmit,
  submitting,
  trialId,
}: TrialStepDeliverableProps) {
  const { t } = useI18n();
  const [dragOver, setDragOver] = useState(false);
  const [uploading, setUploading] = useState(false);

  const selectedType = data.type;

  function selectCard(type: "enrich" | "prospect" | "competitor") {
    if (type === "prospect") onChange({ type, prospectCount: 25 });
    else if (type === "enrich") onChange({ type, uploadedFile: "" });
    else onChange({ type, competitors: [""] });
  }

  async function uploadContactFile(file: File) {
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
        }),
      });
      if (!res.ok) throw new Error("Failed to get upload URL");
      const { url, fileName } = await res.json();

      await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": file.type || "application/octet-stream" },
        body: file,
      });

      onChange({ type: "enrich", uploadedFile: fileName });
    } catch (err) {
      console.error("Upload failed:", err);
    } finally {
      setUploading(false);
    }
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) uploadContactFile(file);
  }

  function handleFileInput(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) uploadContactFile(file);
  }

  const canSubmit =
    selectedType === "prospect" ||
    (selectedType === "enrich" && data.uploadedFile) ||
    (selectedType === "competitor" && data.competitors?.some((c) => c.trim()));

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <p className="text-center text-sm text-white/60">
        {t("trial.deliverable.subtitle")}
      </p>

      {/* Three cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        {cards.map((card) => {
          const isSelected = selectedType === card.type;
          return (
            <button
              key={card.type}
              type="button"
              onClick={() => selectCard(card.type)}
              className={`flex flex-col items-center rounded-lg border p-5 text-center transition-all ${
                isSelected
                  ? "border-gold bg-gold/10"
                  : "border-white/15 bg-white/5 hover:border-white/30"
              }`}
            >
              <svg
                className={`mb-3 h-6 w-6 ${isSelected ? "text-gold" : "text-white/50"}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d={iconSvgs[card.icon]} />
              </svg>
              <span className={`text-sm font-medium ${isSelected ? "text-gold" : "text-white"}`}>
                {t(`trial.deliverable.cards.${card.type}.title`)}
              </span>
              <span className="mt-1 text-xs text-white/50">
                {t(`trial.deliverable.cards.${card.type}.description`)}
              </span>
            </button>
          );
        })}
      </div>

      {/* Conditional fields with expand animation */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          selectedType ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          {/* Prospect: count toggle */}
          {selectedType === "prospect" && (
            <div className="rounded-lg border border-white/10 bg-white/5 p-5">
              <p className="mb-3 text-sm text-white/70">{t("trial.deliverable.prospect.label")}</p>
              <div className="flex gap-3">
                {[25, 50].map((count) => (
                  <button
                    key={count}
                    type="button"
                    onClick={() => onChange({ type: "prospect", prospectCount: count })}
                    className={`flex-1 rounded border py-2 text-sm font-medium transition-colors ${
                      data.prospectCount === count
                        ? "border-gold bg-gold/15 text-gold"
                        : "border-white/20 text-white/60 hover:border-white/40"
                    }`}
                  >
                    {count} {t("trial.deliverable.prospect.prospects")}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Enrich: file upload */}
          {selectedType === "enrich" && (
            <div className="rounded-lg border border-white/10 bg-white/5 p-5">
              <p className="mb-3 text-sm text-white/70">{t("trial.deliverable.enrich.label")}</p>
              {data.uploadedFile ? (
                <div className="flex items-center gap-2 text-sm text-gold">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {data.uploadedFile}
                </div>
              ) : (
                <div
                  onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={handleDrop}
                  className={`flex flex-col items-center rounded border-2 border-dashed p-6 transition-colors ${
                    dragOver ? "border-gold bg-gold/5" : "border-white/20"
                  }`}
                >
                  <p className="mb-2 text-xs text-white/50">
                    {uploading ? t("trial.deliverable.enrich.uploading") : t("trial.deliverable.enrich.hint")}
                  </p>
                  <label className="cursor-pointer rounded border border-white/20 px-3 py-1.5 text-xs text-white/70 transition-colors hover:border-white/40">
                    {t("trial.icp.browse")}
                    <input type="file" accept=".csv,.xlsx,.xls" onChange={handleFileInput} className="hidden" />
                  </label>
                </div>
              )}
            </div>
          )}

          {/* Competitor: name inputs */}
          {selectedType === "competitor" && (
            <div className="rounded-lg border border-white/10 bg-white/5 p-5">
              <p className="mb-3 text-sm text-white/70">{t("trial.deliverable.competitor.label")}</p>
              <div className="space-y-2">
                {(data.competitors || [""]).map((comp, i) => (
                  <input
                    key={i}
                    type="text"
                    value={comp}
                    onChange={(e) => {
                      const updated = [...(data.competitors || [""])];
                      updated[i] = e.target.value;
                      onChange({ type: "competitor", competitors: updated });
                    }}
                    className="w-full rounded border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-gold"
                    placeholder={`${t("trial.deliverable.competitor.placeholder")} ${i + 1}`}
                  />
                ))}
                {(data.competitors || []).length < 3 && (
                  <button
                    type="button"
                    onClick={() => onChange({ type: "competitor", competitors: [...(data.competitors || [""]), ""] })}
                    className="text-xs text-gold hover:text-gold-light"
                  >
                    + {t("trial.deliverable.competitor.addMore")}
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
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
          onClick={onSubmit}
          disabled={!canSubmit || submitting}
          className="flex-1 rounded bg-gold py-3 text-sm font-medium text-navy transition-colors hover:bg-gold-light disabled:opacity-40 disabled:hover:bg-gold"
        >
          {submitting ? t("trial.submitting") : t("trial.submit")}
        </button>
      </div>
    </div>
  );
}
