CREATE DEFINER=`root`@`localhost` PROCEDURE `create_group_member`(IN `p_user_id` int, IN `p_group_id` int)
INSERT INTO user_has_group (user_id, group_id) VALUES (p_user_id, p_group_id)