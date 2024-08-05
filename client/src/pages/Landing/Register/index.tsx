import UserForm from "../../../components/Form/UserForm";
import { setRegisterFields } from "../../../lib/constants";
import { RegisterSchema } from "../../../schema/UserSchema";
import { z } from "zod";
import styles from "./register.module.css";

type RegisterSchema = z.infer<typeof RegisterSchema>;
const Register = () => {
  return (
    <>
      <div className={styles.form}>
        <UserForm
          fields={setRegisterFields}
          schema={RegisterSchema}
          title="Register"
          link="Landing"
        />
      </div>
    </>
  );
};

export default Register;
