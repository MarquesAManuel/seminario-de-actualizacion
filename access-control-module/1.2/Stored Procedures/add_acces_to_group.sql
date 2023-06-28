CREATE DEFINER=`root`@`localhost` PROCEDURE `add_acces_to_group`(IN `p_resource_id` int, IN `p_group_id` int)
INSERT INTO acces (resource_id, group_id) VALUES (p_resource_id, p_group_id)