"use client";

import React, { PropsWithChildren } from "react";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

const Layout = ({ children }: PropsWithChildren) => {
  const { data: session } = useSession(); //세션 정보를 가져옴

  console.log("session", session);

  if (!session) redirect("/");

  return <div>{children}</div>;
};

export default Layout;
