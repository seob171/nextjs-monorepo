import Logo from "@/app/_common/Logo";
import Button from "@/components/atoms/Button";
import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SignOutButton from "@/app/_common/auth/SignOutButton";
import Dropdown from "@/components/atoms/Dropdown";
import NotificationButton from "@/app/_common/GNB/NotificationButton";
import React, { ComponentProps, Fragment } from "react";

const PROFILE_IMAGE_DROPDOWN_OPTIONS: ComponentProps<
  typeof Dropdown
>["options"] = [
  { caption: "Profile", value: "profile" },
  { caption: "Stories", value: "stories" },
  { caption: "Sign out", value: "sign_out" },
];

const GNB = async () => {
  const session = await getServerSession(authOptions);

  const navList = () => {
    if (session) {
      return (
        <>
          <Link href={`/write`} className={"flex items-center gap-x-2 group"}>
            <Image
              src={"/icons/ic_plan-storyboard.svg"}
              alt={"storyboard-icon"}
              width={24}
              height={24}
              className={
                "icon-filter-tertiary800 group-hover:icon-filter-tertiary900"
              }
            />
            <li className={"text-tertiary-800 group-hover:text-tertiary-900"}>
              Write
            </li>
          </Link>
          <NotificationButton />

          {session.user?.image && (
            <Dropdown
              className={
                "flex flex-col w-[264px] py-4 right-0 mt-2 bg-white rounded-[8px] shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
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
              options={PROFILE_IMAGE_DROPDOWN_OPTIONS}
            >
              <>
                {PROFILE_IMAGE_DROPDOWN_OPTIONS.map(
                  ({ caption, value }, index) => {
                    if (value === "sign_out") {
                      return (
                        <SignOutButton
                          key={`profile-image-dropdown-option-${value}`}
                          className={"px-6 py-2 text-left"}
                        >
                          Sign out
                        </SignOutButton>
                      );
                    }

                    return (
                      <Link
                        href={`/${value}`}
                        key={`profile-image-dropdown-option-${value}`}
                      >
                        <Button layout={"subtle"} className={"text-left px-6"}>
                          {caption}
                        </Button>
                      </Link>
                    );
                  },
                )}
              </>
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

export default GNB;
