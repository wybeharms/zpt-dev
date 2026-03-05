import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { getJsonFromS3, listS3Objects } from "@/lib/s3";

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.customerId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const type = req.nextUrl.searchParams.get("type");
  const requestedCustomer = req.nextUrl.searchParams.get("customerId");

  // Admin can query other customers; regular users are locked to their own
  const customerId =
    session.user.role === "admin" && requestedCustomer
      ? requestedCustomer
      : session.user.customerId;

  if (!type || !["onboarding", "enrichment", "competitors"].includes(type)) {
    return NextResponse.json({ error: "Invalid type" }, { status: 400 });
  }

  const prefix = `${customerId}/${type}/`;

  if (type === "onboarding") {
    const files = await listS3Objects(prefix);
    return NextResponse.json({ files });
  }

  // For enrichment and competitors, look for JSON files
  const objects = await listS3Objects(prefix);
  const jsonFiles = objects.filter((o) => o.key.endsWith(".json"));

  if (jsonFiles.length === 0) {
    return NextResponse.json({ data: [] });
  }

  // Load the first JSON file found
  const data = await getJsonFromS3(jsonFiles[0].key);
  const items = Array.isArray(data) ? data : data ? [data] : [];

  return NextResponse.json({ data: items });
}
