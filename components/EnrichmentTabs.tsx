"use client";

import { useState } from "react";
import { useI18n } from "./I18nProvider";

export default function EnrichmentTabs() {
  const [active, setActive] = useState<"simple" | "advanced">("simple");
  const { t, tArray } = useI18n();
  const rows = tArray("sales.enrichment.simpleTable.rows") as {
    company: string;
    contact: string;
    role: string;
    email: string;
    status: "verified" | "enriched" | "pending";
  }[];
  const featured = {
    company: t("sales.enrichment.advanced.featured.company"),
    meta: t("sales.enrichment.advanced.featured.meta"),
    fitLabel: t("sales.enrichment.advanced.featured.fitLabel"),
    fitScore: t("sales.enrichment.advanced.featured.fitScore"),
    decisionMakerLabel: t("sales.enrichment.advanced.featured.decisionMakerLabel"),
    decisionMakerValue: t("sales.enrichment.advanced.featured.decisionMakerValue"),
    painSignalsLabel: t("sales.enrichment.advanced.featured.painSignalsLabel"),
    painSignalsValue: t("sales.enrichment.advanced.featured.painSignalsValue"),
    personalizedHookLabel: t("sales.enrichment.advanced.featured.personalizedHookLabel"),
    personalizedHookValue: t("sales.enrichment.advanced.featured.personalizedHookValue"),
    recommendedChannelLabel: t("sales.enrichment.advanced.featured.recommendedChannelLabel"),
    recommendedChannelValue: t("sales.enrichment.advanced.featured.recommendedChannelValue"),
  };
  const additionalCompanies = tArray("sales.enrichment.advanced.additionalCompanies") as {
    company: string;
    contact: string;
    score: string;
    signal: string;
  }[];

  const statusClasses: Record<"verified" | "enriched" | "pending", string> = {
    verified: "bg-green-50 text-green-700",
    enriched: "bg-blue-50 text-blue-700",
    pending: "bg-yellow-50 text-yellow-700",
  };

  return (
    <div className="mt-10">
      {/* Tab buttons */}
      <div className="flex justify-center gap-2">
        <button
          onClick={() => setActive("simple")}
          className={`rounded-t px-6 py-2.5 text-sm font-medium transition-colors ${
            active === "simple"
              ? "bg-white text-navy shadow-sm"
              : "text-text-muted hover:text-navy"
          }`}
        >
          {t("sales.enrichment.tabs.simple")}
        </button>
        <button
          onClick={() => setActive("advanced")}
          className={`rounded-t px-6 py-2.5 text-sm font-medium transition-colors ${
            active === "advanced"
              ? "bg-white text-navy shadow-sm"
              : "text-text-muted hover:text-navy"
          }`}
        >
          {t("sales.enrichment.tabs.advanced")}
        </button>
      </div>

      {/* Tab content */}
      {active === "simple" ? (
        <div className="mt-6 overflow-x-auto rounded-lg border border-border-warm bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border-warm bg-cream">
                <th className="px-4 py-3 font-medium text-navy">{t("sales.enrichment.simpleTable.columns.company")}</th>
                <th className="px-4 py-3 font-medium text-navy">{t("sales.enrichment.simpleTable.columns.contact")}</th>
                <th className="px-4 py-3 font-medium text-navy">{t("sales.enrichment.simpleTable.columns.role")}</th>
                <th className="px-4 py-3 font-medium text-navy">{t("sales.enrichment.simpleTable.columns.email")}</th>
                <th className="px-4 py-3 font-medium text-navy">{t("sales.enrichment.simpleTable.columns.status")}</th>
              </tr>
            </thead>
            <tbody className="text-text-muted">
              {rows.map((row, index) => (
                <tr key={`${row.company}-${row.contact}`} className={index < rows.length - 1 ? "border-b border-border-warm" : undefined}>
                  <td className="px-4 py-3">{row.company}</td>
                  <td className="px-4 py-3">{row.contact}</td>
                  <td className="px-4 py-3">{row.role}</td>
                  <td className="px-4 py-3">{row.email}</td>
                  <td className="px-4 py-3">
                    <span className={`rounded-full px-2 py-0.5 text-xs ${statusClasses[row.status]}`}>
                      {t(`sales.enrichment.statusLabels.${row.status}`)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        /* Advanced: document/report style */
        <div className="mt-6 rounded-lg border border-border-warm bg-white shadow-sm">
          {/* Badge header */}
          <div className="border-b border-border-warm bg-cream px-6 py-3">
            <span className="text-sm font-medium text-navy">{t("sales.enrichment.advancedHeader")}</span>
          </div>
          {/* Featured company */}
          <div className="border-b border-border-warm p-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-semibold text-navy">{featured.company}</h4>
                <p className="text-xs text-text-muted">{featured.meta}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-muted">{featured.fitLabel}</span>
                <span className="rounded bg-green-50 px-2 py-1 text-sm font-medium text-green-700">{featured.fitScore}</span>
              </div>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-xs font-medium text-navy">{featured.decisionMakerLabel}</p>
                <p className="mt-0.5 text-sm text-text-muted">{featured.decisionMakerValue}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-navy">{featured.painSignalsLabel}</p>
                <p className="mt-0.5 text-sm text-text-muted">{featured.painSignalsValue}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-navy">{featured.personalizedHookLabel}</p>
                <p className="mt-0.5 text-sm text-text-muted">{featured.personalizedHookValue}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-navy">{featured.recommendedChannelLabel}</p>
                <p className="mt-0.5 text-sm text-text-muted">{featured.recommendedChannelValue}</p>
              </div>
            </div>
          </div>

          {/* Additional companies (condensed) */}
          <div className="divide-y divide-border-warm">
            {additionalCompanies.map((item) => (
              <div key={item.company} className="flex items-center justify-between px-6 py-3">
                <div className="flex-1">
                  <span className="text-sm font-medium text-navy">{item.company}</span>
                  <span className="ml-3 text-xs text-text-muted">{item.contact}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="hidden text-xs text-text-muted sm:inline">{item.signal}</span>
                  <span className="rounded bg-cream px-2 py-0.5 text-xs font-medium text-navy">{item.score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
