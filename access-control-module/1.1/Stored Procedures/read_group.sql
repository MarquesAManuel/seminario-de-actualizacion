CREATE DEFINER=`root`@`localhost` PROCEDURE `read_group`(IN `p_id` int)
SELECT * FROM `groups` WHERE id = p_id