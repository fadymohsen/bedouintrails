import { registerSchema } from "@/lib/validators/auth";
import { registerUser } from "@/lib/services/userAuth";
import { ok, handleApiError } from "@/lib/api/respond";

export async function POST(request: Request) {
  try {
    const body = registerSchema.parse(await request.json());
    await registerUser(body);
    return ok({ message: "Registered. Check your email for a verification code." });
  } catch (err) {
    return handleApiError(err);
  }
}
