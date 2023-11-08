import React, { PropsWithChildren } from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const Layout = async ({ children }: PropsWithChildren) => {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/");

  return <>{children}</>;
};

export default Layout;
