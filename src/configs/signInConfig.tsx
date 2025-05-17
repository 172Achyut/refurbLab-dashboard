import { FormFieldConfig } from "@/types/form.types";
import { Lock, Mail } from "lucide-react";

export const signInFormConfig: FormFieldConfig[] = [
    {
        id: "email",
        fieldType: "input",
        inputType: "email",
        icon: <Mail size={18} />,
        placeholder: "Email",
        required: true,
        autoComplete: "email",
    },
    {
        id: "password",
        fieldType: "input",
        inputType: "password",
        icon: <Lock size={18} />,
        placeholder: "Password",
        required: true,
        autoComplete: "current-password",
    },
];