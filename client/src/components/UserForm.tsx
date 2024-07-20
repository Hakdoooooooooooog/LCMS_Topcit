import FormField, { FormFieldProps } from "./ui/FormField";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import styles from "./userForm.module.css";

interface UserFormProps {
  fields: Array<FormFieldProps>;
  schema: any;
}

interface IUserForm {
  title: string;
  link?: "Register" | "Landing";
}

const UserForm = (p: UserFormProps & IUserForm) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(p.schema),
  });

  const getInitialState = () => {
    let state: { [key: string]: any } = {};
    p.fields.forEach((field: any) => {
      state[field.name] = field.value;
    });
    return state;
  };

  const [state, setState] = useState(getInitialState());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {p.fields.map((field, index) => (
        <FormField
          {...field}
          key={index}
          value={state[field.name]}
          error={errors[field.name]}
          register={register}
          onChange={handleChange}
        />
      ))}

      <div className={styles.btn_cta}>
        <Button
          style={{
            width: "inherit",
          }}
          type="submit"
          variant="contained"
          color="primary"
        >
          {p.title}
        </Button>
        <NavLink
          to={`${
            p.link?.toLowerCase() === "landing" ? "/landing" : "register"
          }`}
        >
          <Button
            style={{
              width: "inherit",
            }}
            variant="outlined"
            color="primary"
          >
            {p.link === "Landing" ? "Login" : p.link ?? ""}
          </Button>
        </NavLink>
      </div>
    </form>
  );
};

export default UserForm;
