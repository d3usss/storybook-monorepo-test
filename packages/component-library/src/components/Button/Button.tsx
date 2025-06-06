"use client";

import { Button as MuiButton } from "@/components/ui/button";

export default function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { className, ...restProps } = props;
  return (
    <MuiButton
      type="button"
      className={`${className || ""} bg-blue-600`}
      {...restProps}
    >
      Button
    </MuiButton>
  );
}
