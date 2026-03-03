"use client";

import { useState } from "react";
import { useI18n } from "./I18nProvider";

export default function EnrichmentTabs() {
  const [active, setActive] = useState<"simple" | "advanced">("simple");
  const { t } = useI18n();

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
          {t("product.enrichment.tabs.simple")}
        </button>
        <button
          onClick={() => setActive("advanced")}
          className={`rounded-t px-6 py-2.5 text-sm font-medium transition-colors ${
            active === "advanced"
              ? "bg-white text-navy shadow-sm"
              : "text-text-muted hover:text-navy"
          }`}
        >
          {t("product.enrichment.tabs.advanced")}
        </button>
      </div>

      {/* Tab content */}
      {active === "simple" ? (
        <div className="overflow-x-auto rounded-lg border border-border-warm bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border-warm bg-cream">
                <th className="px-4 py-3 font-medium text-navy">Company</th>
                <th className="px-4 py-3 font-medium text-navy">Contact</th>
                <th className="px-4 py-3 font-medium text-navy">Role</th>
                <th className="px-4 py-3 font-medium text-navy">Email</th>
                <th className="px-4 py-3 font-medium text-navy">Status</th>
              </tr>
            </thead>
            <tbody className="text-text-muted">
              <tr className="border-b border-border-warm">
                <td className="px-4 py-3">Acme Corp</td>
                <td className="px-4 py-3">Jane Smith</td>
                <td className="px-4 py-3">CRO</td>
                <td className="px-4 py-3">jane@acme.com</td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-green-50 px-2 py-0.5 text-xs text-green-700">
                    Verified
                  </span>
                </td>
              </tr>
              <tr className="border-b border-border-warm">
                <td className="px-4 py-3">Beta Inc</td>
                <td className="px-4 py-3">Tom Brown</td>
                <td className="px-4 py-3">VP Sales</td>
                <td className="px-4 py-3">tom@beta.io</td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs text-blue-700">
                    Enriched
                  </span>
                </td>
              </tr>
              <tr className="border-b border-border-warm">
                <td className="px-4 py-3">Gamma SA</td>
                <td className="px-4 py-3">Lisa Muller</td>
                <td className="px-4 py-3">CEO</td>
                <td className="px-4 py-3">lisa@gamma.de</td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-green-50 px-2 py-0.5 text-xs text-green-700">
                    Verified
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">Delta Ltd</td>
                <td className="px-4 py-3">Mark Roberts</td>
                <td className="px-4 py-3">Head of Sales</td>
                <td className="px-4 py-3">mark@delta.co.uk</td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-yellow-50 px-2 py-0.5 text-xs text-yellow-700">
                    Pending
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        /* Advanced: document/report style */
        <div className="rounded-lg border border-border-warm bg-white shadow-sm">
          {/* Featured company */}
          <div className="border-b border-border-warm p-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-heading text-lg font-medium text-navy">Acme Corp</h4>
                <p className="text-xs text-text-muted">SaaS, 50-200 employees, Munich, Germany</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-muted">ICP-Fit</span>
                <span className="rounded bg-green-50 px-2 py-1 text-sm font-medium text-green-700">4.6 / 5</span>
              </div>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-xs font-medium text-navy">Decision maker</p>
                <p className="mt-0.5 text-sm text-text-muted">Jane Smith, CRO</p>
              </div>
              <div>
                <p className="text-xs font-medium text-navy">Pain signals</p>
                <p className="mt-0.5 text-sm text-text-muted">Hiring SDR, manual CRM updates, low outreach volume</p>
              </div>
              <div>
                <p className="text-xs font-medium text-navy">Personalized hook</p>
                <p className="mt-0.5 text-sm text-text-muted">&quot;Saw your SDR job post on LinkedIn. ZPT could cover that function at a fraction of the cost...&quot;</p>
              </div>
              <div>
                <p className="text-xs font-medium text-navy">Recommended channel</p>
                <p className="mt-0.5 text-sm text-text-muted">LinkedIn + email sequence</p>
              </div>
            </div>
          </div>

          {/* Additional companies (condensed) */}
          <div className="divide-y divide-border-warm">
            {[
              { company: "Beta Inc", contact: "Tom Brown, VP Sales", score: "3.8 / 5", signal: "Expanding to new market, no local team" },
              { company: "Gamma SA", contact: "Lisa Muller, CEO", score: "4.2 / 5", signal: "Recently closed funding round, scaling sales" },
              { company: "Delta Ltd", contact: "Mark Roberts, Head of Sales", score: "3.1 / 5", signal: "Using outdated CRM, high churn on sales team" },
            ].map((item) => (
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
