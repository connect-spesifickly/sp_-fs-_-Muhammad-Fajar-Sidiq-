import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { validateAddMember } from "../middlewares/project.middleware";
import MemberController from "../controllers/member.controller";
// Wrapper to handle type conversion
export const memberRouter = () => {
  const router = Router();

  // Apply authentication to all member routes
  router.use(authMiddleware);

  // Member management routes
  router.post(
    "/:id/members",
    validateAddMember,
    MemberController.addMember as any
  );
  router.delete("/:id/members/:memberId", MemberController.removeMember as any);
  router.get("/:id/members", MemberController.getProjectMembers as any);

  return router;
};
