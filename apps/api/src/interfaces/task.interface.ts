export interface CreateTask {
  title: string;
  description?: string;
  projectId: string;
  assigneeId?: string;
}

export interface UpdateTask {
  title?: string;
  description?: string;
  status?: "Todo" | "In_Progress" | "Done";
  assigneeId?: string;
}

export interface TaskWithDetails {
  id: string;
  title: string;
  description: string | null;
  status: "Todo" | "In_Progress" | "Done";
  projectId: string;
  assigneeId: string | null;
  createdAt: Date;
  updatedAt: Date;
  assignee?: {
    id: string;
    email: string;
  } | null;
  project?: {
    id: string;
    name: string;
  };
}
