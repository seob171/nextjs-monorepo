"use client";

import { HTMLAttributes, ReactNode, useRef, useState } from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
// import { useOnClickOutside } from "usehooks-ts";

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
  const ref = useRef<HTMLDivElement>(null);
  const [openState, setOpenState] = useState(false);

  const toggleTarget = () => setOpenState((prev) => !prev);

  // useOnClickOutside(ref, () => setOpenState(false));

  return (
    <div className={"relative z-dropdown"} {...restProps}>
      <div ref={ref} onClick={toggleTarget}>
        {target}
      </div>
      {openState && (
        <div className={twMerge(DropdownVariant({ className }))}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
