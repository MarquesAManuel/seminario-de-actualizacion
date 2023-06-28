CREATE DEFINER=`root`@`localhost` PROCEDURE `get_groups_resources`(IN `p_resource_id` INT)
SELECT `groups`.id, `groups`.name
FROM `groups`
INNER JOIN acces ON `groups`.id = acces.group_id
WHERE acces.resource_id = p_resource_id