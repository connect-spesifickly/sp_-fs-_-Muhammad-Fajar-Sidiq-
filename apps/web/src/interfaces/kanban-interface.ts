export type TaskStatus = "Todo" | "In_Progress" | "Done";

export interface ITask {
  id: string;
  title: string;
  description?: string;
  status: string;
  projectId: string;
  assigneeId?: string;
  createdAt: string;
  updatedAt: string;
}

export type GroupedTasks = {
  [key in TaskStatus]: ITask[];
};

export interface KanbanBoardProps {
  projectId: string;
}

export interface StatusConfigItem {
  title: string;
  color: string;
  prev: TaskStatus | null;
  next: TaskStatus | null;
}

export type StatusConfig = {
  [key in TaskStatus]: StatusConfigItem;
};

export interface KanbanColumnProps {
  status: TaskStatus;
  config: StatusConfigItem;
  tasks: ITask[];
  statusConfig: StatusConfig;
  moveTask: (taskId: string, newStatus: string) => void;
  onOpenTaskDetail: (taskId: string) => void;
}

export interface ITaskCardProps {
  task: ITask;
  status: TaskStatus;
  statusConfig: StatusConfig;
  moveTask: (taskId: string, newStatus: TaskStatus) => void;
  onOpenTaskDetail: (taskId: string) => void;
}

export interface CreateTaskModalProps {
  // ... existing code ...
}
