/*
  Warnings:

  - Added the required column `idCarrera` to the `Estudiante` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `estudiante` ADD COLUMN `idCarrera` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Documentos` (
    `idDocumentos` INTEGER NOT NULL AUTO_INCREMENT,
    `actaNacimiento` LONGBLOB NOT NULL,
    `certificadoBachillerato` LONGBLOB NOT NULL,
    `contratoEstudiante` LONGBLOB NOT NULL,
    `formatoActualizadoCurp` LONGBLOB NOT NULL,
    `resolucionRevalidacionEstudios` LONGBLOB NOT NULL,
    `solicitudInscripcion` LONGBLOB NOT NULL,
    `cartaServicioSocial` LONGBLOB NOT NULL,
    `tarjetaResidenteTemporal` LONGBLOB NOT NULL,
    `idEstudiante` INTEGER NOT NULL,

    PRIMARY KEY (`idDocumentos`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Estudiante` ADD CONSTRAINT `Estudiante_idCarrera_fkey` FOREIGN KEY (`idCarrera`) REFERENCES `Carreras`(`idCarreras`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Documentos` ADD CONSTRAINT `Documentos_idEstudiante_fkey` FOREIGN KEY (`idEstudiante`) REFERENCES `Estudiante`(`idEstudiante`) ON DELETE RESTRICT ON UPDATE CASCADE;
