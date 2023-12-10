/*
  Warnings:

  - You are about to drop the column `numeroControl` on the `estudiante` table. All the data in the column will be lost.
  - You are about to drop the column `correoUsuarios` on the `usuarios` table. All the data in the column will be lost.
  - Added the required column `estudianteUsuarios` to the `usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `documentos` DROP FOREIGN KEY `Documentos_idEstudiante_fkey`;

-- DropForeignKey
ALTER TABLE `usuarios` DROP FOREIGN KEY `Usuarios_correoUsuarios_fkey`;

-- AlterTable
ALTER TABLE `documentos` MODIFY `idDocumentos` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `estudiante` DROP COLUMN `numeroControl`;

-- AlterTable
ALTER TABLE `usuarios` DROP COLUMN `correoUsuarios`,
    ADD COLUMN `estudianteUsuarios` INTEGER NOT NULL;

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
CREATE INDEX `Usuarios_estudiantes_fkey_idx` ON `usuarios`(`estudianteUsuarios`);

-- AddForeignKey
ALTER TABLE `documentos` ADD CONSTRAINT `idEstudiante` FOREIGN KEY (`idEstudiante`) REFERENCES `estudiante`(`idEstudiante`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `usuarios` ADD CONSTRAINT `Usuarios_estudiantes_fkey` FOREIGN KEY (`estudianteUsuarios`) REFERENCES `estudiante`(`idEstudiante`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `grupo` ADD CONSTRAINT `idDocente` FOREIGN KEY (`idDocente`) REFERENCES `docente`(`idDocente`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `grupo` ADD CONSTRAINT `idMateria` FOREIGN KEY (`idMateria`) REFERENCES `materia`(`idMateria`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `grupoestudiante` ADD CONSTRAINT `estudianteGrupo` FOREIGN KEY (`idEstudiante`) REFERENCES `estudiante`(`idEstudiante`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `grupoestudiante` ADD CONSTRAINT `grupo` FOREIGN KEY (`idGrupo`) REFERENCES `grupo`(`idGrupo`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- RenameIndex
ALTER TABLE `documentos` RENAME INDEX `Documentos_idEstudiante_fkey` TO `idEstudiante_idx`;
