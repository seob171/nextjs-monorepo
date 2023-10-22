import { PropsWithChildren } from "react";
import Logo from "@/app/[locale]/_common/Logo";
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
      <header className={`flex justify-center w-full h-20 border-b`}>
        <nav className={"w-full px-6 md:px-12 xl:px-24"}>
          <div className={"flex justify-between items-center h-full"}>
            <Logo />
            <ul className={"flex gap-4 items-center h-full"}>
              <li>{t("signIn")}</li>
              <li>
                <button
                  className={
                    "px-4 py-2 rounded-full border border-blue-400 text-blue-400"
                  }
                >
                  {t("getStarted")}
                </button>
              </li>
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
