import { PageType } from "@/interfaces/page-type";
import * as React from "react";
import { useState, useEffect } from "react";

interface SidebarProps {
  activePage: PageType;
  onPageChange: (page: PageType) => void;
}
export function SidebarPage({ activePage, onPageChange }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const isMdOrLarger = window.innerWidth >= 768;
      if (!isMdOrLarger) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const sidebarItems: { id: PageType; label: string; icon: string }[] = [
    { id: "board", label: "Board", icon: "clipboard" },
    { id: "settings", label: "Settings", icon: "cog" },
    { id: "back", label: "Back", icon: "arrow-left" },
  ];
  const getIcon = (icon: string) => {
    switch (icon) {
      case "clipboard":
        return (
          <svg
            className="w-5 h-5"
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
            ></path>
          </svg>
        );

      case "cog":
        return (
          <svg
            className="w-5 h-5"
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
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
          </svg>
        );
      case "arrow-left":
        return (
          <svg
            className="w-5 h-5"
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
            ></path>
          </svg>
        );
      default:
        return null;
    }
  };
  if (isCollapsed) {
    return null;
  }
  return (
    <div className="relative z-30 hidden h-full ml-1 mr-1 bg-white w-60 lg:block">
      {/* SIdebar content */}
      <div className="px-4 py-4">
        <nav>
          <ul className="space-y-2 text-[14px]">
            {sidebarItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => onPageChange(item.id)}
                  className={`flex w-full items-center rounded-md px-4 py-3 ${
                    activePage === item.id
                      ? "bg-blue-600 text-white hover:bg-blue-500"
                      : "text-gray-600 hover:text-white hover:bg-blue-500"
                  }`}
                >
                  <span className="mr-3">{getIcon(item.icon)}</span>
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default SidebarPage;
