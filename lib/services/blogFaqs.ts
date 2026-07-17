import "server-only";
import { prisma } from "@/lib/prisma";
import { NotFoundError } from "./errors";
import type { z } from "zod";
import type { blogFaqFormSchema } from "@/lib/validators/blog";

type BlogFaqInput = z.infer<typeof blogFaqFormSchema>;

export async function createBlogFaq(blogId: number, input: BlogFaqInput) {
  const last = await prisma.blogFaq.findFirst({ where: { blogId }, orderBy: { sortOrder: "desc" } });
  return prisma.blogFaq.create({ data: { blogId, ...input, sortOrder: (last?.sortOrder ?? 0) + 1 } });
}

export async function updateBlogFaq(faqId: number, input: BlogFaqInput) {
  const faq = await prisma.blogFaq.findUnique({ where: { id: faqId } });
  if (!faq) throw new NotFoundError("FAQ not found.");
  return prisma.blogFaq.update({ where: { id: faqId }, data: input });
}

export async function deleteBlogFaq(faqId: number) {
  const faq = await prisma.blogFaq.findUnique({ where: { id: faqId } });
  if (!faq) throw new NotFoundError("FAQ not found.");
  await prisma.blogFaq.delete({ where: { id: faqId } });
}
