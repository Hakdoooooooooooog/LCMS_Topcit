import { IFormFieldInputProps } from "../../../components/ui/FormInputs/FormInputField";
import UserForm from "../../../components/Form/UserForm";
import { RegisterSchema } from "../../../schema/UserSchema";
import styles from "./register.module.css";
const Register = () => {
  const setFields: Array<IFormFieldInputProps> = [
    {
      label: "First Name",
      type: "text",
      placeholder: "Enter your first name",
      name: "firstName",
      value: "",
    },
    {
      label: "Last Name",
      type: "text",
      placeholder: "Enter your last name",
      name: "lastName",
      value: "",
    },
    {
      label: "Username",
      type: "text",
      placeholder: "Enter your username",
      name: "userName",
      value: "",
    },
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
    {
      label: "Confirm Password",
      type: "password",
      placeholder: "Confirm your password",
      name: "confirmPassword",
      value: "",
    },
  ];

  return (
    <>
      <div className={styles.form}>
        <UserForm
          fields={setFields}
          schema={RegisterSchema}
          title="Register"
          link="Landing"
        />
      </div>
    </>
  );
};

export default Register;
