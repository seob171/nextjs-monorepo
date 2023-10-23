import { ButtonHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";

// 버튼 스타일 ($layout)
// - Filled
// - Tonal
// - Ghost
// - Subtle

// 버튼 타입 ($type)
// - default (Tertiary) [Slate]
// - primary [Blue]
// - secondary [Emerald]

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
        class: [`bg-blue-400`, `hover:bg-blue-500`, `active:bg-blue-600`],
      },
      {
        intent: "secondary",
        layout: "filled",
        class: [
          `bg-emerald-400`,
          `hover:bg-emerald-500`,
          `active:bg-emerald-600`,
        ],
      },
      {
        intent: "tertiary",
        layout: "filled",
        class: [`bg-slate-400`, `hover:bg-slate-500`, `active:bg-slate-600`],
      },
      //
      {
        intent: "primary",
        layout: "tonal",
        class: [
          `text-blue-400 bg-blue-50`,
          `hover:bg-blue-100 hover:text-blue-500`,
          `active:bg-blue-200 active:text-blue-600`,
        ],
      },
      {
        intent: "secondary",
        layout: "tonal",
        class: [
          `text-emerald-400 bg-emerald-50`,
          `hover:bg-emerald-100 hover:text-emerald-500`,
          `active:bg-emerald-200 active:text-emerald-600`,
        ],
      },
      {
        intent: "tertiary",
        layout: "tonal",
        class: [
          `text-slate-400 bg-slate-50`,
          `hover:bg-slate-100 hover:text-slate-500`,
          `active:bg-slate-200 active:text-slate-600`,
        ],
      },
      //
      {
        intent: "primary",
        layout: "ghost",
        class: [
          `text-blue-400 border-blue-400`,
          `hover:text-blue-500 hover:border-blue-500`,
          `active:text-blue-600 active:border-blue-600`,
        ],
      },
      {
        intent: "secondary",
        layout: "ghost",
        class: [
          `text-emerald-400 border-emerald-400`,
          `hover:text-emerald-500 hover:border-emerald-500`,
          `active:text-emerald-600 active:border-emerald-600`,
        ],
      },
      {
        intent: "tertiary",
        layout: "ghost",
        class: [
          `text-slate-400 border-slate-400`,
          `hover:text-slate-500 hover:border-slate-500`,
          `active:text-slate-600 active:border-slate-600`,
        ],
      },
      //
      {
        intent: "primary",
        layout: "subtle",
        class: [`text-blue-400`, `hover:text-blue-500`, `active:text-blue-600`],
      },
      {
        intent: "secondary",
        layout: "subtle",
        class: [
          `text-emerald-400`,
          `hover:text-emerald-500`,
          `active:text-emerald-600`,
        ],
      },
      {
        intent: "tertiary",
        layout: "subtle",
        class: [
          `text-slate-400`,
          `hover:text-slate-500`,
          `active:text-slate-600`,
        ],
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
      className={ButtonVariant({ intent, layout, className })}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
