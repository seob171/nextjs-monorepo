import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}
const Input = ({ className, ...restProps }: Props) => {
  return <input className={twMerge(`outline-0`, className)} {...restProps} />;
};

export default Input;
