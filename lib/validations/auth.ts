import * as z from "zod";

export const RegisterSchema = z
  .object({
    name: z.string().min(1, {
      message: "Nama wajib diisi",
    }),
    email: z.email({
      message: "Format email tidak valid",
    }),
    password: z.string().min(6, {
      message: "Password minimal 6 karakter",
    }),
    confirmPassword: z.string().min(6, {
      message: "Konfirmasi password minimal 6 karakter",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Kata sandi tidak cocok",
    path: ["confirmPassword"],
  });

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Format email tidak valid",
  }),
  password: z.string().min(1, {
    message: "Password wajib diisi",
  }),
});
