/*
  Warnings:

  - The primary key for the `estudiante` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `semestre` on the `materia` table. All the data in the column will be lost.
  - You are about to drop the `materiaestudiante` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `carreras` DROP FOREIGN KEY `fk_carreras_planestudios`;

-- DropForeignKey
ALTER TABLE `documentos` DROP FOREIGN KEY `Documentos_idEstudiante_fkey`;

-- DropForeignKey
ALTER TABLE `estudiante` DROP FOREIGN KEY `fk_estudiante_modalidad`;

-- DropForeignKey
ALTER TABLE `materiaestudiante` DROP FOREIGN KEY `estudiante`;

-- DropForeignKey
ALTER TABLE `materiaestudiante` DROP FOREIGN KEY `materia`;

-- DropIndex
DROP INDEX `estudiante_idEstudiante_key` ON `estudiante`;

-- AlterTable
ALTER TABLE `carreras` MODIFY `planEstudios` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `estudiante` DROP PRIMARY KEY,
    MODIFY `modalidad` VARCHAR(191) NOT NULL,
    MODIFY `fotoPerfil` LONGBLOB NOT NULL,
    ADD PRIMARY KEY (`idEstudiante`);

-- AlterTable
ALTER TABLE `materia` DROP COLUMN `semestre`;

-- DropTable
DROP TABLE `materiaestudiante`;

-- AddForeignKey
ALTER TABLE `documentos` ADD CONSTRAINT `idEstudiante` FOREIGN KEY (`idEstudiante`) REFERENCES `estudiante`(`idEstudiante`) ON DELETE RESTRICT ON UPDATE CASCADE;
