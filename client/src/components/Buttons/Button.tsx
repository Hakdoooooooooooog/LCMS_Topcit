import styles from "./button.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  btnType?: "primary" | "secondary";
  value?: string;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children?: React.ReactNode;
}

const Button = ({
  type,
  btnType,
  value,
  href,
  onClick,
  children,
}: ButtonProps) => {
  return (
    <>
      {href ? (
        <Link to={href} className={`w-2/4`}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type={type}
            value={value}
            className={`w-full tracking-widest ${styles["button"]} ${
              btnType === "primary"
                ? `${styles["primary-btn"]}`
                : `${styles["secondary-btn"]}`
            }`}
          >
            {children}
          </motion.button>
        </Link>
      ) : (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type={type}
          onClick={onClick}
          value={value}
          className={`w-2/4 tracking-widest ${styles["button"]} ${
            btnType === "primary"
              ? `${styles["primary-btn"]}`
              : `${styles["secondary-btn"]}`
          }`}
        >
          {children}
        </motion.button>
      )}
    </>
  );
};

export default Button;
