import { NextFunction, Request, Response } from "express";
import { ApiResponse } from "../helpers/api-response";
import authService from "../services/auth.service";

class AuthController {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await authService.register(req.body);
      ApiResponse({
        res,
        statusCode: 201,
        message: "User registered successfully",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await authService.login(req.body);
      ApiResponse({
        res,
        statusCode: 200,
        message: "Login successful",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new AuthController();
