import { signInSchema, signUpSchema } from "@/configs/formSchema";
import { ReactNode } from "react";
import { z } from "zod";

export type SignInFormValues = z.infer<typeof signInSchema>;
export type SignUpFormValues = z.infer<typeof signUpSchema>;
export type FieldType = "input" | "select" | "checkout" | "radio";

export interface FormFieldConfig {
  id: string;
  fieldType: FieldType;
  inputType: string;
  icon?: ReactNode;
  placeholder?: string;
  options?: { value: string; label: string }[];
  required?: boolean;
  autoComplete?: string;
}
