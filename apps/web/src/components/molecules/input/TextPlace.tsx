"use client";

import {
  ChangeEvent,
  HTMLAttributes,
  KeyboardEvent,
  useRef,
  useState,
} from "react";

import { twMerge } from "tailwind-merge";

interface Props extends HTMLAttributes<HTMLDivElement> {}

type Content = {
  value: string;
};

const TextPlace = ({ className, ...restProps }: Props) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const [contents, setContents] = useState<Content[]>([{ value: "" }]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    let next = contents.slice();
    next[index].value = value;

    setContents(next);
  };

  const handleTitleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.code) {
      case "Enter": {
        setContents((prev) => [{ value: "" }, ...prev]);
        break;
      }

      case "ArrowDown": {
        let next = contents.slice();
        setContents(next);
        break;
      }

      default:
        break;
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    switch (e.code) {
      case "Enter": {
        if (!e.nativeEvent.isComposing) {
          const text = contents[index].value ?? "";
          const pos = e.currentTarget.selectionStart ?? 0;
          const prevContent = { ...contents[index], value: text.slice(0, pos) };
          const nextContent = {
            ...contents[index],
            value: text.slice(pos, text.length),
          };

          const next = contents.slice();

          next.splice(index, 1, ...[prevContent, nextContent]);
          setContents(next);
        }
        break;
      }
      case "Backspace": {
        if (!contents[index].value && contents.length > 1) {
          const next = contents.slice();
          next.splice(index, 1);
          setContents(next);

          e.preventDefault();
        }
        break;
      }

      case "ArrowUp": {
        if (index === 0) {
          titleRef.current?.focus();
        } else {
          let next = contents.slice();
          setContents(next);
        }
        break;
      }

      case "ArrowDown": {
        let next = contents.slice();
        setContents(next);
        break;
      }

      default:
        break;
    }
  };

  return (
    <>
      <input
        className={"placeholder:text-tertiary-200 font-bold text-4xl outline-0"}
        placeholder={"Untitled"}
        ref={titleRef}
        onKeyDown={handleTitleInputKeyDown}
      />
      <div className={className} {...restProps}>
        {contents.map(({ value }, index) => (
          <div key={index} className={twMerge("flex w-full py-1")}>
            <input
              value={value}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              placeholder={"'/' for commands..."}
              className={
                "w-full outline-0 placeholder:opacity-0 focus:placeholder:opacity-100"
              }
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default TextPlace;
