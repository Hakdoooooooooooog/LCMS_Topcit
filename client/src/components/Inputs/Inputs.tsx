import styles from "./inputs.module.css";

import React from "react";

interface InputsProps {
  type: string;
  placeholder?: string;
  customIndent?: string;
  id: string | number;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
        className={`${customIndent || "indent-3"} ${styles["input"]}`}
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        autoComplete="on"
      />
      {children}
    </div>
  ) : (
    <input
      className={`${customIndent || "indent-3"} ${styles["input"]}`}
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      autoComplete="on"
    />
  );
};

export default Inputs;
