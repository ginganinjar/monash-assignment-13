### Schema

CREATE DATABASE burgers;
USE burgers;

CREATE TABLE `burgers`.`burgers` (
  `idburgers` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(120) NULL,
  `status` VARCHAR(45) NULL,
  `action_date` VARCHAR(45) NULL,
  PRIMARY KEY (`idburgers`));
