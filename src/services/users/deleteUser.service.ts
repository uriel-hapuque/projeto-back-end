import { Repository } from "typeorm"
import { User } from "../../entities/users.entity"
import { AppDataSource } from "../../data-source"

export const deleteUserService = async (userId: number): Promise<void> => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User)

    const user:any = await userRepo.findOneBy({id: userId})

    console.log(user)

    await userRepo.remove(user!)
}