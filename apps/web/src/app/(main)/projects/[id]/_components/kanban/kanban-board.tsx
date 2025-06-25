import { api } from "@/utils/axios";
import { useSession } from "next-auth/react";
import * as React from "react";
import LoadingSpinner from "./loading-spinner";
import CreateTaskModal from "./create-task-modal";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import KanbanColumn from "./kanban-column";
import { GroupedTasks, KanbanBoardProps } from "@/interfaces/kanban";

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
  const [projectName, setProjectName] = React.useState("");
  const [newTask, setNewTask] = React.useState({
    title: "",
    description: "",
    status: "Todo",
  });

  const statusConfig = {
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
      console.log("Fetched tasks:", response.data.data);
      const groupedTasks = {
        Todo: response.data.data.filter(
          (task: { status: string }) => task.status === "Todo"
        ),
        In_Progress: response.data.data.filter(
          (task: { status: string }) => task.status === "In_Progress"
        ),
        Done: response.data.data.filter(
          (task: { status: string }) => task.status === "Done"
        ),
      };
      setTasks(groupedTasks);
    } catch (err) {
      console.error("Failed to fetch tasks:", err);
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
    } catch (err) {
      console.error("Failed to create task:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const moveTask = async (
    taskId: string,
    currentStatus: string,
    newStatus: string
  ) => {
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
    } catch (err) {
      console.error("Failed to move task:", err);
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
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-[24px] font-bold text-gray-800">{projectName}</h1>
        <CreateTaskModal
          isOpen={showCreateForm}
          onOpenChange={setShowCreateForm}
          newTask={newTask}
          setNewTask={setNewTask}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />

        <Dialog open={showCreateForm} onOpenChange={setShowCreateForm}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2 text-[13px] text-white bg-blue-600 hover:bg-blue-700">
              <Plus size={16} className="scale-95" />
              Add Task
            </Button>
          </DialogTrigger>
        </Dialog>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {Object.entries(statusConfig).map(([status, config]) => (
          <KanbanColumn
            key={status}
            status={status as keyof typeof statusConfig}
            config={config}
            tasks={tasks[status as keyof typeof statusConfig]}
            statusConfig={statusConfig}
            onMoveTask={moveTask}
          />
        ))}
      </div>
    </div>
  );
}
