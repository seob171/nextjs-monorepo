import { ButtonHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

// 버튼 스타일 ($layout)
// - Filled
// - Tonal
// - Ghost
// - Subtle

// 버튼 타입 ($type)
// - default (Tertiary) [zinc]
// - primary [green]
// - secondary [orange]

// 버튼 상태
// - default
// - active
// - disabled
// - hover

const ButtonVariant = cva(
  [
    `button w-full rounded-lg px-4 py-2 border`,
    `disabled:cursor-not-allowed disabled:text-gray-300`,
  ],
  {
    variants: {
      intent: {
        primary: ``,
        secondary: ``,
        tertiary: ``,
      },
      layout: {
        filled: [`text-white border-transparent`, `disabled:bg-gray-100`],
        tonal: [`border-transparent`, `disabled:bg-gray-50`],
        ghost: [`disabled:border-gray-100`],
        subtle: `border-transparent`,
      },
    },
    compoundVariants: [
      {
        intent: "primary",
        layout: "filled",
        class: [`bg-green-500`, `hover:bg-green-400`, `active:bg-green-600`],
      },
      {
        intent: "secondary",
        layout: "filled",
        class: [`bg-sky-500`, `hover:bg-sky-400`, `active:bg-sky-600`],
      },
      {
        intent: "tertiary",
        layout: "filled",
        class: [`bg-zinc-900`, `hover:bg-zinc-800`, `active:bg-zinc-950`],
      },
      //
      {
        intent: "primary",
        layout: "tonal",
        class: [
          `text-green-500 bg-green-50`,
          `hover:bg-green-100 hover:text-green-400`,
          `active:bg-green-200 active:text-green-600`,
        ],
      },
      {
        intent: "secondary",
        layout: "tonal",
        class: [
          `text-sky-500 bg-sky-50`,
          `hover:bg-sky-100 hover:text-sky-400`,
          `active:bg-sky-200 active:text-sky-600`,
        ],
      },
      {
        intent: "tertiary",
        layout: "tonal",
        class: [
          `text-zinc-900 bg-zinc-50`,
          `hover:bg-zinc-100 hover:text-zinc-800`,
          `active:bg-zinc-200 active:text-zinc-950`,
        ],
      },
      //
      {
        intent: "primary",
        layout: "ghost",
        class: [
          `text-green-500 border-green-500`,
          `hover:text-green-400 hover:border-green-400`,
          `active:text-green-600 active:border-green-600`,
        ],
      },
      {
        intent: "secondary",
        layout: "ghost",
        class: [
          `text-sky-500 border-sky-500`,
          `hover:text-sky-400 hover:border-sky-400`,
          `active:text-sky-600 active:border-sky-600`,
        ],
      },
      {
        intent: "tertiary",
        layout: "ghost",
        class: [
          `text-zinc-900 border-zinc-900`,
          `hover:text-zinc-800 hover:border-zinc-800`,
          `active:text-zinc-950 active:border-zinc-950`,
        ],
      },
      //
      {
        intent: "primary",
        layout: "subtle",
        class: [
          `text-green-500`,
          `hover:text-green-400`,
          `active:text-green-600`,
        ],
      },
      {
        intent: "secondary",
        layout: "subtle",
        class: [`text-sky-500`, `hover:text-sky-400`, `active:text-sky-600`],
      },
      {
        intent: "tertiary",
        layout: "subtle",
        class: [`text-zinc-900`, `hover:text-zinc-800`, `active:text-zinc-950`],
      },
    ],
    defaultVariants: {
      intent: "tertiary",
      layout: "filled",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof ButtonVariant>;

const Button = ({
  intent,
  layout,
  className,
  children,
  ...restProps
}: ButtonProps) => {
  return (
    <button
      className={twMerge(ButtonVariant({ intent, layout, className }))}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
