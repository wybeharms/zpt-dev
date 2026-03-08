import { NextRequest, NextResponse } from "next/server";
import { getUploadUrl } from "@/lib/s3";

export async function POST(req: NextRequest) {
  try {
    const { trialId, fileName, contentType, folder } = await req.json();

    if (!trialId || typeof trialId !== "string" || !trialId.startsWith("tr_")) {
      return NextResponse.json({ error: "Valid trialId required." }, { status: 400 });
    }
    if (!fileName || typeof fileName !== "string") {
      return NextResponse.json({ error: "fileName required." }, { status: 400 });
    }

    const sanitized = fileName.replace(/[^a-zA-Z0-9._-]/g, "_");
    const subFolder = folder === "icp_documents" ? "icp_documents" : "";
    const key = subFolder
      ? `trials/${trialId}/${subFolder}/${sanitized}`
      : `trials/${trialId}/${sanitized}`;

    const url = await getUploadUrl(key, contentType || "application/octet-stream");

    return NextResponse.json({ url, key, fileName: sanitized });
  } catch {
    return NextResponse.json(
      { error: "Failed to generate upload URL." },
      { status: 500 }
    );
  }
}
