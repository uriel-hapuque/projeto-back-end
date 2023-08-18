import { Repository } from "typeorm";
import { tUserRequest, tUserResponse } from "../../interfaces/users.interfaces";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import { userResponseSchema } from "../../schemas/users.schemas";

export const createUserService = async (userData: tUserRequest): Promise<tUserResponse> => {

    const userRepo: Repository<User> = AppDataSource.getRepository(User)

    const user: User = userRepo.create(userData)

    await userRepo.save(user)

    const returnUser: tUserResponse = userResponseSchema.parse(user)

    return returnUser

}