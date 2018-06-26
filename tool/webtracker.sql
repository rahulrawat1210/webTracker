-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 26, 2018 at 02:00 PM
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

--
-- Dumping data for table `botdata`
--

INSERT INTO `botdata` (`visit_id`, `url`, `ip`, `browser`, `browser_version`, `date`, `resolution`, `os`, `referrer`, `site_id`, `Device_Type`, `time`, `Device_name`) VALUES
(1, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '6/26/2018', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'desktop', '17:26:26:437', 'Other'),
(2, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '6/26/2018', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'desktop', '17:26:29:719', 'Other');

-- --------------------------------------------------------

--
-- Table structure for table `botipinfo`
--

CREATE TABLE `botipinfo` (
  `ip` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `timezone` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `botipinfo`
--

INSERT INTO `botipinfo` (`ip`, `country`, `timezone`) VALUES
('::1', '', '');

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
  `date` varchar(300) NOT NULL,
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
(1, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '6/26/2018', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'desktop', '11:20:3:541', 'Other'),
(2, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '6/26/2018', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcjipl9', 'desktop', '11:20:8:409', 'Other'),
(3, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '6/26/2018', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcjip', 'desktop', '11:20:9:519', 'Other'),
(4, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '6/26/2018', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'desktop', '11:20:9:959', 'Other'),
(5, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::ffff:192.168.1.4', 'Chrome', '67.0.3396', '6/26/2018', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'desktop', '11:43:26:331', 'Other'),
(8, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '6/26/2018', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'desktop', '17:25:6:504', 'Other');

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
('::1', '', ''),
('::ffff:192.168.1.11', '', ''),
('::ffff:192.168.1.4', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `siteid`
--

CREATE TABLE `siteid` (
  `site_id` varchar(255) NOT NULL,
  `site_root` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `siteid`
--

INSERT INTO `siteid` (`site_id`, `site_root`) VALUES
('BB-8r9hv910jipl17ey', 'mohit-test.buildbot.io'),
('BB-8r9hv4r0jipjtcaj', 'rahulrawat.buildbot.io'),
('BB-8r9hv7xcjipl9mh6', 'webbot.buildbot.io');

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
-- Indexes for table `siteid`
--
ALTER TABLE `siteid`
  ADD PRIMARY KEY (`site_id`),
  ADD UNIQUE KEY `site_id` (`site_id`),
  ADD UNIQUE KEY `site_root` (`site_root`);

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
  MODIFY `visit_id` mediumint(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
