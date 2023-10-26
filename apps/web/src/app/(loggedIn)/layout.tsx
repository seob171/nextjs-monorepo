import React, { PropsWithChildren } from "react";
import { redirect } from "next/navigation";

const Layout = ({ children }: PropsWithChildren) => {
  // 로그인 가드처리
  const user = null; // getUser

  if (!user) redirect("/");

  return <div>{children}</div>;
};

export default Layout;
