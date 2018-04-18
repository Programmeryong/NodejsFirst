-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2018 年 04 月 18 日 08:45
-- 服务器版本: 5.5.53
-- PHP 版本: 5.4.45

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `register`
--

-- --------------------------------------------------------

--
-- 表的结构 `table`
--

CREATE TABLE IF NOT EXISTS `table` (
  `id` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT COMMENT '十位ID名',
  `p_name` varchar(30) NOT NULL COMMENT '用户名',
  `p_pow` varchar(30) NOT NULL COMMENT '密码',
  `p_pho` varchar(30) NOT NULL COMMENT '手机',
  `p_em` varchar(30) NOT NULL COMMENT '邮箱',
  `p_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '注册时间',
  `p_state` int(10) NOT NULL DEFAULT '1' COMMENT '判断值 1为正常 0为失效 -1删除',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8mb4 COMMENT='注册页面' AUTO_INCREMENT=23 ;

--
-- 转存表中的数据 `table`
--

INSERT INTO `table` (`id`, `p_name`, `p_pow`, `p_pho`, `p_em`, `p_time`, `p_state`) VALUES
(0000000001, 'FBHDZCGNXFG', '123456789abc', '12152488995', '29246567@qq.com', '2018-04-13 22:17:17', 1),
(0000000002, 'fkdjb', 'adf132465adf+-', '15648975324', '2541661@qq.com', '2018-04-14 02:03:36', 1),
(0000000003, 'adfabzdbsdg', 'dfvakijvhif+416', '14579364524', '654168@qq.com', '2018-04-14 02:03:36', 1),
(0000000004, 'dajba', '132465adf', '1a65ds4fa32d', '3a1sdf463da1f@qq.com', '2018-04-14 06:58:15', 1),
(0000000005, 'qewr1234', 'qwer', '13112345678', '1213123@qq.com', '2018-04-16 06:50:08', 1),
(0000000006, 'aasdfad1234', 'qwer1234', '13112345678', '1213123@qq.com', '2018-04-16 06:56:06', 1),
(0000000007, 'asdf123', 'qwerasdf', '13112345678', '1213123@qq.com', '2018-04-16 07:05:38', 1),
(0000000008, 'loveyou', 'asdf1234', '13112345678', '1213123@qq.com', '2018-04-16 07:18:02', 1),
(0000000009, 'nihaodashabi', '1234qwer', '13112345678', '1213123@qq.com', '2018-04-16 07:19:09', 1),
(0000000010, 'qwer123', '1234qwer', '13112345678', '1213123@qq.com', '2018-04-16 07:19:41', 1),
(0000000011, 'asdf134', 'qwer1234', '13112345678', '1213123@qq.com', '2018-04-16 07:58:21', 1),
(0000000012, 'wenzhe', 'qwer1234', '564982', '1213123@qq.com', '2018-04-16 08:02:59', 1),
(0000000013, 'liuzhiwei', 'qwer1234', '13112345678', '1213123@qq.com', '2018-04-16 08:04:25', 1),
(0000000014, 'zhiweiaixiaoming', 'qwer1234', '13112345678', '1213123@qq.com', '2018-04-16 08:07:09', 1),
(0000000016, 'qewr1234', 'qwer1234', '13112345678', '1213123@qq.com', '2018-04-16 08:30:30', 1),
(0000000017, 'qewr1234', '1234qwer', '13112345678', '1213123@qq.com', '2018-04-16 08:32:07', 1),
(0000000018, 'gfggf32543', '123456qwertyuiop', '13145678954', '2845995156@qq.com', '2018-04-17 01:00:53', 1),
(0000000019, 'qwer123', 'qwer', '13112345678', '1213123@qq.com', '2018-04-17 01:34:44', 1),
(0000000020, 'qwer123', 'qwer', '13112345678', '1213123@qq.com', '2018-04-17 01:36:00', 1),
(0000000021, 'qwer234', 'qwer1243', '13144444444', '1564765@qq.com', '2018-04-18 02:27:53', 1),
(0000000022, 'damingg', '6666666', '13205055555', 's15das4654@qq.com', '2018-04-18 02:29:12', 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
