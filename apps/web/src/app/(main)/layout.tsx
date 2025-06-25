import { auth } from "@/auth";
import { Navbar } from "@/components/ui/navbar/main-navbar";
import { Toaster } from "@/components/ui/sonner";
import { redirect } from "next/navigation";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar className="border-b-[1px] border-slate-200 " />
      <main className="flex-grow">
        {children}
        <Toaster />
      </main>
    </div>
  );
}
