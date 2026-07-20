import { z } from "zod";
import { i18nField } from "./i18n";

export const commonQuestionFormSchema = z.object({
  questionEn: z.string().min(1),
  questionAr: z.string().min(1),
  questionI18n: i18nField(),
  answerEn: z.string().min(1),
  answerAr: z.string().min(1),
  answerI18n: i18nField(),
});

export type CommonQuestionFormInput = z.infer<typeof commonQuestionFormSchema>;
