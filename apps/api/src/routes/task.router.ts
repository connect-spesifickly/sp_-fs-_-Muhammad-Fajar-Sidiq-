import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import {
  validateCreateTask,
  validateUpdateTask,
  validateUpdateTaskStatus,
} from "../middlewares/project.middleware";
import TaskController from "../controllers/task.controller";

export const taskRouter = () => {
  const router = Router();

  // Apply authentication to all task routes
  router.use(authMiddleware);

  // Task CRUD routes
  router.post(
    "/:projectId/tasks",
    validateCreateTask,
    TaskController.createTask as any
  );
  router.get("/:projectId/tasks", TaskController.getTasksByProject as any);
  router.get("/:projectId/tasks/kanban", TaskController.getKanbanBoard as any);
  router.get(
    "/:projectId/tasks/status/:status",
    TaskController.getTasksByStatus as any
  );
  router.get(
    "/:projectId/tasks/assignee/:assigneeId",
    TaskController.getTasksByAssignee as any
  );
  router.get("/tasks/:taskId", TaskController.getTaskById as any);
  router.patch(
    "/tasks/:taskId",
    validateUpdateTask,
    TaskController.updateTask as any
  );
  router.patch(
    "/tasks/:taskId/status",
    validateUpdateTaskStatus,
    TaskController.updateTaskStatus as any
  );
  router.delete("/tasks/:taskId", TaskController.deleteTask as any);

  return router;
};
