import { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  size: "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  onClick: () => void;
}

export const Button = (props: ButtonProps) => {
  return <button></button>;
};
