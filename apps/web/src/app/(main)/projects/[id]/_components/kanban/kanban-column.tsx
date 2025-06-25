import * as React from "react";
import TaskCard from "./task-card";
import { KanbanColumnProps } from "@/interfaces/kanban-interface";

export default function KanbanColumn({
  status,
  config,
  tasks,
  statusConfig,
  onMoveTask,
}: KanbanColumnProps) {
  return (
    <div className={`rounded-lg border-2 ${config.color} p-4`}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">{config.title}</h2>
        <span className="px-2 py-1 text-sm text-gray-700 bg-gray-200 rounded-full">
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
            onMoveTask={onMoveTask}
          />
        ))}
        {tasks.length === 0 && (
          <div className="py-8 text-center text-gray-500">
            No tasks in this column
          </div>
        )}
      </div>
    </div>
  );
}
