"use client";

export default function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { className, ...restProps } = props;
  return (
    <div className="bg-(--color-primary)">
      <button
        type="button"
        className={`${className || ""} border-2 border-amber-900 p-(--padding-small)`}
        {...restProps}
      >
        Button 3
      </button>
    </div>
  );
}
