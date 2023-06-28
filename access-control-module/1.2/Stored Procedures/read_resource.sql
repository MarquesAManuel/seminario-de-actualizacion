CREATE DEFINER=`root`@`localhost` PROCEDURE `read_resource`(IN `p_id` int)
SELECT * FROM resources WHERE id = p_id