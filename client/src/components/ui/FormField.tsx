import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { FieldValues, FormState, UseFormRegister } from "react-hook-form";
import { useHandleShowPassword } from "../../hooks/useHandleShowPassword";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";

export interface FormFieldProps {
  label: string;
  type: "text" | "email" | "password";
  placeholder: string;
  name: string;
  value: string | number;
}

interface OutputProps {
  error: FormState<FieldValues>["errors"][keyof FieldValues];
  register: UseFormRegister<FieldValues>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField = (props: FormFieldProps & OutputProps) => {
  const {
    handleClickShowPassword,
    handleMouseDownPassword,
    showPassword,
    showConfirmPassword,
  } = useHandleShowPassword(props.name);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e);
  };

  return (
    <>
      <FormControl error={props.error ? true : false}>
        <InputLabel htmlFor={props.name}>{props.label}</InputLabel>
        <OutlinedInput
          {...props.register(props.name)}
          id={props.name}
          type={
            props.name === "password"
              ? showPassword
                ? "text"
                : "password"
              : props.name === "confirmPassword"
              ? showConfirmPassword
                ? "text"
                : "password"
              : props.type
          }
          onChange={handleChange}
          endAdornment={
            props.name === "password" ? (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? (
                    <EyeSlashIcon height={25} width={25} />
                  ) : (
                    <EyeIcon height={25} width={25} />
                  )}
                </IconButton>
              </InputAdornment>
            ) : props.name === "confirmPassword" ? (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showConfirmPassword ? (
                    <EyeSlashIcon height={25} width={25} />
                  ) : (
                    <EyeIcon height={25} width={25} />
                  )}
                </IconButton>
              </InputAdornment>
            ) : null
          }
          label={props.label}
        />
      </FormControl>

      {props.error && (
        <p style={{ color: "red", fontSize: "0.8rem" }}>
          {props.error.message?.toString()}
        </p>
      )}
    </>
  );
};

export default FormField;
