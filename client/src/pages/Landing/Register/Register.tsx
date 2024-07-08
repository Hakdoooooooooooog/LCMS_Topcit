import styles from "./register.module.css";
import Button from "../../../components/Buttons/Button";
import Inputs from "../../../components/Inputs/Inputs";

const Register = () => {
  return (
    <>
      <div className={styles.form}>
        <form>
          <div className={styles.form_group}>
            <Inputs type="text" placeholder="First Name" />
            <Inputs type="text" placeholder="Last Name" />
          </div>
          <Inputs type="text" placeholder="Username" />
          <Inputs type="email" placeholder="Email" />
          <div className={styles.form_group}>
            <Inputs type="password" placeholder="Password" />
            <Inputs type="password" placeholder="Confirm Password" />
          </div>
        </form>
        <div className={styles.btn_cta}>
          <Button type="submit" btnType="primary" value="register">
            Register
          </Button>
          <Button href="/landing" type="button" btnType="secondary">
            Login
          </Button>
        </div>
      </div>
    </>
  );
};

export default Register;
