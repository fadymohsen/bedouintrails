import { z } from "zod";
import { i18nField } from "./i18n";

export const sliderFormSchema = z.object({
  titleEn: z.string().optional(),
  titleAr: z.string().optional(),
  titleI18n: i18nField(),
  descriptionEn: z.string().optional(),
  descriptionAr: z.string().optional(),
  descriptionI18n: i18nField(),
});

export type SliderFormInput = z.infer<typeof sliderFormSchema>;
