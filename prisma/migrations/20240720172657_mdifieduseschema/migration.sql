/*
  Warnings:

  - You are about to drop the `Token` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Token" DROP CONSTRAINT "Token_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "tokenexpirey" TIMESTAMP(3),
ADD COLUMN     "verifyToken" TEXT;

-- DropTable
DROP TABLE "Token";
