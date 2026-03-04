import { prisma } from "../../lib/prisma";
import { auth } from "../../lib/auth";
import { ICreateAdmin } from "./user.interface";
import { Role } from "../../../generated/prisma/enums";

const createAdmin = async (payload: ICreateAdmin) => {
  const { password, admin } = payload;

  const userExists = await prisma.user.findUnique({
    where: { email: admin.email },
  });

  if (userExists) {
    throw new Error("User already exists");
  }

  const userData = await auth.api.signUpEmail({
    body: {
      email: admin.email,
      password,
      name: admin.name,
      role: Role.ADMIN,
    },
  });

  try {
    const result = await prisma.$transaction(async (tx) => {
      const adminData = await tx.admin.create({
        data: {
          userId: userData.user.id,
          name: admin.name,
          email: admin.email,
          profilePhoto: admin.profilePhoto,
          contactNumber: admin.contactNumber,
        },
      });

      return adminData;
    });

    return result;
  } catch (error) {
    await prisma.user.delete({
      where: { id: userData.user.id },
    });

    throw new Error("Failed to create admin");
  }
};

export const UserService = {
  createAdmin,
};
