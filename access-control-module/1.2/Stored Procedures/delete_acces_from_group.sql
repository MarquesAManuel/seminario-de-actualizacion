CREATE DEFINER=`root`@`localhost` PROCEDURE `delete_acces_from_group`(IN `p_id` int)
DELETE FROM acces WHERE resource_id = p_id