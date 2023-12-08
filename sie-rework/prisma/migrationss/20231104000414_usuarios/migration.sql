/*
  Warnings:

  - You are about to drop the `usuarios` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `usuarios` DROP FOREIGN KEY `Usuarios_correoUsuarios_fkey`;

-- DropIndex
DROP INDEX `estudiante_correoInstitucional_key` ON `estudiante`;

-- DropTable
DROP TABLE `usuarios`;
