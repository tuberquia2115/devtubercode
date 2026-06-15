import styles from "./button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  label?: string;
  variant?: "primary" | "secondary" | "danger" | "outlined";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  label,
  variant = "primary",
  className,
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className || ""}`}
      {...props}
    >
      {icon}
      {children || label}
    </button>
  );
};
