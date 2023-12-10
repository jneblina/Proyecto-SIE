/*
  Warnings:

  - You are about to drop the column `creditosCarrera` on the `carreras` table. All the data in the column will be lost.
  - You are about to drop the column `nombreCarrera` on the `carreras` table. All the data in the column will be lost.
  - Added the required column `creditos` to the `Carreras` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombre` to the `Carreras` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `carreras` DROP COLUMN `creditosCarrera`,
    DROP COLUMN `nombreCarrera`,
    ADD COLUMN `creditos` INTEGER NOT NULL,
    ADD COLUMN `nombre` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Docente` (
    `idDocente` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `curp` VARCHAR(191) NOT NULL,
    `direccion` VARCHAR(191) NOT NULL,
    `telefono` VARCHAR(191) NOT NULL,
    `correoPersonal` VARCHAR(191) NOT NULL,
    `correoInstitucional` VARCHAR(191) NOT NULL,
    `titulo` VARCHAR(191) NOT NULL,
    `plazas` VARCHAR(191) NOT NULL,
    `puesto` VARCHAR(191) NOT NULL,
    `departamento` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idDocente`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
