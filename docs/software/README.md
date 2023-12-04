# Реалізація інформаційного та програмного забезпечення

В рамках проекту розробляється:

- SQL-скрипт для створення на початкового наповнення бази даних

```SQL
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema open_data_management_system
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `open_data_management_system` ;

-- -----------------------------------------------------
-- Schema open_data_management_system
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `open_data_management_system` DEFAULT CHARACTER SET utf8 ;
USE `open_data_management_system` ;

-- -----------------------------------------------------
-- Table `open_data_management_system`.`Permissions`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `open_data_management_system`.`Permissions` ;

CREATE TABLE IF NOT EXISTS `open_data_management_system`.`Permissions` (
  `id` VARCHAR(36) NOT NULL,
  `description` VARCHAR(254) NULL,
  `level` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `open_data_management_system`.`Attributes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `open_data_management_system`.`Attributes` ;

CREATE TABLE IF NOT EXISTS `open_data_management_system`.`Attributes` (
  `id` VARCHAR(36) NOT NULL,
  `description` VARCHAR(254) NULL,
  `value` VARCHAR(45) NOT NULL,
  `attributeType` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `Permissions_id` VARCHAR(36) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE,
  INDEX `fk_Attributes_Permissions1_idx` (`Permissions_id` ASC) VISIBLE,
  CONSTRAINT `fk_Attributes_Permissions1`
    FOREIGN KEY (`Permissions_id`)
    REFERENCES `open_data_management_system`.`Permissions` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `open_data_management_system`.`UserAttributes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `open_data_management_system`.`UserAttributes` ;

CREATE TABLE IF NOT EXISTS `open_data_management_system`.`UserAttributes` (
  `UserID` VARCHAR(36) NOT NULL,
  `AttributeID` VARCHAR(36) NOT NULL,
  PRIMARY KEY (`UserID`),
  UNIQUE INDEX `UserID_UNIQUE` (`UserID` ASC) VISIBLE,
  UNIQUE INDEX `AttributeID_UNIQUE` (`AttributeID` ASC) VISIBLE,
  CONSTRAINT `id`
    FOREIGN KEY (`AttributeID`)
    REFERENCES `open_data_management_system`.`Attributes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `open_data_management_system`.`DataFolder`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `open_data_management_system`.`DataFolder` ;

CREATE TABLE IF NOT EXISTS `open_data_management_system`.`DataFolder` (
  `id` VARCHAR(36) NOT NULL,
  `description` VARCHAR(254) NULL,
  `date` DATETIME NOT NULL,
  `owner` VARCHAR(36) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `open_data_management_system`.`User`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `open_data_management_system`.`User` ;

CREATE TABLE IF NOT EXISTS `open_data_management_system`.`User` (
  `id` VARCHAR(36) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `email` VARCHAR(254) NOT NULL,
  `UserAttributes_UserID` VARCHAR(36) NOT NULL,
  `Request_id` VARCHAR(36) NOT NULL,
  `DataFolder_id` VARCHAR(36) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  INDEX `fk_User_UserAttributes_idx` (`UserAttributes_UserID` ASC) VISIBLE,
  INDEX `fk_User_DataFolder1_idx` (`DataFolder_id` ASC) VISIBLE,
  CONSTRAINT `fk_User_UserAttributes`
    FOREIGN KEY (`UserAttributes_UserID`)
    REFERENCES `open_data_management_system`.`UserAttributes` (`UserID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_User_DataFolder1`
    FOREIGN KEY (`DataFolder_id`)
    REFERENCES `open_data_management_system`.`DataFolder` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `open_data_management_system`.`Data`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `open_data_management_system`.`Data` ;

CREATE TABLE IF NOT EXISTS `open_data_management_system`.`Data` (
  `id` VARCHAR(36) NOT NULL,
  `size` DOUBLE NOT NULL,
  `date` DATETIME NOT NULL,
  `dataType` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(254) NULL,
  `tags` VARCHAR(254) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `open_data_management_system`.`DataLink`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `open_data_management_system`.`DataLink` ;

CREATE TABLE IF NOT EXISTS `open_data_management_system`.`DataLink` (
  `link` VARCHAR(254) NOT NULL,
  PRIMARY KEY (`link`),
  UNIQUE INDEX `link_UNIQUE` (`link` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `open_data_management_system`.`DataFolder_has_DataLink`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `open_data_management_system`.`DataFolder_has_DataLink` ;

CREATE TABLE IF NOT EXISTS `open_data_management_system`.`DataFolder_has_DataLink` (
  `DataFolder_id` VARCHAR(36) NOT NULL,
  `DataLink_link` VARCHAR(254) NOT NULL,
  PRIMARY KEY (`DataFolder_id`, `DataLink_link`),
  INDEX `fk_DataFolder_has_DataLink_DataLink1_idx` (`DataLink_link` ASC) VISIBLE,
  INDEX `fk_DataFolder_has_DataLink_DataFolder1_idx` (`DataFolder_id` ASC) VISIBLE,
  CONSTRAINT `fk_DataFolder_has_DataLink_DataFolder1`
    FOREIGN KEY (`DataFolder_id`)
    REFERENCES `open_data_management_system`.`DataFolder` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_DataFolder_has_DataLink_DataLink1`
    FOREIGN KEY (`DataLink_link`)
    REFERENCES `open_data_management_system`.`DataLink` (`link`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `open_data_management_system`.`DataLink_has_Data`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `open_data_management_system`.`DataLink_has_Data` ;

CREATE TABLE IF NOT EXISTS `open_data_management_system`.`DataLink_has_Data` (
  `DataLink_link` VARCHAR(254) NOT NULL,
  `Data_id` VARCHAR(36) NOT NULL,
  PRIMARY KEY (`DataLink_link`, `Data_id`),
  INDEX `fk_DataLink_has_Data_Data1_idx` (`Data_id` ASC) VISIBLE,
  INDEX `fk_DataLink_has_Data_DataLink1_idx` (`DataLink_link` ASC) VISIBLE,
  CONSTRAINT `fk_DataLink_has_Data_DataLink1`
    FOREIGN KEY (`DataLink_link`)
    REFERENCES `open_data_management_system`.`DataLink` (`link`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_DataLink_has_Data_Data1`
    FOREIGN KEY (`Data_id`)
    REFERENCES `open_data_management_system`.`Data` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `open_data_management_system`.`Search`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `open_data_management_system`.`Search` ;

CREATE TABLE IF NOT EXISTS `open_data_management_system`.`Search` (
  `id` VARCHAR(36) NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  `date` DATETIME NOT NULL,
  `searchType` VARCHAR(45) NOT NULL,
  `target` VARCHAR(36) NULL,
  `parameters` VARCHAR(254) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `open_data_management_system`.`User_has_Search`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `open_data_management_system`.`User_has_Search` ;

CREATE TABLE IF NOT EXISTS `open_data_management_system`.`User_has_Search` (
  `User_id` VARCHAR(36) NOT NULL,
  `Search_id` VARCHAR(36) NOT NULL,
  PRIMARY KEY (`User_id`, `Search_id`),
  INDEX `fk_User_has_Search_Search1_idx` (`Search_id` ASC) VISIBLE,
  INDEX `fk_User_has_Search_User1_idx` (`User_id` ASC) VISIBLE,
  CONSTRAINT `fk_User_has_Search_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `open_data_management_system`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_User_has_Search_Search1`
    FOREIGN KEY (`Search_id`)
    REFERENCES `open_data_management_system`.`Search` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `open_data_management_system`.`Search_has_DataLink`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `open_data_management_system`.`Search_has_DataLink` ;

CREATE TABLE IF NOT EXISTS `open_data_management_system`.`Search_has_DataLink` (
  `Search_id` VARCHAR(36) NOT NULL,
  `DataLink_link` VARCHAR(254) NOT NULL,
  PRIMARY KEY (`Search_id`, `DataLink_link`),
  INDEX `fk_Search_has_DataLink_DataLink1_idx` (`DataLink_link` ASC) VISIBLE,
  INDEX `fk_Search_has_DataLink_Search1_idx` (`Search_id` ASC) VISIBLE,
  CONSTRAINT `fk_Search_has_DataLink_Search1`
    FOREIGN KEY (`Search_id`)
    REFERENCES `open_data_management_system`.`Search` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Search_has_DataLink_DataLink1`
    FOREIGN KEY (`DataLink_link`)
    REFERENCES `open_data_management_system`.`DataLink` (`link`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

```

- RESTfull сервіс для управління даними
