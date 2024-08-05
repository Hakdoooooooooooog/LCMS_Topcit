import { useState } from "react";

export const useHandleShowPassword = (name: string) => {
  const [showPassword, setshowPassword] = useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => {
    name === "password"
      ? setshowPassword(!showPassword)
      : setshowConfirmPassword(!showConfirmPassword);
  };

  const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return {
    handleClickShowPassword,
    handleMouseDownPassword,
    showPassword,
    showConfirmPassword,
  };
};
