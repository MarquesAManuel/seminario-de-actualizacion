CREATE DEFINER=`root`@`localhost` PROCEDURE `delete_user_from_group`(IN `p_id` int)
DELETE FROM user_has_group WHERE user_id = p_id