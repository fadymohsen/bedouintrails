import Image from "next/image";
import styles from "./guides.module.scss";

interface GuideHeroProps {
  src: string;
  alt: string;
  h1: string;
  objectPosition?: string;
}

export default function GuideHero({ src, alt, h1, objectPosition = "center" }: GuideHeroProps) {
  return (
    <div className={styles["guide-hero"]}>
      <Image
        src={src}
        alt={alt}
        fill
        priority
        style={{ objectFit: "cover", objectPosition }}
      />
      <h1>{h1}</h1>
    </div>
  );
}
