"use client";
import * as React from "react";
import { useSession } from "next-auth/react";
import { api } from "@/utils/axios";
import { Logo } from "../logo";
import { LogOut } from "lucide-react";
import DialogLogout from "./_components/dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useFormik } from "formik";
import { Input } from "../input";
import { Button } from "../button";
import { toast } from "sonner";
const Navbar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { location?: string }
>(({ className, location }, ref) => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: async (values) => {
      try {
        setIsSubmitting(true);
        await api.post(
          "/projects",
          {
            name: values.name,
          },
          {
            headers: {
              Authorization: `Bearer ${session?.accessToken}`,
            },
          }
        );
        toast("Project created successfully");
        setOpen(false);
        window.location.href = "/dashboard";
      } catch (err) {
        toast("Failed to create project");
      } finally {
        setIsSubmitting(false);
      }
    },
  });
  return (
    <div
      className={`${className} flex justify-between items-center w-full h-[64px]  sm:px-[32px] py-[16px] px-[20px] ${
        location == "homepage" ? "bg-transparent sm:flex hidden" : ""
      }`}
      ref={ref}
    >
      <div className="flex items-center h-full gap-2 sm:gap-16">
        <Logo />
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger
            onClick={() => setOpen(true)}
            className="flex !py-[17px] items-center h-full text-center text-[16px] px-4 bg-blue-600 text-white rounded-[4px] mt-1 hover:bg-blue-700 transition-all hover:cursor-pointer"
          >
            Create
          </DialogTrigger>
          <DialogContent className="bg-white w-full max-w-[420px]  ">
            <form
              onSubmit={formik.handleSubmit}
              action=""
              className="flex flex-col gap-4"
            >
              <DialogHeader>
                <DialogTitle>Create Project</DialogTitle>
              </DialogHeader>
              <Input
                name="name"
                placeholder="Input project name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="h-10 font-normal text-gray-900"
              />
              <div className="flex justify-end w-full">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 w-fit hover:bg-blue-700 text-slate-50"
                >
                  {isSubmitting ? "Creating..." : "Create Project"}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex gap-[6px] items-center justify-center">
        <>
          {isOpen && (
            <div
              className="fixed inset-0 bg-[rgba(0,0,0,0.4)] z-40"
              onClick={() => setIsOpen(false)}
            />
          )}

          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center w-[32px] h-[32px] rounded-full bg-blue-200 text-blue-900 focus:outline-none"
            >
              {session?.email?.charAt(0).toUpperCase()}
            </button>
            {isOpen && (
              <div className="border-slate-200 border-[1px] absolute right-[-10px] mt-2 text-[14px] p-[5px] w-[224px]  rounded-[6px] bg-white shadow-lg  z-50">
                <div className="py-[6px] px-[8px] gap-[8px] font-medium text-red flex items-center hover:bg-transparent cursor-pointer">
                  <LogOut className="w-4 h-4 text-red-500" />
                  <div
                    className="w-full text-left text-red-500 hover:bg-transparent"
                    onClick={() => {
                      setIsDialogOpen(true);
                      setIsOpen(false);
                    }}
                  >
                    Log Out
                  </div>
                </div>
              </div>
            )}
            {isDialogOpen && (
              <DialogLogout
                isDialogOpen={isDialogOpen}
                setIsDialogOpen={setIsDialogOpen}
              />
            )}
          </div>
        </>
      </div>
    </div>
  );
});

Navbar.displayName = "Navbar";

export { Navbar };
