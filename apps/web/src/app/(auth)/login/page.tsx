"use client";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/ui/logo";
import * as React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { PasswordInput } from "@/components/ui/password-input/password-input";
import { toast } from "sonner";

const validationSchema = yup.object({
  username: yup.string().required("Username field cannot be empty"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
});

interface FormValues {
  username: string;
  password: string;
}

export default function Login() {
  const [isLogin, setIsLogin] = React.useState(false);
  const router = useRouter();

  const initialValues: FormValues = {
    username: "",
    password: "",
  };

  async function handleSubmit(values: FormValues) {
    setIsLogin(true);
    try {
      const result = await signIn("credentials", {
        username: values.username,
        password: values.password,
        redirect: false,
      });
      if (result?.error) {
        console.error(result.error);
      } else {
        toast("Login success");
        router.push("/");
      }
    } catch (error) {
      toast("Login Failed");
      console.error(error);
    } finally {
      setIsLogin(false);
    }
  }

  return (
    <div className="sm:bg-gray-100 bg-white w-full h-[100vh] flex justify-center items-center">
      <div className=" bg-white rounded-[12px] w-[400px] flex flex-col items-center py-[40px] px-[16px] gap-[24px]">
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
                  <label className="text-sm font-medium">Username</label>
                  <Input
                    name="username"
                    placeholder="Input username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="h-10 font-normal text-gray-900"
                  />
                  {errors.username && touched.username && (
                    <p className="text-sm font-medium text-red-500 text-destructive">
                      {errors.username}
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
                disabled={isLogin}
                type="submit"
                className="w-full text-slate-50"
              >
                Login
              </Button>
            </Form>
          )}
        </Formik>
        <p className="font-normal text-[14px] text-sm text-slate-600">
          Don`t have an account?{" "}
          <a
            href="https://logoipsum-test.vercel.app/register"
            className="text-blue-600 underline"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
}