import { z } from "zod";
import { i18nField } from "./i18n";

export const articleFormSchema = z.object({
  titleEn: z.string().min(1),
  titleAr: z.string().min(1),
  titleI18n: i18nField(),
  descriptionEn: z.string().min(1),
  descriptionAr: z.string().min(1),
  descriptionI18n: i18nField(),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
});

export type ArticleFormInput = z.infer<typeof articleFormSchema>;
