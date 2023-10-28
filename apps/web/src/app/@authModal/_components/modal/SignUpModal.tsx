import Dialog from "@/components/atoms/Dialog";
import { LogoComponent } from "@/app/_common/Logo";
import Button from "@/components/atoms/Button";
import Link, { LinkProps } from "next/link";

type Props = {
  searchParams: Record<string, string> | null | undefined;
  closeLink?: LinkProps["href"];
};
const SignUpModal = ({ searchParams, closeLink }: Props) => {
  const showModal = searchParams?.modal;

  return (
    <Dialog open={!!showModal} closeLink={closeLink}>
      <div
        className={
          "flex flex-col justify-center items-center gap-y-8 w-[678px] h-[692px]"
        }
      >
        <div className={"flex"}>
          <span className={"text-4xl text-zinc-900"}>Join&nbsp;</span>
          <LogoComponent />
        </div>
        <div className={"flex flex-col gap-y-4 w-[300px] mt-12"}>
          <Button className={"rounded-3xl "} layout={"ghost"} disabled>
            Sign up with Google
          </Button>
          <Button className={"rounded-3xl "} layout={"ghost"} disabled>
            Sign up with Apple
          </Button>
          <Button className={"rounded-3xl "} layout={"ghost"} disabled>
            Sign up with email
          </Button>
        </div>
        <div className={"flex mt-5"}>
          <span>Already have an account?&nbsp;</span>
          <Link
            href={`/signIn?modal=true`}
            replace
            className={"text-green-600"}
          >
            Sign in
          </Link>
        </div>
      </div>
    </Dialog>
  );
};

export default SignUpModal;
