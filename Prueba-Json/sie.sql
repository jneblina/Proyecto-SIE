-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: sie
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('0137c22e-41a1-4d2e-8e08-2fffbdea3c18','2ceda46c0ec650039e2e2c037dcb9714ffa22174a84239e665f4bf618b6f760c','2023-11-02 23:34:23.357','20231023173951_init',NULL,NULL,'2023-11-02 23:34:23.338',1),('2ca62cf9-c321-44f4-b76e-e64bf87c5df5','1c0277abcfb9be3da9a9448ead3444f48a11d4b40878f4a7e39b1b514a715dfc','2023-11-02 23:34:23.394','20231023180034_tabla_docente',NULL,NULL,'2023-11-02 23:34:23.359',1),('5a7c6b09-7fbb-4383-8e05-8a597deb609b','e95d3ed88463bc912abd09d710f406256bad5f214da8f935c490c31149a2f551','2023-11-02 23:34:23.520','20231023182317_tabla_documentos',NULL,NULL,'2023-11-02 23:34:23.396',1),('6f9cea93-de63-49f4-a0c7-ce14e92eb437','c688c86a1a60db13a342bff18239ed348e13d3139738e45f41bf7cd1fbd9a96d','2023-11-02 23:34:33.568','20231102233433_usuarios',NULL,NULL,'2023-11-02 23:34:33.475',1),('b1c917a6-e477-4190-9a14-6a11af818592','017837bd4acdcc9ec8ce3bac2a43e074711c87ba9d40dd172772e96f36fb48b0','2023-11-02 23:34:23.335','20231023152835_init',NULL,NULL,'2023-11-02 23:34:23.301',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carreras`
--

DROP TABLE IF EXISTS `carreras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carreras` (
  `idCarreras` int NOT NULL AUTO_INCREMENT,
  `planEstudios` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `jefeDepartamento` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `creditos` int NOT NULL,
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`idCarreras`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carreras`
--

LOCK TABLES `carreras` WRITE;
/*!40000 ALTER TABLE `carreras` DISABLE KEYS */;
/*!40000 ALTER TABLE `carreras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `docente`
--

DROP TABLE IF EXISTS `docente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `docente` (
  `idDocente` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `curp` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `direccion` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefono` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `correoPersonal` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `correoInstitucional` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `titulo` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `plazas` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `puesto` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `departamento` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`idDocente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `docente`
--

LOCK TABLES `docente` WRITE;
/*!40000 ALTER TABLE `docente` DISABLE KEYS */;
/*!40000 ALTER TABLE `docente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `documentos`
--

DROP TABLE IF EXISTS `documentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `documentos` (
  `idDocumentos` int NOT NULL AUTO_INCREMENT,
  `actaNacimiento` longblob NOT NULL,
  `certificadoBachillerato` longblob NOT NULL,
  `contratoEstudiante` longblob NOT NULL,
  `formatoActualizadoCurp` longblob NOT NULL,
  `resolucionRevalidacionEstudios` longblob NOT NULL,
  `solicitudInscripcion` longblob NOT NULL,
  `cartaServicioSocial` longblob NOT NULL,
  `tarjetaResidenteTemporal` longblob NOT NULL,
  `idEstudiante` int NOT NULL,
  PRIMARY KEY (`idDocumentos`),
  KEY `Documentos_idEstudiante_fkey` (`idEstudiante`),
  CONSTRAINT `Documentos_idEstudiante_fkey` FOREIGN KEY (`idEstudiante`) REFERENCES `estudiante` (`idEstudiante`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `documentos`
--

LOCK TABLES `documentos` WRITE;
/*!40000 ALTER TABLE `documentos` DISABLE KEYS */;
/*!40000 ALTER TABLE `documentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estudiante`
--

DROP TABLE IF EXISTS `estudiante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estudiante` (
  `idEstudiante` int NOT NULL AUTO_INCREMENT,
  `numeroControl` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `modalidad` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `curp` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fotoPerfil` longblob NOT NULL,
  `telefono` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `correoInstitucional` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `correoPersonal` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `periodoIngreso` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `periodoActual` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `situacion` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `escuelaProcedencia` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fechaNacimiento` datetime(3) NOT NULL,
  `ciudad` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `direccion` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idCarrera` int NOT NULL,
  PRIMARY KEY (`idEstudiante`),
  UNIQUE KEY `estudiante_correoInstitucional_key` (`correoInstitucional`),
  KEY `Estudiante_idCarrera_fkey` (`idCarrera`),
  CONSTRAINT `Estudiante_idCarrera_fkey` FOREIGN KEY (`idCarrera`) REFERENCES `carreras` (`idCarreras`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estudiante`
--

LOCK TABLES `estudiante` WRITE;
/*!40000 ALTER TABLE `estudiante` DISABLE KEYS */;
/*!40000 ALTER TABLE `estudiante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `idUsuarios` int NOT NULL AUTO_INCREMENT,
  `correoUsuarios` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `passwordUsuarios` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`idUsuarios`),
  UNIQUE KEY `usuarios_correoUsuarios_key` (`correoUsuarios`),
  CONSTRAINT `Usuarios_correoUsuarios_fkey` FOREIGN KEY (`correoUsuarios`) REFERENCES `estudiante` (`correoInstitucional`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-02 16:42:24
