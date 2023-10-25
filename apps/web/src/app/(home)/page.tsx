import Button from "@/components/atoms/Button";

const Page = () => {
  return (
    <div className={"flex justify-center"}>
      <div className={"flex flex-col max-w-screen-xl w-full"}>
        <div>
          <span>Hello</span>
        </div>
        <div className={"grid grid-cols-4 grid-rows-3 gap-4 p-10"}>
          <Button intent={"tertiary"} layout={"filled"}>
            Button
          </Button>
          <Button intent={"tertiary"} layout={"tonal"}>
            Button
          </Button>
          <Button intent={"tertiary"} layout={"ghost"}>
            Button
          </Button>
          <Button intent={"tertiary"} layout={"subtle"}>
            Button
          </Button>

          <Button intent={"secondary"} layout={"filled"}>
            Button
          </Button>
          <Button intent={"secondary"} layout={"tonal"}>
            Button
          </Button>
          <Button intent={"secondary"} layout={"ghost"}>
            Button
          </Button>
          <Button intent={"secondary"} layout={"subtle"}>
            Button
          </Button>

          <Button intent={"primary"} layout={"filled"}>
            Button
          </Button>
          <Button intent={"primary"} layout={"tonal"}>
            Button
          </Button>
          <Button intent={"primary"} layout={"ghost"}>
            Button
          </Button>
          <Button intent={"primary"} layout={"subtle"}>
            Button
          </Button>
        </div>
        <div className={"grid grid-cols-4 grid-rows-3 gap-4 p-10"}></div>
      </div>
    </div>
  );
};

export default Page;
