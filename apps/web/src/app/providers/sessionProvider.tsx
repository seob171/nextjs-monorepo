"use client";

import { SessionProvider } from "next-auth/react";
import { PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
  return <SessionProvider>{children}</SessionProvider>;
}

// client page
//
// const {data: session, status} = useSession();
// console.log("status", status);
// console.log("session", session);
