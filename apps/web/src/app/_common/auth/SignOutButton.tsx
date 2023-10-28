"use client";

import { signOut } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { ButtonHTMLAttributes } from "react";

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">;

const SignOutButton = ({ children, ...restProps }: Props) => {
  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get("callbackUrl") ?? "/";
  const handleSignOut = async () => {
    await signOut({ callbackUrl, redirect: true });
  };

  return (
    <button onClick={handleSignOut} {...restProps}>
      {children}
    </button>
  );
};

export default SignOutButton;
