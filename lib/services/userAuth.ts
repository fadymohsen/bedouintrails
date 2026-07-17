import "server-only";
import { prisma } from "@/lib/prisma";
import { hashPassword, verifyPassword, generateOtp } from "@/lib/auth/password";
import { setUserSession, signResetToken, verifyResetToken } from "@/lib/auth/session";
import { sendOtpEmail } from "@/lib/mail";
import { AuthError } from "./errors";

export type RegisterUserInput = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
};

export async function registerUser(input: RegisterUserInput) {
  const existing = await prisma.user.findUnique({ where: { email: input.email } });

  if (existing) {
    if (existing.isVerify) {
      throw new AuthError("An account with this email already exists.");
    }
    const otp = generateOtp();
    const user = await prisma.user.update({
      where: { id: existing.id },
      data: { otp },
    });
    await sendOtpEmail(user.email, otp);
    return user;
  }

  const otp = generateOtp();
  const user = await prisma.user.create({
    data: {
      firstName: input.firstName,
      lastName: input.lastName,
      email: input.email,
      phone: input.phone,
      password: await hashPassword(input.password),
      otp,
      isVerify: false,
    },
  });
  await sendOtpEmail(user.email, otp);
  return user;
}

export async function loginUser(email: string, password: string) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new AuthError("Invalid email or password.");

  const valid = await verifyPassword(password, user.password);
  if (!valid) throw new AuthError("Invalid email or password.");

  if (!user.isVerify) throw new AuthError("Please verify your account before logging in.");

  await setUserSession(user.id);
  return user;
}

export async function verifyUserOtp(email: string, otp: number) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new AuthError("Account not found.");
  if (user.otp !== otp) throw new AuthError("Invalid verification code.");

  const updated = await prisma.user.update({
    where: { id: user.id },
    data: { isVerify: true, otp: null },
  });
  return updated;
}

export async function forgotPasswordUser(email: string) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new AuthError("Account not found.");

  const otp = generateOtp();
  await prisma.user.update({ where: { id: user.id }, data: { otp } });
  await sendOtpEmail(user.email, otp);
}

export async function verifyResetOtp(email: string, otp: number): Promise<string> {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new AuthError("Account not found.");
  if (user.otp !== otp) throw new AuthError("Invalid verification code.");

  await prisma.user.update({ where: { id: user.id }, data: { otp: null } });
  return signResetToken(user.id, "user");
}

export async function resendUserCode(email: string) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new AuthError("Account not found.");

  const otp = generateOtp();
  await prisma.user.update({ where: { id: user.id }, data: { otp } });
  await sendOtpEmail(user.email, otp);
}

export async function resetUserPassword(resetToken: string, newPassword: string) {
  const payload = await verifyResetToken(resetToken, "user");
  if (!payload) throw new AuthError("Reset link expired or invalid. Please request a new code.");

  await prisma.user.update({
    where: { id: payload.uid },
    data: { password: await hashPassword(newPassword) },
  });
}
