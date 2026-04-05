import { z } from "zod";

export const productSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(2, "Product name must be at least 2 characters").max(100),
  price: z.string().refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
    message: "Price must be a valid positive number",
  }),
  description: z.string().min(10, "Description must be at least 10 characters"),
  imageUrl: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  createdAt: z.string().optional(),
});

export type Product = z.infer<typeof productSchema>;
