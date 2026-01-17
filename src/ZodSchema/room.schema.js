import * as z from "zod";

export const roomFrontSchema = z.object({
  location: z
    .string()
    .nonempty({ message: "Location is required" }),
  category: z
    .string()
    .nonempty({ message: "Category is required" }),
  title: z
    .string()
    .nonempty({ message: "Title is required" }),

  price: z
    .string()
    .nonempty({ message: "Price is required" })
    .regex(/^\d+$/, { message: "Price must be a number" }),
  total_guest: z
    .string()
    .nonempty({ message: "Total guest is required" })
    .regex(/^\d+$/, { message: "Total guest must be a number" }),
  bedrooms: z
    .string()
    .nonempty({ message: "Bedrooms is required" })
    .regex(/^\d+$/, { message: "Bedrooms must be a number" }),
  bathrooms: z
    .string()
    .nonempty({ message: "Bathrooms is required" })
    .regex(/^\d+$/, { message: "Bathrooms must be a number" }),

  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters long" }),

  roomImage: z
    .string()
    .nonempty({ message: "Image URL is required" })
    .url({ message: "Invalid image URL" }),

  from: z
    .string({ required_error: "Start date is required" }),
  to: z
    .string({ required_error: "End date is required" }),

  
});
