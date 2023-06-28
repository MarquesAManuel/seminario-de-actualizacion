CREATE DEFINER=`root`@`localhost` PROCEDURE `create_group`(IN `p_name` varchar(45))
INSERT INTO `groups` (name) VALUES (p_name)