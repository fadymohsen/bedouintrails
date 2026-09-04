import type { Metadata } from "next";
import { requireAdmin } from "@/lib/auth/session";
import AdminShell from "@/components/admin/admin-shell";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bedouintrails.com";

export const metadata: Metadata = {
  title: "Admin — Bedouin Trails",
  description: "Bedouin Trails admin dashboard",
  openGraph: {
    title: "Bedouin Trails — Admin",
    description: "Explore. Connect. Experience. — Bedouin Trails Dashboard",
    images: [`${SITE_URL}/img/og-admin.jpg`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bedouin Trails — Admin",
    description: "Explore. Connect. Experience. — Bedouin Trails Dashboard",
    images: [`${SITE_URL}/img/og-admin.jpg`],
  },
};

export default async function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  await requireAdmin();

  return <AdminShell>{children}</AdminShell>;
}
