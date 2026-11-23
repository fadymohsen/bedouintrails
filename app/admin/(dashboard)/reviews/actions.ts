"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/auth/session";
import { setReviewApproval, deleteReview } from "@/lib/services/adminReviews";

function refresh() {
  revalidatePath("/admin/reviews");
  // Approved reviews appear on the home page and trip pages.
  revalidatePath("/[locale]", "page");
  revalidatePath("/[locale]/journeys/[slug]", "page");
}

export async function setReviewApprovalAction(reviewId: number, isApproved: boolean) {
  await requireAdmin("manage_website");
  await setReviewApproval(reviewId, isApproved);
  refresh();
}

export async function deleteReviewAction(reviewId: number) {
  await requireAdmin("manage_website");
  await deleteReview(reviewId);
  refresh();
}
