"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

const ProfileButton = ({ src }: Pick<ImageProps, "src">) => {
  const [hasError, setHasError] = useState(false);
  return (
    <button className={"flex relative min-w-[32px] w-8 h-8"}>
      {hasError ? (
        <div
          className={
            "flex items-center justify-center w-full h-full text-white text-xs bg-tertiary-800 rounded-full "
          }
        >
          999°
        </div>
      ) : (
        <Image
          src={src}
          className={"rounded-full"}
          priority
          fill
          alt={"profile image"}
          onError={() => setHasError(true)}
        />
      )}
    </button>
  );
};

export default ProfileButton;
