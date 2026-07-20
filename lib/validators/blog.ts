import { z } from "zod";
import { i18nField } from "./i18n";

export const blogFormSchema = z.object({
  titleEn: z.string().min(1),
  titleAr: z.string().min(1),
  titleI18n: i18nField(),
  excerptEn: z.string().optional(),
  excerptAr: z.string().optional(),
  excerptI18n: i18nField(),
  contentEn: z.string().min(1),
  contentAr: z.string().min(1),
  contentI18n: i18nField(),
  author: z.string().optional(),
  category: z.string().optional(),
  metaTitleEn: z.string().optional(),
  metaTitleAr: z.string().optional(),
  metaTitleI18n: i18nField(),
  metaDescriptionEn: z.string().optional(),
  metaDescriptionAr: z.string().optional(),
  metaDescriptionI18n: i18nField(),
  isPublished: z.coerce.boolean().default(false),
});

export type BlogFormInput = z.infer<typeof blogFormSchema>;

export const blogFaqFormSchema = z.object({
  questionEn: z.string().min(1),
  questionAr: z.string().min(1),
  questionI18n: i18nField(),
  answerEn: z.string().min(1),
  answerAr: z.string().min(1),
  answerI18n: i18nField(),
});
