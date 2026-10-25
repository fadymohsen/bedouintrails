"use client";

import { useMemo, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/lib/i18n/navigation";
import SafeImage from "@/components/safe-image/safe-image";
import type { Locale } from "@/lib/i18n/config";
import { isRtl } from "@/lib/i18n/config";
import styles from "./blogs.module.scss";

const CATEGORY_ORDER = [
  "destination-guides",
  "planning-and-tips",
  "desert-activities",
  "photography-and-stargazing",
  "itineraries-and-experiences",
  "culture-and-nature",
];

export type BlogCardData = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string | null;
};

export default function BlogsFilterGrid({
  blogs,
  categories,
}: {
  blogs: BlogCardData[];
  categories: string[];
}) {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filtered = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch =
        searchQuery === "" || blog.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "" || blog.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [blogs, searchQuery, selectedCategory]);

  const grouped = useMemo(() => {
    if (selectedCategory) return [{ category: selectedCategory, blogs: filtered }];

    const groups: { category: string; blogs: BlogCardData[] }[] = [];
    const sorted = CATEGORY_ORDER.filter((c) => categories.includes(c));

    for (const cat of sorted) {
      const catBlogs = filtered.filter((b) => b.category === cat);
      if (catBlogs.length > 0) groups.push({ category: cat, blogs: catBlogs });
    }

    const uncategorized = filtered.filter(
      (b) => !b.category || !sorted.includes(b.category)
    );
    if (uncategorized.length > 0) groups.push({ category: "other", blogs: uncategorized });

    return groups;
  }, [filtered, categories, selectedCategory]);

  return (
    <>
      <div className={styles["filter-bar"]}>
        <div className={styles["filter-pill"]}>
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">{t("all_categories")}</option>
            {CATEGORY_ORDER.filter((c) => categories.includes(c)).map((cat) => (
              <option key={cat} value={cat}>
                {t(`blog_category_${cat.replace(/-/g, "_")}`)}
              </option>
            ))}
          </select>
        </div>
        <div className={`${styles["filter-pill"]} ${styles["search-pill"]}`}>
          <IoSearchOutline className={styles["search-icon"]} />
          <input
            type="text"
            placeholder={t("search_blogs")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div dir={isRtl(locale) ? "rtl" : "ltr"}>
        {grouped.length > 0 ? (
          grouped.map((group) => (
            <section key={group.category} className={styles["category-section"]}>
              <h2 className={styles["category-title"]}>
                {group.category === "other"
                  ? t("other_blogs")
                  : t(`blog_category_${group.category.replace(/-/g, "_")}`)}
              </h2>
              <div className={styles["blogs-grid"]}>
                {group.blogs.map((blog) => (
                  <Link href={`/blogs/${blog.slug}`} key={blog.id} className={styles["blog-card"]}>
                    <div className={styles["card-image-wrapper"]}>
                      <SafeImage
                        src={blog.image}
                        alt={blog.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className={styles["card-content"]}>
                      <span className={styles.eyebrow}>
                        {blog.category
                          ? t(`blog_category_${blog.category.replace(/-/g, "_")}`)
                          : t("blogs")}
                      </span>
                      <h3>{blog.title}</h3>
                      <p>{blog.excerpt}</p>
                      <span className={styles["read-more-link"]}>
                        {t("read_story") || "Read Story"} →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))
        ) : (
          <div className={styles["blogs-grid-container"]}>
            <div className={styles["no-results"]}>
              <h2>{t("no_results_found")}</h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
