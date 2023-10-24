import { LOCALES } from "@/constants/LOCALES";
import SignUpModal from "@/app/[locale]/@auth/_components/modal/SignUpModal";

type Props = {
  params: { locale: (typeof LOCALES)[number] };
  searchParams: Record<string, string> | null | undefined;
};
const Page = ({ params, searchParams }: Props) => {
  return (
    <>
      <SignUpModal params={params} searchParams={searchParams} />
    </>
  );
};

export default Page;
