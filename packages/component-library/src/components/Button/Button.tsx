"use client";

import { Button as MuiButton } from "@/components/ui/button";

interface ButtonProps {
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function Button({
  className,
  type,
  onClick,
  children,
}: ButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <MuiButton
      type={type || "button"}
      className={`bg-blue-600 ${className || ""}`}
      onClick={handleClick}
    >
      {children}
    </MuiButton>
  );
}
