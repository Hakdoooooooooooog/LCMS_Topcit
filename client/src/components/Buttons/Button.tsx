import styles from "./button.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  btnType?: "primary" | "secondary" | "tertiary";
  value?: string;
  href?: string;
  children?: React.ReactNode;
};

const Button = ({ type, btnType, value, href, children }: ButtonProps) => {
  return (
    <>
      {href ? (
        <Link to={href} className={`w-2/4`}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            value={value}
            className={`w-full tracking-widest ${styles["button"]} ${
              btnType === btnType
                ? `${styles[btnType + "-btn"]}`
                : `${styles["tertiary-btn"]}`
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
          value={value}
          className={`w-2/4 tracking-widest ${styles["button"]} ${
            btnType === btnType
              ? `${styles[btnType + "-btn"]}`
              : `${styles["tertiary-btn"]}`
          }`}
        >
          {children}
        </motion.button>
      )}
    </>
  );
};

export default Button;
