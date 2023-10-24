import LoginModal from "@/app/[locale]/@auth/_components/modal/LoginModal";
import { LOCALES } from "@/constants/LOCALES";

type Props = {
  params: { locale: (typeof LOCALES)[number] };
  searchParams: Record<string, string> | null | undefined;
};
const Page = ({ params, searchParams }: Props) => {
  return (
    <>
      <LoginModal params={params} searchParams={searchParams} />
    </>
  );
};

export default Page;
