import prisma from "../prisma";
import { CreateTask, UpdateTask } from "../interfaces/task.interface";
import { ResponseError } from "../helpers/error";

class TaskService {
  async createTask(data: CreateTask, userId: string) {
    // Check if user has access to the project
    const hasAccess = await this.checkProjectAccess(userId, data.projectId);
    if (!hasAccess) {
      throw new ResponseError(403, "Access denied to this project");
    }

    // If assigneeId is not provided or is empty, set to creator
    if (!data.assigneeId) {
      data.assigneeId = userId;
    }

    // If assigneeId is provided, verify the assignee is a member of the project
    if (data.assigneeId) {
      const assigneeAccess = await this.checkProjectAccess(
        data.assigneeId,
        data.projectId
      );
      if (!assigneeAccess) {
        throw new ResponseError(
          400,
          "Assignee must be a member of the project"
        );
      }
    }

    return await prisma.task.create({
      data,
      include: {
        assignee: {
          select: {
            id: true,
            email: true,
          },
        },
        project: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  async getTaskById(taskId: string, userId: string) {
    const task = await prisma.task.findUnique({
      where: { id: taskId },
      include: {
        assignee: {
          select: {
            id: true,
            email: true,
          },
        },
        project: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    if (!task) {
      throw new ResponseError(404, "Task not found");
    }

    // Check if user has access to the project
    const hasAccess = await this.checkProjectAccess(userId, task.projectId);
    if (!hasAccess) {
      throw new ResponseError(403, "Access denied to this task");
    }

    return task;
  }

  async getTasksByProject(projectId: string, userId: string) {
    // Check if user has access to the project
    const hasAccess = await this.checkProjectAccess(userId, projectId);
    if (!hasAccess) {
      throw new ResponseError(403, "Access denied to this project");
    }

    return await prisma.task.findMany({
      where: { projectId },
      include: {
        assignee: {
          select: {
            id: true,
            email: true,
          },
        },
      },
      orderBy: [{ status: "asc" }, { createdAt: "desc" }],
    });
  }

  async getTasksByStatus(
    projectId: string,
    status: "Todo" | "In_Progress" | "Done",
    userId: string
  ) {
    // Check if user has access to the project
    const hasAccess = await this.checkProjectAccess(userId, projectId);
    if (!hasAccess) {
      throw new ResponseError(403, "Access denied to this project");
    }

    return await prisma.task.findMany({
      where: {
        projectId,
        status,
      },
      include: {
        assignee: {
          select: {
            id: true,
            email: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });
  }

  async updateTask(taskId: string, data: UpdateTask, userId: string) {
    const task = await prisma.task.findUnique({
      where: { id: taskId },
    });

    if (!task) {
      throw new ResponseError(404, "Task not found");
    }

    // Check if user has access to the project
    const hasAccess = await this.checkProjectAccess(userId, task.projectId);
    if (!hasAccess) {
      throw new ResponseError(403, "Access denied to this task");
    }

    // If assigneeId is provided, verify the assignee is a member of the project
    if (data.assigneeId) {
      const assigneeAccess = await this.checkProjectAccess(
        data.assigneeId,
        task.projectId
      );
      if (!assigneeAccess) {
        throw new ResponseError(
          400,
          "Assignee must be a member of the project"
        );
      }
    }

    return await prisma.task.update({
      where: { id: taskId },
      data,
      include: {
        assignee: {
          select: {
            id: true,
            email: true,
          },
        },
        project: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  async updateTaskStatus(
    taskId: string,
    status: "Todo" | "In_Progress" | "Done",
    userId: string
  ) {
    const task = await prisma.task.findUnique({
      where: { id: taskId },
    });

    if (!task) {
      throw new ResponseError(404, "Task not found");
    }

    // Check if user has access to the project
    const hasAccess = await this.checkProjectAccess(userId, task.projectId);
    if (!hasAccess) {
      throw new ResponseError(403, "Access denied to this task");
    }

    return await prisma.task.update({
      where: { id: taskId },
      data: { status },
      include: {
        assignee: {
          select: {
            id: true,
            email: true,
          },
        },
        project: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  async deleteTask(taskId: string, userId: string) {
    const task = await prisma.task.findUnique({
      where: { id: taskId },
    });

    if (!task) {
      throw new ResponseError(404, "Task not found");
    }

    // Check if user has access to the project
    const hasAccess = await this.checkProjectAccess(userId, task.projectId);
    if (!hasAccess) {
      throw new ResponseError(403, "Access denied to this task");
    }

    return await prisma.task.delete({
      where: { id: taskId },
    });
  }

  async getTasksByAssignee(
    projectId: string,
    assigneeId: string,
    userId: string
  ) {
    // Check if user has access to the project
    const hasAccess = await this.checkProjectAccess(userId, projectId);
    if (!hasAccess) {
      throw new ResponseError(403, "Access denied to this project");
    }

    return await prisma.task.findMany({
      where: {
        projectId,
        assigneeId,
      },
      include: {
        assignee: {
          select: {
            id: true,
            email: true,
          },
        },
      },
      orderBy: [{ status: "asc" }, { createdAt: "desc" }],
    });
  }

  async getKanbanBoard(projectId: string, userId: string) {
    // Check if user has access to the project
    const hasAccess = await this.checkProjectAccess(userId, projectId);
    if (!hasAccess) {
      throw new ResponseError(403, "Access denied to this project");
    }

    const [todoTasks, inProgressTasks, doneTasks] = await Promise.all([
      this.getTasksByStatus(projectId, "Todo", userId),
      this.getTasksByStatus(projectId, "In_Progress", userId),
      this.getTasksByStatus(projectId, "Done", userId),
    ]);

    return {
      todo: todoTasks,
      inProgress: inProgressTasks,
      done: doneTasks,
    };
  }

  private async checkProjectAccess(userId: string, projectId: string) {
    const project = await prisma.project.findFirst({
      where: {
        id: projectId,
        OR: [
          { ownerId: userId },
          {
            memberships: {
              some: {
                userId: userId,
              },
            },
          },
        ],
      },
    });

    return project;
  }
}

export default new TaskService();
