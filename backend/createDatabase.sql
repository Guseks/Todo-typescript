DROP DATABASE `todos`;

CREATE DATABASE IF NOT EXISTS `todos`; 
USE `todos`;


CREATE TABLE IF NOT EXISTS `my_todos` (
		`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` varchar(255) NOT NULL,
    `completed` BOOLEAN
);





 