import { api } from "@/utils/axios";
import { useSession } from "next-auth/react";
import * as React from "react";
import LoadingSpinner from "./loading-spinner";
import CreateTaskModal from "./create-task-modal";
import TaskDetailModal from "./task-detail-modal";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import KanbanColumn from "./kanban-column";
import {
  GroupedTasks,
  ITask,
  KanbanBoardProps,
  StatusConfig,
  TaskStatus,
} from "@/interfaces/kanban-interface";
import { toast } from "sonner";

export function KanbanBoard({ projectId }: KanbanBoardProps) {
  const { data: session } = useSession();
  const [tasks, setTasks] = React.useState<GroupedTasks>({
    Todo: [],
    In_Progress: [],
    Done: [],
  });
  const [loading, setLoading] = React.useState(true);
  const [showCreateForm, setShowCreateForm] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = React.useState(false);
  const [selectedTask, setSelectedTask] = React.useState<ITask | null>(null);
  const [projectName, setProjectName] = React.useState("");
  const [newTask, setNewTask] = React.useState({
    title: "",
    description: "",
    status: "Todo",
  });

  const statusConfig: StatusConfig = {
    Todo: {
      title: "To Do",
      color: "border-gray-300 bg-gray-100",
      prev: null,
      next: "In_Progress",
    },
    In_Progress: {
      title: "In Progress",
      color: "border-blue-300 bg-blue-50",
      prev: "Todo",
      next: "Done",
    },
    Done: {
      title: "Done",
      color: "border-green-300 bg-green-50",
      prev: "In_Progress",
      next: null,
    },
  };

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/projects/${projectId}/tasks`, {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
      });
      const tasks: ITask[] = response.data.data;
      const groupedTasks: GroupedTasks = {
        Todo: tasks.filter((task) => task.status === "Todo"),
        In_Progress: tasks.filter((task) => task.status === "In_Progress"),
        Done: tasks.filter((task) => task.status === "Done"),
      };
      setTasks(groupedTasks);
    } catch (err) {
      console.error("Failed to fetch tasks:", err);
      toast.error("Failed to fetch tasks.");
    } finally {
      setLoading(false);
    }
  };

  const fetchProjectName = async () => {
    try {
      const response = await api.get(`/projects/${projectId}`, {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
      });
      setProjectName(response.data.data.name);
    } catch (err) {
      console.error("Failed to fetch project name:", err);
    }
  };

  const createTask = async (task: {
    title: string;
    description: string;
    status: string;
  }) => {
    try {
      setIsSubmitting(true);
      await api.post(`/projects/${projectId}/tasks`, task, {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
      });
      setNewTask({ title: "", description: "", status: "Todo" });
      setShowCreateForm(false);
      fetchTasks();
      toast.success("Task created successfully!");
    } catch (err) {
      console.error("Failed to create task:", err);
      toast.error("Failed to create task.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const moveTask = async (taskId: string, newStatus: string) => {
    try {
      await api.patch(
        `/projects/tasks/${taskId}/status`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${session?.accessToken}`,
          },
        }
      );
      fetchTasks();
      toast.success("Task status updated.");
    } catch (err) {
      console.error("Failed to move task:", err);
      toast.error("Failed to update task status.");
    }
  };

  const handleOpenTaskDetail = async (taskId: string) => {
    try {
      const response = await api.get(`/projects/tasks/${taskId}`, {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
      });
      setSelectedTask(response.data.data);
      setIsDetailModalOpen(true);
    } catch (err) {
      console.error("Failed to fetch task details:", err);
      toast.error("Failed to load task details.");
    }
  };

  const handleUpdateTask = async (updatedTask: ITask) => {
    try {
      await api.patch(
        `/projects/tasks/${updatedTask.id}`,
        {
          title: updatedTask.title,
          description: updatedTask.description,
        },
        {
          headers: {
            Authorization: `Bearer ${session?.accessToken}`,
          },
        }
      );
      fetchTasks();
      toast.success("Task updated successfully!");
    } catch (err) {
      console.error("Failed to update task:", err);
      toast.error("Failed to update task.");
    }
  };

  const handleDeleteTask = async (taskId: string) => {
    try {
      await api.delete(`/projects/tasks/${taskId}`, {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
      });
      fetchTasks();
      toast.success("Task deleted successfully!");
    } catch (err) {
      console.error("Failed to delete task:", err);
      toast.error("Failed to delete task.");
    }
  };

  const handleSubmit = () => {
    if (newTask.title.trim() === "") {
      alert("Title is required");
      return;
    }
    createTask(newTask);
  };

  React.useEffect(() => {
    if (!session) {
      return;
    }
    fetchProjectName();
    fetchTasks();
  }, [session && session.accessToken]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="p-6 mx-auto max-w-7xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-[24px] font-bold text-gray-800">{projectName}</h1>
        <Dialog open={showCreateForm} onOpenChange={setShowCreateForm}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2 text-[13px] text-white bg-blue-600 hover:bg-blue-700">
              <Plus size={16} className="scale-95" />
              Add Task
            </Button>
          </DialogTrigger>
          <CreateTaskModal
            isOpen={showCreateForm}
            onOpenChange={setShowCreateForm}
            newTask={newTask}
            setNewTask={setNewTask}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        </Dialog>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {(Object.keys(statusConfig) as TaskStatus[]).map((status) => (
          <KanbanColumn
            key={status}
            status={status}
            config={statusConfig[status]}
            tasks={tasks[status]}
            statusConfig={statusConfig}
            moveTask={moveTask}
            onOpenTaskDetail={handleOpenTaskDetail}
          />
        ))}
      </div>
      <TaskDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        task={selectedTask}
        onUpdate={handleUpdateTask}
        onDelete={handleDeleteTask}
      />
    </div>
  );
}
