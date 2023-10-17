import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { cn } from "@/utils/cn";

const inter = Inter({
  variable: "--inter-font",
  subsets: ["latin"],
});
const poppins = Poppins({
  variable: "--poppins-font",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, poppins.variable)}>{children}</body>
    </html>
  );
}
