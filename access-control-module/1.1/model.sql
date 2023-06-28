-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8mb3 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`groups`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`groups` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(256) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC))
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`user_has_group`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`user_has_group` (
  `user_id` INT NOT NULL,
  `group_id` INT NOT NULL,
  PRIMARY KEY (`user_id`, `group_id`),
  UNIQUE INDEX `user_id` (`user_id` ASC, `group_id` ASC),
  INDEX `group_id` (`group_id` ASC),
  CONSTRAINT `user_has_group_ibfk_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`users` (`id`),
  CONSTRAINT `user_has_group_ibfk_2`
    FOREIGN KEY (`group_id`)
    REFERENCES `mydb`.`groups` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`users_data`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`users_data` (
  `data_id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `surname` VARCHAR(45) NOT NULL,
  `dni` VARCHAR(45) NOT NULL,
  `telephone` VARCHAR(45) NOT NULL,
  `gender` VARCHAR(45) NOT NULL,
  `addres` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `isActive` TINYINT NOT NULL,
  PRIMARY KEY (`data_id`),
  UNIQUE INDEX `id_UNIQUE` (`data_id` ASC),
  CONSTRAINT `data_id`
    FOREIGN KEY (`data_id`)
    REFERENCES `mydb`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

USE `mydb` ;

-- -----------------------------------------------------
-- procedure add_user_to_group
-- -----------------------------------------------------

DELIMITER $$
USE `mydb`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `add_user_to_group`(IN `p_user_id` int, IN `p_group_id` int)
INSERT INTO user_has_group (user_id, group_id) VALUES (p_user_id, p_group_id)$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure create_group
-- -----------------------------------------------------

DELIMITER $$
USE `mydb`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `create_group`(IN `p_name` varchar(45))
INSERT INTO `groups` (name) VALUES (p_name)$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure create_group_member
-- -----------------------------------------------------

DELIMITER $$
USE `mydb`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `create_group_member`(IN `p_user_id` int, IN `p_group_id` int)
INSERT INTO user_has_group (user_id, group_id) VALUES (p_user_id, p_group_id)$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure create_user
-- -----------------------------------------------------

DELIMITER $$
USE `mydb`$$
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
END$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure delete_group
-- -----------------------------------------------------

DELIMITER $$
USE `mydb`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `delete_group`(IN `p_id` int)
DELETE FROM `groups` WHERE id = p_id$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure delete_user
-- -----------------------------------------------------

DELIMITER $$
USE `mydb`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `delete_user`(IN `p_id` int)
DELETE FROM users WHERE id = p_id$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure delete_user_from_group
-- -----------------------------------------------------

DELIMITER $$
USE `mydb`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `delete_user_from_group`(IN `p_id` int)
DELETE FROM user_has_group WHERE user_id = p_id$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure get_groups_membership
-- -----------------------------------------------------

DELIMITER $$
USE `mydb`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_groups_membership`(IN `p_id` int)
SELECT `groups`.id, `groups`.name FROM `groups` 
INNER JOIN user_has_group ON `groups`.id = user_has_group.group_id 
INNER JOIN users ON user_has_group.user_id = users.id
WHERE user_has_group.user_id = p_id$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure load_user_data
-- -----------------------------------------------------

DELIMITER $$
USE `mydb`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `load_user_data`(
  IN `p_data_id` INT,
  IN `p_name` varchar(45),
  IN `p_surname` varchar(45),
  IN `p_dni` varchar(45),
  IN `p_telephone` varchar(45),
  IN `p_gender` varchar(45),
  IN `p_addres` varchar(100),
  IN `p_email` varchar(100),
  IN `p_isActive` TINYINT
)
INSERT INTO users_data (data_id,name, surname, dni, telephone, gender, addres, email, isActive)
  VALUES ( p_data_id,p_name, p_surname, p_dni, p_telephone, p_gender, p_addres, p_email,p_isActive)$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure read_group
-- -----------------------------------------------------

DELIMITER $$
USE `mydb`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `read_group`(IN `p_id` int)
SELECT * FROM `groups` WHERE id = p_id$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure read_user
-- -----------------------------------------------------

DELIMITER $$
USE `mydb`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `read_user`(IN `p_id` int)
SELECT * FROM users WHERE id = p_id$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure update_group
-- -----------------------------------------------------

DELIMITER $$
USE `mydb`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `update_group`(IN `p_id` int, IN `p_name` varchar(45))
UPDATE `groups` SET name = p_name WHERE id = p_id$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure update_user
-- -----------------------------------------------------

DELIMITER $$
USE `mydb`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `update_user`(IN `p_id` int, IN `p_name` varchar(45), IN `p_password` varchar(256))
UPDATE users SET name = p_name, password = p_password WHERE id = p_id$$

DELIMITER ;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
