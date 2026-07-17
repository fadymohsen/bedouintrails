import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validators/contact";
import { sendContactEmail } from "@/lib/mail";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  await sendContactEmail(parsed.data);

  return NextResponse.json({ success: true });
}
