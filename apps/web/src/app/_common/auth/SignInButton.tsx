"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import Button, { ButtonProps } from "@/components/atoms/Button";

interface SignInButtonProps extends ButtonProps {
  provider: "google";
}

const SignInButton = ({
  children,
  provider,
  ...restProps
}: SignInButtonProps) => {
  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get("callbackUrl") ?? "/";
  const handleSignIn = async () => {
    await signIn(provider, { callbackUrl, redirect: true });
  };

  return (
    <Button onClick={handleSignIn} {...restProps}>
      {children}
    </Button>
  );
};

export default SignInButton;
