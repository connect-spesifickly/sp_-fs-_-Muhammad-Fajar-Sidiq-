"use client";

import { PageType } from "@/interfaces/page-type";
import { usePathname, useRouter } from "next/navigation";
import SidebarPage from "./_components/sidebar";
import BottomNavigation from "./_components/bottom-navigation";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const getProjectId = (): string => {
    const match = pathname.match(/\/projects\/([^/]+)/);
    return match && match[1] ? match[1] : "";
  };

  const getActivePage = (): PageType => {
    const projectId = getProjectId();
    if (!projectId) return "board";
    if (pathname.includes(`/projects/${projectId}/settings`)) return "settings";
    if (pathname === `/projects/${projectId}`) return "board";
    return "board";
  };

  const projectId = getProjectId();

  const bottomNavItems = [
    {
      id: 1,
      label: "Back",
      icon: (
        <svg
          className="w-full h-full text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      ),
      action: () => router.push("/dashboard"),
    },
    {
      id: 2,
      label: "Board",
      icon: (
        <svg
          className={`h-full w-full ${pathname.includes("/projects/") && !pathname.includes("/settings") ? "text-blue-600" : "text-gray-600"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
      href: projectId ? `/projects/${projectId}` : undefined,
    },
    {
      id: 3,
      label: "Settings",
      icon: (
        <svg
          className={`h-full w-full ${pathname.includes("/settings") ? "text-blue-600" : "text-gray-600"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      href: projectId ? `/projects/${projectId}/settings` : undefined,
    },
  ];

  const handlePageChange = (page: PageType) => {
    const projectId = getProjectId();
    if (page === "back") {
      router.push("/dashboard");
    } else if (page === "settings" && projectId) {
      router.push(`/projects/${projectId}/settings`);
    } else if (page === "board" && projectId) {
      router.push(`/projects/${projectId}`);
    }
  };
  return (
    <div className="flex-col h-[80vh]">
      <div className="flex min-h-[calc(80vh-0px-0px)] min-w-[calc(100vw)] bg-white md:min-h-[calc(80vh-0px-0px)]">
        <aside className="">
          <SidebarPage
            activePage={getActivePage()}
            onPageChange={handlePageChange}
          />
        </aside>
        <BottomNavigation items={bottomNavItems} />
        <main className="w-full h-[80vh] ">
          <div className="flex px-7 pt-[0px]">{children}</div>
        </main>
      </div>
    </div>
  );
}
