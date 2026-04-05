import { Request, Response } from "express";
import { UserService } from "./user.service";
import { catchAsync } from "../../shared/catchAsync";
import status from "http-status";

const createDoctor = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await UserService.createDoctor(payload);
  res.status(201).json({
    httpStatusCode: status.CREATED,
    success: true,
    message: "User created successfully",
    data: result,
  });
});

const createAdmin = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await UserService.createAdmin(payload);
  res.status(201).json({
    httpStatusCode: status.CREATED,
    success: true,
    message: "Admin registered successfully",
    data: result,
  });
});

export const UserController = {
  createAdmin,
  createDoctor,
};
