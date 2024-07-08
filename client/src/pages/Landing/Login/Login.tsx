import { NavLink } from "react-router-dom";
import styles from "./login.module.css";
import Button from "../../../components/Buttons/Button";
import Inputs from "../../../components/Inputs/Inputs";
// Date: 07/08/2024
export const Login = () => {
  return (
    <div className={styles.form}>
      <form>
        <Inputs type="text" placeholder="Username" />
        <Inputs type="password" placeholder="Password" />
        <NavLink to="forgot-password">Forgot Password?</NavLink>
      </form>
      <div className={styles.btn_cta}>
        <Button type="submit" btnType="primary" value="Login">
          Login
        </Button>
        <Button href="register" type="button" btnType="secondary">
          Register
        </Button>
      </div>
    </div>
  );
};
