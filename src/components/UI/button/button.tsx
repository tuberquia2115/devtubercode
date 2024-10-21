import styles from "./button.module.css";

type ButtonProps = {
  label: string;
  variant?: "primary" | "secondary" | "danger" | "outlined";
};

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
}) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`}>{label}</button>
  );
};
