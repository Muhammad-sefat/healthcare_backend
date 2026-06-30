/*
  Warnings:

  - A unique constraint covering the columns `[adminId,title]` on the table `specialties` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `adminId` to the `specialties` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "specialties_title_key";

-- AlterTable
ALTER TABLE "specialties" ADD COLUMN     "adminId" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "specialties_adminId_idx" ON "specialties"("adminId");

-- CreateIndex
CREATE UNIQUE INDEX "specialties_adminId_title_key" ON "specialties"("adminId", "title");

-- AddForeignKey
ALTER TABLE "specialties" ADD CONSTRAINT "specialties_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "idx_specialty_isDeleted" RENAME TO "specialties_isDeleted_idx";

-- RenameIndex
ALTER INDEX "idx_specialty_title" RENAME TO "specialties_title_idx";
