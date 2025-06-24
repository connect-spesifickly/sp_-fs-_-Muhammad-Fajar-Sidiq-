import prisma from "../prisma";
import { ResponseError } from "../helpers/error";

class MemberService {
  async addMember(projectId: string, email: string, userId: string) {
    // Check if user is the owner of the project
    const isOwner = await this.checkProjectOwnership(userId, projectId);
    if (!isOwner) {
      throw new ResponseError(403, "Only project owner can add members");
    }

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      throw new ResponseError(404, "User not found");
    }

    // Check if user is trying to add themselves
    if (user.id === userId) {
      throw new ResponseError(400, "Cannot add yourself as a member");
    }

    // Check if membership already exists
    const existingMembership = await prisma.membership.findFirst({
      where: {
        userId: user.id,
        projectId: projectId,
      },
    });

    if (existingMembership) {
      throw new ResponseError(400, "User is already a member of this project");
    }

    return await prisma.membership.create({
      data: {
        userId: user.id,
        projectId,
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
          },
        },
      },
    });
  }

  async removeMember(projectId: string, memberId: string, userId: string) {
    // Check if user is the owner of the project
    const isOwner = await this.checkProjectOwnership(userId, projectId);
    if (!isOwner) {
      throw new ResponseError(403, "Only project owner can remove members");
    }

    // Check if user is trying to remove themselves
    if (memberId === userId) {
      throw new ResponseError(400, "Cannot remove yourself from the project");
    }

    const membership = await prisma.membership.findFirst({
      where: {
        userId: memberId,
        projectId,
      },
    });

    if (!membership) {
      throw new ResponseError(404, "Membership not found");
    }

    return await prisma.membership.delete({
      where: { id: membership.id },
    });
  }

  async getProjectMembers(projectId: string, userId: string) {
    // Check if user has access to this project
    const hasAccess = await this.checkProjectAccess(userId, projectId);
    if (!hasAccess) {
      throw new ResponseError(403, "Access denied to this project");
    }

    return await prisma.membership.findMany({
      where: {
        projectId,
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
          },
        },
      },
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

export default new MemberService();
