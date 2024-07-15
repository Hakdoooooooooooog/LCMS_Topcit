// Date: 07/08/2024

import { NavLink } from "react-router-dom";
import styles from "./login.module.css";
import Button from "../../../components/Buttons/Button";
import Inputs from "../../../components/Inputs/Inputs";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";
import { useHandleInputsLogin } from "../../../hooks/useHandleInputs";

import { useState } from "react";

export const Login = () => {
  const { handleChange, handleSubmit, error } = useHandleInputsLogin({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);

    const password = document.querySelector("input[name='password']");

    if (password) {
      if (showPassword) {
        password.setAttribute("type", "password");
      } else {
        password.setAttribute("type", "text");
      }
    }
  };

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <Inputs
          type="text"
          onChange={handleChange}
          name="username"
          id="user"
          placeholder="Username"
        />
        <Inputs
          type="password"
          name="password"
          id="pass"
          onChange={handleChange}
          placeholder="Password"
        >
          {showPassword ? (
            <EyeIcon
              className={`absolute w-7 h-7 -top-[6px] right-2 translate-y-1/2 cursor-pointer`}
              onClick={handleShowPassword}
            />
          ) : (
            <EyeSlashIcon
              className={`absolute w-7 h-7 -top-[6px] right-2 translate-y-1/2 cursor-pointer`}
              onClick={handleShowPassword}
            />
          )}
        </Inputs>

        <div className={styles.input_validator_error}>
          {error.hasError && (
            <p className={styles.error}>
              <span>{error.error}</span>
            </p>
          )}
        </div>

        <div className={styles.forgot_password}>
          <NavLink to="forgot-password">Forgot Password?</NavLink>
        </div>

        <div className={styles.btn_cta}>
          <Button type="submit" btnType="primary" value="Login">
            Login
          </Button>
          <Button href="register" btnType="secondary">
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};
