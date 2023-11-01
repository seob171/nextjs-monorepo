import Logo from "@/app/_common/Logo";
import Button from "@/components/atoms/Button";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import NotificationButton from "@/app/_common/GNB/NotificationButton";
import ProfileDropdown from "@/components/molecules/dropdown/ProfileDropdown";
import WriteButton from "@/app/_common/GNB/WriteButton";
import ProfileButton from "@/app/_common/GNB/ProfileImage";

const GNB = async () => {
  const session = await getServerSession(authOptions);

  const navList = () => {
    if (session) {
      return (
        <>
          <WriteButton />
          <NotificationButton />

          {session.user?.image && (
            <ProfileDropdown
              target={<ProfileButton src={session.user.image} />}
            />
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

export default GNB;
