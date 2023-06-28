CREATE DEFINER=`root`@`localhost` PROCEDURE `get_resource_acces`(IN `p_group_id` INT)
SELECT resources.id, resources.name, resources.url
FROM resources
INNER JOIN acces ON resources.id = acces.resource_id
WHERE acces.group_id = p_group_id