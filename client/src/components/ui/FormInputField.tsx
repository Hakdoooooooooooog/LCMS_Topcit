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
import { memo } from "react";

export interface IFormFieldInputProps {
  label: string;
  type: "text" | "email" | "password";
  placeholder: string;
  name: string;
  value: string | number;
}

interface IOutputProps {
  error: FormState<FieldValues>["errors"][keyof FieldValues];
  register: UseFormRegister<FieldValues>;
}

const FormInputField = memo((props: IFormFieldInputProps & IOutputProps) => {
  const {
    handleClickShowPassword,
    handleMouseDownPassword,
    showPassword,
    showConfirmPassword,
  } = useHandleShowPassword(props.name);

  return (
    <>
      <FormControl required error={props.error ? true : false}>
        <InputLabel htmlFor={props.name}>{props.label}</InputLabel>
        <OutlinedInput
          id={props.name}
          {...props.register(props.name)}
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

      {props.error?.message && (
        <p style={{ color: "red", fontSize: "1rem" }}>
          {props.error.message.toString()}
        </p>
      )}
    </>
  );
});

export default FormInputField;
