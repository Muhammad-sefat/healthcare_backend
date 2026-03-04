import { Request, Response } from "express";
import { UserService } from "./user.service";

const createAdmin = async (req: Request, res: Response) => {
  const result = await UserService.createAdmin(req.body);

  res.status(201).json({
    success: true,
    message: "Admin created successfully",
    data: result,
  });
};

export const UserController = {
  createAdmin,
};
