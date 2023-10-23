"use client";

import { useRouter } from "next/navigation";
import { HTMLAttributes } from "react";

type Props = Pick<HTMLAttributes<HTMLDivElement>, "children" | "className">;
const BackLink = ({ children, className }: Props) => {
  const { back } = useRouter();
  return (
    <div onClick={back} className={className}>
      {children}
    </div>
  );
};

export default BackLink;
