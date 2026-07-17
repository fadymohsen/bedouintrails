import "server-only";
import { prisma } from "@/lib/prisma";
import { verifyPassword, hashPassword } from "@/lib/auth/password";
import { uploadImage, deleteImage } from "@/lib/blob";
import { AuthError, NotFoundError } from "./errors";

export async function getUserProfile(userId: number) {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw new NotFoundError("Account not found.");
  return user;
}

export type UpdateProfileInput = {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
};

export async function updateUserProfile(userId: number, input: UpdateProfileInput, imageFile: File | null) {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw new NotFoundError("Account not found.");

  let image = user.image;
  if (imageFile) {
    image = await uploadImage(imageFile, "uploads/user");
    await deleteImage(user.image);
  }

  return prisma.user.update({
    where: { id: userId },
    data: {
      firstName: input.firstName ?? undefined,
      lastName: input.lastName ?? undefined,
      phone: input.phone ?? undefined,
      email: input.email ?? undefined,
      image,
    },
  });
}

export async function changeUserPassword(userId: number, currentPassword: string, newPassword: string) {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw new NotFoundError("Account not found.");

  const valid = await verifyPassword(currentPassword, user.password);
  if (!valid) throw new AuthError("Current password is incorrect.");

  await prisma.user.update({ where: { id: userId }, data: { password: await hashPassword(newPassword) } });
}
