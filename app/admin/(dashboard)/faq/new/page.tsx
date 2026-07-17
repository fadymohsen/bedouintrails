import CommonQuestionForm from "@/components/admin/common-question-form";
import { createCommonQuestionAction } from "../actions";
import styles from "@/components/admin/admin.module.scss";

export default function NewCommonQuestionPage() {
  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>New Question</h1>
      </div>
      <div className={styles.card}>
        <CommonQuestionForm action={createCommonQuestionAction} submitLabel="Create Question" />
      </div>
    </div>
  );
}
