import * as React from "react";
import TaskCard from "./task-card";
import { KanbanColumnProps } from "@/interfaces/kanban-interface";

export default function KanbanColumn({
  status,
  config,
  tasks,
  statusConfig,
  moveTask,
  onOpenTaskDetail,
  members,
}: KanbanColumnProps & { members: any[] }) {
  return (
    <div className={`rounded-lg border-2 ${config.color} p-4`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">{config.title}</h2>
        <span className="px-[10px] py-1 text-sm text-gray-700 bg-gray-200 rounded-full">
          {tasks.length}
        </span>
      </div>

      <div className="space-y-3">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            status={status}
            statusConfig={statusConfig}
            moveTask={(taskId, newStatus) => moveTask(taskId, newStatus)}
            onOpenTaskDetail={onOpenTaskDetail}
            members={members}
          />
        ))}
        {tasks.length === 0 && (
          <div className="flex justify-center items-center py-8 pb-12 text-center text-gray-500">
            <p>No tasks in this column</p>
          </div>
        )}
      </div>
    </div>
  );
}
