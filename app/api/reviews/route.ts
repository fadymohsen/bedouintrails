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
    return ok({ review });
  } catch (err) {
    return handleApiError(err);
  }
}
