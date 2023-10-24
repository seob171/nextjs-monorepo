import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { LOCALES } from "@/constants/LOCALES";
import Button from "@/components/atoms/Button";

type Props = {
  params: { locale: (typeof LOCALES)[number] };
};
const Page = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);

  const t = useTranslations("Index");

  return (
    <div className={"flex justify-center"}>
      <div className={"flex flex-col max-w-screen-xl w-full"}>
        <div>
          <span>{t("title")}</span>
        </div>
        <div className={"grid grid-cols-4 grid-rows-3 gap-4 p-10"}>
          <Button intent={"tertiary"} layout={"filled"}>
            Button
          </Button>
          <Button intent={"tertiary"} layout={"tonal"}>
            Button
          </Button>
          <Button intent={"tertiary"} layout={"ghost"}>
            Button
          </Button>
          <Button intent={"tertiary"} layout={"subtle"}>
            Button
          </Button>

          <Button intent={"secondary"} layout={"filled"}>
            Button
          </Button>
          <Button intent={"secondary"} layout={"tonal"}>
            Button
          </Button>
          <Button intent={"secondary"} layout={"ghost"}>
            Button
          </Button>
          <Button intent={"secondary"} layout={"subtle"}>
            Button
          </Button>

          <Button intent={"primary"} layout={"filled"}>
            Button
          </Button>
          <Button intent={"primary"} layout={"tonal"}>
            Button
          </Button>
          <Button intent={"primary"} layout={"ghost"}>
            Button
          </Button>
          <Button intent={"primary"} layout={"subtle"}>
            Button
          </Button>
        </div>
        <div className={"grid grid-cols-4 grid-rows-3 gap-4 p-10"}></div>
      </div>
    </div>
  );
};

export default Page;
