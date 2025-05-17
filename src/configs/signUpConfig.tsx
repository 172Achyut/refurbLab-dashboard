import { FormFieldConfig } from "@/types/form.types";
import { Lock, Mail, Phone, User } from "lucide-react";

export const signUpFormConfig: FormFieldConfig[] = [
    {
        id: "name",
        fieldType: "input",
        inputType: "text",
        icon: <User size={18} />,
        placeholder: "Full Name",
        required: true,
        autoComplete: "name",
    },
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
        id: "phone",
        fieldType: "input",
        inputType: "tel",
        icon: <Phone size={18} />,
        placeholder: "Phone Number (Optional)",
        autoComplete: "tel",
    },
    {
        id: "password",
        fieldType: "input",
        inputType: "password",
        icon: <Lock size={18} />,
        placeholder: "Password",
        required: true,
        autoComplete: "new-password",
    },
    {
        id: "confirmPassword",
        fieldType: "input",
        inputType: "password",
        icon: <Lock size={18} />,
        placeholder: "Confirm Password",
        required: true,
        autoComplete: "new-password",
    },
];