import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";
import { AuthService } from "./auth.service";
import status from "http-status";
import { IRequestUser } from "../../interface/requestUser.interface";

const registerPatient = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  console.log(payload);

  const result = await AuthService.registerPatient(payload);

  sendResponse(res, {
    httpStatusCode: 201,
    success: true,
    message: "Patient registered successfully",
    data: result,
  });
});

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await AuthService.loginUser(payload);
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "User logged in successfully",
    data: result,
  });
});

const getMe = catchAsync(async (req: Request, res: Response) => {
  const user = req.user;
  console.log({ user });
  const result = await AuthService.getMe(user as IRequestUser);
  sendResponse(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "User profile fetched successfully",
    data: result,
  });
});

export const AuthController = {
  registerPatient,
  loginUser,
  getMe,
};
