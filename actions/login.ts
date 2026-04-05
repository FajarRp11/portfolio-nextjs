"use server";

import * as z from "zod";
import { AuthError } from "next-auth";

import { signIn } from "@/auth";
import { LoginSchema } from "@/lib/validations/auth";

export const login = async (prevState: any, formData: FormData) => {
  const values = Object.fromEntries(formData.entries());
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Formulir tidak valid!" };
  }

  const { email, password } = validatedFields.data;

  try {
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    // In some edge cases with redirect: false, signIn might return an error string or object
    if (response && typeof response === "object" && "error" in response) {
      return { error: "Email atau password salah!" };
    }

    return { success: "Berhasil login!" };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Email atau password salah!" };
        default:
          return { error: "Terjadi kesalahan saat login." };
      }
    }

    // Comprehensive fallback for different error shapes in NextAuth v5/Auth.js
    const errorType = (error as any)?.type || (error as any)?.name || (error as any)?.cause?.name;
    if (errorType === "CredentialsSignin" || errorType === "CallbackRouteError") {
      return { error: "Email atau password salah!" };
    }

    throw error;
  }
};
