import { z } from "zod";

export const aboutUsFormSchema = z.object({
  titleEn: z.string().min(1),
  titleAr: z.string().optional(),
  descriptionEn: z.string().min(1),
  descriptionAr: z.string().optional(),
});

export type AboutUsFormInput = z.infer<typeof aboutUsFormSchema>;
