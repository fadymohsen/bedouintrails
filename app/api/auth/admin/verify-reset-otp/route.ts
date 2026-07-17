import { otpSchema } from "@/lib/validators/auth";
import { verifyAdminResetOtp } from "@/lib/services/adminAuth";
import { ok, handleApiError } from "@/lib/api/respond";

export async function POST(request: Request) {
  try {
    const { email, otp } = otpSchema.parse(await request.json());
    const resetToken = await verifyAdminResetOtp(email, otp);
    return ok({ resetToken });
  } catch (err) {
    return handleApiError(err);
  }
}
