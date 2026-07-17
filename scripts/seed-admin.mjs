import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const email = process.argv[2];
const password = process.argv[3];
const firstName = process.argv[4] ?? "Kirolous";
const lastName = process.argv[5] ?? "Maged";

if (!email || !password) {
  console.error("Usage: node scripts/seed-admin.mjs <email> <password> [firstName] [lastName]");
  process.exit(1);
}

const existing = await prisma.admin.findUnique({ where: { email } });
if (existing) {
  console.log(`Admin already exists: ${email} (id ${existing.id})`);
  process.exit(0);
}

const admin = await prisma.admin.create({
  data: {
    firstName,
    lastName,
    email,
    password: await bcrypt.hash(password, 10),
    role: "admin",
    status: true,
    isVerify: true,
    permissions: {},
  },
});

console.log(`Created admin #${admin.id}: ${admin.email}`);
await prisma.$disconnect();
