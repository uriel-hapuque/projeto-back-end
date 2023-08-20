import { userRequestSchema, userResponseSchema, userSchema } from "../schemas/users.schemas";
import { z } from "zod"

export type tUser = z.infer<typeof userSchema>
export type tUserResponse = z.infer<typeof userResponseSchema>
export type tUserRequest = z.infer<typeof userRequestSchema>