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
INSERT INTO `_prisma_migrations` VALUES ('16f04cc7-824c-4a8f-8ee4-4900220ecbe1','011fe92fcb22958322592b159549b228be47d8804cc7fa755f7a409401017832','2023-10-23 18:23:17.626','20231023182317_tabla_documentos',NULL,NULL,'2023-10-23 18:23:17.498',1),('83805550-0d55-411f-b75c-3381a5f5d729','abd3d4791d163a420f3e53ffadc96b7a0f2c412f6bf2245299c5c7a1fa8e5701','2023-10-23 18:23:09.868','20231023173951_init',NULL,NULL,'2023-10-23 18:23:09.846',1),('c5a0d949-d390-4978-9c90-5e022f42fbfb','af39bbb80c92d8357bd88b79f62502ef57d178b3732824e82e175cc0c670dbfc','2023-10-23 18:23:09.909','20231023180034_tabla_docente',NULL,NULL,'2023-10-23 18:23:09.871',1),('f570c480-6742-4b6c-aa35-885b880788ed','510e0fc8d459fe4b94c4ae300663a68ba1d492a84ce342572e6a829111e99fdc','2023-10-23 18:23:09.843','20231023152835_init',NULL,NULL,'2023-10-23 18:23:09.813',1);
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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-24 17:38:56
