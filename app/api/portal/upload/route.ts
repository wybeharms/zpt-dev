import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { getUploadUrl } from "@/lib/s3";

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.customerId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { fileName, contentType } = await req.json();
  if (!fileName || typeof fileName !== "string") {
    return NextResponse.json({ error: "fileName required" }, { status: 400 });
  }

  const sanitized = fileName.replace(/[^a-zA-Z0-9._-]/g, "_");
  const key = `${session.user.customerId}/onboarding/${sanitized}`;
  const url = await getUploadUrl(key, contentType || "application/octet-stream");

  return NextResponse.json({ url, key });
}
