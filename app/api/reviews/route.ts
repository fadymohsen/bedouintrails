import { revalidatePath } from "next/cache";
import { createReviewSchema } from "@/lib/validators/review";
import { createReview } from "@/lib/services/reviews";
import { getUserSession } from "@/lib/auth/session";
import { ok, fail, handleApiError } from "@/lib/api/respond";

export async function POST(request: Request) {
  try {
    const session = await getUserSession();
    if (!session) return fail("Unauthenticated.", 401);

    const body = createReviewSchema.parse(await request.json());
    const review = await createReview(session.uid, body);

    // Reviews are shown on the home page and every trip page.
    revalidatePath("/[locale]", "page");
    revalidatePath("/[locale]/journeys/[slug]", "page");

    return ok({ review });
  } catch (err) {
    return handleApiError(err);
  }
}
