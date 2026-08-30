import Image from "next/image";
import styles from "./page-hero.module.scss";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  image: string;
  eyebrow?: string;
  backgroundPosition?: string;
};

export default function PageHero({ title, subtitle, image, eyebrow, backgroundPosition }: PageHeroProps) {
  return (
    <div className={styles.pageHero}>
      <Image
        src={image}
        alt={title}
        fill
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: backgroundPosition ?? "center" }}
      />
      <div className={styles.overlay} />
      <div className={styles.content}>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
}
