import { PropsWithChildren } from "react";
import Logo from "@/components/Logo";
import { unstable_setRequestLocale } from "next-intl/server";
import { LOCALES } from "@/constants/LOCALES";
import { useTranslations } from "next-intl";

interface Props extends PropsWithChildren {
  params: { locale: (typeof LOCALES)[number] };
}
const Layout = ({ children, params: { locale } }: Props) => {
  const t = useTranslations("Index.GNB");

  unstable_setRequestLocale(locale);

  return (
    <div>
      <header className={`flex justify-center w-full h-16 border-b`}>
        <nav className={"w-full px-6 md:px-12 xl:px-24"}>
          <div className={"flex justify-between items-center h-full"}>
            <Logo />
            <ul className={"flex gap-4 items-center h-full"}>
              <li>{t("signIn")}</li>
            </ul>
          </div>
        </nav>
      </header>
      {children}
      <footer></footer>
    </div>
  );
};

export default Layout;
