import FormField, { IFormFieldProps } from "./ui/FormInputField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import styles from "./userForm.module.css";
import { green, grey } from "@mui/material/colors";

interface UserFormProps {
  fields: Array<IFormFieldProps>;
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

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {p.fields.map((field, index) => (
        <FormField
          key={index}
          {...field}
          error={errors[field.name]}
          register={register}
        />
      ))}

      <div className={styles.btn_cta}>
        <Button
          style={{
            width: "inherit",
          }}
          type="submit"
          variant="contained"
          className="!bg-green-700 hover:!bg-green-800"
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
            className="!border-gray-700 !text-gray-700 hover:!bg-gray-700 hover:!text-white"
          >
            {p.link === "Landing" ? "Login" : p.link ?? ""}
          </Button>
        </NavLink>
      </div>
    </form>
  );
};

export default UserForm;
