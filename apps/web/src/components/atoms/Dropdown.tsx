"use client";

import { HTMLAttributes, ReactNode, useState } from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const DropdownVariant = cva(`absolute flex flex-col`, {
  variants: {},
  defaultVariants: {},
});

interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
  target: ReactNode;
}

const Dropdown = ({
  target,
  children,
  className,
  ...restProps
}: DropdownProps) => {
  const [openState, setOpenState] = useState(false);

  const toggleTarget = () => setOpenState((prev) => !prev);

  return (
    <div className={"relative z-dropdown"} {...restProps}>
      <div onClick={toggleTarget}>{target}</div>
      {openState && (
        <div className={twMerge(DropdownVariant({ className }))}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
