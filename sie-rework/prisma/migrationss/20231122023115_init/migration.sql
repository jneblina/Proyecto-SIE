/*
  Warnings:

  - You are about to alter the column `fotoPerfil` on the `estudiante` table. The data in that column could be lost. The data in that column will be cast from `LongBlob` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `estudiante` MODIFY `fotoPerfil` VARCHAR(191) NOT NULL;
