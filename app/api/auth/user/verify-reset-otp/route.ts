import { otpSchema } from "@/lib/validators/auth";
import { verifyResetOtp } from "@/lib/services/userAuth";
import { ok, handleApiError } from "@/lib/api/respond";

// Proves OTP possession before password reset is allowed (fixes the old
// backend's unauthenticated reset-password gap). Returns a short-lived
// reset token the client must submit with the new password.
export async function POST(request: Request) {
  try {
    const { email, otp } = otpSchema.parse(await request.json());
    const resetToken = await verifyResetOtp(email, otp);
    return ok({ resetToken });
  } catch (err) {
    return handleApiError(err);
  }
}
