import { otpSchema } from "@/lib/validators/auth";
import { verifyAdminOtp } from "@/lib/services/adminAuth";
import { setAdminSession } from "@/lib/auth/session";
import { ok, handleApiError } from "@/lib/api/respond";

export async function POST(request: Request) {
  try {
    const { email, otp } = otpSchema.parse(await request.json());
    const admin = await verifyAdminOtp(email, otp);
    const permissions =
      admin.permissions && typeof admin.permissions === "object"
        ? Object.entries(admin.permissions as Record<string, boolean>)
            .filter(([, v]) => v)
            .map(([k]) => k)
        : [];
    await setAdminSession(admin.id, admin.role, permissions);
    return ok({ message: "Verified successfully." });
  } catch (err) {
    return handleApiError(err);
  }
}
