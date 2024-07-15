import { useHandleInputsRegister } from "../../../hooks/useHandleInputs";

import styles from "./register.module.css";
import Button from "../../../components/Buttons/Button";
import Inputs from "../../../components/Inputs/Inputs";

const Register = () => {
  const { handleChange, handleSubmit, error } = useHandleInputsRegister({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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
          <Inputs type="email" name="email" id="email" placeholder="Email" />
          <div className={styles.form_group}>
            <Inputs
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <Inputs
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
            />
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
