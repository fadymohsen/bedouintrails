import Link from "next/link";
import { listCommonQuestions } from "@/lib/services/adminCommonQuestions";
import styles from "@/components/admin/admin.module.scss";

export default async function AdminFaqPage() {
  const questions = await listCommonQuestions();

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Common Questions</h1>
        <Link href="/admin/faq/new" className={styles.primaryBtn}>
          + New Question
        </Link>
      </div>

      <div className={styles.card}>
        {questions.length === 0 ? (
          <p className={styles.emptyState}>No common questions yet.</p>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Question</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {questions.map((question) => (
                <tr key={question.id}>
                  <td>{question.questionEn}</td>
                  <td>
                    <Link href={`/admin/faq/${question.id}`} className={styles.linkBtn}>
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
