/*
  Warnings:

  - A unique constraint covering the columns `[correoInstitucional]` on the table `estudiante` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE `usuarios` (
    `idUsuarios` INTEGER NOT NULL AUTO_INCREMENT,
    `correoUsuarios` VARCHAR(191) NOT NULL,
    `passwordUsuarios` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `usuarios_correoUsuarios_key`(`correoUsuarios`),
    PRIMARY KEY (`idUsuarios`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `estudiante_correoInstitucional_key` ON `estudiante`(`correoInstitucional`);

-- AddForeignKey
ALTER TABLE `usuarios` ADD CONSTRAINT `Usuarios_correoUsuarios_fkey` FOREIGN KEY (`correoUsuarios`) REFERENCES `estudiante`(`correoInstitucional`) ON DELETE RESTRICT ON UPDATE CASCADE;
