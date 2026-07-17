import { loginSchema } from "@/lib/validators/auth";
import { loginUser } from "@/lib/services/userAuth";
import { ok, handleApiError } from "@/lib/api/respond";

export async function POST(request: Request) {
  try {
    const { email, password } = loginSchema.parse(await request.json());
    const user = await loginUser(email, password);
    return ok({
      user: { id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email },
    });
  } catch (err) {
    return handleApiError(err);
  }
}
