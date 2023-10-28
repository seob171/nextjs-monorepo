import SignInModal from "@/app/@authModal/_components/modal/SignInModal";

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

const Page = ({ searchParams }: Props) => {
  return (
    <div>
      <SignInModal searchParams={searchParams} closeLink={`/`} />
    </div>
  );
};

export default Page;
