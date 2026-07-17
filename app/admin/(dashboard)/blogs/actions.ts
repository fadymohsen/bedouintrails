"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth/session";
import { blogFormSchema, blogFaqFormSchema } from "@/lib/validators/blog";
import { createBlog, updateBlog, deleteBlog } from "@/lib/services/adminBlogs";
import { createBlogFaq, updateBlogFaq, deleteBlogFaq } from "@/lib/services/blogFaqs";

type ActionState = { success?: boolean; error?: string } | undefined;

function formToBlogInput(form: FormData) {
  return blogFormSchema.parse({
    titleEn: form.get("titleEn"),
    titleAr: form.get("titleAr"),
    excerptEn: form.get("excerptEn") || undefined,
    excerptAr: form.get("excerptAr") || undefined,
    contentEn: form.get("contentEn"),
    contentAr: form.get("contentAr"),
    author: form.get("author") || undefined,
    category: form.get("category") || undefined,
    metaTitleEn: form.get("metaTitleEn") || undefined,
    metaTitleAr: form.get("metaTitleAr") || undefined,
    metaDescriptionEn: form.get("metaDescriptionEn") || undefined,
    metaDescriptionAr: form.get("metaDescriptionAr") || undefined,
    isPublished: form.get("isPublished") === "on",
  });
}

export async function createBlogAction(_prevState: unknown, form: FormData): Promise<ActionState> {
  await requireAdmin("manage_website");
  const input = formToBlogInput(form);
  const imageFile = form.get("image");
  const blog = await createBlog(input, imageFile instanceof File && imageFile.size > 0 ? imageFile : null);
  revalidatePath("/admin/blogs");
  redirect(`/admin/blogs/${blog.id}`);
}

export async function updateBlogAction(blogId: number, _prevState: unknown, form: FormData): Promise<ActionState> {
  await requireAdmin("manage_website");
  const input = formToBlogInput(form);
  const imageFile = form.get("image");
  await updateBlog(blogId, input, imageFile instanceof File && imageFile.size > 0 ? imageFile : null);
  revalidatePath("/admin/blogs");
  revalidatePath(`/admin/blogs/${blogId}`);
  return { success: true };
}

export async function deleteBlogAction(blogId: number) {
  await requireAdmin("manage_website");
  await deleteBlog(blogId);
  revalidatePath("/admin/blogs");
  redirect("/admin/blogs");
}

export async function addBlogFaqAction(blogId: number, form: FormData) {
  await requireAdmin("manage_website");
  const input = blogFaqFormSchema.parse({
    questionEn: form.get("questionEn"),
    questionAr: form.get("questionAr"),
    answerEn: form.get("answerEn"),
    answerAr: form.get("answerAr"),
  });
  await createBlogFaq(blogId, input);
  revalidatePath(`/admin/blogs/${blogId}`);
}

export async function updateBlogFaqAction(blogId: number, faqId: number, form: FormData) {
  await requireAdmin("manage_website");
  const input = blogFaqFormSchema.parse({
    questionEn: form.get("questionEn"),
    questionAr: form.get("questionAr"),
    answerEn: form.get("answerEn"),
    answerAr: form.get("answerAr"),
  });
  await updateBlogFaq(faqId, input);
  revalidatePath(`/admin/blogs/${blogId}`);
}

export async function deleteBlogFaqAction(blogId: number, faqId: number) {
  await requireAdmin("manage_website");
  await deleteBlogFaq(faqId);
  revalidatePath(`/admin/blogs/${blogId}`);
}
