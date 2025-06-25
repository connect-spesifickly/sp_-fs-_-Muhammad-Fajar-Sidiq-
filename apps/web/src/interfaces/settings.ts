export interface Member {
  id: string;
  user: {
    id: string;
    email: string;
  };
}

export interface Project {
  id: string;
  name: string;
  ownerId: string;
}
export interface InviteMemberProps {
  projectId: string;
  onMemberAdded: (member: Member) => void;
}

export interface MemberListProps {
  members: Member[];
  projectId: string;
  currentUserId: string;
  isOwner: boolean;
  onMemberRemoved: (memberId: string) => void;
}

export interface DeleteProjectProps {
  projectId: string;
  projectName: string;
  onProjectDeleted: () => void;
}
