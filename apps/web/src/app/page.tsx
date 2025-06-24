"use client";
import { useSession } from "next-auth/react";
import * as React from "react";

export default function Home() {
  const { data: session } = useSession();
  console.log("ini session", session);
  return (
    <div className="flex justify-center items-center text-red-500">
      Home 1
      <div className="">
        <div className="">{session?.accessToken} ini token</div>
        <div className=""></div>
      </div>
    </div>
  );
}
