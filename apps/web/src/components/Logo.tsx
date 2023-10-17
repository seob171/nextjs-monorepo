"use client";

import { HTMLAttributes } from "react";
import Link from "next/link";

interface LogoProps extends HTMLAttributes<HTMLElement> {}

const Logo = ({}: LogoProps) => {
  return (
    <Link href={"/ko-KR"}>
      <div className={"font-poppins text-4xl font-medium"}>BADA</div>
    </Link>
  );
};

export default Logo;
