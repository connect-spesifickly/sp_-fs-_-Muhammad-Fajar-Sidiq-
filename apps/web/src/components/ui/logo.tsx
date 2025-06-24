import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useFormik } from "formik";
import { Input } from "./input";
import { Button } from "./button";
import { api } from "@/utils/axios";
import { toast } from "sonner";
import { useSession } from "next-auth/react";
export function Logo({ className }: React.ComponentProps<"input">) {
  const { data: session } = useSession();
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
      } catch (err) {
        toast("Failed to create project");
      } finally {
        setIsSubmitting(false);
      }
    },
  });
  return (
    <div className="flex items-center h-full gap-2 sm:gap-16">
      <h2
        className={`${className}  text-blue-900  text-[22px]   font-semibold w-fit`}
      >
        Management App
      </h2>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger
          onClick={() => setOpen(true)}
          className="flex items-center h-full text-center text-[14px] px-3 bg-blue-600 text-white rounded-[4px] mt-1 hover:bg-blue-700 transition-all hover:cursor-pointer"
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
  );
}
