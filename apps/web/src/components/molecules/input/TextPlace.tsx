"use client";

import {
  ChangeEvent,
  HTMLAttributes,
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const INITIAL_INDEX = -1;

type Content = {
  value: string;
};

const TextPlace = ({ className, ...restProps }: Props) => {
  const inputWrapperRef = useRef<HTMLDivElement>(null);

  const [contents, setContents] = useState<Content[]>([
    { value: "" }, // title
    { value: "" }, // first content
  ]);
  const [focusIndex, setFocusIndex] = useState(INITIAL_INDEX);
  const [selection, setSelection] = useState(0);

  const clickTextArea = (e: MouseEvent<HTMLDivElement>) => {
    setFocusIndex(contents.length - 1);
    setSelection(contents[contents.length - 1].value.length);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    let next = contents.slice();
    next[index].value = value;

    setContents(next);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    const prevInput = e.currentTarget.previousSibling as HTMLInputElement;
    const currentInput = e.currentTarget;
    const nextInput = e.currentTarget.nextSibling as HTMLInputElement;

    switch (e.code) {
      case "Enter": {
        if (!e.nativeEvent.isComposing) {
          const currentContent = contents[index];
          const currentValue = currentInput.value ?? "";
          const pos = currentInput.selectionStart ?? 0;
          const prevContent = {
            ...currentContent,
            value: currentValue.slice(0, pos),
          };

          const nextContent = {
            ...currentContent,
            value: currentValue.slice(pos, currentValue.length),
          };

          const nextContents = contents.slice();
          nextContents.splice(index, 1, ...[prevContent, nextContent]);

          setContents(nextContents);

          setFocusIndex(index + 1);
          setSelection(0);
        }
        break;
      }
      case "Backspace": {
        const currentValue = currentInput.value ?? "";
        const pos = e.currentTarget.selectionStart ?? 0;
        const deletedValue = currentValue.slice(0, pos);
        const restValue = currentValue.slice(pos, currentValue.length);

        if (!deletedValue && prevInput) {
          let nextContents = contents.slice();
          nextContents[index - 1].value += restValue;
          nextContents.splice(index, 1);
          setContents(nextContents);

          setFocusIndex(index - 1);
          setSelection(prevInput.value.length);

          e.preventDefault();
        }
        break;
      }

      case "ArrowUp": {
        setFocusIndex(index - 1);
        break;
      }

      case "ArrowDown": {
        if (nextInput) {
          setFocusIndex(index + 1);
        }
        break;
      }

      case "ArrowLeft": {
        const pos = currentInput.selectionStart ?? 0;
        setSelection(pos - 1);
        break;
      }
      case "ArrowRight": {
        const pos = currentInput.selectionStart ?? 0;
        setSelection(Math.min(pos + 1, currentInput.value.length));

        break;
      }

      default:
        break;
    }
  };

  useEffect(() => {
    const inputWrapper = inputWrapperRef.current;
    if (focusIndex !== INITIAL_INDEX && inputWrapper) {
      const target = inputWrapper.children[focusIndex] as HTMLInputElement;
      target.focus();
      setTimeout(() => {
        target.setSelectionRange(selection, selection);
      }, 0);

      setFocusIndex(INITIAL_INDEX);
    }
  }, [focusIndex, selection]);

  return (
    <div
      className={"flex flex-col h-full"}
      ref={inputWrapperRef}
      onClick={clickTextArea}
      {...restProps}
    >
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
              focusIndex !== INITIAL_INDEX && "caret-transparent",
            )}
            onClick={(e) => e.stopPropagation()}
          />
        );
      })}
    </div>
  );
};

export default TextPlace;
