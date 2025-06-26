"use client";

import { Button as ShadButton } from "@/components/ui/button";
import { clsx } from "clsx";
import type { ReactNode } from "react";

interface ButtonProps {
  className?: string;
  children?: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  variant: "primary" | "secondary";
}

export default function Button({
  className,
  children,
  disabled,
  onClick,
  type,
  variant = "primary",
}: ButtonProps) {
  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
    console.log("Button clicked");
  };

  return (
    <ShadButton
      type={type}
      className={`${className || ""} ${clsx("text-white", { "bg-gray-400": disabled, "bg-blue-600": variant === "primary", "bg-green-600": variant === "secondary" })}`}
      disabled={disabled}
      onClick={handleOnClick}
    >
      {children}
    </ShadButton>
  );
}
