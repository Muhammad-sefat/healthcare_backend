import { Specialty } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";
import { CreateSpecialtyPayload } from "./specialty.types";

const createSpecialty = async (
  payload: CreateSpecialtyPayload,
): Promise<Specialty> => {
  const specialty = await prisma.specialty.create({
    data: {
      title: payload.title,
      description: payload.description,
      image: payload.image,
      adminId: payload.adminId,
    },
  });

  return specialty;
};

const getAllSpecialties = async (): Promise<Specialty[]> => {
  const specialties = await prisma.specialty.findMany();
  return specialties;
};

const deleteSpecialty = async (id: string): Promise<Specialty> => {
  const specialty = await prisma.specialty.delete({
    where: { id },
  });

  return specialty;
};

export const SpecialtyService = {
  createSpecialty,
  getAllSpecialties,
  deleteSpecialty,
};
