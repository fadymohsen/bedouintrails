import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/validators/lead";
import { sendLeadEmail } from "@/lib/mail";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = leadSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  await sendLeadEmail(parsed.data);

  return NextResponse.json({ success: true });
}
