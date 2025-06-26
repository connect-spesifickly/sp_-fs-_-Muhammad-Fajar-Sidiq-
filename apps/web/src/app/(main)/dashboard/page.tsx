"use client";
import { api } from "@/utils/axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import {  useRouter } from "next/navigation";
import * as React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [projects, setProjects] = React.useState([]);
  const [showNoProjectMessage, setShowNoProjectMessage] = React.useState(false);

  React.useEffect(() => {
    const waitForSession = async () => {
      await new Promise((resolve) => {
        setTimeout(resolve, 4500);
      });
      if (!session) {
        router.push("/login");
      } else {
        const project = await api.get("/projects", {
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          },
        });
        setProjects(project.data.data);
        console.log("ini project", project.data.data);
      }
    };
    if (status === "loading") return;
    waitForSession();
  }, [session]);

  React.useEffect(() => {
    if (status !== "loading" && projects.length === 0) {
      const timer = setTimeout(() => {
        setShowNoProjectMessage(true);
      }, 6000);
      return () => clearTimeout(timer);
    } else {
      setShowNoProjectMessage(false);
    }
  }, [status, projects]);

  return (
    <div className="flex justify-center items-center px-8 py-6 sm:px-28 sm:py-12 md:px-14 md:py-10">
      <div className="grid grid-cols-1 gap-5 w-full md:grid-cols-2 lg:grid-cols-3">
        {status === "loading" || (projects.length === 0 && !showNoProjectMessage) ? (
          Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-[100px] w-full bg-gray-200" />
          ))
        ) : projects.length === 0 && showNoProjectMessage ? (
          <div className="col-span-full flex justify-center items-center h-[75vh]">
            <span className="font-medium text-gray-500 text-md">There is no project yet</span>
          </div>
        ) : (
          projects.map((project: any) => (
            <Link
              href={`/projects/${project.id}`}
              key={project.id}
              className="p-4 bg-gray-500 rounded-lg shadow h-[100px] hover:bg-gray-700 hover:cursor-pointer transition-colors duration-200"
            >
              <h3 className="text-sm font-semibold text-white">
                {project.name}
              </h3>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
