CREATE DEFINER=`root`@`localhost` PROCEDURE `delete_resource`(IN `p_id` int)
DELETE FROM resources WHERE id = p_id