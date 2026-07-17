import "server-only";
import { prisma } from "@/lib/prisma";
import { NotFoundError, OwnershipError } from "./errors";
import type { CreateReviewInput } from "@/lib/validators/review";

export async function createReview(userId: number, input: CreateReviewInput) {
  const order = await prisma.order.findUnique({ where: { id: input.orderId } });
  if (!order) throw new NotFoundError("Order not found.");
  if (order.userId !== userId) throw new OwnershipError("You do not have access to this order.");

  return prisma.review.create({
    data: {
      userId,
      orderId: order.id,
      trapId: order.trapId,
      stars: input.stars,
      comment: input.comment,
    },
  });
}
