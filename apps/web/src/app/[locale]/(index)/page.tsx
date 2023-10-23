import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { LOCALES } from "@/constants/LOCALES";
import Button from "@/components/atoms/Button";
import Dialog from "@/components/atoms/Dialog";
import BackLink from "@/components/common/BackLink";

type Props = {
  params: { locale: (typeof LOCALES)[number] };
  searchParams: Record<string, string> | null | undefined;
};
const Page = ({ params: { locale }, searchParams }: Props) => {
  unstable_setRequestLocale(locale);

  const t = useTranslations("Index");
  const showModal = searchParams?.modal;

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
        <div className={"grid grid-cols-4 grid-rows-3 gap-4 p-10"}>
          <Dialog
            open={!!showModal}
            confirm={
              <BackLink>
                <Button
                  layout={"subtle"}
                  intent={"primary"}
                  className={"rounded-none"}
                >
                  Confirm
                </Button>
              </BackLink>
            }
            cancel={
              <BackLink>
                <Button layout={"subtle"} className={"rounded-none"}>
                  Cancel
                </Button>
              </BackLink>
            }
          >
            Dialog Contents
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Page;
