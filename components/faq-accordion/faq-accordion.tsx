"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useTranslations } from "next-intl";
import styles from "@/components/home/home.module.scss";

export type FaqItem = { id: number; question: string; answer: string };

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const t = useTranslations();
  const [openItems, setOpenItems] = useState<number[]>([0]);

  function toggleAccordion(index: number) {
    setOpenItems([index]);
  }

  if (faqs.length === 0) {
    return (
      <div className={styles["no-faqs"]}>
        <p>{t("no_faqs_available")}</p>
      </div>
    );
  }

  return (
    <>
      {faqs.map((item, index) => (
        <div
          key={item.id}
          className={`${styles["faq-item"]} ${openItems.includes(index) ? styles.active : ""}`}
        >
          <button className={styles["faq-question"]} onClick={() => toggleAccordion(index)}>
            <span className={styles["accordion-icon"]}>
              <FaChevronDown />
            </span>
            <span className={styles["question-text"]}>{item.question}</span>
            <span className={styles["question-number"]}>{index + 1}</span>
          </button>
          <div className={styles["faq-answer"]}>
            <div className={styles["answer-content"]}>
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
