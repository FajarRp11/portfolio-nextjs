"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

interface SubmitButtonProps {
  defaultText: string;
  pendingText: string;
  className?: string;
}

export const SubmitButton = ({
  defaultText,
  pendingText,
  className,
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className={className ?? "w-full"}
    >
      {pending ? pendingText : defaultText}
    </Button>
  );
};
