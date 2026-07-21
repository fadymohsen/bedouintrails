"use client";

import { useActionState } from "react";
import Link from "next/link";
import { importBlogAction } from "@/app/admin/(dashboard)/blogs/import-actions";
import styles from "./admin.module.scss";

export default function BlogImportForm() {
  const [state, formAction, pending] = useActionState(importBlogAction, undefined);

  return (
    <form action={formAction} className={styles.form}>
      {state && "error" in state && <div className={styles.errorBanner}>{state.error}</div>}

      {state && "success" in state && (
        <div className={styles.card}>
          <p>
            {state.created ? "Post created" : "Post updated"} as a draft.{" "}
            <Link href={`/admin/blogs/${state.blogId}`}>Review it →</Link>
          </p>
          {state.warnings.length > 0 && (
            <ul>
              {state.warnings.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      <div className={styles.field}>
        <label>Markdown files</label>
        <input type="file" name="files" accept=".md,text/markdown" multiple required />
        <small>
          Upload one .md file per language, or a single file that bundles every language together (one
          frontmatter block with title_en/title_ar/etc, and a &quot;# Title&quot; body section per language
          separated by a line containing just &quot;---&quot;). Either way, all files/languages must share the
          same URL slug. English + Arabic are required the first time a post is created; uploading just one
          more language later adds it to the existing post instead of making a duplicate.
        </small>
      </div>

      <button type="submit" className={styles.primaryBtn} disabled={pending}>
        {pending ? "Importing..." : "Import"}
      </button>
    </form>
  );
}
