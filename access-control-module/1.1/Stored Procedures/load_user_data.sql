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
  VALUES ( p_data_id,p_name, p_surname, p_dni, p_telephone, p_gender, p_addres, p_email,p_isActive)