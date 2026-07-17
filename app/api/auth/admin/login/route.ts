import { loginSchema } from "@/lib/validators/auth";
import { loginAdmin } from "@/lib/services/adminAuth";
import { ok, handleApiError } from "@/lib/api/respond";

export async function POST(request: Request) {
  try {
    const { email, password } = loginSchema.parse(await request.json());
    const admin = await loginAdmin(email, password);
    return ok({
      admin: { id: admin.id, firstName: admin.firstName, lastName: admin.lastName, email: admin.email, role: admin.role },
    });
  } catch (err) {
    return handleApiError(err);
  }
}
