CREATE DEFINER=`root`@`localhost` PROCEDURE `create_user`(IN `p_username` varchar(45), IN `p_password` varchar(255))
BEGIN
DECLARE id INT DEFAULT 0;
DECLARE EXIT HANDLER FOR SQLEXCEPTION
   BEGIN
            ROLLBACK;
            RESIGNAL;
   END;
    START TRANSACTION;
        INSERT INTO users(username, password) VALUES (p_username, p_password);
        SET id = LAST_INSERT_ID();
        CALL `create_group_member`(id, 2);
    COMMIT;
END