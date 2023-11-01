import { ComponentProps } from "react";
import Image from "next/image";
import Dropdown from "@/components/atoms/Dropdown";
import SignOutButton from "@/app/_common/auth/SignOutButton";
import Link from "next/link";
import Button from "@/components/atoms/Button";

const PROFILE_IMAGE_DROPDOWN_OPTIONS: ComponentProps<
  typeof Dropdown
>["options"] = [
  { caption: "Profile", value: "profile" },
  { caption: "Stories", value: "stories" },
  { caption: "Sign out", value: "sign_out" },
];

interface ProfileDropdownProps
  extends Pick<ComponentProps<typeof Dropdown>, "target"> {}

const ProfileDropdown = ({ target }: ProfileDropdownProps) => {
  return (
    <Dropdown
      className={
        "flex flex-col w-[264px] py-4 right-0 mt-2 bg-white rounded-[8px] shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
      }
      target={target}
      options={PROFILE_IMAGE_DROPDOWN_OPTIONS}
    >
      <>
        <Link href={`/profile`} key={`profile-image-dropdown-option-profile`}>
          <Button
            layout={"subtle"}
            className={"flex items-center gap-x-4 text-left px-6"}
          >
            <Image
              src={`/icons/ic_user.svg`}
              alt={`profile-icon`}
              width={20}
              height={20}
            />
            Profile
          </Button>
        </Link>
        <Link href={`/stories`} key={`profile-image-dropdown-option-stories`}>
          <Button
            layout={"subtle"}
            className={"flex items-center gap-x-4 text-left px-6"}
          >
            <Image
              src={`/icons/ic_document.svg`}
              alt={`stories-icon`}
              width={20}
              height={20}
            />
            Stories
          </Button>
        </Link>
        <hr className={"py-2 border-zinc-100"} />
        <SignOutButton
          key={`profile-image-dropdown-option-sign_out`}
          className={"w-full px-6 py-2 text-left"}
        >
          Sign out
        </SignOutButton>
      </>
    </Dropdown>
  );
};

export default ProfileDropdown;
