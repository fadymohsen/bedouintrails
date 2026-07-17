import { forgotPasswordSchema } from "@/lib/validators/auth";
import { forgotPasswordUser } from "@/lib/services/userAuth";
import { ok, handleApiError } from "@/lib/api/respond";

export async function POST(request: Request) {
  try {
    const { email } = forgotPasswordSchema.parse(await request.json());
    await forgotPasswordUser(email);
    return ok({ message: "A verification code has been sent to your email." });
  } catch (err) {
    return handleApiError(err);
  }
}
