CREATE DEFINER=`root`@`localhost` PROCEDURE `read_user`(IN `p_id` int)
SELECT * FROM users WHERE id = p_id