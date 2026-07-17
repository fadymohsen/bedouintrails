"use client";

import { useRouter } from "next/navigation";
import AdminSidebar from "./admin-sidebar";
import styles from "./admin.module.scss";

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth/admin/logout", { method: "POST", credentials: "same-origin" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <div className={styles.shell}>
      <AdminSidebar onLogout={handleLogout} />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
