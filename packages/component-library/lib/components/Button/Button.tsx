"use client";
import styles from "./Button.module.css";

export default function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { className, ...restProps } = props;
  return (
    <button
      type="button"
      className={`${className} ${styles.button}`}
      {...restProps}
    >
      Button 3
    </button>
  );
}
