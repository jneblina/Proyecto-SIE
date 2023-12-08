/*
  Warnings:

  - You are about to alter the column `planEstudios` on the `carreras` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `estudiante` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `modalidad` on the `estudiante` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - A unique constraint covering the columns `[idEstudiante]` on the table `estudiante` will be added. If there are existing duplicate values, this will fail.
  - Made the column `fotoPerfil` on table `estudiante` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `carreras` MODIFY `planEstudios` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `estudiante` DROP PRIMARY KEY,
    MODIFY `modalidad` INTEGER NOT NULL,
    MODIFY `fotoPerfil` LONGBLOB NOT NULL,
    ADD PRIMARY KEY (`idEstudiante`, `modalidad`);

-- CreateTable
CREATE TABLE `materia` (
    `idMateria` INTEGER NOT NULL AUTO_INCREMENT,
    `materiaPrevia` TEXT NULL,
    `materiaDependiente` TEXT NULL,
    `planEstudios` INTEGER NOT NULL,
    `nombre` TEXT NOT NULL,
    `creditos` INTEGER NOT NULL,

    INDEX `planEstudios`(`planEstudios`),
    PRIMARY KEY (`idMateria`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `modalidad` (
    `idModalidad` INTEGER NOT NULL AUTO_INCREMENT,
    `nombreModalidad` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`idModalidad`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `planestudios` (
    `idPlan` INTEGER NOT NULL AUTO_INCREMENT,
    `nombrePlanEstudio` VARCHAR(50) NULL,

    PRIMARY KEY (`idPlan`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `trabajador` (
    `idTrabajador` INTEGER NOT NULL AUTO_INCREMENT,
    `puesto` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`idTrabajador`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `fk_carreras_planestudios` ON `carreras`(`planEstudios`);

-- CreateIndex
CREATE UNIQUE INDEX `estudiante_idEstudiante_key` ON `estudiante`(`idEstudiante`);

-- CreateIndex
CREATE INDEX `fk_estudiante_modalidad` ON `estudiante`(`modalidad`);

-- AddForeignKey
ALTER TABLE `carreras` ADD CONSTRAINT `fk_carreras_planestudios` FOREIGN KEY (`planEstudios`) REFERENCES `planestudios`(`idPlan`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `estudiante` ADD CONSTRAINT `fk_estudiante_modalidad` FOREIGN KEY (`modalidad`) REFERENCES `modalidad`(`idModalidad`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `materia` ADD CONSTRAINT `materia_ibfk_1` FOREIGN KEY (`planEstudios`) REFERENCES `planestudios`(`idPlan`) ON DELETE NO ACTION ON UPDATE NO ACTION;
