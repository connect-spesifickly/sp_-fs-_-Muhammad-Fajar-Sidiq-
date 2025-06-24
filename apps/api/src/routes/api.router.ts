import { Router } from "express";
import { authRouter } from "./auth.router";
import { projectRouter } from "./project.router";
import { memberRouter } from "./member.router";
import { taskRouter } from "./task.router";

const apiRouter = Router();

apiRouter.use("/auth", authRouter());
apiRouter.use("/projects", projectRouter());
apiRouter.use("/projects", memberRouter());
apiRouter.use("/projects", taskRouter());

export default apiRouter;
