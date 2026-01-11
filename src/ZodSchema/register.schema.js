import * as z from "zod";

export const registerSchema = z.object({
  fullName: z
    .string()
    .nonempty({ message: "Full Name is required" })
    .min(5, { message: "Full Name must be at least 5 characters long" })
    .max(25, { message: "Name can not be more than 25 characters Long" }),
  email: z
    .string()
    .nonempty({ message: "Email is required" })
    .email({ message: "Invalid email" }),
  pasword: z.noempty({ message: "Password is required" }),
});
