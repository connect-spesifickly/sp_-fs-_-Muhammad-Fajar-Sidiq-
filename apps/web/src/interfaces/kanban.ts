export interface ITaskCardProps {
  task: {
    id: string;
    title: string;
    description?: string;
  };
  status: keyof StatusConfig;
  statusConfig: StatusConfig;
  onMoveTask: (
    taskId: string,
    currentStatus: keyof StatusConfig,
    newStatus: keyof StatusConfig
  ) => void;
}
export interface KanbanHeaderProps {
  onCreateTask: () => void;
}

export interface KanbanColumnProps {
  status: keyof StatusConfig;
  config: StatusConfig[keyof StatusConfig];
  tasks: Task[];
  statusConfig: StatusConfig;
  onMoveTask: (
    taskId: string,
    currentStatus: string,
    newStatus: string
  ) => Promise<void>;
}

export interface CreateTaskModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  newTask: {
    title: string;
    description: string;
    status: string;
  };
  setNewTask: React.Dispatch<
    React.SetStateAction<{
      title: string;
      description: string;
      status: string;
    }>
  >;
  onSubmit: () => void;
  isSubmitting: boolean;
}

export interface KanbanBoardProps {
  projectId: string;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: "Todo" | "In_Progress" | "Done";
}

export interface StatusConfig {
  Todo: {
    title: string;
    color: string;
    prev: null;
    next: string;
  };
  In_Progress: {
    title: string;
    color: string;
    prev: string;
    next: string;
  };
  Done: {
    title: string;
    color: string;
    prev: string;
    next: null;
  };
}

export type TaskStatus = keyof StatusConfig;

export interface GroupedTasks {
  Todo: Task[];
  In_Progress: Task[];
  Done: Task[];
}
