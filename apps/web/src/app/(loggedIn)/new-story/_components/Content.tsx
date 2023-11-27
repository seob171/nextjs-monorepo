"use client";

import { FormEventHandler, HTMLAttributes, useRef, useState } from "react";

interface ContentProps extends HTMLAttributes<HTMLElement> {
  initialContent?: string;
}

const Content = ({ initialContent, ...props }: ContentProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState(initialContent ?? "");

  const handleInput: FormEventHandler<HTMLDivElement> = (e) => {
    setContent(e.currentTarget.innerText);
    window.getSelection()?.collapse(e.currentTarget, 1);
  };

  return (
    <div
      ref={ref}
      contentEditable
      suppressContentEditableWarning
      onInput={handleInput}
      {...props}
    >
      {content}
    </div>
  );
};

export default Content;
