"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./admin.module.scss";

const NAV_ITEMS = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/trips", label: "Trips" },
  { href: "/admin/sliders", label: "Sliders" },
  { href: "/admin/articles", label: "Articles" },
  { href: "/admin/about-us", label: "About Us" },
  { href: "/admin/faq", label: "Common Questions" },
  { href: "/admin/blogs", label: "Blogs" },
  { href: "/admin/orders", label: "Orders" },
  { href: "/admin/users", label: "Users" },
  { href: "/admin/employees", label: "Employees" },
];

export default function AdminSidebar({ onLogout }: { onLogout: () => void }) {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarLogo}>
        <img src="/img/logo.png" alt="Bedouin Trails" />
        Admin
      </div>

      {NAV_ITEMS.map((item) => {
        const isActive = item.href === "/admin" ? pathname === "/admin" : pathname.startsWith(item.href);
        return (
          <Link key={item.href} href={item.href} className={`${styles.navLink} ${isActive ? styles.active : ""}`}>
            {item.label}
          </Link>
        );
      })}

      <div className={styles.logoutForm}>
        <button className={styles.logoutBtn} onClick={onLogout}>
          Log out
        </button>
      </div>
    </aside>
  );
}
