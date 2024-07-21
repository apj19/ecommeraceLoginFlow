import {z} from "zod";

export const signUpFormSchema=z.object({
    name:z.string().min(3),
    email: z.string().email(),
    password:z.string()
    .min(8, { message: "Password is too short" })
    .max(20, { message: "Password is too long" })
  })


  export const loginFormSchema=z.object({
    email: z.string().email(),
    password:z.string()
    .min(8, { message: "Password is too short" })
    .max(20, { message: "Password is too long" })
  })