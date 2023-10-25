import LoginModal from "@/app/@authModal/_components/modal/LoginModal";

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

const Page = ({ searchParams }: Props) => {
  return (
    <div>
      <LoginModal searchParams={searchParams} closeLink={`/`} />
    </div>
  );
};

export default Page;
