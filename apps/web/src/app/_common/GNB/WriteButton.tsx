"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "@/components/atoms/Button";

const WriteButton = () => {
  const pathname = usePathname();

  const isWritePage = pathname.startsWith("/new-story");

  if (isWritePage)
    return (
      <Button
        intent={"primary"}
        layout={"filled"}
        className={"py-1 px-2 text-xs"}
        disabled={true}
      >
        Publish
      </Button>
    );

  return (
    <Link href={`/new-story`} className={"flex items-center gap-x-2 group"}>
      <Image
        src={"/icons/ic_edit.svg"}
        alt={"storyboard-icon"}
        width={20}
        height={20}
        className={
          "icon-filter-tertiary800 group-hover:icon-filter-tertiary900"
        }
      />
      <li className={"text-tertiary-800 group-hover:text-tertiary-900"}>
        Write
      </li>
    </Link>
  );
};

export default WriteButton;
