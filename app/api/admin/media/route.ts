import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth/session";
import { listMediaLibrary } from "@/lib/services/media";

export async function GET() {
  await requireAdmin();
  const items = await listMediaLibrary();
  return NextResponse.json({ items });
}
