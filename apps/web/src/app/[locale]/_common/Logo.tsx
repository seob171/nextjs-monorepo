"use client";

import Link, { LinkProps } from "next/link";

interface LogoProps
  extends Omit<LinkProps, "href">,
    Partial<Pick<LinkProps, "href">> {}

export const LOGO_TEXT = "999°";
export const LogoComponent = () => (
  <div className={"font-bold text-4xl text-zinc-900"}>{LOGO_TEXT}</div>
);

const Logo = ({ href, ...restProps }: LogoProps) => {
  return (
    <Link href={href ?? "/"} {...restProps}>
      <LogoComponent />
    </Link>
  );
};

export default Logo;
