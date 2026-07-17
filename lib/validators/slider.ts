import { z } from "zod";

export const sliderFormSchema = z.object({
  titleEn: z.string().optional(),
  titleAr: z.string().optional(),
  descriptionEn: z.string().optional(),
  descriptionAr: z.string().optional(),
});

export type SliderFormInput = z.infer<typeof sliderFormSchema>;
