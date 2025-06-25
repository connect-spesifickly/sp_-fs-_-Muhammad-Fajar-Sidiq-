"use client";
import { InviteMemberProps } from "@/interfaces/settings";
import { api } from "@/utils/axios";
import { useSession } from "next-auth/react";
import * as React from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UserPlus, Mail, Loader2 } from "lucide-react";

export default function InviteMember({
  projectId,
  onMemberAdded,
}: InviteMemberProps) {
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const { data: session } = useSession();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast("Please enter an email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const response = await api.post(
        `/projects/${projectId}/members`,
        { email },
        {
          headers: {
            Authorization: `Bearer ${session?.accessToken}`,
          },
        }
      );
      onMemberAdded(response.data.data);
      setEmail("");
      toast("Member invited successfully.");
    } catch (err) {
      toast("Failed to invite member.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded-lg bg-gray-50">
      <div className="flex items-center gap-2 mb-3">
        <UserPlus className="w-4 h-4" />
        <h3 className="font-medium">Invite New Member</h3>
      </div>

      <form action="" onSubmit={handleSubmit} className="space-y-3">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Email Address
          </Label>
          <div className="relative">
            <Mail className="absolute w-4 h-4 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="pl-10"
              disabled={loading}
            />
          </div>
        </div>

        <Button
          type="submit"
          disabled={loading || !email.trim()}
          className="w-full sm:w-auto"
        >
          {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
          {loading ? "Adding Member..." : "Invite Member"}
        </Button>
      </form>

      <p className="mt-2 text-xs text-gray-500">
        The user must alredy have an account to be added to the project.
      </p>
    </div>
  );
}
