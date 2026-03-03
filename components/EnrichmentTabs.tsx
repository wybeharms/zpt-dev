"use client";

import { useState } from "react";

export default function EnrichmentTabs() {
  const [active, setActive] = useState<"simple" | "advanced">("simple");

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
          Simple Template
        </button>
        <button
          onClick={() => setActive("advanced")}
          className={`rounded-t px-6 py-2.5 text-sm font-medium transition-colors ${
            active === "advanced"
              ? "bg-white text-navy shadow-sm"
              : "text-text-muted hover:text-navy"
          }`}
        >
          Advanced Template
        </button>
      </div>

      {/* Tab content */}
      <div className="overflow-x-auto rounded-lg border border-border-warm bg-white shadow-sm">
        {active === "simple" ? (
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
              <tr>
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
            </tbody>
          </table>
        ) : (
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border-warm bg-cream">
                <th className="px-4 py-3 font-medium text-navy">Company</th>
                <th className="px-4 py-3 font-medium text-navy">Contact</th>
                <th className="px-4 py-3 font-medium text-navy">ICP-Fit</th>
                <th className="px-4 py-3 font-medium text-navy">
                  Pain Signals
                </th>
                <th className="px-4 py-3 font-medium text-navy">
                  Personalized Hook
                </th>
              </tr>
            </thead>
            <tbody className="text-text-muted">
              <tr className="border-b border-border-warm">
                <td className="px-4 py-3">Acme Corp</td>
                <td className="px-4 py-3">Jane S.</td>
                <td className="px-4 py-3">
                  <span className="font-medium text-green-700">92/100</span>
                </td>
                <td className="px-4 py-3 text-xs leading-relaxed">
                  Hiring SDR, manual CRM, low outreach volume
                </td>
                <td className="px-4 py-3 text-xs leading-relaxed">
                  &quot;Saw your SDR post on LinkedIn...&quot;
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">Delta Ltd</td>
                <td className="px-4 py-3">Mark R.</td>
                <td className="px-4 py-3">
                  <span className="font-medium text-yellow-700">74/100</span>
                </td>
                <td className="px-4 py-3 text-xs leading-relaxed">
                  Expanding to new market, no local sales team
                </td>
                <td className="px-4 py-3 text-xs leading-relaxed">
                  &quot;Congrats on the DACH expansion...&quot;
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
