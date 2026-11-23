import { revalidatePath } from "next/cache";
import { createReviewSchema } from "@/lib/validators/review";
import { createReview } from "@/lib/services/reviews";
import { getUserSession } from "@/lib/auth/session";
import { ok, handleApiError } from "@/lib/api/respond";

export async function POST(request: Request) {
  try {
    const session = await getUserSession();
    const body = createReviewSchema.parse(await request.json());

    // Honeypot filled in => a bot. Pretend it worked, store nothing.
    if (body.website) return ok({ review: { isApproved: false } });

    const review = await createReview(session?.uid ?? null, body);

    if (review.isApproved) {
      // Verified reviews are public immediately: refresh the home and trip pages.
      revalidatePath("/[locale]", "page");
      revalidatePath("/[locale]/journeys/[slug]", "page");
    }

    return ok({ review: { isApproved: review.isApproved } });
  } catch (err) {
    return handleApiError(err);
  }
}
