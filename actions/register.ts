"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schemas";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  console.log("Validated Fields:", validatedFields);

  if (!validatedFields.success)
    return { error: "Invalid fields! Deder popravi!" };

  return { success: "Logged in successfully! Kralju!!!" };
};
