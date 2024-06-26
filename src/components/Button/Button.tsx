import { FC } from "react";

interface ButtonProps {
  label: string;
}

export const Button: FC<ButtonProps> = ({label}) => {
  return (
    <button>
      {label}
    </button>
  );
}