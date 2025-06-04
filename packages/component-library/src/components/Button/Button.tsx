"use client";

import { Button as MuiButton } from "@/components/ui/button";

export default function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { className, ...restProps } = props;
  return (
    <MuiButton type="button" className={`${className || ""}`} {...restProps}>
      Button 3
    </MuiButton>
  );
}
