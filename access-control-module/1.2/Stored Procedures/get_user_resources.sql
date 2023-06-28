CREATE DEFINER=`root`@`localhost` PROCEDURE `get_user_resources`(IN `p_user_id` INT)
SELECT DISTINCT resources.id, resources.name, resources.url
FROM resources
INNER JOIN acces ON resources.id = acces.resource_id
INNER JOIN user_has_group ON acces.group_id = user_has_group.group_id
WHERE user_has_group.user_id = p_user_id