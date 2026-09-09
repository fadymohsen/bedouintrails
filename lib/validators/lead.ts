import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(2).max(100),
  phone: z.string().min(6).max(20),
});

export type LeadInput = z.infer<typeof leadSchema>;
