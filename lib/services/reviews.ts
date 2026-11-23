import "server-only";
import { prisma } from "@/lib/prisma";
import { ConflictError, NotFoundError, OwnershipError } from "./errors";
import type { CreateReviewInput } from "@/lib/validators/review";

export async function createReview(userId: number, input: CreateReviewInput) {
  const order = await prisma.order.findUnique({
    where: { id: input.orderId },
    include: { reviews: { select: { id: true }, take: 1 } },
  });
  if (!order) throw new NotFoundError("Order not found.");
  if (order.userId !== userId) throw new OwnershipError("You do not have access to this order.");
  if (order.status === "cancelled") throw new ConflictError("A cancelled booking cannot be reviewed.");
  if (order.reviews.length > 0) throw new ConflictError("You have already reviewed this trip.");

  return prisma.review.create({
    data: {
      userId,
      orderId: order.id,
      trapId: order.trapId,
      stars: input.stars,
      comment: input.comment || null,
    },
  });
}

export type ReviewEligibility =
  | { state: "can_review"; orderId: number }
  | { state: "no_booking" | "already_reviewed" };

// A guest can review a trip once per (non-cancelled) booking of it.
export async function getReviewEligibility(userId: number, trapId: number): Promise<ReviewEligibility> {
  const orders = await prisma.order.findMany({
    where: { userId, trapId, status: { not: "cancelled" } },
    select: { id: true, reviews: { select: { id: true }, take: 1 } },
    orderBy: { createdAt: "desc" },
  });
  if (orders.length === 0) return { state: "no_booking" };

  const open = orders.find((o) => o.reviews.length === 0);
  return open ? { state: "can_review", orderId: open.id } : { state: "already_reviewed" };
}
