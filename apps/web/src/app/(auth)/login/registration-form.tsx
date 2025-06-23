"use client";

import * as React from "react";
import { RegistrationFormValues } from "../../../interfaces/registration-form";
import { useFormik } from "formik";
import { technicianRegistrationSchema } from "../../../validations/registration";

export default function RegistrationForm() {
  const formik = useFormik<RegistrationFormValues>({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: technicianRegistrationSchema,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col items-center justify-between flex-1 w-full h-full gap-4 bg-gray-100"
    >
      Our Form (nda` perlu register kah?` langsung login)
    </form>
  );
}
