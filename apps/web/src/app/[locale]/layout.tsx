import "../globals.css";
import { notFound } from "next/navigation";
import { PropsWithChildren, ReactNode } from "react";
import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import { LOCALES } from "@/constants/LOCALES";
import { cx } from "class-variance-authority";
import { lineFont, poppins } from "@/app/fonts";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface Props extends PropsWithChildren {
  params: { locale: (typeof LOCALES)[number] };
  authModal: ReactNode;
}
export default function LocaleLayout({ authModal, children, params }: Props) {
  const isValidLocale = LOCALES.some((cur) => cur === params.locale);
  if (!isValidLocale) notFound();

  unstable_setRequestLocale(params.locale);

  return (
    <html lang={params.locale} className={"border-8"}>
      <body className={cx(lineFont.className, poppins.variable)}>
        {children}
        {authModal}
      </body>
    </html>
  );
}
