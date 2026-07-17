import { getUserSession } from "@/lib/auth/session";
import { changeUserPassword } from "@/lib/services/profile";
import { changePasswordSchema } from "@/lib/validators/profile";
import { ok, fail, handleApiError } from "@/lib/api/respond";

export async function PUT(request: Request) {
  try {
    const session = await getUserSession();
    if (!session) return fail("Unauthenticated.", 401);

    const { currentPassword, password } = changePasswordSchema.parse(await request.json());
    await changeUserPassword(session.uid, currentPassword, password);
    return ok({ message: "Password updated." });
  } catch (err) {
    return handleApiError(err);
  }
}
