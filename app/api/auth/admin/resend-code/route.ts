import { resendCodeSchema } from "@/lib/validators/auth";
import { resendAdminCode } from "@/lib/services/adminAuth";
import { ok, handleApiError } from "@/lib/api/respond";

export async function POST(request: Request) {
  try {
    const { email } = resendCodeSchema.parse(await request.json());
    await resendAdminCode(email);
    return ok({ message: "A new verification code has been sent." });
  } catch (err) {
    return handleApiError(err);
  }
}
