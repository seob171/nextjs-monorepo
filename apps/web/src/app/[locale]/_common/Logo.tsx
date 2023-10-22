"use client";

import Link, { LinkProps } from "next/link";

interface LogoProps
  extends Omit<LinkProps, "href">,
    Partial<Pick<LinkProps, "href">> {}

const Logo = ({ href, ...restProps }: LogoProps) => {
  return (
    <Link href={href ?? "/"} {...restProps}>
      <div className={"font-megrim text-4xl text-blue-400"}>BADA</div>
    </Link>
  );
};

export default Logo;
