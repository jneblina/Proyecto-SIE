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

-- AddForeignKey
ALTER TABLE `materiaestudiante` ADD CONSTRAINT `estudiante` FOREIGN KEY (`estudiante`) REFERENCES `estudiante`(`idEstudiante`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `materiaestudiante` ADD CONSTRAINT `materia` FOREIGN KEY (`materia`) REFERENCES `materia`(`idMateria`) ON DELETE NO ACTION ON UPDATE NO ACTION;
