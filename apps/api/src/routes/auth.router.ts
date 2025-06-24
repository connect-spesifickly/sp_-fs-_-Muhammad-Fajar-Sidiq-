import { Router } from "express";
import {
  validateRegistration,
  validateLogin,
} from "../middlewares/auth.middleware";
import AuthController from "../controllers/auth.controller";

export const authRouter = () => {
  const router = Router();
  router.post("/register", validateRegistration, AuthController.register);
  router.post("/login", validateLogin, AuthController.login);
  return router;
};
