-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 29, 2018 at 01:32 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 5.6.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `webtracker`
--

-- --------------------------------------------------------

--
-- Table structure for table `botdata`
--

CREATE TABLE `botdata` (
  `visit_id` mediumint(255) NOT NULL,
  `url` varchar(300) NOT NULL,
  `ip` varchar(300) NOT NULL,
  `browser` varchar(300) NOT NULL,
  `browser_version` varchar(300) NOT NULL,
  `date` varchar(300) NOT NULL,
  `resolution` varchar(300) NOT NULL,
  `os` varchar(225) NOT NULL,
  `referrer` varchar(300) NOT NULL,
  `site_id` varchar(255) NOT NULL,
  `Device_Type` varchar(300) NOT NULL,
  `time` varchar(100) NOT NULL,
  `Device_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `botipinfo`
--

CREATE TABLE `botipinfo` (
  `ip` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `timezone` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `datalog`
--

CREATE TABLE `datalog` (
  `visit_id` mediumint(255) NOT NULL,
  `url` varchar(300) NOT NULL,
  `ip` varchar(300) NOT NULL,
  `browser` varchar(300) NOT NULL,
  `browser_version` varchar(300) NOT NULL,
  `date` date NOT NULL,
  `resolution` varchar(300) NOT NULL,
  `os` varchar(225) NOT NULL,
  `referrer` varchar(300) NOT NULL,
  `site_id` varchar(255) NOT NULL,
  `Device_Type` varchar(300) NOT NULL,
  `time` varchar(100) NOT NULL,
  `Device_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `datalog`
--

INSERT INTO `datalog` (`visit_id`, `url`, `ip`, `browser`, `browser_version`, `date`, `resolution`, `os`, `referrer`, `site_id`, `Device_Type`, `time`, `Device_name`) VALUES
(1, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-06-29', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcP', 'desktop', '16:40:9:536', 'Other');

-- --------------------------------------------------------

--
-- Table structure for table `ipinfo`
--

CREATE TABLE `ipinfo` (
  `ip` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `timezone` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ipinfo`
--

INSERT INTO `ipinfo` (`ip`, `country`, `timezone`) VALUES
('::1', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `botdata`
--
ALTER TABLE `botdata`
  ADD PRIMARY KEY (`visit_id`);

--
-- Indexes for table `botipinfo`
--
ALTER TABLE `botipinfo`
  ADD PRIMARY KEY (`ip`),
  ADD UNIQUE KEY `ip` (`ip`);

--
-- Indexes for table `datalog`
--
ALTER TABLE `datalog`
  ADD PRIMARY KEY (`visit_id`);

--
-- Indexes for table `ipinfo`
--
ALTER TABLE `ipinfo`
  ADD PRIMARY KEY (`ip`),
  ADD UNIQUE KEY `ip` (`ip`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `botdata`
--
ALTER TABLE `botdata`
  MODIFY `visit_id` mediumint(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `datalog`
--
ALTER TABLE `datalog`
  MODIFY `visit_id` mediumint(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
