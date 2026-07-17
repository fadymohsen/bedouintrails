import { z } from "zod";

export const trapFormSchema = z.object({
  nameEn: z.string().min(1),
  nameAr: z.string().optional(),
  interfaceFromEn: z.string().min(1),
  interfaceFromAr: z.string().optional(),
  interfaceToEn: z.string().min(1),
  interfaceToAr: z.string().optional(),
  descriptionEn: z.string().optional(),
  descriptionAr: z.string().optional(),
  duration: z.coerce.number().int().min(0).default(0),
  status: z.enum(["active", "inactive"]).default("active"),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
});

export type TrapFormInput = z.infer<typeof trapFormSchema>;

export const trapDayCardFormSchema = z.object({
  titleEn: z.string().min(1),
  titleAr: z.string().optional(),
  descriptionEn: z.string().optional(),
  descriptionAr: z.string().optional(),
});
