import { Router } from "express";
import { validateRequestBody } from "../middlewares/validateMiddlewares/validateRequestBody.middleware";
import { userRequestSchema } from "../schemas/users.schemas";
import { verifyIfUserEmailAlreadyExists } from "../middlewares/verifyMiddlewares/verifyIfEmailUserAlreadyExists.middleware";
import { createUserController, deleteUserController, getUserController } from "../controllers/users.controller";
import { verifyIfUserExistsByParamId } from "../middlewares/verifyMiddlewares/verifyIfUserExistsByParamId.middleware";
import { validateToken } from "../middlewares/validateMiddlewares/validateToken.middleware";
import { verifyIfIsAccountOwner } from "../middlewares/verifyMiddlewares/verifyIfIsAccountOwner.middleware";

export const usersRoutes: Router = Router();

usersRoutes.post("", validateRequestBody(userRequestSchema), verifyIfUserEmailAlreadyExists, createUserController)
usersRoutes.delete("/:id", validateToken, verifyIfUserExistsByParamId, verifyIfIsAccountOwner, deleteUserController)
usersRoutes.get("/:id", verifyIfUserExistsByParamId, getUserController);