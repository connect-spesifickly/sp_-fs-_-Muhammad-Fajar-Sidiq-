import { NextFunction, Response } from "express";
import { ApiResponse } from "../helpers/api-response";
import taskService from "../services/task.service";
import { UserRequest } from "../interfaces/middleware.interface";

class TaskController {
  async createTask(req: UserRequest, res: Response, next: NextFunction) {
    try {
      const { projectId } = req.params;
      const userId = req.user.id;
      const result = await taskService.createTask(
        {
          ...req.body,
          projectId,
        },
        userId
      );
      ApiResponse({
        res,
        statusCode: 201,
        message: "Task created successfully",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  async getTaskById(req: UserRequest, res: Response, next: NextFunction) {
    try {
      const { taskId } = req.params;
      const userId = req.user.id;
      const result = await taskService.getTaskById(taskId, userId);
      ApiResponse({
        res,
        statusCode: 200,
        message: "Task retrieved successfully",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  async getTasksByProject(req: UserRequest, res: Response, next: NextFunction) {
    try {
      const { projectId } = req.params;
      const userId = req.user.id;
      const result = await taskService.getTasksByProject(projectId, userId);
      ApiResponse({
        res,
        statusCode: 200,
        message: "Project tasks retrieved successfully",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  async getTasksByStatus(req: UserRequest, res: Response, next: NextFunction) {
    try {
      const { projectId, status } = req.params;
      const userId = req.user.id;
      const result = await taskService.getTasksByStatus(
        projectId,
        status as "Todo" | "In_Progress" | "Done",
        userId
      );
      ApiResponse({
        res,
        statusCode: 200,
        message: `${status} tasks retrieved successfully`,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateTask(req: UserRequest, res: Response, next: NextFunction) {
    try {
      const { taskId } = req.params;
      const userId = req.user.id;
      const result = await taskService.updateTask(taskId, req.body, userId);
      ApiResponse({
        res,
        statusCode: 200,
        message: "Task updated successfully",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateTaskStatus(req: UserRequest, res: Response, next: NextFunction) {
    try {
      const { taskId } = req.params;
      const { status } = req.body;
      const userId = req.user.id;
      const result = await taskService.updateTaskStatus(taskId, status, userId);
      ApiResponse({
        res,
        statusCode: 200,
        message: "Task status updated successfully",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteTask(req: UserRequest, res: Response, next: NextFunction) {
    try {
      const { taskId } = req.params;
      const userId = req.user.id;
      await taskService.deleteTask(taskId, userId);
      ApiResponse({
        res,
        statusCode: 200,
        message: "Task deleted successfully",
        data: null,
      });
    } catch (error) {
      next(error);
    }
  }

  async getTasksByAssignee(
    req: UserRequest,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { projectId, assigneeId } = req.params;
      const userId = req.user.id;
      const result = await taskService.getTasksByAssignee(
        projectId,
        assigneeId,
        userId
      );
      ApiResponse({
        res,
        statusCode: 200,
        message: "Assignee tasks retrieved successfully",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  async getKanbanBoard(req: UserRequest, res: Response, next: NextFunction) {
    try {
      const { projectId } = req.params;
      const userId = req.user.id;
      const result = await taskService.getKanbanBoard(projectId, userId);
      ApiResponse({
        res,
        statusCode: 200,
        message: "Kanban board retrieved successfully",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new TaskController();
