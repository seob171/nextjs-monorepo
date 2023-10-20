import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { LOCALES } from "@/constants/LOCALES";

type Props = {
  params: { locale: (typeof LOCALES)[number] };
};
const Page = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);

  const t = useTranslations("Index");

  return (
    <div className={"flex justify-center"}>
      <div className={"max-w-screen-xl w-full"}>
        <div>
          <span>{t("title")}</span>
        </div>
      </div>
    </div>
  );
};

export default Page;
