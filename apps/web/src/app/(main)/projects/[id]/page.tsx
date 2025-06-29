"use client";
import * as React from "react";
import { KanbanBoard } from "./_components/kanban/kanban-board";
import { useParams } from "next/navigation";

export default function Project() {
  const params = useParams<{ id: string }>();
  const projectId = params.id || "";
  return (
    <div className="border-[1px] rounded-md border-gray-300 w-full min-h-[85vh] mb-16 md:mb-0 my-3">
      <KanbanBoard projectId={projectId}></KanbanBoard>
    </div>
  );
}
