import * as React from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { KanbanHeaderProps } from "@/interfaces/kanban";

export function KanbanHeader({ onCreateTask }: KanbanHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-bold text-gray-800">Kanban Board</h1>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700">
            <Plus size={16} />
            Add Task
          </Button>
        </DialogTrigger>
      </Dialog>
    </div>
  );
}
