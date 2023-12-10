-- CreateTable
CREATE TABLE `estudiante` (
    `idEstudiante` INTEGER NOT NULL AUTO_INCREMENT,
    `numeroControl` VARCHAR(191) NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `modalidad` VARCHAR(191) NOT NULL,
    `curp` VARCHAR(191) NOT NULL,
    `fotoPerfil` LONGBLOB NOT NULL,
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

    PRIMARY KEY (`idEstudiante`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
