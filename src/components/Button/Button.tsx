"use client";

import { OurButton } from "./Button.styles";

export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

function Button({ children, onClick }: ButtonProps) {
  return <OurButton onClick={onClick}>{children}</OurButton>;
}

export default Button;
