import FormField, {
  IFormFieldInputProps,
} from "../ui/FormInputs/FormInputField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import styles from "./userForm.module.css";
import { z } from "zod";
import axios from "axios";

interface IUserFormProps {
  fields: Array<IFormFieldInputProps>;
  schema: z.ZodTypeAny;
}

interface IUserForm {
  title: string;
  link?: "Register" | "Landing";
}

const UserForm = (p: IUserFormProps & IUserForm) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof p.schema>>({
    resolver: zodResolver(p.schema),
  });

  const onSubmit = async (data: z.infer<typeof p.schema>) => {
    if (p.title === "Register") {
      try {
        await axios
          .post("http://localhost:3000/api/user/register", data)
          .then((res) => {
            console.log(res.data);
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await axios
          .post("http://localhost:3000/api/user/login", data)
          .then((res) => {
            console.log(res.data);
          });
      } catch (error) {
        console.log(error);
      }
    }
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
          disabled={isSubmitting}
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
