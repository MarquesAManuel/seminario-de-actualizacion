CREATE DEFINER=`root`@`localhost` PROCEDURE `update_resource`(IN `p_id` int, IN `p_name` varchar(45), IN `p_url` varchar(255))
UPDATE resources SET name = p_name, url = p_url WHERE id = p_id