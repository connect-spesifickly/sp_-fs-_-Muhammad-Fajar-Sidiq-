"use client";
import { MemberListProps } from "@/interfaces/settings";
import { api } from "@/utils/axios";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
import { UserMinus, Crown, User, Loader2 } from "lucide-react";
import { toast } from "sonner";
import * as React from "react";
export default function MemberList({
  members,
  projectId,
  currentUserId,
  isOwner,
  onMemberRemoved,
}: MemberListProps) {
  const [removingMemberId, setRemovingMemberId] = React.useState<string | null>(
    null
  );
  const handleRemoveMember = async (memberId: string, email: string) => {
    setRemovingMemberId(memberId);
    try {
      const response = await api.delete(
        `/projects/${projectId}/members/${memberId}`,
        {
          headers: {
            Authorization: `Bearer ${currentUserId}`,
          },
        }
      );
      onMemberRemoved(memberId);
      toast(`${email} has been removed from the project.`);
    } catch (err) {
      console.error("Failed to remove member:", err);
      toast("Failed to remove member.");
    } finally {
      setRemovingMemberId(null);
    }
  };

  const getInitials = (email: string) => {
    return email.split("@")[0]?.substring(0, 2).toUpperCase();
  };

  const isCurrentOwner = (memberId: string) => {
    return false;
  };

  if (members.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        No members in this project.{" "}
        {isOwner && <p>Invite some members to collaborate.</p>}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <h4 className="mb-3 text-sm font-medium text-gray-700">
        Project Members ({members.length})
      </h4>
      <div className="space-y-2">
        {members.map((member) => (
          <div
            key={member.id}
            className="flex items-center justify-between p-3 transition-colors bg-white border rounded-lg hover:bg-gray-50"
          >
            <div className="flex items-center gap-3">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="text-xs">
                  {getInitials(member.user.email)}
                </AvatarFallback>
              </Avatar>

              <div className="flex flex-col">
                <span className="text-sm font-medium">{member.user.email}</span>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Member
                  </Badge>
                  {member.user.id === currentUserId && (
                    <Badge variant="outline" className="text-xs">
                      You
                    </Badge>
                  )}
                </div>
              </div>
            </div>
            {!isOwner && member.user.id !== currentUserId && (
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    disabled={removingMemberId === member.id}
                  >
                    {removingMemberId === member.user.id ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <UserMinus className="w-4 h-4" />
                    )}
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Remove Member</AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure you want to remove{" "}
                      <strong>{member.user.email}</strong> from this project?
                      This action cannot be undone and they will lose access to
                      all project data.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() =>
                        handleRemoveMember(member.user.id, member.user.email)
                      }
                      className="bg-red-600 hover:bg-red-700"
                    >
                      Remove Member
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            )}
          </div>
        ))}
      </div>
      {!isOwner && (
        <p className="mt-3 text-sm text-gray-500">
          Only the project owner can add or remove members.
        </p>
      )}
    </div>
  );
}
