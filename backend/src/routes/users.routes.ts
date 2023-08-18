import { Router } from "express";
import { validateRequestBody } from "../middlewares/validateMiddlewares/validateRequestBody.middleware";
import { userRequestSchema } from "../schemas/users.schemas";
import { verifyIfUserEmailAlreadyExists } from "../middlewares/verifyMiddlewares/verifyIfEmailUserAlreadyExists.middleware";
import { createUserController, getUserController } from "../controllers/users.controller";
import { verifyIfUserExistsByParamId } from "../middlewares/verifyMiddlewares/verifyIfUserExistsByParamId.middleware";

export const usersRoutes: Router = Router();

usersRoutes.post("", validateRequestBody(userRequestSchema), verifyIfUserEmailAlreadyExists, createUserController)
usersRoutes.get("/:id", verifyIfUserExistsByParamId, getUserController);