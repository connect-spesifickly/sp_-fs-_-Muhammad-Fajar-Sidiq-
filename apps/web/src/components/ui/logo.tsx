import * as React from "react";

export function Logo({ className }: React.ComponentProps<"input">) {
  return (
    <div>
<h2 className={`${className} text-blue-900  text-[22px]   font-semibold w-fit`}>Management App</h2>
    </div>
  );
}
