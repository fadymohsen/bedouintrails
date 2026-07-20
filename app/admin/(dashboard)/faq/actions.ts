"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth/session";
import { commonQuestionFormSchema } from "@/lib/validators/commonQuestion";
import {
  createCommonQuestion,
  updateCommonQuestion,
  deleteCommonQuestion,
} from "@/lib/services/adminCommonQuestions";

function formToCommonQuestionInput(form: FormData) {
  return commonQuestionFormSchema.parse({
    questionEn: form.get("questionEn"),
    questionAr: form.get("questionAr"),
    questionI18n: form.get("questionI18n"),
    answerEn: form.get("answerEn"),
    answerAr: form.get("answerAr"),
    answerI18n: form.get("answerI18n"),
  });
}

type ActionState = { success?: boolean; error?: string } | undefined;

export async function createCommonQuestionAction(_prevState: unknown, form: FormData): Promise<ActionState> {
  await requireAdmin("manage_website");
  const input = formToCommonQuestionInput(form);
  const question = await createCommonQuestion(input);
  revalidatePath("/admin/faq");
  redirect(`/admin/faq/${question.id}`);
}

export async function updateCommonQuestionAction(
  questionId: number,
  _prevState: unknown,
  form: FormData
): Promise<ActionState> {
  await requireAdmin("manage_website");
  const input = formToCommonQuestionInput(form);
  await updateCommonQuestion(questionId, input);
  revalidatePath("/admin/faq");
  revalidatePath(`/admin/faq/${questionId}`);
  return { success: true };
}

export async function deleteCommonQuestionAction(questionId: number) {
  await requireAdmin("manage_website");
  await deleteCommonQuestion(questionId);
  revalidatePath("/admin/faq");
  redirect("/admin/faq");
}
