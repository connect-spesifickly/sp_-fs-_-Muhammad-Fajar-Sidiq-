import { NextFunction, Response } from "express";
import { ApiResponse } from "../helpers/api-response";
import memberService from "../services/member.service";
import { UserRequest } from "../interfaces/middleware.interface";

class MemberController {
  async addMember(req: UserRequest, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { email } = req.body;
      const userId = req.user.id;
      const result = await memberService.addMember(id, email, userId);
      ApiResponse({
        res,
        statusCode: 201,
        message: "Member added successfully",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  async removeMember(req: UserRequest, res: Response, next: NextFunction) {
    try {
      const { id, memberId } = req.params;
      const userId = req.user.id;
      await memberService.removeMember(id, memberId, userId);
      ApiResponse({
        res,
        statusCode: 200,
        message: "Member removed successfully",
        data: null,
      });
    } catch (error) {
      next(error);
    }
  }

  async getProjectMembers(req: UserRequest, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const userId = req.user.id;
      const result = await memberService.getProjectMembers(id, userId);
      ApiResponse({
        res,
        statusCode: 200,
        message: "Project members retrieved successfully",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new MemberController();
