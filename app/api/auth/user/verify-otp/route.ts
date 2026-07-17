import { otpSchema } from "@/lib/validators/auth";
import { verifyUserOtp } from "@/lib/services/userAuth";
import { setUserSession } from "@/lib/auth/session";
import { ok, handleApiError } from "@/lib/api/respond";

// Post-registration OTP verification. On success the user is immediately
// signed in (matches the previous auto-login-after-verify behavior).
export async function POST(request: Request) {
  try {
    const { email, otp } = otpSchema.parse(await request.json());
    const user = await verifyUserOtp(email, otp);
    await setUserSession(user.id);
    return ok({ message: "Verified successfully." });
  } catch (err) {
    return handleApiError(err);
  }
}
