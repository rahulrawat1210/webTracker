-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 28, 2018 at 08:41 PM
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
(2, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1144916162162162616261622', 'Chrome', '67.0.3396', '6/27/2018', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'desktop', '13:16:40:86', 'Other'),
(3, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '6/27/2018', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'desktop', '13:16:47:127', 'Other'),
(4, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '6/27/2018', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'desktop', '13:16:47:548', 'Other'),
(5, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '6/27/2018', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'desktop', '13:16:48:255', 'Other'),
(6, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '6/27/2018', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'desktop', '13:16:48:920', 'Other'),
(7, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '6/27/2018', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'desktop', '13:16:49:447', 'Other'),
(8, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '6/27/2018', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'desktop', '13:16:49:932', 'Other'),
(9, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '6/27/2018', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'desktop', '13:16:50:447', 'Other'),
(10, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '6/27/2018', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'desktop', '13:16:50:924', 'Other'),
(11, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '6/27/2018', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'desktop', '13:17:47:845', 'Other'),
(12, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '6/27/2018', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'desktop', '13:39:7:288', 'Other'),
(13, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '6/27/2018', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'desktop', '23:49:47:674', 'Other'),
(14, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '6/27/2018', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'desktop', '23:49:49:419', 'Other'),
(15, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '6/27/2018', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'desktop', '23:49:49:963', 'Other'),
(16, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '6/27/2018', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'desktop', '23:49:50:462', 'Other'),
(17, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '6/27/2018', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'desktop', '23:49:50:910', 'Other'),
(18, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '6/27/2018', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'desktop', '23:49:51:358', 'Other'),
(19, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '6/27/2018', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'desktop', '23:49:51:830', 'Other'),
(20, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '6/27/2018', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'desktop', '23:49:52:310', 'Other'),
(21, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '6/27/2018', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'desktop', '23:49:54:160', 'Other'),
(22, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '6/27/2018', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'desktop', '23:50:21:749', 'Other'),
(23, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '6/27/2018', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'desktop', '23:50:22:110', 'Other'),
(24, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '6/27/2018', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'desktop', '23:50:22:427', 'Other'),
(25, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '6/27/2018', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'desktop', '23:50:22:709', 'Other'),
(26, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '6/27/2018', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'desktop', '23:50:23:111', 'Other'),
(27, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '6/28/2018', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'desktop', '10:24:59:121', 'Other'),
(28, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '122.161.193.100', 'Chrome', '67.0.3396', '6/28/2018', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcj', 'desktop', '14:40:6:4', 'Other'),
(29, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '12134', 'Chrome', '67.0.3396', '6/28/2018', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcj', 'desktop', '14:46:44:961', 'Other');

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
('12134', '', ''),
('122.161.193.100', 'India', 'Asia/Kolkata'),
('::1', '', ''),
('::ffff:192.168.1.4', '', '');

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
  MODIFY `visit_id` mediumint(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
