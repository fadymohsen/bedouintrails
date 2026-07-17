import { z } from "zod";

export const blogFormSchema = z.object({
  titleEn: z.string().min(1),
  titleAr: z.string().min(1),
  excerptEn: z.string().optional(),
  excerptAr: z.string().optional(),
  contentEn: z.string().min(1),
  contentAr: z.string().min(1),
  author: z.string().optional(),
  category: z.string().optional(),
  metaTitleEn: z.string().optional(),
  metaTitleAr: z.string().optional(),
  metaDescriptionEn: z.string().optional(),
  metaDescriptionAr: z.string().optional(),
  isPublished: z.coerce.boolean().default(false),
});

export type BlogFormInput = z.infer<typeof blogFormSchema>;

export const blogFaqFormSchema = z.object({
  questionEn: z.string().min(1),
  questionAr: z.string().min(1),
  answerEn: z.string().min(1),
  answerAr: z.string().min(1),
});
