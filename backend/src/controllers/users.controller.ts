import { Request, Response } from "express";
import { tUserRequest, tUserResponse } from "../interfaces/users.interfaces";
import { createUserService } from "../services/users/createUser.service";
import { User } from "../entities/users.entity";
import { getUserService } from "../services/users/getUser.service";

export const createUserController = async (req: Request, res: Response): Promise<Response<User>> => {
    const userData: tUserRequest = req.body;

    const userResponse: tUserResponse = await createUserService(userData)

    return res.status(201).json(userResponse)
}

export const getUserController = async (req: Request, res: Response):Promise<Response<User>> => {
    const userId: number = parseInt(req.params.id)

    const user: tUserResponse = await getUserService(userId)

    return res.status(200).json(user)
}