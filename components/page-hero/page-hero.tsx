import styles from "./page-hero.module.scss";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  image: string;
  eyebrow?: string;
};

export default function PageHero({ title, subtitle, image, eyebrow }: PageHeroProps) {
  return (
    <div className={styles.pageHero} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
}
