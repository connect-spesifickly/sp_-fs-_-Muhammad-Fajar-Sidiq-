"use client";

import { DeleteProjectProps } from "@/interfaces/settings";
import { api } from "@/utils/axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Trash2, AlertTriangle, Loader2 } from "lucide-react";
import * as React from "react";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
export default function DeleteProject({
  projectId,
  projectName,
  onProjectDeleted,
}: DeleteProjectProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [confirmationText, setConfirmationText] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const expectedConfirmation = `Delete ${projectName}`;
  const isConfirmationValid = confirmationText === expectedConfirmation;
  const { data: session } = useSession();
  const handleDelete = async () => {
    if (!isConfirmationValid) {
      alert("Please type the confirmation text correctly.");
      return;
    }

    setLoading(true);

    try {
      const response = await api.delete(`/projects/${projectId}`, {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
      });
      onProjectDeleted();
      toast("Project deleted successfully.");
    } catch (err) {
      console.error("Failed to delete project:", err);
      toast("Failed to delete project.");
    } finally {
      setLoading(false);
    }
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      setConfirmationText("");
    }
  };
  return (
    <div className="space-y-4 text-justify">
      <div className="flex items-start gap-3 p-4 border border-red-200 rounded-lg bg-red-50">
        <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
        <div className="space-y-2">
          <h4 className="font-medium text-red-900">Delete Project</h4>
          <p className="text-sm text-red-800">
            {" "}
            Once you delete this project, there is no going back. This will
            permanently delete:
          </p>
          <ul className="ml-4 space-y-1 text-sm text-red-800 list-disc list-inside">
            <li>All project data and settings</li>
            <li>All tasks and their history</li>
            <li>All member associations</li>
            <li>All realted data</li>
          </ul>
        </div>
      </div>
      <AlertDialog open={isOpen} onOpenChange={handleOpenChange}>
        <AlertDialogTrigger asChild>
          <Button
            variant="destructive"
            className="w-full sm:w-auto"
            disabled={loading}
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Delete Project
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-white sm:max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2 text-red-600">
              <AlertTriangle className="w-5 h-5" />
              Delete Project
            </AlertDialogTitle>
            <AlertDialogDescription className="space-y-3">
              <p>
                This action <strong>cannot be undone</strong>. This will
                permanently delete the project <strong>"{projectName}"</strong>{" "}
                and all of its data.
              </p>
              <div className="space-y-2">
                <Label htmlFor="confirmation" className="text-sm font-medium">
                  Please type{" "}
                  <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                    {expectedConfirmation}
                  </code>{" "}
                  to confirm:
                </Label>
                <Input
                  id="confirmation"
                  value={confirmationText}
                  onChange={(e) => setConfirmationText(e.target.value)}
                  placeholder="Type confirmation text here"
                  className="font-mono"
                  disabled={loading}
                />
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={loading}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              disabled={!isConfirmationValid || loading}
              className="bg-red-600 hover:bg-red-700"
            >
              {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              {loading ? "Deleting..." : "Delete Project"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
