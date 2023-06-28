CREATE DEFINER=`root`@`localhost` PROCEDURE `create_resource`(IN `p_name` varchar(45), IN `p_url` varchar(255))
INSERT INTO resources (name, url) VALUES (p_name, p_url)