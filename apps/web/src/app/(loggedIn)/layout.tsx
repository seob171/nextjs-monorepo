import React, { PropsWithChildren } from "react";
import { redirect } from "next/navigation";
// import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const Layout = async ({ children }: PropsWithChildren) => {
  // const { data: session } = useSession(); //세션 정보를 가져옴

  const session = await getServerSession(authOptions);
  // session = null || { user: { name, email, image } }

  console.log("session", session);

  if (!session) redirect("/");

  return <div>{children}</div>;
};

export default Layout;
