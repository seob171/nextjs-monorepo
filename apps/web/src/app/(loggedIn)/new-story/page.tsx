import Contents from "@/app/(loggedIn)/new-story/_components/Contents";

const Page = () => {
  return (
    <div className={"flex-1 w-full h-full px-6 md:px-12 xl:px-24"}>
      <div className={"flex flex-col gap-4 h-full pt-4"}>
        <Contents />
      </div>
    </div>
  );
};

export default Page;
