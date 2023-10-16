import { HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLElement> {}

const Button = ({ children }: ButtonProps) => {
  return <div>{children}</div>;
};

export default Button;
