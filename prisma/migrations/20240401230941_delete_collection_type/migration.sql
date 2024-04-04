/*
  Warnings:

  - You are about to drop the column `collectionId` on the `Record` table. All the data in the column will be lost.
  - You are about to drop the `Collection` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Record` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Record` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Collection" DROP CONSTRAINT "Collection_userId_fkey";

-- DropForeignKey
ALTER TABLE "Record" DROP CONSTRAINT "Record_collectionId_fkey";

-- AlterTable
ALTER TABLE "Record" DROP COLUMN "collectionId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Collection";

-- CreateIndex
CREATE UNIQUE INDEX "Record_userId_key" ON "Record"("userId");

-- AddForeignKey
ALTER TABLE "Record" ADD CONSTRAINT "Record_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
