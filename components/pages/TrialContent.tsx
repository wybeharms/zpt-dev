"use client";

import { useState } from "react";
import Link from "next/link";
import { useI18n } from "@/components/I18nProvider";
import TrialProgressBar from "@/components/trial/TrialProgressBar";
import TrialStepBasicInfo, { type BasicInfoData } from "@/components/trial/TrialStepBasicInfo";
import TrialStepICP, { type ICPData } from "@/components/trial/TrialStepICP";
import TrialStepDeliverable, { type DeliverableData } from "@/components/trial/TrialStepDeliverable";

export default function TrialContent() {
  const { t } = useI18n();
  const [step, setStep] = useState(1);
  const [trialId, setTrialId] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const [basicInfo, setBasicInfo] = useState<BasicInfoData>({
    companyName: "",
    contactName: "",
    email: "",
    website: "",
  });

  const [icp, setIcp] = useState<ICPData>({
    industry: "",
    companySize: "",
    geography: "",
    description: "",
    exampleCustomers: "",
    documents: [],
  });

  const [deliverable, setDeliverable] = useState<DeliverableData>({
    type: "",
  });

  // Generate a trialId on step 1 -> 2 transition so uploads can use it
  async function handleStep1Next() {
    if (!trialId) {
      // Pre-generate a trialId client-side for file uploads
      const id = `tr_${Array.from(crypto.getRandomValues(new Uint8Array(6)))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("")}`;
      setTrialId(id);
    }
    setStep(2);
  }

  async function handleSubmit() {
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/trial/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          trialId,
          company: {
            name: basicInfo.companyName,
            website: basicInfo.website,
          },
          contact: {
            name: basicInfo.contactName,
            email: basicInfo.email,
          },
          icp: {
            industry: icp.industry,
            companySize: icp.companySize,
            geography: icp.geography,
            description: icp.description,
            exampleCustomers: icp.exampleCustomers,
            documents: icp.documents,
          },
          deliverable:
            deliverable.type === "prospect"
              ? { type: "prospect", prospectCount: deliverable.prospectCount }
              : deliverable.type === "enrich"
                ? { type: "enrich", uploadedFile: deliverable.uploadedFile }
                : { type: "competitor", competitors: deliverable.competitors },
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Submission failed");
      }

      const data = await res.json();
      setTrialId(data.trialId);
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  // Success state
  if (submitted) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-navy px-6 py-16 text-white lg:px-8">
        <div className="mx-auto max-w-md text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold/20">
            <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h1 className="font-heading text-3xl font-light tracking-tight">
            {t("trial.success.title")}
          </h1>
          <p className="mt-4 leading-relaxed text-white/70">
            {t("trial.success.description")}
          </p>
          <p className="mt-2 text-sm text-white/50">
            {t("trial.success.portal")}
          </p>
          <Link
            href="/sales"
            className="mt-8 inline-block rounded border border-white/20 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/5"
          >
            {t("trial.success.backToSales")}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-[70vh] bg-navy px-6 py-16 text-white lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-2 text-center font-heading text-3xl font-light tracking-tight md:text-4xl">
          {t("trial.title")}
        </h1>
        <p className="mb-10 text-center text-sm text-white/50">
          {t("trial.subtitle")}
        </p>

        <div className="mb-10">
          <TrialProgressBar currentStep={step} />
        </div>

        {error && (
          <div className="mb-6 rounded border border-red-500/30 bg-red-500/10 px-4 py-3 text-center text-sm text-red-300">
            {error}
          </div>
        )}

        {step === 1 && (
          <TrialStepBasicInfo
            data={basicInfo}
            onChange={setBasicInfo}
            onNext={handleStep1Next}
          />
        )}

        {step === 2 && (
          <TrialStepICP
            data={icp}
            onChange={setIcp}
            onNext={() => setStep(3)}
            onBack={() => setStep(1)}
            trialId={trialId}
          />
        )}

        {step === 3 && (
          <TrialStepDeliverable
            data={deliverable}
            onChange={setDeliverable}
            onBack={() => setStep(2)}
            onSubmit={handleSubmit}
            submitting={submitting}
            trialId={trialId}
          />
        )}
      </div>
    </section>
  );
}
