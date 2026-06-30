/*
  Warnings:

  - You are about to drop the column `icon` on the `specialties` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "specialties" DROP COLUMN "icon",
ADD COLUMN     "image" VARCHAR(255);
