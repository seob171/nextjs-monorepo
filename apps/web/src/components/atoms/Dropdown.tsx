"use client";

import React, {
  MouseEventHandler,
  ReactElement,
  ReactNode,
  SelectHTMLAttributes,
  useRef,
  useState,
} from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { useOnClickOutside } from "usehooks-ts";

const DropdownVariant = cva(`absolute flex flex-col`, {
  variants: {},
  defaultVariants: {},
});

type SelectOption = { caption: string; value: string };

interface DropdownProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "children"> {
  children: ReactElement;
  target: ReactNode;
  options: SelectOption[];
}

const Dropdown = ({
  target,
  children,
  className,
  options,
  ...restProps
}: DropdownProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<HTMLOptionElement[]>([]);
  const [openState, setOpenState] = useState(false);

  const toggleTarget: MouseEventHandler<HTMLDivElement> = (e) => {
    setOpenState((prev) => !prev);
  };

  useOnClickOutside(ref, () => setOpenState(false));

  return (
    <div ref={ref} className={"relative z-dropdown"}>
      <select className={"sr-only"} name="" id="" {...restProps}>
        {options.map(({ caption, value }, index) => (
          <option
            ref={(element) => element && (optionRefs.current[index] = element)}
            key={`dropdown-option-${value}`}
            value={value}
          >
            {caption}
          </option>
        ))}
      </select>
      <div onClick={toggleTarget}>{target}</div>
      {openState && (
        <ul className={twMerge(DropdownVariant({ className }))}>{children}</ul>
      )}
    </div>
  );
};

export default Dropdown;
