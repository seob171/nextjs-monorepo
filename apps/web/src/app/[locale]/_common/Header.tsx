import React, { PropsWithChildren } from "react";
import Logo from "@/app/[locale]/_common/Logo";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { LOCALES } from "@/constants/LOCALES";
import Button from "@/components/atoms/Button";
import Link from "next/link";

interface Props extends PropsWithChildren {
  params: { locale: (typeof LOCALES)[number] };
}
const Header = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);

  console.log("😚", locale);

  const t = useTranslations("Index.GNB");

  return (
    <header className={`flex justify-center w-full h-20 border-b`}>
      <nav className={"w-full px-6 md:px-12 xl:px-24"}>
        <div className={"flex justify-between items-center h-full"}>
          <Logo />
          <ul className={"flex gap-4 items-center h-full"}>
            <Link href={`/${locale}/login?modal=true`}>
              <li>{t("signIn")}</li>
            </Link>
            <li>
              <Link href={`/${locale}/signUp?modal=true`}>
                <Button layout={"ghost"} className={"rounded-full"}>
                  {t("getStarted")}
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
