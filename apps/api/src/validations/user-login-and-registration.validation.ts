import * as yup from "yup";

const userLoginAndRegistrationSchema = () => {
  return yup.object().shape({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
  });
};

export { userLoginAndRegistrationSchema };
