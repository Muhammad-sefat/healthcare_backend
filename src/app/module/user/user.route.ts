import express from "express";
import { UserController } from "./user.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { UserValidation } from "./user.validation";
import { checkAuth } from "../../middleware/checkAuth";

const router = express.Router();

router.post(
  "/create-admin",
  checkAuth("SUPER_ADMIN"),
  validateRequest(UserValidation.createAdminValidationSchema),
  UserController.createAdmin,
);

export const UserRoutes = router;
