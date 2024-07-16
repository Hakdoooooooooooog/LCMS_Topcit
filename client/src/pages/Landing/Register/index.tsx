import {
  useHandleInputsRegister,
  useShowPassword,
} from "../../../hooks/useHandleInputs";

import styles from "./register.module.css";
import Button from "../../../components/Buttons/Button";
import Inputs from "../../../components/Inputs/Inputs";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";

const Register = () => {
  const { handleChange, handleSubmit, error } = useHandleInputsRegister({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { showPassword, showConfirmPassword, handleShowPassword } =
    useShowPassword();

  return (
    <>
      <div className={styles.form}>
        <form onSubmit={handleSubmit}>
          <div className={styles.form_group}>
            <Inputs
              type="text"
              name="firstName"
              id="firstname"
              placeholder="First Name"
              onChange={handleChange}
            />
            <Inputs
              type="text"
              name="lastName"
              id="lastname"
              placeholder="Last Name"
              onChange={handleChange}
            />
          </div>
          <Inputs
            type="text"
            name="userName"
            id="username"
            placeholder="Username"
            onChange={handleChange}
          />
          <Inputs
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <div className={styles.form_group}>
            <Inputs
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
            >
              {showPassword ? (
                <EyeIcon
                  className={`absolute w-7 h-7 -top-[6px] right-2 translate-y-1/2 cursor-pointer`}
                  onClick={() => handleShowPassword({ name: "password" })}
                />
              ) : (
                <EyeSlashIcon
                  className={`absolute w-7 h-7 -top-[6px] right-2 translate-y-1/2 cursor-pointer`}
                  onClick={() => handleShowPassword({ name: "password" })}
                />
              )}
            </Inputs>
            <Inputs
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
            >
              {showConfirmPassword ? (
                <EyeIcon
                  className={`absolute w-7 h-7 -top-[6px] right-2 translate-y-1/2 cursor-pointer`}
                  onClick={() =>
                    handleShowPassword({ name: "confirmPassword" })
                  }
                />
              ) : (
                <EyeSlashIcon
                  className={`absolute w-7 h-7 -top-[6px] right-2 translate-y-1/2 cursor-pointer`}
                  onClick={() =>
                    handleShowPassword({ name: "confirmPassword" })
                  }
                />
              )}
            </Inputs>
          </div>

          <div className={styles.input_validator_error}>
            {error.hasError && <span>{error.error}</span>}
          </div>

          <div className={styles.btn_cta}>
            <Button type="submit" btnType="primary" value="register">
              Register
            </Button>
            <Button href="/landing" type="button" btnType="secondary">
              Login
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
