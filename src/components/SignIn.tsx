"use client"
import { SignInFormValues } from '@/types/form.types';
import React from 'react'
import { Form } from './Form';
import { signInFormConfig } from '@/configs/signInConfig';
import { signInSchema } from '@/configs/formSchema';
import Link from 'next/link';

type Props = {}

const SignInComponent = (props: Props) => {
    const handleSignIn = async (values: SignInFormValues) => {
        // Implement your sign-in logic here
        console.log("Sign in values:", values);

        // Example API call
        // await signInUser(values);
    };

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-6">Sign In</h1>
            <Form<SignInFormValues>
                fields={signInFormConfig}
                onSubmit={handleSignIn}
                submitButtonText="Sign In"
                validationSchema={signInSchema}
            />
            <p>Dont have an account? <Link href="/signup">Sign Up Now</Link></p>
        </div>
    )
}

export default SignInComponent