"use client"
import { signUpSchema } from '@/configs/formSchema';
import { signUpFormConfig } from '@/configs/signUpConfig';
import { SignUpFormValues } from '@/types/form.types';
import React from 'react'
import { Form } from './Form';
import Link from 'next/link';

type Props = {}

const SignUpComponent = (props: Props) => {
    const handleSignUp = async (values: SignUpFormValues) => {
        // Implement your sign-up logic here
        console.log("Sign up values:", values);

        // Example API call
        // await registerUser(values);
    };
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-6">Create an Account</h1>
            <Form<SignUpFormValues>
                fields={signUpFormConfig}
                onSubmit={handleSignUp}
                submitButtonText="Sign Up"
                validationSchema={signUpSchema}
            />
            <p>Already have an account? <Link href="/signin">Sign In</Link></p>
        </div>
    )
}

export default SignUpComponent