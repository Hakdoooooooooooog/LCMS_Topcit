import styles from "./inputs.module.css";

import React from "react";

interface InputsProps {
  type: string;
  placeholder?: string | undefined;
  customIndent?: string | undefined;
  name?: string;

  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
  children?: React.ReactNode;
}

const Inputs = ({
  type,
  placeholder,
  customIndent,
  name,
  onChange,
  children,
}: InputsProps) => {
  return children ? (
    <div className="w-full relative">
      <input
        className={`${customIndent || "indent-7"} ${styles["input"]}`}
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />

      {children}
    </div>
  ) : (
    <input
      className={`${customIndent || "indent-7"} ${styles["input"]}`}
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
    />
  );
};

export default Inputs;
