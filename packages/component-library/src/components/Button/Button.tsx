"use client";

import { Button } from "@/components/ui/button";

interface ButtonComponentProps {
  className?: string;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export default function ButtonComponent({
  className,
  children,
  type,
  onClick,
}: ButtonComponentProps) {
  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Button
      className={`${className || ""} bg-blue-600`}
      type={type || "button"}
      onClick={handleOnClick}
    >
      {children}
    </Button>
  );
}
