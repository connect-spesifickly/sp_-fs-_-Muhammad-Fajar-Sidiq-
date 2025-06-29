import { Request } from "express";

export interface UserToken {
  id: string;
  email: string;
  role: string;
}

export interface UserRequest extends Request {
  user: UserToken;
}
