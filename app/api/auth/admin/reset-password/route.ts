import { resetPasswordSchema } from "@/lib/validators/auth";
import { resetAdminPassword } from "@/lib/services/adminAuth";
import { ok, handleApiError } from "@/lib/api/respond";

export async function POST(request: Request) {
  try {
    const { resetToken, password } = resetPasswordSchema.parse(await request.json());
    await resetAdminPassword(resetToken, password);
    return ok({ message: "Password updated. You can now log in." });
  } catch (err) {
    return handleApiError(err);
  }
}
