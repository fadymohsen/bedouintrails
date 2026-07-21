"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/auth/session";
import { parseBlogMarkdownFile, MarkdownImportError } from "@/lib/blog-import/parse-markdown";
import { importBlogFromFiles } from "@/lib/services/blogImport";

type ActionState =
  | { error: string }
  | { success: true; blogId: number; created: boolean; warnings: string[] }
  | undefined;

export async function importBlogAction(_prevState: ActionState, form: FormData): Promise<ActionState> {
  await requireAdmin("manage_website");

  const files = form.getAll("files").filter((f): f is File => f instanceof File && f.size > 0);
  if (files.length === 0) return { error: "Choose at least one .md file." };

  let parsed;
  try {
    const parsedPerFile = await Promise.all(
      files.map(async (file) => parseBlogMarkdownFile(await file.text(), file.name))
    );
    parsed = parsedPerFile.flat();
  } catch (err) {
    return { error: err instanceof MarkdownImportError ? err.message : "Couldn't parse the uploaded files." };
  }

  try {
    const result = await importBlogFromFiles(parsed);
    revalidatePath("/admin/blogs");
    revalidatePath(`/admin/blogs/${result.blogId}`);
    return { success: true, ...result };
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Import failed." };
  }
}
