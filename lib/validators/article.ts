import { z } from "zod";

export const articleFormSchema = z.object({
  titleEn: z.string().min(1),
  titleAr: z.string().optional(),
  descriptionEn: z.string().min(1),
  descriptionAr: z.string().optional(),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
});

export type ArticleFormInput = z.infer<typeof articleFormSchema>;
