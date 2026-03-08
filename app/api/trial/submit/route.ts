import { NextRequest, NextResponse } from "next/server";
import { putJsonToS3 } from "@/lib/s3";
import { randomBytes } from "crypto";

interface TrialSubmission {
  trialId: string;
  submittedAt: string;
  company: { name: string; website: string };
  contact: { name: string; email: string };
  icp: {
    industry: string;
    companySize: string;
    geography: string;
    description: string;
    exampleCustomers: string;
    documents: string[];
  };
  deliverable:
    | { type: "prospect"; prospectCount: number }
    | { type: "enrich"; uploadedFile: string }
    | { type: "competitor"; competitors: string[] };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate required fields
    const { company, contact, icp, deliverable } = body;
    if (!company?.name || !contact?.name || !contact?.email) {
      return NextResponse.json(
        { error: "Company name, contact name, and email are required." },
        { status: 400 }
      );
    }
    if (!deliverable?.type) {
      return NextResponse.json(
        { error: "A deliverable type is required." },
        { status: 400 }
      );
    }

    const trialId = `tr_${randomBytes(6).toString("hex")}`;

    const submission: TrialSubmission = {
      trialId,
      submittedAt: new Date().toISOString(),
      company: {
        name: company.name,
        website: company.website || "",
      },
      contact: {
        name: contact.name,
        email: contact.email,
      },
      icp: {
        industry: icp?.industry || "",
        companySize: icp?.companySize || "",
        geography: icp?.geography || "",
        description: icp?.description || "",
        exampleCustomers: icp?.exampleCustomers || "",
        documents: icp?.documents || [],
      },
      deliverable,
    };

    await putJsonToS3(`trials/${trialId}/submission.json`, submission);

    return NextResponse.json({ trialId });
  } catch {
    return NextResponse.json(
      { error: "Failed to process submission." },
      { status: 500 }
    );
  }
}
