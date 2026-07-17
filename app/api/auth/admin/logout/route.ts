import { clearAdminSession } from "@/lib/auth/session";
import { ok } from "@/lib/api/respond";

export async function POST() {
  await clearAdminSession();
  return ok({ message: "Logged out." });
}
