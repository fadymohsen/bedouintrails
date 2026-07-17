import { getUserSession } from "@/lib/auth/session";
import { prisma } from "@/lib/prisma";
import NavbarClient from "./navbar-client";

export default async function Navbar() {
  const session = await getUserSession();
  let user: { firstName: string; image: string | null } | null = null;

  if (session) {
    const record = await prisma.user.findUnique({
      where: { id: session.uid },
      select: { firstName: true, image: true },
    });
    if (record) user = record;
  }

  return <NavbarClient user={user} />;
}
