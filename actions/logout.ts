"use server";

import { signOut } from "@/auth";

export const logout = async () => {
  // Aksi ini akan menghapus sesi dan otomatis mengalihkan ke login.
  await signOut({ redirectTo: "/login" });
};
