export interface CreateProject {
  name: string;
  ownerId: string;
}

export interface UpdateProject {
  name?: string;
}

export interface ProjectMembership {
  userId: string;
  projectId: string;
}

export interface ProjectWithMembers {
  id: string;
  name: string;
  ownerId: string;
  createdAt: Date;
  updatedAt: Date;
  owner: {
    id: string;
    email: string;
  };
  memberships: Array<{
    id: string;
    user: {
      id: string;
      email: string;
    };
  }>;
  tasks: Array<{
    id: string;
    title: string;
    description: string | null;
    status: "Todo" | "In_Progress" | "Done";
    assigneeId: string | null;
  }>;
}
