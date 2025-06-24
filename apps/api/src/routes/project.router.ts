import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import {
  validateCreateProject,
  validateUpdateProject,
} from "../middlewares/project.middleware";
import ProjectController from "../controllers/project.controller";
export const projectRouter = () => {
  const router = Router();

  // Apply authentication to all project routes
  router.use(authMiddleware);

  // Project CRUD routes
  router.post(
    "/",
    validateCreateProject,
    ProjectController.createProject as any
  );
  router.get("/", ProjectController.getProjects as any);
  router.get("/:id", ProjectController.getProjectById as any);
  router.put(
    "/:id",
    validateUpdateProject,
    ProjectController.updateProject as any
  );
  router.delete("/:id", ProjectController.deleteProject as any);

  return router;
};
