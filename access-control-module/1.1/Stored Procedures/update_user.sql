CREATE DEFINER=`root`@`localhost` PROCEDURE `update_user`(IN `p_id` int, IN `p_name` varchar(45), IN `p_password` varchar(256))
UPDATE users SET name = p_name, password = p_password WHERE id = p_id