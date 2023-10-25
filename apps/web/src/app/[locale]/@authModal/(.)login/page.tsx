import LoginModal from "@/app/[locale]/@authModal/_components/modal/LoginModal";
import { LOCALES } from "@/constants/LOCALES";
import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: (typeof LOCALES)[number] };
  searchParams: Record<string, string> | null | undefined;
};

const Page = ({ params, searchParams }: Props) => {
  const { locale } = params;
  unstable_setRequestLocale(locale);

  return <LoginModal params={params} searchParams={searchParams} />;
};

export default Page;
