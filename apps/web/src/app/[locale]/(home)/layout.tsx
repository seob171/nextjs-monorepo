import { PropsWithChildren, ReactNode } from "react";
import Logo from "@/app/[locale]/_common/Logo";
import { unstable_setRequestLocale } from "next-intl/server";
import { LOCALES } from "@/constants/LOCALES";
import { useTranslations } from "next-intl";
import Header from "@/app/[locale]/_common/Header";

interface Props extends PropsWithChildren {
  params: { locale: (typeof LOCALES)[number] };
}
const Layout = ({ children, params }: Props) => {
  const { locale } = params;
  const t = useTranslations("Index.GNB");

  unstable_setRequestLocale(locale);

  return (
    <div>
      <Header params={params} />

      {children}
      <footer></footer>
    </div>
  );
};

export default Layout;
