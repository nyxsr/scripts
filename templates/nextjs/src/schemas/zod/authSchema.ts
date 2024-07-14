import { z } from "zod";

export const loginSchema = z.object({
  username: z
    .string({
      required_error: "Username is required",
      message: "Username is required",
    })
    .min(2, { message: "Username must be at least 2 characters" })
    .max(50, { message: "Username must be less than 50 characters" }),
  password: z
    .string({
      message: "Password should be a string",
    })
    .min(2, { message: "Password must be at least 2 characters" })
    .max(50, { message: "Password must be less than 50 characters" })
    .optional(),
});
