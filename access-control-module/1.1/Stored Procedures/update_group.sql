CREATE DEFINER=`root`@`localhost` PROCEDURE `update_group`(IN `p_id` int, IN `p_name` varchar(45))
UPDATE `groups` SET name = p_name WHERE id = p_id