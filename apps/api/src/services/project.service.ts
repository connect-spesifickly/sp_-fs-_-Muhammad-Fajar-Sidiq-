import prisma from "../prisma";
import { CreateProject, UpdateProject } from "../interfaces/project.interface";
import { ResponseError } from "../helpers/error";

class ProjectService {
  async createProject(data: CreateProject) {
    return await prisma.project.create({
      data,
      include: {
        owner: {
          select: {
            id: true,
            email: true,
          },
        },
      },
    });
  }

  async getProjectById(id: string, userId: string) {
    // Check if user has access to this project
    const hasAccess = await this.checkProjectAccess(userId, id);
    if (!hasAccess) {
      throw new ResponseError(403, "Access denied to this project");
    }

    const project = await prisma.project.findUnique({
      where: { id },
      include: {
        owner: {
          select: {
            id: true,
            email: true,
          },
        },
        memberships: {
          include: {
            user: {
              select: {
                id: true,
                email: true,
              },
            },
          },
        },
        tasks: {
          select: {
            id: true,
            title: true,
            description: true,
            status: true,
            assigneeId: true,
          },
        },
      },
    });

    if (!project) {
      throw new ResponseError(404, "Project not found");
    }

    return project;
  }

  async getProjectsByUserId(userId: string) {
    return await prisma.project.findMany({
      where: {
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
      include: {
        owner: {
          select: {
            id: true,
            email: true,
          },
        },
        memberships: {
          include: {
            user: {
              select: {
                id: true,
                email: true,
              },
            },
          },
        },
        tasks: {
          select: {
            id: true,
            title: true,
            description: true,
            status: true,
            assigneeId: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async updateProject(id: string, data: UpdateProject, userId: string) {
    // Check if user is the owner of the project
    const isOwner = await this.checkProjectOwnership(userId, id);
    if (!isOwner) {
      throw new ResponseError(403, "Only project owner can update project");
    }

    return await prisma.project.update({
      where: { id },
      data,
      include: {
        owner: {
          select: {
            id: true,
            email: true,
          },
        },
      },
    });
  }

  async deleteProject(id: string, userId: string) {
    // Check if user is the owner of the project
    const isOwner = await this.checkProjectOwnership(userId, id);
    if (!isOwner) {
      throw new ResponseError(403, "Only project owner can delete project");
    }
    await prisma.task.deleteMany({
      where: {
        projectId: id,
      },
    });
    return await prisma.project.delete({
      where: { id },
    });
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

  private async checkProjectOwnership(userId: string, projectId: string) {
    const project = await prisma.project.findFirst({
      where: {
        id: projectId,
        ownerId: userId,
      },
    });

    return project;
  }
}

export default new ProjectService();
