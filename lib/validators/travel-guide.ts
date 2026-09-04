import { z } from "zod";

export const travelGuideFormSchema = z.object({
  heroPosition: z.string().optional(),
  sortOrder: z.coerce.number().int().default(0),
  visible: z.boolean().default(true),
});

export type TravelGuideFormInput = z.infer<typeof travelGuideFormSchema>;
