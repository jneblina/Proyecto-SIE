/*
  Warnings:

  - You are about to alter the column `planEstudios` on the `carreras` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `estudiante` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `numeroControl` on the `estudiante` table. All the data in the column will be lost.
  - You are about to alter the column `modalidad` on the `estudiante` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `fotoPerfil` on the `estudiante` table. The data in that column could be lost. The data in that column will be cast from `LongBlob` to `VarChar(191)`.
  - You are about to drop the column `correoUsuarios` on the `usuarios` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[idEstudiante]` on the table `estudiante` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `semestre` to the `materia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estudianteUsuarios` to the `usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `documentos` DROP FOREIGN KEY `idEstudiante`;

-- DropForeignKey
ALTER TABLE `usuarios` DROP FOREIGN KEY `Usuarios_correoUsuarios_fkey`;

-- AlterTable
ALTER TABLE `carreras` MODIFY `planEstudios` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `documentos` MODIFY `idDocumentos` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `estudiante` DROP PRIMARY KEY,
    DROP COLUMN `numeroControl`,
    MODIFY `modalidad` INTEGER NOT NULL,
    MODIFY `fotoPerfil` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`idEstudiante`, `modalidad`);

-- AlterTable
ALTER TABLE `materia` ADD COLUMN `semestre` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `usuarios` DROP COLUMN `correoUsuarios`,
    ADD COLUMN `estudianteUsuarios` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `materiaestudiante` (
    `idMateriaEstudiante` INTEGER NOT NULL AUTO_INCREMENT,
    `estudiante` INTEGER NOT NULL,
    `materia` INTEGER NOT NULL,
    `estado` INTEGER NOT NULL,

    INDEX `estudiante_idx`(`estudiante`),
    INDEX `materia_idx`(`materia`),
    PRIMARY KEY (`idMateriaEstudiante`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `grupo` (
    `idGrupo` INTEGER NOT NULL AUTO_INCREMENT,
    `idMateria` INTEGER NOT NULL,
    `paq` VARCHAR(10) NOT NULL,
    `lunes` VARCHAR(20) NULL,
    `martes` VARCHAR(20) NULL,
    `miercoles` VARCHAR(20) NULL,
    `jueves` VARCHAR(20) NULL,
    `viernes` VARCHAR(20) NULL,
    `sabado` VARCHAR(20) NULL,
    `salon` VARCHAR(25) NOT NULL,
    `idDocente` INTEGER NOT NULL,

    INDEX `idDocente_idx`(`idDocente`),
    INDEX `idMateria_idx`(`idMateria`),
    PRIMARY KEY (`idGrupo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `grupoestudiante` (
    `idGrupoEstudiante` INTEGER NOT NULL AUTO_INCREMENT,
    `idGrupo` INTEGER NOT NULL,
    `idEstudiante` INTEGER NOT NULL,

    INDEX `idEstudiante_idx`(`idEstudiante`),
    INDEX `idGrupo_idx`(`idGrupo`),
    PRIMARY KEY (`idGrupoEstudiante`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `estudiante_idEstudiante_key` ON `estudiante`(`idEstudiante`);

-- CreateIndex
CREATE INDEX `Usuarios_estudiantes_fkey_idx` ON `usuarios`(`estudianteUsuarios`);

-- AddForeignKey
ALTER TABLE `carreras` ADD CONSTRAINT `fk_carreras_planestudios` FOREIGN KEY (`planEstudios`) REFERENCES `planestudios`(`idPlan`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `documentos` ADD CONSTRAINT `idEstudiante` FOREIGN KEY (`idEstudiante`) REFERENCES `estudiante`(`idEstudiante`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `estudiante` ADD CONSTRAINT `fk_estudiante_modalidad` FOREIGN KEY (`modalidad`) REFERENCES `modalidad`(`idModalidad`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `usuarios` ADD CONSTRAINT `Usuarios_estudiantes_fkey` FOREIGN KEY (`estudianteUsuarios`) REFERENCES `estudiante`(`idEstudiante`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `materiaestudiante` ADD CONSTRAINT `estudiante` FOREIGN KEY (`estudiante`) REFERENCES `estudiante`(`idEstudiante`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `materiaestudiante` ADD CONSTRAINT `materia` FOREIGN KEY (`materia`) REFERENCES `materia`(`idMateria`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `grupo` ADD CONSTRAINT `idDocente` FOREIGN KEY (`idDocente`) REFERENCES `docente`(`idDocente`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `grupo` ADD CONSTRAINT `idMateria` FOREIGN KEY (`idMateria`) REFERENCES `materia`(`idMateria`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `grupoestudiante` ADD CONSTRAINT `estudianteGrupo` FOREIGN KEY (`idEstudiante`) REFERENCES `estudiante`(`idEstudiante`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `grupoestudiante` ADD CONSTRAINT `grupo` FOREIGN KEY (`idGrupo`) REFERENCES `grupo`(`idGrupo`) ON DELETE NO ACTION ON UPDATE NO ACTION;
