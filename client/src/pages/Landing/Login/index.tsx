// Date: 07/08/2024
import styles from "./login.module.css";
import UserForm from "../../../components/UserForm";
import { IFormFieldProps } from "../../../components/ui/FormInputField";
import { LoginSchema } from "../../../schema/UserSchema";
import { z } from "zod";

type LoginSchema = z.infer<typeof LoginSchema>;

const Login = () => {
  const setFields: Array<IFormFieldProps> = [
    {
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      name: "email",
      value: "",
    },
    {
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      name: "password",
      value: "",
    },
  ];
  return (
    <div className={styles.form}>
      <UserForm
        fields={setFields}
        schema={LoginSchema}
        title="Login"
        link="Register"
      />
    </div>
  );
};

export default Login;
