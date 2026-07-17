import "server-only";
import { prisma } from "@/lib/prisma";
import { NotFoundError } from "./errors";
import type { CommonQuestionFormInput } from "@/lib/validators/commonQuestion";

export async function listCommonQuestions() {
  return prisma.commonQuestion.findMany({ orderBy: { createdAt: "desc" } });
}

export async function getCommonQuestion(id: number) {
  const question = await prisma.commonQuestion.findUnique({ where: { id } });
  if (!question) throw new NotFoundError("Question not found.");
  return question;
}

export async function createCommonQuestion(input: CommonQuestionFormInput) {
  return prisma.commonQuestion.create({ data: input });
}

export async function updateCommonQuestion(id: number, input: CommonQuestionFormInput) {
  const existing = await prisma.commonQuestion.findUnique({ where: { id } });
  if (!existing) throw new NotFoundError("Question not found.");
  return prisma.commonQuestion.update({ where: { id }, data: input });
}

export async function deleteCommonQuestion(id: number) {
  const question = await prisma.commonQuestion.findUnique({ where: { id } });
  if (!question) throw new NotFoundError("Question not found.");
  await prisma.commonQuestion.delete({ where: { id } });
}
