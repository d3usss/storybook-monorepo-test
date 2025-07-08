"use client";

import { Button as MuiButton } from "@/components/ui/button";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  children,
  className,
  onClick,
  disabled,
}: ButtonProps) {
  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }

    console.log("Button clicked.");
  };

  return (
    <MuiButton
      type="button"
      className={`bg-green-300 hover:bg-green-400 text-black font-semibold py-2 px-4 rounded ${className || ""}`}
      onClick={handleOnClick}
      disabled={disabled}
    >
      {children}
    </MuiButton>
  );
}
