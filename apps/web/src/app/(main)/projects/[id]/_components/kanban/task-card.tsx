import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  ITaskCardProps,
  StatusConfig,
  TaskStatus,
} from "@/interfaces/kanban-interface";

export default function TaskCard({
  task,
  status,
  statusConfig,
  moveTask,
  onOpenTaskDetail,
}: ITaskCardProps) {
  const currentConfig = statusConfig[status];
  const prevStatus = currentConfig.prev;
  const nextStatus = currentConfig.next;

  return (
    <div
      className="p-4 bg-white rounded-lg border border-gray-200 transition-shadow hover:shadow-md hover:cursor-pointer"
      onClick={() => onOpenTaskDetail(task.id)}
    >
      <h3 className="mb-2 font-medium text-gray-900">{task.title}</h3>
      {task.description && (
        <p className="mb-3 text-sm leading-relaxed text-gray-600 truncate">
          {task.description}
        </p>
      )}
      <div className="flex gap-2">
        {prevStatus && (
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent modal from opening
              moveTask(task.id, prevStatus);
            }}
            className="flex gap-1 items-center px-2 py-1 text-xs text-gray-700 bg-gray-100 rounded transition-colors hover:bg-gray-200"
            title={`Move to ${statusConfig[prevStatus].title}`}
          >
            <ChevronLeft size={12} />
            {statusConfig[prevStatus].title}
          </button>
        )}

        {nextStatus && (
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent modal from opening
              moveTask(task.id, nextStatus);
            }}
            className="flex gap-1 items-center px-2 py-1 text-xs text-blue-700 bg-blue-100 rounded transition-colors hover:bg-blue-200"
            title={`Move to ${statusConfig[nextStatus].title}`}
          >
            {statusConfig[nextStatus].title}
            <ChevronRight size={12} />
          </button>
        )}
      </div>
    </div>
  );
}
