CREATE DEFINER=`root`@`localhost` PROCEDURE `get_groups_membership`(IN `p_id` int)
SELECT `groups`.id, `groups`.name FROM `groups` 
INNER JOIN user_has_group ON `groups`.id = user_has_group.group_id 
INNER JOIN users ON user_has_group.user_id = users.id
WHERE user_has_group.user_id = p_id