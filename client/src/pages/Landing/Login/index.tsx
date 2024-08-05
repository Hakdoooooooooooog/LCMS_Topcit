// Date: 07/08/2024
import styles from "./login.module.css";
import UserForm from "../../../components/Form/UserForm";
import { LoginSchema } from "../../../schema/UserSchema";
import { z } from "zod";
import { setLoginFields } from "../../../lib/constants";

type LoginSchema = z.infer<typeof LoginSchema>;

const Login = () => {
  return (
    <div className={styles.form}>
      <UserForm
        fields={setLoginFields}
        schema={LoginSchema}
        title="Login"
        link="Register"
      />
    </div>
  );
};

export default Login;
