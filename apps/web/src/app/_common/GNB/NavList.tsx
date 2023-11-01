import WriteButton from "@/app/_common/GNB/WriteButton";
import NotificationButton from "@/app/_common/GNB/NotificationButton";
import ProfileDropdown from "@/components/molecules/dropdown/ProfileDropdown";
import ProfileButton from "@/app/_common/GNB/ProfileImage";
import Link from "next/link";
import Button from "@/components/atoms/Button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const NavList = async () => {
  const session = await getServerSession(authOptions);

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

export default NavList;
