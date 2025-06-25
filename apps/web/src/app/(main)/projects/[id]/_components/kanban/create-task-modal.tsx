import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CreateTaskModalProps } from "@/interfaces/kanban";

export default function CreateTaskModal({
  isOpen,
  onOpenChange,
  newTask,
  setNewTask,
  onSubmit,
  isSubmitting,
}: CreateTaskModalProps) {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onSubmit();
  };
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white w-full max-w-[420px]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <DialogHeader>
            <DialogTitle>Create New Task</DialogTitle>
          </DialogHeader>

          <Input
            name="title"
            placeholder="Enter task title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            className="h-10 font-normal text-gray-900"
            required
          />

          <Textarea
            name="description"
            placeholder="Enter task description"
            value={newTask.description}
            onChange={(e) =>
              setNewTask({ ...newTask, description: e.target.value })
            }
            className="font-normal text-gray-900 resize-none"
            rows={3}
          />

          <Select
            value={newTask.status}
            onValueChange={(value) => setNewTask({ ...newTask, status: value })}
          >
            <SelectTrigger className="h-10">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Todo">To Do</SelectItem>
              <SelectItem value="In_Progress">In Progress</SelectItem>
              <SelectItem value="Done">Done</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex justify-end w-full gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="w-fit"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting || !newTask.title.trim()}
              className="bg-blue-600 w-fit hover:bg-blue-700 text-slate-50"
            >
              {isSubmitting ? "Creating..." : "Create Task"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
