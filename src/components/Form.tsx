"use client"
import { FormFieldConfig } from "@/types/form.types";
import { useForm } from "@tanstack/react-form";
import React, { useState } from 'react'

interface FormProps<T> {
    fields?: FormFieldConfig[]
    onSubmit: (values: T) => void
    submitButtonText: string
    defaultValues?: Partial<T>
    validationSchema?: any
}

export function Form<T>({ fields,
    onSubmit,
    submitButtonText,
    defaultValues = {},
    validationSchema }: FormProps<T>) {

    const [formError, setFormError] = useState<string | null>(null);

    const form = useForm({
        defaultValues: defaultValues as T,
        onSubmit: async ({ value }) => {
            try {
                await onSubmit(value);
            } catch (error) {
                setFormError(error instanceof Error ? error.message : "An error occurred");
            }
        },
    });
    return (
        <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    form.handleSubmit();
                }}
                className="space-y-4"
            >
                {fields?.map((field) => (
                    <form.Field
                        key={field.id}
                        name={field.id}
                    >
                        {(fieldApi) => (
                            <div>
                                <div className="relative">
                                    {field.icon && (
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                            {field.icon}
                                        </div>
                                    )}
                                    <input
                                        id={field.id}
                                        type={field.inputType || "text"}
                                        placeholder={field.placeholder}
                                        // value={fieldApi.state.value ?? ""}
                                        // onChange={(e) => fieldApi.setValue(e.target.value)}
                                        onBlur={fieldApi.handleBlur}
                                        autoComplete={field.autoComplete}
                                        className={`w-full rounded-md border ${fieldApi.state.meta.errors?.length ? "border-red-500" : "border-gray-300"
                                            } shadow-sm py-2 ${field.icon ? "pl-10" : "pl-3"} pr-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                                    />
                                </div>
                                {fieldApi.state.meta.errors?.length ? (
                                    <p className="mt-1 text-sm text-red-600">{fieldApi.state.meta.errors[0]}</p>
                                ) : null}
                            </div>
                        )}
                    </form.Field>
                ))}

                {formError && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                        <p className="text-sm text-red-600">{formError}</p>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={form.state.isSubmitting}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                >
                    {form.state.isSubmitting ? "Processing..." : submitButtonText}
                </button>
            </form>
        </div>
    )
}

