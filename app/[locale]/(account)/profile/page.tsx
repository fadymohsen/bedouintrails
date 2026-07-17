import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getUserSession } from "@/lib/auth/session";
import { getUserProfile } from "@/lib/services/profile";
import ProfileClient from "@/components/profile/profile-client";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  return {
    title: t("meta_title_profile"),
    description: t("meta_desc_profile"),
    robots: { index: false, follow: false },
  };
}

export default async function ProfilePage() {
  const session = await getUserSession();
  const user = await getUserProfile(session!.uid);

  return (
    <ProfileClient
      user={{
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        image: user.image,
      }}
    />
  );
}
