"use client";

import { useState, useTransition } from "react";
import { addBlogFaqAction, updateBlogFaqAction, deleteBlogFaqAction } from "@/app/admin/(dashboard)/blogs/actions";
import styles from "./admin.module.scss";

export type BlogFaqItem = { id: number; questionEn: string; questionAr: string; answerEn: string; answerAr: string };

function FaqForm({ blogId, faq, onDone }: { blogId: number; faq?: BlogFaqItem; onDone: () => void }) {
  const [pending, startTransition] = useTransition();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    startTransition(async () => {
      if (faq) {
        await updateBlogFaqAction(blogId, faq.id, form);
      } else {
        await addBlogFaqAction(blogId, form);
      }
      onDone();
    });
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formRow}>
        <div className={styles.field}>
          <label>Question (English)</label>
          <input name="questionEn" required defaultValue={faq?.questionEn} />
        </div>
        <div className={styles.field}>
          <label>Question (Arabic)</label>
          <input name="questionAr" required defaultValue={faq?.questionAr} dir="rtl" />
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.field}>
          <label>Answer (English)</label>
          <textarea name="answerEn" required rows={3} defaultValue={faq?.answerEn} />
        </div>
        <div className={styles.field}>
          <label>Answer (Arabic)</label>
          <textarea name="answerAr" required rows={3} defaultValue={faq?.answerAr} dir="rtl" />
        </div>
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <button type="submit" className={styles.primaryBtn} disabled={pending}>
          {pending ? "Saving..." : faq ? "Save" : "Add FAQ"}
        </button>
        <button type="button" className={styles.secondaryBtn} onClick={onDone}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default function BlogFaqsManager({ blogId, faqs }: { blogId: number; faqs: BlogFaqItem[] }) {
  const [pending, startTransition] = useTransition();
  const [adding, setAdding] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  return (
    <div className={styles.card}>
      {faqs.map((faq) =>
        editingId === faq.id ? (
          <FaqForm key={faq.id} blogId={blogId} faq={faq} onDone={() => setEditingId(null)} />
        ) : (
          <div key={faq.id} style={{ padding: "10px 0", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", gap: 12 }}>
            <div>
              <strong>{faq.questionEn}</strong>
              <p style={{ margin: 0, fontSize: "0.85rem", color: "#777" }}>{faq.answerEn}</p>
            </div>
            <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
              <button className={styles.secondaryBtn} onClick={() => setEditingId(faq.id)}>
                Edit
              </button>
              <button
                className={styles.dangerBtn}
                onClick={() => startTransition(() => deleteBlogFaqAction(blogId, faq.id))}
                disabled={pending}
              >
                Delete
              </button>
            </div>
          </div>
        )
      )}

      {adding ? (
        <div style={{ marginTop: 12 }}>
          <FaqForm blogId={blogId} onDone={() => setAdding(false)} />
        </div>
      ) : (
        <button className={styles.secondaryBtn} style={{ marginTop: 12 }} onClick={() => setAdding(true)}>
          + Add FAQ
        </button>
      )}
    </div>
  );
}
