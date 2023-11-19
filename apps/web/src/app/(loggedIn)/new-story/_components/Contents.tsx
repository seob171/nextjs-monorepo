"use client";

import {
  FormEventHandler,
  HTMLAttributes,
  KeyboardEventHandler,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";
import { createPortal } from "react-dom";

interface ContentsProps extends HTMLAttributes<HTMLElement> {}

type ContentList = {
  type: string; // p, h1, b ...
  content: string;
};
const Contents = ({}: ContentsProps) => {
  const [contentList, setContentList] = useState<ContentList[]>([]);

  const handleBeforeInput: FormEventHandler<HTMLDivElement> = (e) => {
    // console.log("handleBeforeInput ", e.currentTarget);
    // const { textContent } = e.currentTarget;
    // console.log("handleBeforeInput ", textContent);
  };
  const handleInput: FormEventHandler<HTMLDivElement> = (e) => {
    // console.log("handleInput ", e.currentTarget);
    const { textContent } = e.currentTarget;
    console.log("handleInput ", textContent);
  };

  const handleKeydown: KeyboardEventHandler<HTMLDivElement> = (e) => {
    switch (e.code) {
      case "Enter": {
        console.log(e);
        e.preventDefault();
        // const currentIndex = Array.prototype.indexOf.call(
        //   e.currentTarget.parentNode?.children,
        //   e.currentTarget,
        // );
        //
        // const divElement = document.createElement("div");
        // const userSelection = window.getSelection();
        // const selectedTextRange = userSelection?.getRangeAt(0);
        // selectedTextRange?.surroundContents(divElement);
        // selectedTextRange?.selectNode(divElement);
        // const extractedElement = selectedTextRange?.extractContents();
        // if (extractedElement) {
        //   e.currentTarget.parentNode?.insertBefore(
        //     extractedElement,
        //     e.currentTarget.parentNode.children[currentIndex + 1],
        //   );
        //   createPortal(<ContentItem />, extractedElement);
        // }
        break;
      }
      default: {
        break;
      }
    }
  };

  return (
    <div className={"flex flex-col"}>
      <ContentItem
        placeholder={"Untitled"}
        className={"text-headline3 inline-block"}
        onInput={handleInput}
        onBeforeInput={handleBeforeInput}
        onKeyDown={handleKeydown}
      ></ContentItem>
      <ContentItem
        onInput={handleInput}
        onKeyDown={handleKeydown}
      ></ContentItem>
      {contentList.map(({ type, content }, index) => (
        <ContentItem key={index} onInput={handleInput}>
          {content}
        </ContentItem>
      ))}
    </div>
  );
};

export default Contents;

interface ContentItem
  extends Omit<HTMLAttributes<HTMLDivElement>, "contentEditable"> {}

const ContentItem = ({ className, children, ...restProps }: ContentItem) => {
  return (
    <div
      contentEditable
      placeholder={"'/' for commands..."}
      className={twMerge(
        "w-full py-1 outline-0 text-body1 text-tertiary-800 focus:empty:before:content-[attr(placeholder)] empty:before:text-tertiary-200",
        className,
        "bg-primary-100",
      )}
      {...restProps}
    >
      {children}
    </div>
  );
};
