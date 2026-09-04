import Image from "next/image";
import { prisma } from "@/lib/prisma";
import styles from "./guides.module.scss";

interface GuideHeroProps {
  src: string;
  alt: string;
  h1: string;
  objectPosition?: string;
  /** When provided, overrides src/objectPosition with DB values */
  path?: string;
}

export default async function GuideHero({ src, alt, h1, objectPosition = "center", path }: GuideHeroProps) {
  let heroSrc = src;
  let heroPos = objectPosition;

  if (path) {
    const guide = await prisma.travelGuide.findUnique({ where: { path } });
    if (guide) {
      if (guide.heroImage) heroSrc = guide.heroImage;
      if (guide.heroPosition) heroPos = guide.heroPosition;
    }
  }

  return (
    <div className={styles["guide-hero"]}>
      <Image
        src={heroSrc}
        alt={alt}
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: heroPos }}
      />
      <h1>{h1}</h1>
    </div>
  );
}
