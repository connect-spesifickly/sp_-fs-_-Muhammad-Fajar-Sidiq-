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

interface TaskDetailModalProps {
  task: ITask | null;
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (task: ITask) => Promise<void>;
  onDelete: (taskId: string) => Promise<void>;
}

export default function TaskDetailModal({
  task,
  isOpen,
  onClose,
  onUpdate,
  onDelete,
}: TaskDetailModalProps) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [editedTask, setEditedTask] = React.useState<ITask | null>(task);

  React.useEffect(() => {
    setEditedTask(task);
    setIsEditing(false); // Reset edit mode when task changes
  }, [task]);

  if (!task) return null;

  const handleUpdate = async () => {
    if (editedTask) {
      await onUpdate(editedTask);
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

        <DialogFooter className="flex justify-between mt-4 w-full">
          <Button
            variant="ghost"
            className="text-red-600 bg-red-200 hover:bg-red-100"
            onClick={handleDelete}
          >
            <Trash2 className="mr-2 w-4 h-4" />
            Delete
          </Button>
          <div className="flex gap-2">
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
