import { z } from "zod";
import { IFormFieldInputProps } from "../components/ui/FormInputs/FormInputField";

// Link props types
export type LinkProps = {
  name: string;
  href: string;
};

export type SublinkProps = {
  name: string;
  href: string;
};

// User form props types
export type UserFormProps = {
  schema: z.ZodTypeAny;
  fields: IFormFieldInputProps[];
};
