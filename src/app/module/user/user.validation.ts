import { z } from "zod";

const createAdminValidationSchema = z.object({
  body: z.object({
    password: z.string().min(6, "Password must be at least 6 characters"),

    admin: z.object({
      name: z.string().min(1, "Name required"),
      email: z.email("Invalid email"),
      profilePhoto: z.url().optional(),
      contactNumber: z.string(),
    }),
  }),
});

export const UserValidation = {
  createAdminValidationSchema,
};
