import { LOCALES } from "@/constants/LOCALES";
import { unstable_setRequestLocale } from "next-intl/server";
import SignUpModal from "@/app/[locale]/@authModal/_components/modal/SignUpModal";

type Props = {
  params: { locale: (typeof LOCALES)[number] };
  searchParams: Record<string, string> | null | undefined;
};

const Page = ({ params, searchParams }: Props) => {
  const { locale } = params;
  unstable_setRequestLocale(locale);

  return (
    <div>
      <SignUpModal
        params={params}
        searchParams={searchParams}
        closeLink={`/${locale}`}
      />
    </div>
  );
};

export default Page;
