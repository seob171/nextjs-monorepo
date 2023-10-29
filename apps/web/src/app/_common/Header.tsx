import Logo from "@/app/_common/Logo";
import Button from "@/components/atoms/Button";
import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SignOutButton from "@/app/_common/auth/SignOutButton";
import Dropdown from "@/components/atoms/Dropdown";

const Header = async () => {
  const session = await getServerSession(authOptions);

  const navList = () => {
    if (session) {
      return (
        <>
          <Link href={`/write`}>
            <li>Write</li>
          </Link>
          {session.user?.image && (
            <Dropdown
              className={
                "right-0 mt-2 bg-white shadow-inner shadow rounded-[8px]"
              }
              target={
                <button className={"flex relative min-w-[32px] w-8 h-8"}>
                  <Image
                    src={session.user.image}
                    alt={"profile image"}
                    className={"rounded-full"}
                    priority
                    fill
                  />
                </button>
              }
            >
              <ul className={"flex flex-col w-[264px] py-4"}>
                <li>
                  <Link href={"/profile"}>
                    <Button layout={"subtle"} className={"text-left px-6"}>
                      Profile
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link href={"/stories"}>
                    <Button layout={"subtle"} className={"text-left px-6"}>
                      Stories
                    </Button>
                  </Link>
                </li>
                <hr className={"py-2 border-zinc-100"} />
                <li>
                  <SignOutButton className={"px-6 py-2 text-left"}>
                    Sign Out
                  </SignOutButton>
                </li>
              </ul>
            </Dropdown>
          )}
        </>
      );
    }

    return (
      <>
        <Link href={`/signIn?modal=true`}>
          <li>Sign In</li>
        </Link>
        <Link href={`/signUp?modal=true`}>
          <li>
            <Button layout={"ghost"} className={"rounded-full"}>
              Get started
            </Button>
          </li>
        </Link>
      </>
    );
  };

  return (
    <header className={`flex justify-center w-full h-20 border-b`}>
      <nav className={"w-full px-6 md:px-12 xl:px-24"}>
        <div className={"flex justify-between items-center h-full"}>
          <Logo />
          <ul className={"flex gap-4 items-center h-full"}>{navList()}</ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
