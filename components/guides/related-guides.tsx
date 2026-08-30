import { Link } from "@/lib/i18n/navigation";
import { getTranslations } from "next-intl/server";

interface GuideLink {
  href: string;
  labelKey: string;
}

interface RelatedGuidesProps {
  guides: GuideLink[];
}

export default async function RelatedGuides({ guides }: RelatedGuidesProps) {
  const t = await getTranslations();
  return (
    <>
      <h2>{t("related_guides_heading")}</h2>
      <ul>
        {guides.map((g) => (
          <li key={g.href}>
            <Link href={g.href}>{t(g.labelKey)}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
