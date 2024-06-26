import { FC } from "react";

interface ButtonProps {
  label: string;
  counter: number;
}

export const Button: FC<ButtonProps> = ({label, counter}) => {
  return (
    <button>
      {label}
      {counter}
    </button>
  );
}