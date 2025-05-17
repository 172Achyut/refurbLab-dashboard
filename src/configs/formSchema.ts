import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(6, "Password must atleast be 6 characters"),
});

export const signUpSchema = z
  .object({
    firstName: z.string().min(1, "FirstName is required"),
    lastName: z.string().min(1, "LastName is required"),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    phone: z
      .string()
      .min(10, "Phone Number must be atleast 10 digits")
      .optional(),
    password: z.string().min(6, "Password must atleast be 6 characters"),
    confirmPassword: z.string().min(1, "Confirm Password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
