import { z } from "zod";

export const createReviewSchema = z.object({
  orderId: z.coerce.number().int().positive(),
  stars: z.coerce.number().int().min(1).max(5),
  comment: z.string().max(2000).optional(),
});

export type CreateReviewInput = z.infer<typeof createReviewSchema>;
