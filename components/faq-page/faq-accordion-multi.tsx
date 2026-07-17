"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import type { FaqItem } from "@/components/faq-accordion/faq-accordion";
import styles from "./faq-page.module.scss";

export default function FaqAccordionMulti({ faqs }: { faqs: FaqItem[] }) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  function toggle(index: number) {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
  }

  if (faqs.length === 0) {
    return (
      <div className={styles["no-FAQ"]}>
        <p>No FAQ</p>
      </div>
    );
  }

  return (
    <>
      {faqs.map((item, index) => (
        <div key={item.id} className={`${styles["faq-item"]} ${openItems.includes(index) ? styles.active : ""}`}>
          <button
            className={styles["faq-question"]}
            onClick={() => toggle(index)}
            aria-expanded={openItems.includes(index)}
          >
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
