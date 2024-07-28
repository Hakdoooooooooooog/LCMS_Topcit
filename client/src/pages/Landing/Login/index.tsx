// Date: 07/08/2024
import styles from "./login.module.css";
import UserForm from "../../../components/Form/UserForm";
import { IFormFieldInputProps } from "../../../components/ui/FormInputs/FormInputField";
import { LoginSchema } from "../../../schema/UserSchema";
import { z } from "zod";

type LoginSchema = z.infer<typeof LoginSchema>;

const Login = () => {
  const setFields: Array<IFormFieldInputProps> = [
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
