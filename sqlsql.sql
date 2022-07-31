-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: intadm22jf044_pod_3
-- ------------------------------------------------------
-- Server version	8.0.29

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
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `admin_id` int NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `mobile_number` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`admin_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'kamleshdangi78@gmail.com','8077534904','singh','kamlesh'),(2,'admin@gmail.com','9090909090','123456','admin'),(12,'updatedEmail.com',NULL,'password','customer1'),(15,'creator@cab.in','756324189','password','createadmin'),(16,'creator@cab.in','756324189','password','createadmin'),(17,'creator@cab.in','756324189','password','createadmin'),(18,'creator@cab.in','756324189','password','createadmin'),(19,'creator@cab.in','756324189','password','createadmin'),(20,'creator@cab.in','756324189','password','createadmin'),(21,'creator@cab.in','756324189','password','createadmin'),(23,'creator@cab.in','756324189','password','createadmin'),(36,'creator@cab.in','756324189','password','createadmin');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cab`
--

DROP TABLE IF EXISTS `cab`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cab` (
  `cab_id` int NOT NULL,
  `car_type` varchar(255) DEFAULT NULL,
  `per_km_rate` float NOT NULL,
  PRIMARY KEY (`cab_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cab`
--

LOCK TABLES `cab` WRITE;
/*!40000 ALTER TABLE `cab` DISABLE KEYS */;
INSERT INTO `cab` VALUES (100,'micro',15),(101,'mini',17),(102,'suv',18);
/*!40000 ALTER TABLE `cab` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `customer_id` int NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `mobile_number` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`customer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (1,'kamlesh@gmail.com','8077534904','singh','kamlesh'),(2,'customer2@gmail.com','2222222222','password1','customer1'),(3,'customer3@gmail.com','2345123456','password3','rajesh'),(4,'john@gmail.com','9876567456','password4','john'),(5,'rohan@gmail.com','1234512345','password5','rohan'),(22,'nikhil@gmail.com','8787878787','pass','nikhil'),(24,'customer@g.com','9182829300','123456','kaml'),(25,'ram','1231313131','pass','ram'),(37,'customer@g.com','9182829700','kishoreTheGreat','krishupdate');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `driver`
--

DROP TABLE IF EXISTS `driver`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `driver` (
  `driver_id` int NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `mobile_number` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `license_no` varchar(255) DEFAULT NULL,
  `rating` float NOT NULL,
  `cab_cab_id` int DEFAULT NULL,
  `status` int DEFAULT NULL,
  PRIMARY KEY (`driver_id`),
  KEY `FK1vcfjaeon0qavs1cjalgm3ro4` (`cab_cab_id`),
  CONSTRAINT `FK1vcfjaeon0qavs1cjalgm3ro4` FOREIGN KEY (`cab_cab_id`) REFERENCES `cab` (`cab_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `driver`
--

LOCK TABLES `driver` WRITE;
/*!40000 ALTER TABLE `driver` DISABLE KEYS */;
INSERT INTO `driver` VALUES (1,'ranu@gmail.com','9999999999','driver1','ram','123456',5,100,0),(2,'sonu@gmail.com','8888888888','driver2','shyam','654321',4,101,0),(3,'raju@gmail.com','7777777777','driver3','mohan','676867',4,102,0),(4,'sohan@gmil.com','4444444444','driver4','sohan','124578',3,102,0),(5,'raj@gmail.com','6868686888','driver5','raj','142345',2,101,0),(7,'smith@gmail.com','4532424242','driver5','smith','354678',3,102,0),(8,'driver8@gmail.com','5645454545','driver5','abhi','777666',2,101,0),(10,'smir8@gmail.com','1234123344','driver5','sonu','202222',1,100,0),(11,'raghav@gmail.com','9898098765','driver5','raghav','123123',3,100,0),(32,'d@gmail.com','4545454545','123456','drivertest','111111',1,102,0),(33,'s@gmai.com','6767676766','123456','newtest','222222',2,100,0),(34,'t@gmail.com','1232123212','123456','test5','545454',4,100,0),(35,'sada2@gmail.com','1232123212','123123','driverupdate','121212',2,102,0);
/*!40000 ALTER TABLE `driver` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (48);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trip_booking`
--

DROP TABLE IF EXISTS `trip_booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trip_booking` (
  `trip_booking_id` int NOT NULL,
  `bill` float NOT NULL,
  `distance_in_km` float NOT NULL,
  `from_date_time` datetime(6) DEFAULT NULL,
  `from_location` varchar(255) DEFAULT NULL,
  `status` bit(1) NOT NULL,
  `to_date_time` datetime(6) DEFAULT NULL,
  `to_location` varchar(255) DEFAULT NULL,
  `customer_id` int DEFAULT NULL,
  `driver_id` int DEFAULT NULL,
  PRIMARY KEY (`trip_booking_id`),
  KEY `FKmdpki35yiwg5t3y9ygecfqmeo` (`customer_id`),
  KEY `FKa5ht9g6u6sae4g4715053auu4` (`driver_id`),
  CONSTRAINT `FKa5ht9g6u6sae4g4715053auu4` FOREIGN KEY (`driver_id`) REFERENCES `driver` (`driver_id`),
  CONSTRAINT `FKmdpki35yiwg5t3y9ygecfqmeo` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trip_booking`
--

LOCK TABLES `trip_booking` WRITE;
/*!40000 ALTER TABLE `trip_booking` DISABLE KEYS */;
INSERT INTO `trip_booking` VALUES (1,1022,122,'2022-06-13 10:45:56.000000','hld',_binary '','2022-06-13 12:45:56.000000','nanital',2,4),(2,102,12,'2022-06-23 10:45:56.000000','hld',_binary '','2022-06-23 12:45:56.000000','bhimtal',1,3),(26,240,40,'2018-02-05 11:59:11.332000','naintal',_binary '','2018-02-05 11:59:11.332000','haldwani',1,1),(27,240,40,'2018-02-05 11:59:11.332000','naintal',_binary '','2018-02-05 11:59:11.332000','haldwani',1,1),(28,150,35,'2022-02-05 11:59:11.332000','mumbai',_binary '','2022-02-05 11:59:11.332000','navimumbai',2,4),(29,8000,3500,'2021-02-08 11:59:11.332000','mumbai',_binary '','2021-02-12 11:59:11.332000','banglore',2,3),(30,8000,3500,'2022-07-18 11:59:11.332000','mumbai',_binary '\0','2022-07-25 11:59:11.332000','navimumbai',24,10),(31,1800,350,'2022-07-11 11:59:11.332000','du',_binary '\0','2022-07-11 11:59:11.332000','gehu',5,10),(32,1800,350,'2022-07-11 11:59:11.332000','du',_binary '\0','2022-07-11 11:59:11.332000','hld',4,4),(42,4148,244,'2022-07-25 05:20:00.000000','delhi',_binary '\0','2022-07-25 05:20:00.000000','dehradun',2,5),(43,5418,301,'2022-07-29 12:32:00.000000','dehradun',_binary '\0','2022-07-29 12:32:00.000000','nainital',3,2),(44,561,33,'2022-07-21 11:52:00.000000','dehradun',_binary '\0','2022-07-21 11:52:00.000000','mussoorie',2,1);
/*!40000 ALTER TABLE `trip_booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL,
  `age` int NOT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-21 22:28:32
