import styles from "./Button.module.css";

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
}

const Button = ({
  label,
  onClick,
  variant = "primary",
  disabled = false,
}: ButtonProps) => {
  const className = `${styles.button} ${styles[variant]}`;

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
