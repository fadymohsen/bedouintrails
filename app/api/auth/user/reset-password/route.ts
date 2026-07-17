import { resetPasswordSchema } from "@/lib/validators/auth";
import { resetUserPassword } from "@/lib/services/userAuth";
import { ok, handleApiError } from "@/lib/api/respond";

export async function POST(request: Request) {
  try {
    const { resetToken, password } = resetPasswordSchema.parse(await request.json());
    await resetUserPassword(resetToken, password);
    return ok({ message: "Password updated. You can now log in." });
  } catch (err) {
    return handleApiError(err);
  }
}
