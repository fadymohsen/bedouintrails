import { z } from "zod";
import { i18nField } from "./i18n";

export const trapFormSchema = z.object({
  nameEn: z.string().min(1),
  nameAr: z.string().min(1),
  nameI18n: i18nField(),
  interfaceFromEn: z.string().min(1),
  interfaceFromAr: z.string().min(1),
  interfaceFromI18n: i18nField(),
  interfaceToEn: z.string().min(1),
  interfaceToAr: z.string().min(1),
  interfaceToI18n: i18nField(),
  descriptionEn: z.string().optional(),
  descriptionAr: z.string().optional(),
  descriptionI18n: i18nField(),
  duration: z.coerce.number().int().min(0).default(0),
  status: z.enum(["active", "inactive"]).default("active"),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
});

export type TrapFormInput = z.infer<typeof trapFormSchema>;

export const trapDayCardFormSchema = z.object({
  titleEn: z.string().min(1),
  titleAr: z.string().min(1),
  titleI18n: i18nField(),
  descriptionEn: z.string().optional(),
  descriptionAr: z.string().optional(),
  descriptionI18n: i18nField(),
});
