import * as yup from "yup";

export const createProjectSchema = () => {
  return yup.object().shape({
    name: yup
      .string()
      .required("Project name is required")
      .min(3, "Project name must be at least 3 characters")
      .max(100, "Project name must not exceed 100 characters"),
  });
};

export const updateProjectSchema = () => {
  return yup.object().shape({
    name: yup
      .string()
      .optional()
      .min(3, "Project name must be at least 3 characters")
      .max(100, "Project name must not exceed 100 characters"),
  });
};

export const addMemberSchema = () => {
  return yup.object().shape({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
  });
};
