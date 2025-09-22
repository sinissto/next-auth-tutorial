"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import LoginForm from "@/components/auth/login-form";

interface LoginButtonProps {
  children: ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push("/auth/login");
  };

  if (mode === "modal")
    return (
      <Dialog>
        <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
        <DialogContent className={"p-0 w-auto bg-transparent border-none"}>
          <DialogTitle>LOGIN FORM</DialogTitle>
          <LoginForm />
        </DialogContent>
      </Dialog>
    );

  return (
    <span className={"cursor-pointer"} onClick={onClick}>
      {children}
    </span>
  );
};
