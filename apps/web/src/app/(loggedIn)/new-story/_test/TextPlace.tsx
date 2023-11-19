"use client";

import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { useTextPlaceContext } from "@/app/(loggedIn)/new-story/_test/TextPlaceProvider";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const TextPlace = ({ className, ...restProps }: Props) => {
  const { contents, handleChange, handleKeyDown } = useTextPlaceContext();

  return (
    <>
      {contents.map(({ value }, index) => {
        const isTitle = index === 0;
        const placeHolder = isTitle ? "Untitled" : "'/' for commands...";
        const titleStyle = "placeholder:text-tertiary-200 font-bold text-4xl";
        const contentStyle =
          "placeholder:opacity-0 focus:placeholder:opacity-100";

        return (
          <input
            key={index}
            value={value}
            autoFocus={isTitle}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            placeholder={placeHolder}
            className={twMerge(
              "flex w-full py-1 outline-0 bg-secondary-50",
              isTitle ? titleStyle : contentStyle,
            )}
            onClick={(e) => e.stopPropagation()}
          />
        );
      })}
    </>
  );
};

export default TextPlace;
