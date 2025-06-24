import { NextFunction, Response } from "express";
import { ApiResponse } from "../helpers/api-response";
import projectService from "../services/project.service";
import { UserRequest } from "../interfaces/middleware.interface";

class ProjectController {
  async createProject(req: UserRequest, res: Response, next: NextFunction) {
    try {
      const userId = req.user.id;
      const result = await projectService.createProject({
        ...req.body,
        ownerId: userId,
      });
      ApiResponse({
        res,
        statusCode: 201,
        message: "Project created successfully",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  async getProjects(req: UserRequest, res: Response, next: NextFunction) {
    try {
      const userId = req.user.id;
      const result = await projectService.getProjectsByUserId(userId);
      ApiResponse({
        res,
        statusCode: 200,
        message: "Projects retrieved successfully",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  async getProjectById(req: UserRequest, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const userId = req.user.id;
      const result = await projectService.getProjectById(id, userId);
      ApiResponse({
        res,
        statusCode: 200,
        message: "Project retrieved successfully",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateProject(req: UserRequest, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const userId = req.user.id;
      const result = await projectService.updateProject(id, req.body, userId);
      ApiResponse({
        res,
        statusCode: 200,
        message: "Project updated successfully",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteProject(req: UserRequest, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const userId = req.user.id;
      await projectService.deleteProject(id, userId);
      ApiResponse({
        res,
        statusCode: 200,
        message: "Project deleted successfully",
        data: null,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new ProjectController();
