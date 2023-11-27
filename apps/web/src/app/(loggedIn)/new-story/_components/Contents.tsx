"use client";

import {
  FormEventHandler,
  HTMLAttributes,
  KeyboardEventHandler,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";
import Content from "@/app/(loggedIn)/new-story/_components/Content";

interface ContentsProps extends HTMLAttributes<HTMLElement> {}

type ContentList = {
  type: string; // p, h1, b ...
  content: string;
};
const Contents = ({}: ContentsProps) => {
  const [contentList, setContentList] = useState<ContentList[]>([]);

  return (
    <div className={"flex flex-col"}>
      <Content
        placeholder={"'/' for commands..."}
        className={twMerge(
          "w-full py-1 outline-0 text-body1 text-tertiary-800 focus:empty:before:content-[attr(placeholder)] empty:before:text-tertiary-200",
          "bg-sky-50",
        )}
      />
      {/*<ContentItem*/}
      {/*  placeholder={"Untitled"}*/}
      {/*  className={"text-headline3 inline-block"}*/}
      {/*  onInput={handleInput}*/}
      {/*  onBeforeInput={handleBeforeInput}*/}
      {/*  onKeyDown={handleKeydown}*/}
      {/*></ContentItem>*/}
      {/*<ContentItem*/}
      {/*  onInput={handleInput}*/}
      {/*  onKeyDown={handleKeydown}*/}
      {/*></ContentItem>*/}
      {/*{contentList.map(({ type, content }, index) => (*/}
      {/*  <ContentItem key={index} onInput={handleInput}>*/}
      {/*    {content}*/}
      {/*  </ContentItem>*/}
      {/*))}*/}
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
