"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schemas";

import bcrypt from "bcrypt";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  console.log(RegisterSchema);
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success)
    return { error: "Invalid fields! Deder popravi!" };

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  // Check if user already exists
  const existingUser = await getUserByEmail(email);
  if (existingUser) return { error: "Email already exists!" };

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  // ToDo: Send verification token email

  return { success: "Logged in successfully! Kralju!!!" };
};
