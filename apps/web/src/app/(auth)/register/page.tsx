"use client";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/ui/logo";
import * as React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { Button } from "@/components/ui/button";
import { PasswordInput } from "@/components/ui/password-input/password-input";
import { api } from "@/utils/axios";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const validationSchema = yup.object({
  email: yup.string().email().required("Email field cannot be empty"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
});

interface FormValues {
  email: string;
  password: string;
}

export default function Register() {
  const [isRegister, setIsRegister] = React.useState(false);
  const router = useRouter();

  const initialValues: FormValues = {
    email: "",
    password: "",
  };

  async function handleSubmit(values: FormValues) {
    setIsRegister(true);
    try {
      const response = await api.post("/auth/register", {
        email: values.email,
        password: values.password,
      });
      if (response.status == 201) {
        toast("Account have been created");
        const result = await signIn("credentials", {
          email: values.email,
          password: values.password,
          redirect: false,
        });
        if (result?.error) {
          console.error(result.error);
          toast(
            "Registration successful, but auto-login failed. Please login manually."
          );
        } else {
          toast("Registration and login successful");
          router.push("/dashboard");
        }
      }
    } catch (err) {
      console.log(err);
      toast("Something went wrong, maybe your email is already registered");
    } finally {
      setIsRegister(false);
    }
  }

  return (
    <div className="sm:bg-gray-100 bg-white w-full h-[100vh] flex justify-center items-center">
      <div className="bg-white rounded-[12px] w-[400px] flex flex-col items-center py-[40px] px-[16px] gap-[24px]">
        <Logo className="w-[134px] h-[24px]" />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, values, handleChange, handleBlur }) => (
            <Form className="flex flex-col gap-[24px] w-full">
              <div className="flex flex-col gap-[12px]">
                <div className="flex flex-col gap-[6px]">
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Input email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="h-10 font-normal text-gray-900"
                  />
                  {errors.email && touched.email && (
                    <p className="text-sm font-medium text-red-500 text-destructive">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-[6px]">
                  <label className="text-sm font-medium">Password</label>
                  <PasswordInput
                    name="password"
                    placeholder="Input password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="h-10 font-normal text-slate-900"
                  />
                  {errors.password && touched.password && (
                    <p className="text-sm font-medium text-red-500 text-destructive">
                      {errors.password}
                    </p>
                  )}
                </div>
              </div>
              <Button
                disabled={isRegister}
                type="submit"
                className="w-full text-slate-50"
              >
                Register
              </Button>
            </Form>
          )}
        </Formik>
        <p className="font-normal text-[14px] text-sm text-slate-600">
          Already have an account?{" "}
          <a
            href="https://sp-fs-muhammad-fajar-sidiq-web-gn9n.vercel.app/login"
            className="text-blue-600 underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
