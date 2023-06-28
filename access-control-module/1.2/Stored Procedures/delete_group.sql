CREATE DEFINER=`root`@`localhost` PROCEDURE `delete_group`(IN `p_id` int)
DELETE FROM `groups` WHERE id = p_id