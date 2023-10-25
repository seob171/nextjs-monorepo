import SignUpModal from "@/app/@authModal/_components/modal/SignUpModal";

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

const Page = ({ searchParams }: Props) => {
  return (
    <div>
      <SignUpModal searchParams={searchParams} closeLink={`/`} />
    </div>
  );
};

export default Page;
