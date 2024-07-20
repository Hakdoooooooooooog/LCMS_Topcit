import { z } from "zod";

const UserSchema = z.object({
  id: z.string().uuid(),
  firstName: z.string().min(3, "First name must be at least 3 characters long"),
  lastName: z.string().min(3, "Last name must be at least 3 characters long"),
  userName: z.string().min(3, "Username must be at least 3 characters long"),
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  confirmPassword: z
    .string()
    .min(8, "Password must be at least 8 characters long"),
});

export const LoginSchema = UserSchema.pick({ email: true, password: true });

export const RegisterSchema = UserSchema.omit({
  id: true,
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});
