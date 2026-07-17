import { z } from "zod";

export const commonQuestionFormSchema = z.object({
  questionEn: z.string().min(1),
  questionAr: z.string().optional(),
  answerEn: z.string().min(1),
  answerAr: z.string().optional(),
});

export type CommonQuestionFormInput = z.infer<typeof commonQuestionFormSchema>;
