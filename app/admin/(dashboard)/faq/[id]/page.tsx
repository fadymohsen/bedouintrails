import { notFound } from "next/navigation";
import { getCommonQuestion } from "@/lib/services/adminCommonQuestions";
import { NotFoundError } from "@/lib/services/errors";
import { updateCommonQuestionAction, deleteCommonQuestionAction } from "../actions";
import CommonQuestionForm from "@/components/admin/common-question-form";
import styles from "@/components/admin/admin.module.scss";

export default async function EditCommonQuestionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const questionId = Number(id);

  let question;
  try {
    question = await getCommonQuestion(questionId);
  } catch (err) {
    if (err instanceof NotFoundError) notFound();
    throw err;
  }

  const boundUpdate = updateCommonQuestionAction.bind(null, questionId);
  const boundDelete = deleteCommonQuestionAction.bind(null, questionId);

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>{question.questionEn}</h1>
        <form action={boundDelete}>
          <button type="submit" className={styles.dangerBtn}>
            Delete Question
          </button>
        </form>
      </div>
      <div className={styles.card}>
        <CommonQuestionForm
          initial={{
            questionEn: question.questionEn,
            questionAr: question.questionAr ?? "",
            questionI18n: question.questionI18n ?? undefined,
            answerEn: question.answerEn,
            answerAr: question.answerAr ?? "",
            answerI18n: question.answerI18n ?? undefined,
          }}
          action={boundUpdate}
          submitLabel="Save Changes"
        />
      </div>
    </div>
  );
}
