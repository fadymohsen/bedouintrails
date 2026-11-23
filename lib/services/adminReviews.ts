import "server-only";
import { prisma } from "@/lib/prisma";
import { NotFoundError } from "./errors";

export type ReviewFilter = "all" | "pending" | "approved";

export async function listReviews(filter: ReviewFilter = "all") {
  return prisma.review.findMany({
    where: filter === "pending" ? { isApproved: false } : filter === "approved" ? { isApproved: true } : {},
    include: {
      trap: { select: { nameEn: true } },
      user: { select: { firstName: true, lastName: true, email: true } },
    },
    orderBy: [{ isApproved: "asc" }, { createdAt: "desc" }],
  });
}

export async function setReviewApproval(id: number, isApproved: boolean) {
  const review = await prisma.review.findUnique({ where: { id }, select: { id: true } });
  if (!review) throw new NotFoundError("Review not found.");
  return prisma.review.update({ where: { id }, data: { isApproved } });
}

export async function deleteReview(id: number) {
  const review = await prisma.review.findUnique({ where: { id }, select: { id: true } });
  if (!review) throw new NotFoundError("Review not found.");
  await prisma.review.delete({ where: { id } });
}
