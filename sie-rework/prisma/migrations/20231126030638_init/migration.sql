/*
  Warnings:

  - Added the required column `semestre` to the `materia` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `materia` ADD COLUMN `semestre` INTEGER NOT NULL;
