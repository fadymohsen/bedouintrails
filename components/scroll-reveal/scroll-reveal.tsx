"use client";

import { useEffect, useRef } from "react";
import styles from "./scroll-reveal.module.scss";

// Shared observer instance — all ScrollReveal elements reuse this single observer
let sharedObserver: IntersectionObserver | null = null;
const observedElements = new Map<Element, () => void>();

function getSharedObserver() {
  if (sharedObserver) return sharedObserver;
  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const callback = observedElements.get(entry.target);
          callback?.();
          sharedObserver!.unobserve(entry.target);
          observedElements.delete(entry.target);
        }
      }
    },
    { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
  );
  return sharedObserver;
}

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
};

export default function ScrollReveal({ children, className = "", delay = 0, as = "div" }: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = getSharedObserver();
    observedElements.set(node, () => node.classList.add(styles.inView));
    observer.observe(node);

    return () => {
      observer.unobserve(node);
      observedElements.delete(node);
    };
  }, []);

  const Tag = as as any;

  return (
    <Tag ref={ref} className={`${styles.reveal} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}
