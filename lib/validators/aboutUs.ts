import { z } from "zod";
import { i18nField } from "./i18n";

export const aboutUsFormSchema = z.object({
  titleEn: z.string().min(1),
  titleAr: z.string().min(1),
  titleI18n: i18nField(),
  descriptionEn: z.string().min(1),
  descriptionAr: z.string().min(1),
  descriptionI18n: i18nField(),
});

export type AboutUsFormInput = z.infer<typeof aboutUsFormSchema>;
