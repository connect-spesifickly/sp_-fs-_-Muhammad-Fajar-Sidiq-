import * as React from "react";
import TaskCard from "./task-card";
import { KanbanColumnProps } from "@/interfaces/kanban";

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
        <h2 className="font-semibold text-gray-800 text-[16px]">
          {config.title}
        </h2>
        <span className="px-[10px] py-1 text-sm text-gray-700 bg-gray-200 rounded-full">
          {tasks.length}
        </span>
      </div>

      <div className="h-full space-y-3 ">
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
          <div className="flex flex-col items-center justify-center h-full pb-12 text-center text-gray-500 ">
            No tasks in this column
          </div>
        )}
      </div>
    </div>
  );
}
