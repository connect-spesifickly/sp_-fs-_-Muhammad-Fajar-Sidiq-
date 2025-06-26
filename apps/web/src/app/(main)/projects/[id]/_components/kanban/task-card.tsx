import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  ITaskCardProps,
} from "@/interfaces/kanban-interface";
import { useSession } from "next-auth/react";

export default function TaskCard({
  task,
  status,
  statusConfig,
  moveTask,
  onOpenTaskDetail,
  members = [],
}: ITaskCardProps & { members: any[] }) {
  const { data: session } = useSession();
  let assignee = members.find((m) => String(m.id) === String(task.assigneeId));
  if (
    !assignee &&
    session?.user &&
    String(session.user.id) === String(task.assigneeId)
  ) {
    assignee = {
      id: session.user.id,
      name: session.user.name || session.user.email,
      email: session.user.email,
    };
  }
  const currentConfig = statusConfig[status];
  const prevStatus = currentConfig.prev;
  const nextStatus = currentConfig.next;
  let initials = "?";
  if (assignee) {
    if (assignee.name) {
      initials = assignee.name
        .split(" ")
        .map((n: string) => n[0])
        .join("")
        .toUpperCase();
    } else if (assignee.email) {
      initials = assignee.email[0].toUpperCase();
    }
  }

  return (
    <div
      className="relative p-4 transition-shadow bg-white border border-gray-200 rounded-lg hover:shadow-md hover:cursor-pointer"
      onClick={() => onOpenTaskDetail(task.id)}
    >
      <div className="absolute top-2 right-2">
        <div className="flex items-center justify-center text-xs font-bold bg-blue-200 rounded-full w-7 h-7">
          {initials}
        </div>
      </div>
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
            className="flex items-center gap-1 px-2 py-1 text-xs text-gray-700 transition-colors bg-gray-100 rounded hover:bg-gray-200"
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
            className="flex items-center gap-1 px-2 py-1 text-xs text-blue-700 transition-colors bg-blue-100 rounded hover:bg-blue-200"
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
