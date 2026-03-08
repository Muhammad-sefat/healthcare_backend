/*
  Warnings:

  - You are about to drop the `_DoctorToSpecialty` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_DoctorToSpecialty" DROP CONSTRAINT "_DoctorToSpecialty_A_fkey";

-- DropForeignKey
ALTER TABLE "_DoctorToSpecialty" DROP CONSTRAINT "_DoctorToSpecialty_B_fkey";

-- DropTable
DROP TABLE "_DoctorToSpecialty";

-- CreateTable
CREATE TABLE "doctor_specialties" (
    "id" TEXT NOT NULL,
    "doctorId" TEXT NOT NULL,
    "specialtyId" TEXT NOT NULL,

    CONSTRAINT "doctor_specialties_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "idx_doctor_specialty_doctorId" ON "doctor_specialties"("doctorId");

-- CreateIndex
CREATE INDEX "idx_doctor_specialty_specialtyId" ON "doctor_specialties"("specialtyId");

-- CreateIndex
CREATE UNIQUE INDEX "doctor_specialties_doctorId_specialtyId_key" ON "doctor_specialties"("doctorId", "specialtyId");

-- AddForeignKey
ALTER TABLE "doctor_specialties" ADD CONSTRAINT "doctor_specialties_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "doctor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "doctor_specialties" ADD CONSTRAINT "doctor_specialties_specialtyId_fkey" FOREIGN KEY ("specialtyId") REFERENCES "specialties"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "idx_specialty_isdeleted" RENAME TO "idx_specialty_isDeleted";
