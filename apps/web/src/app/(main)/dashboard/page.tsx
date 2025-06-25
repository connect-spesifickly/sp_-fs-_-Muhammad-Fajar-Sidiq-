"use client";
import { api } from "@/utils/axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import * as React from "react";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [projects, setProjects] = React.useState([]);
  React.useEffect(() => {
    const waitForSession = async () => {
      await new Promise((resolve) => {
        setTimeout(resolve, 2500);
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

  return (
    <div className="flex items-center justify-center px-8 py-6 sm:px-28 sm:py-12 md:px-14 md:py-10">
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project: any) => (
          <Link
            href={`/projects/${project.id}`}
            key={project.id}
            className="p-4 bg-gray-500 rounded-lg shadow h-[100px] hover:bg-gray-700 hover:cursor-pointer transition-colors duration-200"
          >
            <h3 className="text-sm font-semibold text-white">{project.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
