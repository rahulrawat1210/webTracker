-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 04, 2018 at 02:53 PM
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
  `isAdmin` varchar(50) NOT NULL,
  `url` varchar(300) NOT NULL,
  `ip` varchar(300) NOT NULL,
  `browser` varchar(300) NOT NULL,
  `browser_version` varchar(300) NOT NULL,
  `datetime` datetime NOT NULL,
  `resolution` varchar(300) NOT NULL,
  `os` varchar(225) NOT NULL,
  `referrer` varchar(300) NOT NULL,
  `site_id` varchar(255) NOT NULL,
  `Device_Type` varchar(300) NOT NULL,
  `Device_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `botdata`
--

INSERT INTO `botdata` (`visit_id`, `isAdmin`, `url`, `ip`, `browser`, `browser_version`, `datetime`, `resolution`, `os`, `referrer`, `site_id`, `Device_Type`, `Device_name`) VALUES
(1, '', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '0000-00-00 00:00:00', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'desktop', 'Other'),
(2, '', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '0000-00-00 00:00:00', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'desktop', 'Other');

-- --------------------------------------------------------

--
-- Table structure for table `botipinfo`
--

CREATE TABLE `botipinfo` (
  `ip` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `timezone` varchar(255) NOT NULL,
  `isp` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `latitude` varchar(255) NOT NULL,
  `longitude` varchar(255) NOT NULL,
  `zip` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `botipinfo`
--

INSERT INTO `botipinfo` (`ip`, `country`, `timezone`, `isp`, `city`, `latitude`, `longitude`, `zip`) VALUES
('::1', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `datalog`
--

CREATE TABLE `datalog` (
  `visit_id` mediumint(255) NOT NULL,
  `isAdmin` varchar(50) NOT NULL,
  `url` varchar(300) NOT NULL,
  `ip` varchar(300) NOT NULL,
  `browser` varchar(300) NOT NULL,
  `browser_version` varchar(300) NOT NULL,
  `datetime` datetime NOT NULL,
  `resolution` varchar(300) NOT NULL,
  `os` varchar(225) NOT NULL,
  `referrer` varchar(300) NOT NULL,
  `site_id` varchar(255) NOT NULL,
  `Device_Type` varchar(300) NOT NULL,
  `Device_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `datalog`
--

INSERT INTO `datalog` (`visit_id`, `isAdmin`, `url`, `ip`, `browser`, `browser_version`, `datetime`, `resolution`, `os`, `referrer`, `site_id`, `Device_Type`, `Device_name`) VALUES
(5, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '122.161.193.100', 'Chrome', '67.0.3396', '2018-06-29 00:00:00', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hv7xcP', 'desktop', 'Other'),
(6, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-06-29 00:00:00', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hv7xcP', 'desktop', 'Other'),
(7, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-06-29 00:00:00', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hv7xcP', 'desktop', 'Other'),
(12, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-02 14:55:23', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hv7xcP', 'desktop', 'Other'),
(13, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-02 15:22:09', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hv7xcP', 'desktop', 'Other'),
(14, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-02 15:22:09', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hv7xcP', 'desktop', 'Other'),
(15, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-02 15:22:10', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hv7xcP', 'desktop', 'Other'),
(16, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-02 15:22:22', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hv7xP', 'desktop', 'Other'),
(17, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-02 15:22:22', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hv7xP', 'desktop', 'Other'),
(18, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-02 15:22:22', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hv7xP', 'desktop', 'Other'),
(19, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-02 15:22:22', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hv7xP', 'desktop', 'Other'),
(20, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-02 15:22:23', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hv7xP', 'desktop', 'Other'),
(21, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-02 15:22:36', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hv7xcsP', 'desktop', 'Other'),
(22, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-02 15:22:38', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hv7xcsP', 'desktop', 'Other'),
(23, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-02 15:22:38', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hv7xcsP', 'desktop', 'Other'),
(24, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-02 15:22:39', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hv7xcsP', 'desktop', 'Other'),
(25, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-02 15:22:39', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hv7xcsP', 'desktop', 'Other'),
(26, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-02 15:22:39', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hv7xcsP', 'desktop', 'Other'),
(27, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-03 15:22:46', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hvP', 'desktop', 'Other'),
(28, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-04 15:22:46', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hvP', 'desktop', 'Other'),
(29, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-05 15:22:46', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hvP', 'desktop', 'Other'),
(30, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-06 15:22:46', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hvP', 'desktop', 'Other'),
(31, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-02 18:00:41', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hvP', 'desktop', 'Other'),
(32, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-03 16:27:19', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hvP', 'desktop', 'Other'),
(33, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-03 16:27:21', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hvP', 'desktop', 'Other'),
(34, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-03 16:27:21', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hvP', 'desktop', 'Other'),
(35, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-03 16:27:22', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hvP', 'desktop', 'Other'),
(36, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-03 16:27:22', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hvP', 'desktop', 'Other'),
(37, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-03 16:27:22', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hvP', 'desktop', 'Other'),
(38, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-03 16:27:22', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hvP', 'desktop', 'Other'),
(39, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-03 16:27:22', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hvP', 'desktop', 'Other'),
(40, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-03 16:27:22', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hvP', 'desktop', 'Other'),
(41, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-03 16:27:23', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hvP', 'desktop', 'Other'),
(42, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-07 16:27:23', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hvP', 'desktop', 'Other'),
(43, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-07 16:27:23', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hvP', 'desktop', 'Other'),
(44, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-03 16:27:23', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hvP', 'desktop', 'Other'),
(45, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-08 16:27:23', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hvP', 'desktop', 'Other'),
(46, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-04 12:30:27', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hvP', 'desktop', 'Other'),
(47, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-04 12:31:20', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hvP', 'desktop', 'Other'),
(48, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-04 12:31:57', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hvP', 'desktop', 'Other'),
(49, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-04 12:32:13', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hvP', 'desktop', 'Other'),
(50, 'Backend', 'http://127.0.0.1:8080/', '::1', 'Chrome', '67.0.3396', '2018-07-04 12:32:58', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hvP', 'desktop', 'Other'),
(51, 'Frontend', 'http://127.0.0.1:8080/', '::1', 'Chrome', '67.0.3396', '2018-07-04 12:33:12', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hvP', 'desktop', 'Other'),
(52, 'false', 'http://127.0.0.1:8080/', '::1', 'Chrome', '67.0.3396', '2018-07-04 12:46:37', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hvP', 'desktop', 'Other'),
(53, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-04 12:47:32', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hvP', 'desktop', 'Other'),
(54, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-04 12:48:55', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hvP', 'desktop', 'Other'),
(55, 'false', 'http://127.0.0.1:8080/', '::1', 'Chrome', '67.0.3396', '2018-07-04 12:49:18', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hvP', 'desktop', 'Other'),
(56, 'Frontend', 'http://127.0.0.1:8080/', '::1', 'Chrome', '67.0.3396', '2018-07-04 12:50:43', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hvP', 'desktop', 'Other'),
(57, 'Backend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-04 12:51:38', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hvP', 'desktop', 'Other'),
(58, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-04 12:51:51', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hvP', 'desktop', 'Other'),
(59, 'Frontend', 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-04 15:11:23', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hvP', 'desktop', 'Other');

-- --------------------------------------------------------

--
-- Table structure for table `ipinfo`
--

CREATE TABLE `ipinfo` (
  `ip` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `timezone` varchar(255) NOT NULL,
  `isp` varchar(255) NOT NULL,
  `city` varchar(200) NOT NULL,
  `latitude` varchar(200) NOT NULL,
  `longitude` varchar(200) NOT NULL,
  `zip` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ipinfo`
--

INSERT INTO `ipinfo` (`ip`, `country`, `timezone`, `isp`, `city`, `latitude`, `longitude`, `zip`) VALUES
('122.161.193.100', 'India', 'Asia/Kolkata', 'AS24560 Bharti Airtel Ltd., Telemedia Services', 'Delhi', '28.6667', '77.2167', '110017'),
('159.89.184.107', 'United States', 'America/New_York', 'AS14061 DigitalOcean, LLC', 'Clifton', '40.8326', '-74.1307', '07014'),
('73.2.209.167', 'United States', 'America/Chicago', 'AS7922 Comcast Cable Communications, LLC', 'Hattiesburg', '31.3156', '-89.4131', '39402'),
('74.208.217.160', 'United States', 'America/New_York', 'AS8560 1&1 Internet SE', 'Wayne', '40.0548', '-75.4083', '19087'),
('74.209.243.116', 'United States', 'America/New_York', 'AS29944 Latisys-Ashburn, LLC', 'Ashburn', '39.018', '-77.539', '20147'),
('::1', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `ipupdate`
--

CREATE TABLE `ipupdate` (
  `ipup` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ipupdate`
--

INSERT INTO `ipupdate` (`ipup`) VALUES
(1530693838351);

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
  MODIFY `visit_id` mediumint(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `datalog`
--
ALTER TABLE `datalog`
  MODIFY `visit_id` mediumint(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
