import * as React from "react";

export function Logo({ className }: React.ComponentProps<"input">) {
  return (
    <div className="flex gap-2 items-center h-full sm:gap-16">
      <h2
        className={`font-semibold text-blue-900 ${className} text-[22px] w-fit`}
      >
        Management App
      </h2>
    </div>
  );
}
