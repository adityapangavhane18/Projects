-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:4306
-- Generation Time: Nov 11, 2024 at 06:50 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cia_report`
--

-- --------------------------------------------------------

--
-- Table structure for table `add_facultys`
--

CREATE TABLE `add_facultys` (
  `name` varchar(250) NOT NULL,
  `id` varchar(20) NOT NULL,
  `dept` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `add_facultys`
--

INSERT INTO `add_facultys` (`name`, `id`, `dept`, `email`) VALUES
('Prof. K. S. Katke', 'UCS22M1099', 'Computer Engineering', 'kskatke123@gmail.com'),
('Prof. J. N. Kale', 'UCS22M1222', 'Computer Engineering', 'jnkale123@gmail.com'),
('Dr. S.R. Deskmukh', 'UCS22M5555', 'Compter', 'sample@gmail.com'),
('Dr. S.R. Deskmukh', 'UCS22M5556', 'Compter', 'sample@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `add_students`
--

CREATE TABLE `add_students` (
  `name` varchar(200) NOT NULL,
  `prn` varchar(10) NOT NULL,
  `dept` varchar(40) NOT NULL,
  `year` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `add_students`
--

INSERT INTO `add_students` (`name`, `prn`, `dept`, `year`) VALUES
('Kartik Babasaheb Kale', 'UCS22M1066', 'Information Technology', 2),
('Kunal Gorakshnath Pathak', 'UCS22M1129', 'Information Technology', 4),
('Sahil Ashok Thorat', 'UCS22M1515', 'Computer', 4);

-- --------------------------------------------------------

--
-- Table structure for table `new_registration`
--

CREATE TABLE `new_registration` (
  `name` varchar(250) NOT NULL,
  `prn` varchar(10) NOT NULL,
  `dob` date NOT NULL,
  `class` int(11) NOT NULL,
  `dept` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `new_registration`
--

INSERT INTO `new_registration` (`name`, `prn`, `dob`, `class`, `dept`) VALUES
('Aditya Anil Pangavhane', 'UCS22M1092', '2004-04-08', 3, 'Computer Engineering'),
('Amol Kasar', 'UCS22M1124', '2004-10-05', 3, 'Information Technology'),
('Amol Kasar', 'UCS22M1125', '2005-06-05', 3, 'Information Technology');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `add_facultys`
--
ALTER TABLE `add_facultys`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `add_students`
--
ALTER TABLE `add_students`
  ADD PRIMARY KEY (`prn`);

--
-- Indexes for table `new_registration`
--
ALTER TABLE `new_registration`
  ADD PRIMARY KEY (`prn`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
