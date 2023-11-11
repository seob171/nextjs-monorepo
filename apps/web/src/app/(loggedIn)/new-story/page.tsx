import TextPlace from "@/components/molecules/input/TextPlace";

const Page = () => {
  return (
    <div className={"flex-1 w-full h-full px-6 md:px-12 xl:px-24"}>
      <div className={"flex flex-col gap-4 h-full pt-4"}>
        <TextPlace />
      </div>
    </div>
  );
};

export default Page;
