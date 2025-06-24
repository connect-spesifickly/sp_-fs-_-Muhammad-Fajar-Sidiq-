import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { JWT_ACCESS_SECRET } from "../config";
import { userLoginAndRegistrationSchema } from "../validations/user-login-and-registration.validation";
import { ResponseError } from "../helpers/error";
import { UserRequest, UserToken } from "../interfaces/middleware.interface";

const validateRegistration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const schema = userLoginAndRegistrationSchema();
    await schema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    next(error);
  }
};

const validateLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const schema = userLoginAndRegistrationSchema();
    await schema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    next(error);
  }
};

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  verifyUser(req as UserRequest, res, next);
};

export function verifyUser(
  req: UserRequest,
  res: Response,
  next: NextFunction
) {
  try {
    const { authorization } = req.headers;
    const token = String(authorization || "").split("Bearer ")[1];
    if (!token) throw new ResponseError(401, "Unauthenticated.");

    const verifiedUser = verify(token, JWT_ACCESS_SECRET) as UserToken;
    if (!verifiedUser || verifiedUser.role !== "USER")
      throw new ResponseError(403, "Unauthorized.");

    req.user = verifiedUser as UserToken;

    next();
  } catch (err) {
    next(err);
  }
}

export { validateRegistration, validateLogin };
