/*
Navicat MySQL Data Transfer

Source Server         : localhost_phpStudy
Source Server Version : 50553
Source Host           : 127.0.0.1:3306
Source Database       : test_server

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2018-02-15 22:47:54
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for debug_bootstrap_table
-- ----------------------------
DROP TABLE IF EXISTS `debug_bootstrap_table`;
CREATE TABLE `debug_bootstrap_table` (
  `tid` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  `status` tinyint(5) DEFAULT '1',
  PRIMARY KEY (`tid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of debug_bootstrap_table
-- ----------------------------
INSERT INTO `debug_bootstrap_table` VALUES ('1', '测', '2018-01-29', null, null, '1');
INSERT INTO `debug_bootstrap_table` VALUES ('2', 'fdsgdfg', '2018-01-29', null, null, '1');
INSERT INTO `debug_bootstrap_table` VALUES ('3', 'fdgd', '2018-01-29', null, null, '1');
INSERT INTO `debug_bootstrap_table` VALUES ('4', 'ff', '2018-01-29', null, null, '1');
INSERT INTO `debug_bootstrap_table` VALUES ('5', 'sadfas', '2018-01-31', null, null, '1');
