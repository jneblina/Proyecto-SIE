-- CreateTable
CREATE TABLE `carreras` (
    `idCarreras` INTEGER NOT NULL AUTO_INCREMENT,
    `planEstudios` INTEGER NOT NULL,
    `jefeDepartamento` VARCHAR(191) NOT NULL,
    `creditos` INTEGER NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,

    INDEX `fk_carreras_planestudios`(`planEstudios`),
    PRIMARY KEY (`idCarreras`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `docente` (
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

-- CreateTable
CREATE TABLE `documentos` (
    `idDocumentos` INTEGER NOT NULL,
    `actaNacimiento` LONGBLOB NOT NULL,
    `certificadoBachillerato` LONGBLOB NOT NULL,
    `contratoEstudiante` LONGBLOB NOT NULL,
    `formatoActualizadoCurp` LONGBLOB NOT NULL,
    `resolucionRevalidacionEstudios` LONGBLOB NOT NULL,
    `solicitudInscripcion` LONGBLOB NOT NULL,
    `cartaServicioSocial` LONGBLOB NOT NULL,
    `tarjetaResidenteTemporal` LONGBLOB NOT NULL,
    `idEstudiante` INTEGER NOT NULL,

    INDEX `idEstudiante`(`idEstudiante`),
    PRIMARY KEY (`idDocumentos`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `estudiante` (
    `idEstudiante` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `modalidad` INTEGER NOT NULL,
    `curp` VARCHAR(191) NOT NULL,
    `fotoPerfil` VARCHAR(191) NOT NULL,
    `telefono` VARCHAR(191) NOT NULL,
    `correoInstitucional` VARCHAR(191) NOT NULL,
    `correoPersonal` VARCHAR(191) NOT NULL,
    `periodoIngreso` VARCHAR(191) NOT NULL,
    `periodoActual` VARCHAR(191) NOT NULL,
    `situacion` VARCHAR(191) NOT NULL,
    `escuelaProcedencia` VARCHAR(191) NOT NULL,
    `fechaNacimiento` DATETIME(3) NOT NULL,
    `ciudad` VARCHAR(191) NOT NULL,
    `direccion` VARCHAR(191) NOT NULL,
    `idCarrera` INTEGER NOT NULL,

    UNIQUE INDEX `estudiante_idEstudiante_key`(`idEstudiante`),
    UNIQUE INDEX `estudiante_correoInstitucional_key`(`correoInstitucional`),
    INDEX `Estudiante_idCarrera_fkey`(`idCarrera`),
    INDEX `fk_estudiante_modalidad`(`modalidad`),
    PRIMARY KEY (`idEstudiante`, `modalidad`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuarios` (
    `idUsuarios` INTEGER NOT NULL AUTO_INCREMENT,
    `passwordUsuarios` VARCHAR(191) NOT NULL,
    `estudianteUsuarios` INTEGER NOT NULL,

    INDEX `Usuarios_estudiantes_fkey_idx`(`estudianteUsuarios`),
    PRIMARY KEY (`idUsuarios`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `materia` (
    `idMateria` INTEGER NOT NULL AUTO_INCREMENT,
    `materiaPrevia` TEXT NULL,
    `materiaDependiente` TEXT NULL,
    `planEstudios` INTEGER NOT NULL,
    `nombre` TEXT NOT NULL,
    `creditos` INTEGER NOT NULL,
    `semestre` INTEGER NOT NULL,

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
CREATE TABLE `actividadcom` (
    `idActividadCom` INTEGER NOT NULL AUTO_INCREMENT,
    `estudianteAct` INTEGER NOT NULL,
    `periodo` VARCHAR(45) NOT NULL,
    `nombreActividad` VARCHAR(45) NOT NULL,
    `creditos` VARCHAR(10) NOT NULL,
    `horas` VARCHAR(10) NOT NULL,
    `tutorResponsable` INTEGER NOT NULL,
    `calificacion` INTEGER NOT NULL,

    INDEX `estudianteActCom_idx`(`estudianteAct`),
    INDEX `tutorAct_idx`(`tutorResponsable`),
    PRIMARY KEY (`idActividadCom`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `adeudos` (
    `idAdeudos` INTEGER NOT NULL AUTO_INCREMENT,
    `estudianteAdeudo` INTEGER NOT NULL,
    `fecha` VARCHAR(25) NOT NULL,
    `departamento` VARCHAR(25) NOT NULL,
    `descripcion` VARCHAR(45) NOT NULL,
    `cantidad` VARCHAR(10) NOT NULL,

    INDEX `estudianteAdeudo_idx`(`estudianteAdeudo`),
    PRIMARY KEY (`idAdeudos`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `calificaciones` (
    `idCalificaciones` INTEGER NOT NULL AUTO_INCREMENT,
    `idEstudiante` INTEGER NOT NULL,
    `idMateria` INTEGER NOT NULL,
    `primerP` INTEGER NULL,
    `segundoP` INTEGER NULL,
    `tercerP` INTEGER NULL,
    `cuartoP` INTEGER NULL,
    `quintoP` INTEGER NULL,

    INDEX `estudianteCal_idx`(`idEstudiante`),
    INDEX `materiaCal_idx`(`idMateria`),
    PRIMARY KEY (`idCalificaciones`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `evaluaciondocente` (
    `idEvaluacionDocente` INTEGER NOT NULL AUTO_INCREMENT,
    `estudianteEval` INTEGER NOT NULL,
    `docenteEval` INTEGER NOT NULL,
    `respuestas` VARCHAR(10) NOT NULL,
    `estado` VARCHAR(25) NOT NULL,

    INDEX `docenteEval_idx`(`docenteEval`),
    INDEX `estudianteEval_idx`(`estudianteEval`),
    PRIMARY KEY (`idEvaluacionDocente`)
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

-- CreateTable
CREATE TABLE `residencias` (
    `idResidencias` INTEGER NOT NULL AUTO_INCREMENT,
    `estudianteRes` INTEGER NOT NULL,
    `fechaSolicitud` VARCHAR(45) NULL,
    `proyecto` VARCHAR(45) NULL,
    `duracion` VARCHAR(45) NULL,
    `empresa` VARCHAR(45) NULL,
    `asesorExterno` VARCHAR(45) NULL,
    `asesorInterno` VARCHAR(45) NULL,
    `revisor` VARCHAR(45) NULL,
    `dictamen` VARCHAR(45) NULL,
    `calificacion` VARCHAR(45) NULL,

    INDEX `estudianteRes_idx`(`estudianteRes`),
    PRIMARY KEY (`idResidencias`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `servicios` (
    `idServicios` INTEGER NOT NULL AUTO_INCREMENT,
    `codigo` VARCHAR(15) NOT NULL,
    `descripcion` VARCHAR(45) NOT NULL,
    `importe` VARCHAR(15) NOT NULL,
    `vigencia` VARCHAR(15) NOT NULL,

    PRIMARY KEY (`idServicios`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `serviciosestudiante` (
    `idServiciosEstudiante` INTEGER NOT NULL AUTO_INCREMENT,
    `estudianteServicio` INTEGER NOT NULL,
    `folio` VARCHAR(10) NOT NULL,
    `catalogoServicio` INTEGER NOT NULL,
    `vigencia` VARCHAR(15) NOT NULL,
    `solicitado` VARCHAR(15) NOT NULL,
    `validado` VARCHAR(15) NULL,
    `sucursal` VARCHAR(15) NOT NULL,
    `autorizado` VARCHAR(15) NULL,

    INDEX `catalogoServicio_idx`(`catalogoServicio`),
    INDEX `estudianteServicio_idx`(`estudianteServicio`),
    PRIMARY KEY (`idServiciosEstudiante`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `carreras` ADD CONSTRAINT `fk_carreras_planestudios` FOREIGN KEY (`planEstudios`) REFERENCES `planestudios`(`idPlan`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `documentos` ADD CONSTRAINT `idEstudiante` FOREIGN KEY (`idEstudiante`) REFERENCES `estudiante`(`idEstudiante`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `estudiante` ADD CONSTRAINT `Estudiante_idCarrera_fkey` FOREIGN KEY (`idCarrera`) REFERENCES `carreras`(`idCarreras`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `estudiante` ADD CONSTRAINT `fk_estudiante_modalidad` FOREIGN KEY (`modalidad`) REFERENCES `modalidad`(`idModalidad`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `usuarios` ADD CONSTRAINT `Usuarios_estudiantes_fkey` FOREIGN KEY (`estudianteUsuarios`) REFERENCES `estudiante`(`idEstudiante`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `materia` ADD CONSTRAINT `materia_ibfk_1` FOREIGN KEY (`planEstudios`) REFERENCES `planestudios`(`idPlan`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `materiaestudiante` ADD CONSTRAINT `estudiante` FOREIGN KEY (`estudiante`) REFERENCES `estudiante`(`idEstudiante`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `materiaestudiante` ADD CONSTRAINT `materia` FOREIGN KEY (`materia`) REFERENCES `materia`(`idMateria`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `actividadcom` ADD CONSTRAINT `estudianteActCom` FOREIGN KEY (`estudianteAct`) REFERENCES `estudiante`(`idEstudiante`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `actividadcom` ADD CONSTRAINT `tutorAct` FOREIGN KEY (`tutorResponsable`) REFERENCES `docente`(`idDocente`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `adeudos` ADD CONSTRAINT `estudianteAdeudo` FOREIGN KEY (`estudianteAdeudo`) REFERENCES `estudiante`(`idEstudiante`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `calificaciones` ADD CONSTRAINT `estudianteCal` FOREIGN KEY (`idEstudiante`) REFERENCES `estudiante`(`idEstudiante`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `calificaciones` ADD CONSTRAINT `materiaCal` FOREIGN KEY (`idMateria`) REFERENCES `materia`(`idMateria`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `evaluaciondocente` ADD CONSTRAINT `docenteEval` FOREIGN KEY (`docenteEval`) REFERENCES `grupo`(`idGrupo`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `evaluaciondocente` ADD CONSTRAINT `estudianteEval` FOREIGN KEY (`estudianteEval`) REFERENCES `estudiante`(`idEstudiante`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `grupo` ADD CONSTRAINT `idDocente` FOREIGN KEY (`idDocente`) REFERENCES `docente`(`idDocente`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `grupo` ADD CONSTRAINT `idMateria` FOREIGN KEY (`idMateria`) REFERENCES `materia`(`idMateria`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `grupoestudiante` ADD CONSTRAINT `estudianteGrupo` FOREIGN KEY (`idEstudiante`) REFERENCES `estudiante`(`idEstudiante`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `grupoestudiante` ADD CONSTRAINT `grupo` FOREIGN KEY (`idGrupo`) REFERENCES `grupo`(`idGrupo`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `residencias` ADD CONSTRAINT `estudianteRes` FOREIGN KEY (`estudianteRes`) REFERENCES `estudiante`(`idEstudiante`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `serviciosestudiante` ADD CONSTRAINT `catalogoServicio` FOREIGN KEY (`catalogoServicio`) REFERENCES `servicios`(`idServicios`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `serviciosestudiante` ADD CONSTRAINT `estudianteServicio` FOREIGN KEY (`estudianteServicio`) REFERENCES `estudiante`(`idEstudiante`) ON DELETE NO ACTION ON UPDATE NO ACTION;
