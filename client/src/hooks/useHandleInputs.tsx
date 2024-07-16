import { useState, useEffect, MouseEventHandler } from "react";
export const useHandleInputsLogin = (props: any) => {
  const [inputs, setInputs] = useState({
    ...props,
  });
  const [error, setError] = useState({
    error: "",
    hasError: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(JSON.stringify(inputs, null, 2));
  };

  useEffect(() => {
    const validate = () => {
      let hasError = false;
      let error = "";

      if (inputs.username === "" || inputs.password === "") {
        error = "Username and Password are required";
        hasError = true;
      }

      setError({
        error,
        hasError,
      });
    };
    validate();
  }, [inputs]);

  return { handleChange, handleSubmit, error };
};

export const useHandleInputsRegister = (props: any) => {
  const [inputs, setInputs] = useState({
    ...props,
  });
  const [error, setError] = useState({
    error: "",
    hasError: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(JSON.stringify(inputs, null, 2));
  };

  useEffect(() => {
    const validate = () => {
      let hasError = false;
      let error = "";

      if (
        inputs.firstName === "" ||
        inputs.lastName === "" ||
        inputs.userName === "" ||
        inputs.email === "" ||
        inputs.password === "" ||
        inputs.confirmPassword === ""
      ) {
        error = "All fields are required";
        hasError = true;
      }

      if (inputs.password !== inputs.confirmPassword) {
        error = "Passwords do not match";
        hasError = true;
      }

      setError({
        error,
        hasError,
      });
    };
    validate();
  }, [inputs]);

  return { handleChange, handleSubmit, error };
};

export const useShowPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleShowPassword = ({ name }: { name: string }) => {
    if (name === "password") {
      setShowPassword(!showPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }

    const passInput = document.querySelector(
      `input[name=${name}]`
    ) as HTMLInputElement;

    if (passInput) {
      if (passInput.type === "password") {
        passInput.type = "text";
      } else {
        passInput.type = "password";
      }
    }
  };

  return { showPassword, showConfirmPassword, handleShowPassword };
};
