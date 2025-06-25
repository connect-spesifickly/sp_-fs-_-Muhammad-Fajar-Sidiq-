"use client";
import { api } from "@/utils/axios";
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import * as React from "react";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Trash2, Users, Settings } from "lucide-react";
import { Member, Project } from "@/interfaces/settings";
import InviteMember from "./_components/invite-member";
import MemberList from "./_components/member-list";
import DeleteProject from "./_components/delete-project";

export default function ProjectSettingsPage() {
  const params = useParams<{ id: string }>();
  const { data: session } = useSession();
  const projectId = params.id || "";
  const [members, setMembers] = React.useState<Member[]>([]);
  const [project, setProject] = React.useState<Project | null>(null);
  const [loading, setLoading] = React.useState(true);
  const router = useRouter();

  const isOwner = project?.ownerId === session?.id;

  React.useEffect(() => {
    fetchProjectData();
    fetchMembers();
  }, [projectId]);

  const fetchProjectData = async () => {
    try {
      const response = await api.get(`/projects/${projectId}`, {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
      });
      setProject(response.data.data);
      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch project data:", err);
    }
  };

  const fetchMembers = async () => {
    try {
      const response = await api.get(`/projects/${projectId}/members`, {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
      });
      setMembers(response.data.data);
      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch members:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleMemberAdded = (newMember: Member) => {
    setMembers((prev) => [...prev, newMember]);
    toast(`${newMember.user.email} has been added to the project.`);
  };

  const handleMemberRemoved = (memberId: string) => {
    setMembers((prev) => prev.filter((member) => member.user.id !== memberId));
    toast("Member has been removed from the project.");
  };

  const handleProjectDeleted = () => {
    toast("Project has been deleted.");
    router.push("/dashboard");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-[90vh]">
        Loading...
      </div>
    );
  }

  return (
    <div className="border-[1px] rounded-md border-gray-300 w-full min-h-[85vh] mb-16 md:my-3">
      <div className="max-w-4xl p-6 mx-auto space-y-6">
        <div className="flex items-center gap-2 mb-6">
          <Settings className="w-6 h-6" />
          <h1 className="text-2xl font-bold">Project Settings</h1>
          <span className="text-gray-500 ">{project?.name}</span>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Team Members
            </CardTitle>
            <CardDescription>
              Manage project team members and their access
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {isOwner && (
              <InviteMember
                projectId={projectId}
                onMemberAdded={handleMemberAdded}
              />
            )}
            <MemberList
              members={members}
              projectId={projectId}
              currentUserId={session?.id as string}
              isOwner={isOwner}
              onMemberRemoved={handleMemberRemoved}
            />
          </CardContent>
        </Card>

        {isOwner && (
          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-600">
                <Trash2 className="w-5 h-5" />
                Delete Project
              </CardTitle>
              <CardDescription>
                Permanently delete this project and all its data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DeleteProject
                projectId={projectId}
                projectName={project?.name || ""}
                onProjectDeleted={handleProjectDeleted}
              />
            </CardContent>
          </Card>
        )}

        {!isOwner && (
          <Card className="border-yellow-200 bg-yellow-50">
            <CardContent className="pt-6">
              <p className="text-sm text-justify text-yellow-800">
                <strong>Note:</strong> You are a member of this project. Only
                the project owner can manage members and delete the project
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
