import { clearUserSession } from "@/lib/auth/session";
import { ok } from "@/lib/api/respond";

export async function POST() {
  await clearUserSession();
  return ok({ message: "Logged out." });
}
