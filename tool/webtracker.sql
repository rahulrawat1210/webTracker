-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 22, 2018 at 02:40 PM
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
(1, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '157.38.234.190', 'Chrome', '67.0.3396', '6/22/2018', '1366 X 728', 'Windows 10.0.0', '', '0', 'desktop', '16:50:5:549', 'Other'),
(2, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '157.38.234.190', 'Chrome', '67.0.3396', '6/22/2018', '1366 X 728', 'Windows 10.0.0', '', '0', 'desktop', '16:55:48:670', 'Other'),
(3, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '157.38.234.190', 'Chrome', '67.0.3396', '6/22/2018', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'desktop', '16:57:8:13', 'Other'),
(4, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '157.38.234.190', 'Mobile Safari', '11.0.0', '6/22/2018', '375 X 667', 'iOS 11.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'phone', '16:58:2:861', 'iPhone'),
(5, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Mobile Safari', '11.0.0', '6/22/2018', '375 X 667', 'iOS 11.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'phone', '16:59:2:445', 'iPhone'),
(6, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome Mobile', '67.0.3396', '6/22/2018', '411 X 731', 'Android 8.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'phone', '17:25:19:316', 'Pixel 2'),
(7, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome Mobile', '67.0.3396', '6/22/2018', '411 X 731', 'Android 8.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'phone', '17:26:20:681', 'Pixel 2'),
(8, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome', '67.0.3396', '6/22/2018', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'desktop', '17:34:50:90', 'Other'),
(9, 'file:///D:/GitRepo/webTracker/mainScript/index.html', '::1', 'Chrome Mobile', '67.0.3396', '6/22/2018', '360 X 640', 'Android 5.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'phone', '17:38:14:764', 'Samsung SM-G900P'),
(10, 'http://192.168.43.43:8080/', '::ffff:192.168.43.240', 'Chrome', '67.0.3396', '6/22/2018', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'desktop', '17:45:49:978', 'Other'),
(11, 'http://192.168.43.43:8080/', '::ffff:192.168.43.240', 'Chrome', '67.0.3396', '6/22/2018', '1366 X 728', 'Windows 10.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'desktop', '17:45:52:478', 'Other'),
(12, 'http://192.168.43.43:8080/index.html', '::ffff:192.168.43.1', 'Chrome Mobile', '67.0.3396', '6/22/2018', '360 X 640', 'Android 7.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'phone', '17:46:11:276', 'XiaoMi Redmi Note 4'),
(13, 'http://192.168.43.43:8080/', '::ffff:192.168.43.161', 'Chrome Mobile', '67.0.3396', '6/22/2018', '424 X 848', 'Android 8.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'phone', '17:46:53:279', 'LLD-AL10'),
(14, 'http://192.168.43.43:8080/', '::ffff:192.168.43.205', 'Chrome Mobile', '67.0.3396', '6/22/2018', '360 X 640', 'Android 8.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'phone', '17:49:13:441', 'Lenovo K8 Note '),
(15, 'http://192.168.43.43:8080/', '::ffff:192.168.43.205', 'Chrome Mobile', '67.0.3396', '6/22/2018', '360 X 640', 'Android 8.0.0', '', 'BB-8r9hv7xcjipl9mh6', 'phone', '17:49:47:802', 'Lenovo K8 Note ');

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
('::ffff:192.168.43.1', '', ''),
('::ffff:192.168.43.161', '', ''),
('::ffff:192.168.43.205', '', ''),
('::ffff:192.168.43.240', '', '');

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
-- AUTO_INCREMENT for table `datalog`
--
ALTER TABLE `datalog`
  MODIFY `visit_id` mediumint(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
