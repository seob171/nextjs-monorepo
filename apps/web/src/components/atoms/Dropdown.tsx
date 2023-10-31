"use client";

import React, {
  Children,
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
        <ul className={twMerge(DropdownVariant({ className }))}>
          {Children.map(children, (child: ReactElement, index) => {
            // 자식 요소를 수정하여 반환하는 예시
            return (
              <li onClick={() => optionRefs.current[index].click()}>
                {React.cloneElement(child, {})}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
