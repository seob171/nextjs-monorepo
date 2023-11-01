import React from "react";
import Image, { ImageProps } from "next/image";

const ProfileButton = ({ src }: Pick<ImageProps, "src">) => {
  return (
    <button className={"flex relative min-w-[32px] w-8 h-8"}>
      <Image
        src={src}
        className={"rounded-full"}
        priority
        fill
        alt={"profile image"}
      />
    </button>
  );
};

export default ProfileButton;
