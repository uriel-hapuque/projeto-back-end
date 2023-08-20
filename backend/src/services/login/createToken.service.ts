import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import { AppError } from "../../error";

import { Repository } from "typeorm";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { tLoginRequest } from "../../interfaces/login.interfaces";

type tLoginResponse = {
  token: string;
};

export const createTokenService = async (
  loginData: tLoginRequest
): Promise<tLoginResponse | void> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepo.findOneBy({
    email: loginData.email,
  });

  if (!user) {
    throw new AppError("Credenciais inválidas", 403);
  }

  const passIsEqual: boolean = await compare(loginData.password, user.password);

  if (!passIsEqual) {
    throw new AppError("Credenciais inválidas", 403);
  }

  const token = jwt.sign({ name: user.name }, process.env.SECRET_KEY!, {
    expiresIn: "24h",
    subject: String(user.id),
  });  

  return {token};
};