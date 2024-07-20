// Date: 07/08/2024
import styles from "./login.module.css";
import UserForm from "../../../components/UserForm";
import { FormFieldProps } from "../../../components/ui/FormField";
import { LoginSchema } from "../../../schema/UserSchema";
import { z } from "zod";

type LoginSchema = z.infer<typeof LoginSchema>;

export const Login = () => {
  const setFields: Array<FormFieldProps> = [
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
