import type { ComponentProps } from "react";
import styles from "./Button.module.css";

function Button(props: ComponentProps<"button">) {
  const { children, className, ...rest } = props;

  return (
    <button {...rest} className={`${styles.btn} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
