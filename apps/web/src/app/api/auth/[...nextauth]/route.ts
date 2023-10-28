import NextAuth, { NextAuthOptions } from "next-auth";
// import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  // adapter: PrismaAdapter(prisma),
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_CLIENT_ID as string,
    //   clientSecret: process.env.GITHUB_SECRET_ID as string,
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  cookies: {},
  secret: process.env.NEXTAUTH_SECRET as string,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
