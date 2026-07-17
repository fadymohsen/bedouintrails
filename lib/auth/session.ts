import "server-only";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { signJwt, verifyJwt } from "./jwt";
import { isAdminPermission, type AdminPermission } from "./permissions";

const USER_COOKIE = "session";
const ADMIN_COOKIE = "admin_session";

const USER_SESSION_TTL = "7d";
const ADMIN_SESSION_TTL = "7d";
const RESET_TOKEN_TTL = "10m";

export type UserSessionPayload = { uid: number; realm: "user" };
export type AdminSessionPayload = {
  uid: number;
  realm: "admin";
  role: "admin" | "employee";
  permissions: string[];
};
export type ResetTokenPayload = {
  uid: number;
  realm: "user" | "admin";
  purpose: "password_reset";
};

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
};

// --- User realm ---

export async function setUserSession(userId: number): Promise<void> {
  const token = await signJwt({ uid: userId, realm: "user" }, USER_SESSION_TTL);
  const jar = await cookies();
  jar.set(USER_COOKIE, token, { ...cookieOptions, maxAge: 60 * 60 * 24 * 7 });
}

export async function getUserSession(): Promise<UserSessionPayload | null> {
  const jar = await cookies();
  const token = jar.get(USER_COOKIE)?.value;
  if (!token) return null;
  const payload = await verifyJwt<UserSessionPayload>(token);
  if (!payload || payload.realm !== "user") return null;
  return payload;
}

export async function clearUserSession(): Promise<void> {
  const jar = await cookies();
  jar.delete(USER_COOKIE);
}

export async function requireUser(): Promise<UserSessionPayload> {
  const session = await getUserSession();
  if (!session) redirect("/auth");
  return session;
}

// --- Admin realm ---

export async function setAdminSession(
  adminId: number,
  role: "admin" | "employee",
  permissions: string[]
): Promise<void> {
  const token = await signJwt(
    { uid: adminId, realm: "admin", role, permissions },
    ADMIN_SESSION_TTL
  );
  const jar = await cookies();
  jar.set(ADMIN_COOKIE, token, { ...cookieOptions, maxAge: 60 * 60 * 24 * 7 });
}

export async function getAdminSession(): Promise<AdminSessionPayload | null> {
  const jar = await cookies();
  const token = jar.get(ADMIN_COOKIE)?.value;
  if (!token) return null;
  const payload = await verifyJwt<AdminSessionPayload>(token);
  if (!payload || payload.realm !== "admin") return null;
  return payload;
}

export async function clearAdminSession(): Promise<void> {
  const jar = await cookies();
  jar.delete(ADMIN_COOKIE);
}

export function hasPermission(
  session: AdminSessionPayload,
  permission?: AdminPermission
): boolean {
  if (session.role === "admin") return true;
  if (!permission) return true;
  if (!isAdminPermission(permission)) return false;
  return session.permissions.includes(permission);
}

export class ForbiddenError extends Error {}

export async function requireAdmin(permission?: AdminPermission): Promise<AdminSessionPayload> {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");
  if (!hasPermission(session, permission)) throw new ForbiddenError("Insufficient permissions");
  return session;
}

// --- Short-lived OTP-verified password reset token ---

export async function signResetToken(
  userId: number,
  realm: "user" | "admin"
): Promise<string> {
  return signJwt({ uid: userId, realm, purpose: "password_reset" }, RESET_TOKEN_TTL);
}

export async function verifyResetToken(
  token: string,
  realm: "user" | "admin"
): Promise<ResetTokenPayload | null> {
  const payload = await verifyJwt<ResetTokenPayload>(token);
  if (!payload || payload.purpose !== "password_reset" || payload.realm !== realm) return null;
  return payload;
}
