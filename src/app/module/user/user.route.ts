import express from "express";
import { UserController } from "./user.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { createAdminZodSchema, createDoctorZodSchema } from "./user.validation";
import { checkAuth } from "../../middleware/checkAuth";

import { multerUpload } from "../../config/multer.config";

const router = express.Router();

router.post(
  "/create-doctor",
  multerUpload.single("image"),
  validateRequest(createDoctorZodSchema),
  UserController.createDoctor,
);

router.post(
  "/create-admin",
  checkAuth("SUPER_ADMIN"),
  validateRequest(createAdminZodSchema),
  UserController.createAdmin,
);

export const UserRoutes = router;
