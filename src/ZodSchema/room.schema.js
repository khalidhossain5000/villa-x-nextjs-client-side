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
    .coerce
    .number({ invalid_type_error: "Price must be a number" })
    .positive({ message: "Price must be greater than 0" }),

  total_guest: z
    .coerce
    .number({ invalid_type_error: "Total guest must be a number" })
    .positive({ message: "Total guest must be greater than 0" }),

  bedrooms: z
    .coerce
    .number({ invalid_type_error: "Bedrooms must be a number" })
    .positive({ message: "Bedrooms must be greater than 0" }),

  bathrooms: z
    .coerce
    .number({ invalid_type_error: "Bathrooms must be a number" })
    .positive({ message: "Bathrooms must be greater than 0" }),

  description: z
    .string()
    .min(5, { message: "Description must be at least 5 characters long" }),

 
});
