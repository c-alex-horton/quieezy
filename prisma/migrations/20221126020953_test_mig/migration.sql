/*
  Warnings:

  - Made the column `totalCorrect` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `totalQuestions` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `totalQuizes` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "totalCorrect" SET NOT NULL,
ALTER COLUMN "totalQuestions" SET NOT NULL,
ALTER COLUMN "totalQuizes" SET NOT NULL;
