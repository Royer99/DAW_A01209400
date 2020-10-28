-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 28, 2020 at 06:56 PM
-- Server version: 8.0.22-0ubuntu0.20.04.2
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Zombis`
--

-- --------------------------------------------------------

--
-- Table structure for table `estado`
--

CREATE TABLE `estado` (
  `id` int NOT NULL,
  `descripcion` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `estado`
--

INSERT INTO `estado` (`id`, `descripcion`) VALUES
(1, 'infección'),
(2, 'desorientación'),
(3, 'violencia'),
(4, 'desmayo'),
(5, 'transformación');

-- --------------------------------------------------------

--
-- Table structure for table `zombis`
--

CREATE TABLE `zombis` (
  `id` int NOT NULL,
  `nombre` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `zombis`
--

INSERT INTO `zombis` (`id`, `nombre`) VALUES
(1, 'Royer'),
(2, 'Royer'),
(3, 'Royer'),
(4, 'fasd'),
(5, 'fasd'),
(6, 'asdf'),
(7, 'lalo'),
(8, 'adrian'),
(9, 'adrian'),
(10, 'Ricardo'),
(11, 'lolo');

-- --------------------------------------------------------

--
-- Table structure for table `zombis_estado`
--

CREATE TABLE `zombis_estado` (
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `idzombi` int NOT NULL,
  `idestado` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `zombis_estado`
--

INSERT INTO `zombis_estado` (`fecha`, `idzombi`, `idestado`) VALUES
('2020-10-28 18:22:30', 1, 1),
('2020-10-28 18:23:04', 6, 1),
('2020-10-28 18:49:28', 7, 1),
('2020-10-28 18:49:30', 7, 1),
('2020-10-28 18:50:57', 8, 1),
('2020-10-28 18:50:59', 9, 1),
('2020-10-28 18:52:00', 10, 1),
('2020-10-28 18:52:01', 10, 1),
('2020-10-28 18:52:26', 11, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `estado`
--
ALTER TABLE `estado`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `zombis`
--
ALTER TABLE `zombis`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `zombis_estado`
--
ALTER TABLE `zombis_estado`
  ADD KEY `zombis_estado_ibfk_1` (`idzombi`),
  ADD KEY `zombis_estado_ibfk_2` (`idestado`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `zombis_estado`
--
ALTER TABLE `zombis_estado`
  ADD CONSTRAINT `zombis_estado_ibfk_1` FOREIGN KEY (`idzombi`) REFERENCES `zombis` (`id`),
  ADD CONSTRAINT `zombis_estado_ibfk_2` FOREIGN KEY (`idestado`) REFERENCES `estado` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
