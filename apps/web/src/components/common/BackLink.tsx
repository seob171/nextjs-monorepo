"use client";

import { useRouter } from "next/navigation";
import { HTMLAttributes } from "react";
import Link, { LinkProps } from "next/link";

interface Props
  extends Pick<HTMLAttributes<HTMLDivElement>, "children" | "className"> {
  href?: LinkProps["href"];
}
const BackLink = ({ children, className, href }: Props) => {
  const { back } = useRouter();
  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <div onClick={back} className={className}>
      {children}
    </div>
  );
};

export default BackLink;
