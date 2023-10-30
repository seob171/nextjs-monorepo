import { ButtonHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

// 버튼 스타일 ($layout)
// - Filled
// - Tonal
// - Ghost
// - Subtle

// 버튼 타입 ($type)
// - default (Tertiary) [tertiary]
// - primary [primary]
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
        class: [
          `bg-primary-500`,
          `hover:bg-primary-600`,
          `active:bg-primary-700`,
        ],
      },
      {
        intent: "secondary",
        layout: "filled",
        class: [
          `bg-secondary-500`,
          `hover:bg-secondary-600`,
          `active:bg-secondary-700`,
        ],
      },
      {
        intent: "tertiary",
        layout: "filled",
        class: [
          `bg-tertiary-800`,
          `hover:bg-tertiary-900`,
          `active:bg-tertiary-950`,
        ],
      },
      //
      {
        intent: "primary",
        layout: "tonal",
        class: [
          `text-primary-500 bg-primary-100`,
          `hover:bg-primary-200 hover:text-primary-600`,
          `active:bg-primary-300 active:text-primary-700`,
        ],
      },
      {
        intent: "secondary",
        layout: "tonal",
        class: [
          `text-secondary-500 bg-secondary-100`,
          `hover:bg-secondary-200 hover:text-secondary-600`,
          `active:bg-secondary-300 active:text-secondary-700`,
        ],
      },
      {
        intent: "tertiary",
        layout: "tonal",
        class: [
          `text-tertiary-800 bg-tertiary-100`,
          `hover:bg-tertiary-200 hover:text-tertiary-900`,
          `active:bg-tertiary-300 active:text-tertiary-950`,
        ],
      },
      //
      {
        intent: "primary",
        layout: "ghost",
        class: [
          `text-primary-500 border-primary-500`,
          `hover:text-primary-600 hover:border-primary-600`,
          `active:text-primary-700 active:border-primary-700`,
        ],
      },
      {
        intent: "secondary",
        layout: "ghost",
        class: [
          `text-secondary-500 border-secondary-500`,
          `hover:text-secondary-600 hover:border-secondary-600`,
          `active:text-secondary-700 active:border-secondary-700`,
        ],
      },
      {
        intent: "tertiary",
        layout: "ghost",
        class: [
          `text-tertiary-800 border-tertiary-800`,
          `hover:text-tertiary-900 hover:border-tertiary-900`,
          `active:text-tertiary-950 active:border-tertiary-950`,
        ],
      },
      //
      {
        intent: "primary",
        layout: "subtle",
        class: [
          `text-primary-500`,
          `hover:text-primary-600`,
          `active:text-primary-700`,
        ],
      },
      {
        intent: "secondary",
        layout: "subtle",
        class: [
          `text-secondary-500`,
          `hover:text-secondary-600`,
          `active:text-secondary-700`,
        ],
      },
      {
        intent: "tertiary",
        layout: "subtle",
        class: [
          `text-tertiary-800`,
          `hover:text-tertiary-900`,
          `active:text-tertiary-950`,
        ],
      },
    ],
    defaultVariants: {
      intent: "tertiary",
      layout: "filled",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
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
