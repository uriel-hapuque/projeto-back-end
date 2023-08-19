import { z } from "zod"


export const userSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string().email(),
    password: z.string(), 
})

export const userRequestSchema = userSchema.omit({ id: true })
export const userResponseSchema = userSchema.omit({ password: true })
