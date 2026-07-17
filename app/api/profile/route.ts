import { getUserSession } from "@/lib/auth/session";
import { getUserProfile, updateUserProfile } from "@/lib/services/profile";
import { updateProfileSchema } from "@/lib/validators/profile";
import { ok, fail, handleApiError } from "@/lib/api/respond";

export async function GET() {
  try {
    const session = await getUserSession();
    if (!session) return fail("Unauthenticated.", 401);

    const user = await getUserProfile(session.uid);
    return ok({
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        image: user.image,
      },
    });
  } catch (err) {
    return handleApiError(err);
  }
}

export async function PUT(request: Request) {
  try {
    const session = await getUserSession();
    if (!session) return fail("Unauthenticated.", 401);

    const form = await request.formData();
    const imageFile = form.get("image");
    const body = updateProfileSchema.parse({
      firstName: form.get("firstName") || undefined,
      lastName: form.get("lastName") || undefined,
      phone: form.get("phone") || undefined,
      email: form.get("email") || undefined,
    });

    const user = await updateUserProfile(session.uid, body, imageFile instanceof File && imageFile.size > 0 ? imageFile : null);
    return ok({
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        image: user.image,
      },
    });
  } catch (err) {
    return handleApiError(err);
  }
}
