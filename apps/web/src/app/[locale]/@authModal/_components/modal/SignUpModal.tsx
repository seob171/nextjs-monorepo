import { LOCALES } from "@/constants/LOCALES";
import Dialog from "@/components/atoms/Dialog";
import { LogoComponent } from "@/app/[locale]/_common/Logo";
import Button from "@/components/atoms/Button";
import Link, { LinkProps } from "next/link";
import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: (typeof LOCALES)[number] };
  searchParams: Record<string, string> | null | undefined;
  closeLink?: LinkProps["href"];
};
const SignUpModal = ({
  params: { locale },
  searchParams,
  closeLink,
}: Props) => {
  unstable_setRequestLocale(locale);
  const showModal = searchParams?.modal;

  return (
    <Dialog open={!!showModal} closeLink={closeLink}>
      <div
        className={
          "flex flex-col justify-center items-center gap-y-8 w-[678px] h-[692px]"
        }
      >
        <div className={"flex"}>
          <span className={"text-4xl text-zinc-900"}>Join&nbsp;</span>
          <LogoComponent />
        </div>
        <div className={"flex flex-col gap-y-4 w-[300px] mt-12"}>
          <Button
            className={"rounded-3xl border-gray-900 text-gray-900"}
            layout={"ghost"}
          >
            Sign up With Google
          </Button>
          <Button
            className={"rounded-3xl border-gray-900 text-gray-900"}
            layout={"ghost"}
          >
            Sign up With Apple
          </Button>
          <Button
            className={"rounded-3xl border-gray-900 text-gray-900"}
            layout={"ghost"}
          >
            Sign up With email
          </Button>
        </div>
        <div className={"flex mt-5"}>
          <span>Already have an account?&nbsp;</span>
          <Link
            href={`/${locale}/login?modal=true`}
            replace
            className={"text-green-600"}
          >
            Sign in
          </Link>
        </div>
      </div>
    </Dialog>
  );
};

export default SignUpModal;
