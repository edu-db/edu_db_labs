# SQL-скрипт для створення на початкового наповнення бази даних

```
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Project`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Project` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Project` (
  `projectid` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(180) NULL,
  PRIMARY KEY (`projectid`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Roletype`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Roletype` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Roletype` (
  `role` INT NOT NULL,
  `role_name` VARCHAR(45) NOT NULL DEFAULT 'user',
  PRIMARY KEY (`role`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Profile`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Profile` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Profile` (
  `userid` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `pfp` VARCHAR(45) NULL,
  `Roletype_role` INT NULL,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  PRIMARY KEY (`userid`),
  UNIQUE INDEX `user_id_UNIQUE` (`userid` ASC) VISIBLE,
  INDEX `role_idx` (`Roletype_role` ASC) VISIBLE,
  CONSTRAINT `role`
    FOREIGN KEY (`Roletype_role`)
    REFERENCES `mydb`.`Roletype` (`role`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Chat`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Chat` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Chat` (
  `chatid` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `message` VARCHAR(180) NULL,
  `tittle` VARCHAR(180) NOT NULL,
  PRIMARY KEY (`chatid`),
  UNIQUE INDEX `chatid_UNIQUE` (`chatid` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Statustype`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Statustype` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Statustype` (
  `status` INT NOT NULL DEFAULT 3,
  `statusname` VARCHAR(45) NOT NULL DEFAULT 'InProgress',
  PRIMARY KEY (`status`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Support`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Support` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Support` (
  `chatid` INT NOT NULL,
  `userid` INT NOT NULL,
  `tittle` VARCHAR(180) NOT NULL,
  `description` VARCHAR(180) NULL,
  `Statustype_status` INT NOT NULL DEFAULT 3,
  UNIQUE INDEX `chatid_UNIQUE` (`chatid` ASC) VISIBLE,
  INDEX `userid_idx` (`userid` ASC) VISIBLE,
  INDEX `status_idx` (`Statustype_status` ASC) VISIBLE,
  CONSTRAINT `chatid2`
    FOREIGN KEY (`chatid`)
    REFERENCES `mydb`.`Chat` (`chatid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `userid`
    FOREIGN KEY (`userid`)
    REFERENCES `mydb`.`Profile` (`userid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `status`
    FOREIGN KEY (`Statustype_status`)
    REFERENCES `mydb`.`Statustype` (`status`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Projectmembers`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Projectmembers` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Projectmembers` (
  `userid` INT NOT NULL,
  `projectid` INT NOT NULL,
  INDEX `userid_idx` (`userid` ASC) VISIBLE,
  INDEX `projectid_idx` (`projectid` ASC) VISIBLE,
  CONSTRAINT `userid2`
    FOREIGN KEY (`userid`)
    REFERENCES `mydb`.`Profile` (`userid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `projectid`
    FOREIGN KEY (`projectid`)
    REFERENCES `mydb`.`Project` (`projectid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Chatmembers`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Chatmembers` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Chatmembers` (
  `userid` INT NOT NULL,
  `chatid` INT NOT NULL,
  INDEX `userid_idx` (`userid` ASC) VISIBLE,
  INDEX `chatid_idx` (`chatid` ASC) VISIBLE,
  CONSTRAINT `userid3`
    FOREIGN KEY (`userid`)
    REFERENCES `mydb`.`Profile` (`userid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `chatid3`
    FOREIGN KEY (`chatid`)
    REFERENCES `mydb`.`Chat` (`chatid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `mydb`.`Project`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`Project` (`projectid`, `name`, `description`) VALUES (8800095, 'Lab4', 'Робимо 4 лабу по БД');
INSERT INTO `mydb`.`Project` (`projectid`, `name`, `description`) VALUES (8800096, 'To do list', 'Покращення нашого гуртожитка');

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`Roletype`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`Roletype` (`role`, `role_name`) VALUES (1, 'Admin');
INSERT INTO `mydb`.`Roletype` (`role`, `role_name`) VALUES (2, 'User');
INSERT INTO `mydb`.`Roletype` (`role`, `role_name`) VALUES (3, 'Support');
INSERT INTO `mydb`.`Roletype` (`role`, `role_name`) VALUES (4, 'TeamLead');

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`Profile`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`Profile` (`userid`, `username`, `password`, `email`, `pfp`, `Roletype_role`) VALUES (1003040, 'Тарас', 'qwerty123', 'taras_o2@gmail.com', NULL, 1);
INSERT INTO `mydb`.`Profile` (`userid`, `username`, `password`, `email`, `pfp`, `Roletype_role`) VALUES (1003041, 'Евгеній', 'oped56', '1evgen1@ukr.net', NULL, 2);
INSERT INTO `mydb`.`Profile` (`userid`, `username`, `password`, `email`, `pfp`, `Roletype_role`) VALUES (1003042, 'Андрій', 'ovnjd8', 'shud_andriy@gmail.com', NULL, 2);
INSERT INTO `mydb`.`Profile` (`userid`, `username`, `password`, `email`, `pfp`, `Roletype_role`) VALUES (1003043, 'Олександр', 'KPI', 'olek_napik@gmail.com', NULL, 4);
INSERT INTO `mydb`.`Profile` (`userid`, `username`, `password`, `email`, `pfp`, `Roletype_role`) VALUES (1003044, 'Роман', 'onelove', 'kpi_roman@gmail.com', NULL, 3);
INSERT INTO `mydb`.`Profile` (`userid`, `username`, `password`, `email`, `pfp`, `Roletype_role`) VALUES (1003045, 'Олег', 'oleg2307', 'kezaru_235@ukr.net', NULL, 2);
INSERT INTO `mydb`.`Profile` (`userid`, `username`, `password`, `email`, `pfp`, `Roletype_role`) VALUES (1003046, 'Тарас', 'ratas', 'pruz_taras@gmail.com', NULL, 3);
INSERT INTO `mydb`.`Profile` (`userid`, `username`, `password`, `email`, `pfp`, `Roletype_role`) VALUES (1003047, 'Михайло', 'mikhail0984', 'mikhail5409@ukr.net', NULL, 2);
INSERT INTO `mydb`.`Profile` (`userid`, `username`, `password`, `email`, `pfp`, `Roletype_role`) VALUES (1003048, 'Віталій', '8945102', 'vitaliy_bat@gmail.com', NULL, 2);
INSERT INTO `mydb`.`Profile` (`userid`, `username`, `password`, `email`, `pfp`, `Roletype_role`) VALUES (1003049, 'Іван', 'mylife005', 'zluided@gmail.com', NULL, 4);
INSERT INTO `mydb`.`Profile` (`userid`, `username`, `password`, `email`, `pfp`, `Roletype_role`) VALUES (1003050, 'Максим', '!poi85s!', 'maksimka779@ukr.net', NULL, 3);

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`Chat`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`Chat` (`chatid`, `username`, `message`, `tittle`) VALUES (100491, 'Олег', 'Привіт, Олександр, як твої справи', 'Lab4_db');
INSERT INTO `mydb`.`Chat` (`chatid`, `username`, `message`, `tittle`) VALUES (100492, 'Олександр', 'Здоровеньки були! Нормально, сам як?', 'Lab4_db');
INSERT INTO `mydb`.`Chat` (`chatid`, `username`, `message`, `tittle`) VALUES (100493, 'Андрій', 'Хто на 5 поверху не дає спати!?!?!', 'Гуртожиток');
INSERT INTO `mydb`.`Chat` (`chatid`, `username`, `message`, `tittle`) VALUES (100494, 'Михайло', 'Та це Іван.', 'Гуртожиток');
INSERT INTO `mydb`.`Chat` (`chatid`, `username`, `message`, `tittle`) VALUES (100495, 'Іван', 'Та чому саме я, хоча ти и знаходишся в моєї кімнаті, але шумишь тут тільки ти', 'Гуртожиток');
INSERT INTO `mydb`.`Chat` (`chatid`, `username`, `message`, `tittle`) VALUES (100496, 'Евгеній', 'Колбаска, хлебушек, молоко, яйця 10 шт, греча', 'Saved Messages');
INSERT INTO `mydb`.`Chat` (`chatid`, `username`, `message`, `tittle`) VALUES (100497, 'Віталій', 'Добрий день! Не можу зайти до мого проекту, допоможіть, будь ласка.', 'Support');

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`Statustype`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`Statustype` (`status`, `statusname`) VALUES (1, 'Unresolved');
INSERT INTO `mydb`.`Statustype` (`status`, `statusname`) VALUES (2, 'Resolved');
INSERT INTO `mydb`.`Statustype` (`status`, `statusname`) VALUES (3, 'InProgress');

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`Support`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`Support` (`chatid`, `userid`, `tittle`, `description`, `Statustype_status`) VALUES (100497, 1003048, 'Проблема з доступом до проекту', 'Не має змогу зайти до свого проекту', 3);

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`Projectmembers`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`Projectmembers` (`userid`, `projectid`) VALUES (1003043, 8800095);
INSERT INTO `mydb`.`Projectmembers` (`userid`, `projectid`) VALUES (1003045, 8800095);
INSERT INTO `mydb`.`Projectmembers` (`userid`, `projectid`) VALUES (1003042, 8800095);
INSERT INTO `mydb`.`Projectmembers` (`userid`, `projectid`) VALUES (1003047, 8800095);
INSERT INTO `mydb`.`Projectmembers` (`userid`, `projectid`) VALUES (1003049, 8800095);

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`Chatmembers`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`Chatmembers` (`userid`, `chatid`) VALUES (1003045, 100490);
INSERT INTO `mydb`.`Chatmembers` (`userid`, `chatid`) VALUES (1003043, 100490);
INSERT INTO `mydb`.`Chatmembers` (`userid`, `chatid`) VALUES (1003042, 100491);
INSERT INTO `mydb`.`Chatmembers` (`userid`, `chatid`) VALUES (1003047, 100491);
INSERT INTO `mydb`.`Chatmembers` (`userid`, `chatid`) VALUES (1003049, 100491);
INSERT INTO `mydb`.`Chatmembers` (`userid`, `chatid`) VALUES (1003041, 100492);
INSERT INTO `mydb`.`Chatmembers` (`userid`, `chatid`) VALUES (1003048, 100493);

COMMIT;


```