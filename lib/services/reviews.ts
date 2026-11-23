import "server-only";
import { prisma } from "@/lib/prisma";
import { AuthError, ConflictError, NotFoundError, OwnershipError, ValidationError } from "./errors";
import type { CreateReviewInput } from "@/lib/validators/review";

// Reviews tied to the reviewer's own booking are verified and published at
// once. Everything else (anonymous, or logged in without a booking) is held
// until an admin approves it.
export async function createReview(userId: number | null, input: CreateReviewInput) {
  if (input.orderId !== undefined) return createVerifiedReview(userId, input.orderId, input);
  return createUnverifiedReview(userId, input.trapId!, input);
}

async function createVerifiedReview(userId: number | null, orderId: number, input: CreateReviewInput) {
  if (userId === null) throw new AuthError("Please log in to review a booking.");

  const order = await prisma.order.findUnique({
    where: { id: orderId },
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
      isApproved: true,
    },
  });
}

async function createUnverifiedReview(userId: number | null, trapId: number, input: CreateReviewInput) {
  const trap = await prisma.trap.findUnique({ where: { id: trapId }, select: { id: true } });
  if (!trap) throw new NotFoundError("Trip not found.");

  if (userId !== null) {
    const existing = await prisma.review.findFirst({ where: { userId, trapId }, select: { id: true } });
    if (existing) throw new ConflictError("You have already reviewed this trip.");
  } else if (!input.guestName) {
    throw new ValidationError("Please enter your name.");
  }

  return prisma.review.create({
    data: {
      userId,
      trapId,
      stars: input.stars,
      comment: input.comment || null,
      guestName: userId === null ? input.guestName : null,
      isApproved: false,
    },
  });
}

export type TripReviewContext = {
  loggedIn: boolean;
  alreadyReviewed: boolean;
  // Set when the user has a non-cancelled booking of this trip not yet reviewed.
  orderId: number | null;
};

export async function getTripReviewContext(userId: number | null, trapId: number): Promise<TripReviewContext> {
  if (userId === null) return { loggedIn: false, alreadyReviewed: false, orderId: null };

  const [existing, orders] = await Promise.all([
    prisma.review.findFirst({ where: { userId, trapId }, select: { id: true } }),
    prisma.order.findMany({
      where: { userId, trapId, status: { not: "cancelled" } },
      select: { id: true, reviews: { select: { id: true }, take: 1 } },
      orderBy: { createdAt: "desc" },
    }),
  ]);
  const open = orders.find((o) => o.reviews.length === 0);
  return { loggedIn: true, alreadyReviewed: existing !== null, orderId: open?.id ?? null };
}
