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
        <div className="w-[500px] h-fit">{session?.accessToken} ini token</div>
        <div className="w-[500px] h-fit">{session?.email} ini email</div>
        <div className="w-[500px] h-fit">{session?.id} ini id</div>
      </div>
    </div>
  );
}
