-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 03, 2018 at 10:48 AM
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

INSERT INTO `botdata` (`visit_id`, `url`, `ip`, `browser`, `browser_version`, `datetime`, `resolution`, `os`, `referrer`, `site_id`, `Device_Type`, `Device_name`) VALUES
(1, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '0000-00-00 00:00:00', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'desktop', 'Other'),
(2, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '0000-00-00 00:00:00', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'desktop', 'Other');

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

INSERT INTO `datalog` (`visit_id`, `url`, `ip`, `browser`, `browser_version`, `datetime`, `resolution`, `os`, `referrer`, `site_id`, `Device_Type`, `Device_name`) VALUES
(2, 'file:///C:/Users/rajat/Documents/webtrackerproject/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '0000-00-00 00:00:00', '1920 X 1040', 'Windows 10.0.0', '', 'BB-8r9hv7xcP', 'desktop', 'Other'),
(3, 'file:///C:/Users/rajat/Documents/webtrackerproject/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '0000-00-00 00:00:00', '1920 X 1040', 'Windows 10.0.0', '', 'BB-8r9hv7xcP', 'desktop', 'Other'),
(4, 'file:///C:/Users/rajat/Documents/webtrackerproject/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '0000-00-00 00:00:00', '1920 X 1040', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hv7xcP', 'desktop', 'Other'),
(5, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-06-29 00:00:00', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hv7xcP', 'desktop', 'Other'),
(6, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-06-29 00:00:00', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hv7xcP', 'desktop', 'Other'),
(7, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-06-29 00:00:00', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hv7xcP', 'desktop', 'Other'),
(12, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-02 14:55:23', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hv7xcP', 'desktop', 'Other'),
(13, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-02 15:22:09', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hv7xcP', 'desktop', 'Other'),
(14, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-02 15:22:09', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hv7xcP', 'desktop', 'Other'),
(15, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-02 15:22:10', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hv7xcP', 'desktop', 'Other'),
(16, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-02 15:22:22', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hv7xP', 'desktop', 'Other'),
(17, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-02 15:22:22', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hv7xP', 'desktop', 'Other'),
(18, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-02 15:22:22', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hv7xP', 'desktop', 'Other'),
(19, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-02 15:22:22', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hv7xP', 'desktop', 'Other'),
(20, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-02 15:22:23', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hv7xP', 'desktop', 'Other'),
(21, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-02 15:22:36', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hv7xcsP', 'desktop', 'Other'),
(22, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-02 15:22:38', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hv7xcsP', 'desktop', 'Other'),
(23, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-02 15:22:38', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hv7xcsP', 'desktop', 'Other'),
(24, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-02 15:22:39', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hv7xcsP', 'desktop', 'Other'),
(25, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-02 15:22:39', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hv7xcsP', 'desktop', 'Other'),
(26, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-02 15:22:39', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hv7xcsP', 'desktop', 'Other'),
(27, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-02 15:22:46', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hvP', 'desktop', 'Other'),
(28, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-02 15:22:46', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hvP', 'desktop', 'Other'),
(29, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-02 15:22:46', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hvP', 'desktop', 'Other'),
(30, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-02 15:22:46', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hvP', 'desktop', 'Other'),
(31, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '2018-07-02 18:00:41', '1366 X 728', 'Windows 10.0.0', 'DIRECT HIT!!', 'BB-8r9hvP', 'desktop', 'Other');

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
('::1', '', '', '', '', '', '', '');

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
  MODIFY `visit_id` mediumint(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
