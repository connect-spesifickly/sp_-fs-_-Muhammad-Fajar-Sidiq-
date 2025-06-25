import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ITask } from "@/interfaces/kanban-interface";
import { Trash2, Edit, Save, X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSession } from "next-auth/react";

interface TaskDetailModalProps {
  task: ITask | null;
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (task: ITask) => Promise<void>;
  onDelete: (taskId: string) => Promise<void>;
  members: any[];
}

export default function TaskDetailModal({
  task,
  isOpen,
  onClose,
  onUpdate,
  onDelete,
  members = [],
}: TaskDetailModalProps) {
  const { data: session } = useSession();
  const [isEditing, setIsEditing] = React.useState(false);
  const [editedTask, setEditedTask] = React.useState<ITask | null>(task);

  React.useEffect(() => {
    setEditedTask(task);
    setIsEditing(false);
  }, [task]);

  if (!task) return null;

  let assignee = members.find(
    (m) =>
      String(m.id) ===
      String(isEditing ? editedTask?.assigneeId : task.assigneeId)
  );
  if (
    !assignee &&
    session?.user &&
    String(session.user.id) ===
      String(isEditing ? editedTask?.assigneeId : task.assigneeId)
  ) {
    assignee = {
      id: session.user.id,
      name: session.user.name || session.user.email,
      email: session.user.email,
    };
  }

  const handleUpdate = async () => {
    if (editedTask) {
      const payload = { ...editedTask };
      if (
        payload.assigneeId === "unassigned" ||
        payload.assigneeId === undefined ||
        payload.assigneeId === null
      ) {
        delete payload.assigneeId;
      }
      await onUpdate(payload);
      setIsEditing(false);
      onClose();
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      await onDelete(task.id);
      onClose();
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (editedTask) {
      setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white">
        <DialogHeader>
          {isEditing ? (
            <Input
              name="title"
              value={editedTask?.title || ""}
              onChange={handleInputChange}
              className="text-lg font-bold"
            />
          ) : (
            <DialogTitle>{task.title}</DialogTitle>
          )}
        </DialogHeader>
        {isEditing ? (
          <Textarea
            name="description"
            value={editedTask?.description || ""}
            onChange={handleInputChange}
            rows={4}
          />
        ) : (
          <p className="text-sm text-gray-600">{task.description}</p>
        )}
        <div className="mt-1">
          <label className="block mb-1 text-xs font-semibold">Assignee</label>
          {isEditing ? (
            <Select
              value={editedTask?.assigneeId || "unassigned"}
              onValueChange={(val) =>
                setEditedTask((prev) =>
                  prev
                    ? {
                        ...prev,
                        assigneeId: val === "unassigned" ? undefined : val,
                      }
                    : prev
                )
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select assignee" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="unassigned">Unassigned</SelectItem>
                {members.map((m) => (
                  <SelectItem key={m.id} value={String(m.id)}>
                    {m.name || m.email}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : (
            <span className="px-1 text-sm font-medium text-gray-800">
              {assignee ? assignee.name || assignee.email : "Unassigned"}
            </span>
          )}
        </div>
        <DialogFooter className="flex justify-between mt-4 w-full">
          <div className="flex gap-2 justify-end w-full">
            <Button
              variant="ghost"
              className="text-red-600 bg-red-200 hover:bg-red-100"
              onClick={handleDelete}
            >
              <Trash2 className="mr-2 w-4 h-4" />
              Delete
            </Button>
            {isEditing ? (
              <>
                <Button variant="outline" onClick={() => setIsEditing(false)}>
                  <X className="mr-2 w-4 h-4" />
                  Cancel
                </Button>
                <Button onClick={handleUpdate}>
                  <Save className="mr-2 w-4 h-4" />
                  Save
                </Button>
              </>
            ) : (
              <Button onClick={() => setIsEditing(true)}>
                <Edit className="mr-2 w-4 h-4" />
                Edit
              </Button>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
