import * as yup from "yup";

export const createTaskSchema = () => {
  return yup.object().shape({
    title: yup
      .string()
      .required("Task title is required")
      .min(3, "Task title must be at least 3 characters")
      .max(200, "Task title must not exceed 200 characters"),
    description: yup
      .string()
      .optional()
      .max(1000, "Task description must not exceed 1000 characters"),
    assigneeId: yup.string().uuid("Invalid assignee ID format").optional(),
  });
};

export const updateTaskSchema = () => {
  return yup.object().shape({
    title: yup
      .string()
      .optional()
      .min(3, "Task title must be at least 3 characters")
      .max(200, "Task title must not exceed 200 characters"),
    description: yup
      .string()
      .optional()
      .max(1000, "Task description must not exceed 1000 characters"),
    status: yup
      .string()
      .oneOf(["Todo", "In_Progress", "Done"], "Invalid task status")
      .optional(),
    assigneeId: yup.string().uuid("Invalid assignee ID format").optional(),
  });
};

export const updateTaskStatusSchema = () => {
  return yup.object().shape({
    status: yup
      .string()
      .oneOf(["Todo", "In_Progress", "Done"], "Invalid task status")
      .required("Task status is required"),
  });
};
