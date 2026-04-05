"use client";

import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { RegisterSchema } from "@/lib/validations/auth";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitButton } from "@/components/auth/submit-button";
import { register } from "@/actions/register";

export const RegisterForm = () => {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(register, undefined);


  useEffect(() => {
    if (state?.error) {
      toast.error(state.error);
    }

    if (state?.success) {
      toast.success(state.success);
      router.push("/login");
    }
  }, [state, router]);

  return (
    <form action={formAction} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Nama</Label>
        <Input
          name="name"
          id="name"
          placeholder="John Doe"
          disabled={isPending}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          name="email"
          id="email"
          type="email"
          placeholder="john.doe@example.com"
          disabled={isPending}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          name="password"
          id="password"
          type="password"
          placeholder="******"
          disabled={isPending}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Konfirmasi Password</Label>
        <Input
          name="confirmPassword"
          id="confirmPassword"
          type="password"
          placeholder="******"
          disabled={isPending}
          required
        />
      </div>

      <SubmitButton defaultText="Daftar" pendingText="Mendaftarkan..." />
    </form>
  );
};
