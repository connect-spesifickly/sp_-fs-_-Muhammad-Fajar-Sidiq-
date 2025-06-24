import { Request, Response, NextFunction } from "express";
import {
  createProjectSchema,
  updateProjectSchema,
  addMemberSchema,
} from "../validations/project.validation";
import {
  createTaskSchema,
  updateTaskSchema,
  updateTaskStatusSchema,
} from "../validations/task.validation";

const validateCreateProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const schema = createProjectSchema();
    await schema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    next(error);
  }
};

const validateUpdateProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const schema = updateProjectSchema();
    await schema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    next(error);
  }
};

const validateAddMember = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const schema = addMemberSchema();
    await schema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    next(error);
  }
};

const validateCreateTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const schema = createTaskSchema();
    await schema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    next(error);
  }
};

const validateUpdateTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const schema = updateTaskSchema();
    await schema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    next(error);
  }
};

const validateUpdateTaskStatus = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const schema = updateTaskStatusSchema();
    await schema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    next(error);
  }
};

export {
  validateCreateProject,
  validateUpdateProject,
  validateAddMember,
  validateCreateTask,
  validateUpdateTask,
  validateUpdateTaskStatus,
};
