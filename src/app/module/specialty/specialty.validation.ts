import z from "zod";

const createSpecialtyZodSchema = z.object({
  adminId: z.string("Admin ID is required"),
  title: z.string("Title is required"),
  description: z.string("Description is required").optional(),
  image: z.string("Image is required").optional(),
});

export const SpecialtyValidation = {
  createSpecialtyZodSchema,
};
