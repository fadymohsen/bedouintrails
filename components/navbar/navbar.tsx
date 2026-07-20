import { getUserSession } from "@/lib/auth/session";
import { prisma } from "@/lib/prisma";
import NavbarClient from "./navbar-client";

export default async function Navbar() {
  const session = await getUserSession();
  let user: { firstName: string; image: string | null } | null = null;

  if (session) {
    try {
      const record = await prisma.user.findUnique({
        where: { id: session.uid },
        select: { firstName: true, image: true },
      });
      if (record) user = record;
    } catch {
      // A transient DB hiccup here shouldn't take down the whole page —
      // fall back to a logged-out navbar instead of crashing.
    }
  }

  return <NavbarClient user={user} />;
}
