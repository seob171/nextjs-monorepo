"use client";

import React, {
  ChangeEvent,
  createContext,
  KeyboardEvent,
  memo,
  MouseEvent,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";

type ContextType = {
  contents: Content[];
  handleChange: (e: ChangeEvent<HTMLInputElement>, index: number) => void;
  handleKeyDown: (e: KeyboardEvent<HTMLInputElement>, index: number) => void;
};
const NewStoryContext = createContext<ContextType>({
  contents: [
    { value: "" }, // title
    { value: "" }, // first content
  ],
  handleChange: () => null,
  handleKeyDown: () => null,
});

type Content = {
  value: string;
};

type Props = PropsWithChildren;
const TextPlaceProvider = ({ children }: Props) => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);

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
    if (focusIndex !== INITIAL_INDEX && container) {
      const target = container.children[focusIndex] as HTMLInputElement;
      target.focus();
      setTimeout(() => {
        target.setSelectionRange(selection, selection);
      }, 0);

      setFocusIndex(INITIAL_INDEX);
    }
  }, [container, focusIndex, selection]);

  const value = { contents, handleChange, handleKeyDown };

  return (
    <NewStoryContext.Provider value={value}>
      <div
        ref={setContainer}
        className={twMerge(
          "flex flex-col h-full",
          focusIndex !== INITIAL_INDEX && "[&>input]:caret-transparent",
        )}
        onClick={clickTextArea}
      >
        {children}
      </div>
    </NewStoryContext.Provider>
  );
};

export default memo(TextPlaceProvider);

export const useTextPlaceContext = () => useContext(NewStoryContext);

const INITIAL_INDEX = -1;
