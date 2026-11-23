import { z } from "zod";

// `orderId` = a logged-in guest reviewing one of their own bookings (verified,
// published immediately). `trapId` = anyone else reviewing a trip (held for
// admin approval).
export const createReviewSchema = z
  .object({
    orderId: z.coerce.number().int().positive().optional(),
    trapId: z.coerce.number().int().positive().optional(),
    stars: z.coerce.number().int().min(1).max(5),
    comment: z.string().trim().max(2000).optional(),
    guestName: z.string().trim().min(1).max(60).optional(),
    // Honeypot: real users never see or fill this.
    website: z.string().optional(),
  })
  .refine((d) => d.orderId !== undefined || d.trapId !== undefined, { message: "A trip is required." });

export type CreateReviewInput = z.infer<typeof createReviewSchema>;
