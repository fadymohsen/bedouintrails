import { z } from "zod";

export const createOrderSchema = z
  .object({
    trapId: z.coerce.number().int().positive(),
    firstName: z.string().min(1).max(100),
    lastName: z.string().min(1).max(100),
    email: z.string().email(),
    phone: z.string().min(6).max(20),
    description: z.string().max(2000).optional(),
    numberOfAdults: z.coerce.number().int().min(1),
    numberOfChildren: z.coerce.number().int().min(0).default(0),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
  })
  .refine((data) => data.endDate >= data.startDate, {
    message: "End date must be on or after the start date.",
    path: ["endDate"],
  });

export type CreateOrderInput = z.infer<typeof createOrderSchema>;
