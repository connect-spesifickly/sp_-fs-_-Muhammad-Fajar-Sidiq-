import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ITaskCardProps, StatusConfig } from "@/interfaces/kanban";

export default function TaskCard({
  task,
  status,
  statusConfig,
  onMoveTask,
}: ITaskCardProps) {
  const currentConfig = statusConfig[status];
  const prevStatus = currentConfig.prev;
  const nextStatus = currentConfig.next;

  return (
    <div className="p-4 transition-shadow bg-white border border-gray-200 rounded-lg hover:shadow-md">
      <h3 className="mb-2 font-medium text-gray-900 text-[15px]">
        {task.title}
      </h3>
      {task.description && (
        <p className="mb-3 text-sm leading-relaxed text-gray-600 text-[13px] text-justify">
          {task.description}
        </p>
      )}
      <div className="flex gap-2">
        {prevStatus && (
          <button
            onClick={() =>
              onMoveTask(task.id, status, prevStatus as keyof StatusConfig)
            }
            className="flex items-center gap-1 px-2 py-1 text-xs text-gray-700 transition-colors bg-gray-100 rounded hover:bg-gray-200"
            title={`Move to ${statusConfig[prevStatus as keyof StatusConfig].title}`}
          >
            <ChevronLeft size={12} />
            {statusConfig[prevStatus as keyof StatusConfig].title}
          </button>
        )}

        {nextStatus && statusConfig[nextStatus as keyof StatusConfig] && (
          <button
            onClick={() =>
              onMoveTask(task.id, status, nextStatus as keyof StatusConfig)
            }
            className="flex items-center gap-1 px-2 py-1 text-xs text-blue-700 transition-colors bg-blue-100 rounded hover:bg-blue-200"
            title={`Move to ${statusConfig[nextStatus as keyof StatusConfig].title}`}
          >
            {statusConfig[nextStatus as keyof StatusConfig].title}
            <ChevronRight size={12} />
          </button>
        )}
      </div>
    </div>
  );
}
