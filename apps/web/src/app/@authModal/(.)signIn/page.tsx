import SignInModal from "@/app/@authModal/_components/modal/SignInModal";

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

const Page = ({ searchParams }: Props) => {
  return <SignInModal searchParams={searchParams} />;
};

export default Page;
