-- CreateTable
CREATE TABLE `Carreras` (
    `idCarreras` INTEGER NOT NULL AUTO_INCREMENT,
    `nombreCarrera` VARCHAR(191) NOT NULL,
    `creditosCarrera` INTEGER NOT NULL,
    `planEstudios` VARCHAR(191) NOT NULL,
    `jefeDepartamento` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idCarreras`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
