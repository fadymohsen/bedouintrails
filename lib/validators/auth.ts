import { z } from "zod";

export const registerSchema = z.object({
  firstName: z.string().regex(/^[؀-ۿa-zA-Z\s]{2,50}$/, "Enter a valid name"),
  lastName: z.string().regex(/^[؀-ۿa-zA-Z\s]{2,50}$/, "Enter a valid name"),
  email: z.string().email(),
  phone: z.string().min(6).max(20),
  password: z
    .string()
    .regex(/^(?=.*[A-Za-z])(?=.*\d).{8,}$/, "Password must be at least 8 characters and include a letter and a number"),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export const otpSchema = z.object({
  email: z.string().email(),
  otp: z.coerce.number().int().min(100000).max(999999),
});

export const forgotPasswordSchema = z.object({
  email: z.string().email(),
});

export const resetPasswordSchema = z.object({
  resetToken: z.string().min(1),
  password: z
    .string()
    .regex(/^(?=.*[A-Za-z])(?=.*\d).{8,}$/, "Password must be at least 8 characters and include a letter and a number"),
});

export const resendCodeSchema = z.object({
  email: z.string().email(),
});
