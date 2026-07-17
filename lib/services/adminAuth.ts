import "server-only";
import { prisma } from "@/lib/prisma";
import { hashPassword, verifyPassword, generateOtp } from "@/lib/auth/password";
import { setAdminSession, signResetToken, verifyResetToken } from "@/lib/auth/session";
import { sendOtpEmail } from "@/lib/mail";
import { AuthError } from "./errors";

function permissionsToList(permissions: unknown): string[] {
  if (!permissions || typeof permissions !== "object") return [];
  return Object.entries(permissions as Record<string, boolean>)
    .filter(([, enabled]) => enabled)
    .map(([key]) => key);
}

export async function loginAdmin(email: string, password: string) {
  const admin = await prisma.admin.findUnique({ where: { email } });
  if (!admin) throw new AuthError("Invalid email or password.");

  const valid = await verifyPassword(password, admin.password);
  if (!valid) throw new AuthError("Invalid email or password.");

  if (!admin.status) throw new AuthError("This account has been deactivated.");

  await setAdminSession(admin.id, admin.role, permissionsToList(admin.permissions));
  return admin;
}

export async function verifyAdminOtp(email: string, otp: number) {
  const admin = await prisma.admin.findUnique({ where: { email } });
  if (!admin) throw new AuthError("Account not found.");
  if (admin.otp !== otp) throw new AuthError("Invalid verification code.");

  return prisma.admin.update({
    where: { id: admin.id },
    data: { isVerify: true, otp: null },
  });
}

export async function forgotPasswordAdmin(email: string) {
  const admin = await prisma.admin.findUnique({ where: { email } });
  if (!admin) throw new AuthError("Account not found.");

  const otp = generateOtp();
  await prisma.admin.update({ where: { id: admin.id }, data: { otp } });
  await sendOtpEmail(admin.email, otp);
}

export async function verifyAdminResetOtp(email: string, otp: number): Promise<string> {
  const admin = await prisma.admin.findUnique({ where: { email } });
  if (!admin) throw new AuthError("Account not found.");
  if (admin.otp !== otp) throw new AuthError("Invalid verification code.");

  await prisma.admin.update({ where: { id: admin.id }, data: { otp: null } });
  return signResetToken(admin.id, "admin");
}

export async function resendAdminCode(email: string) {
  const admin = await prisma.admin.findUnique({ where: { email } });
  if (!admin) throw new AuthError("Account not found.");

  const otp = generateOtp();
  await prisma.admin.update({ where: { id: admin.id }, data: { otp } });
  await sendOtpEmail(admin.email, otp);
}

export async function resetAdminPassword(resetToken: string, newPassword: string) {
  const payload = await verifyResetToken(resetToken, "admin");
  if (!payload) throw new AuthError("Reset link expired or invalid. Please request a new code.");

  await prisma.admin.update({
    where: { id: payload.uid },
    data: { password: await hashPassword(newPassword) },
  });
}
