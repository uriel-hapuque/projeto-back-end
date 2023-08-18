import { Repository } from "typeorm";
import { tUserResponse } from "../../interfaces/users.interfaces";
import { User } from "../../entities/users.entity";
import { AppDataSource } from "../../data-source";
import { userResponseSchema } from "../../schemas/users.schemas";

export const getUserService = async (userId: number): Promise<tUserResponse> => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await userRepo.findOneBy({id: userId})

    const returnUser: tUserResponse = userResponseSchema.parse(user)

    return returnUser
}