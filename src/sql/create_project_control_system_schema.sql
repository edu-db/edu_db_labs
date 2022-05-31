-- -----------------------------------------------------
-- Schema ProjectControlSystem
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `ProjectControlSystem` ;
CREATE SCHEMA IF NOT EXISTS `ProjectControlSystem` DEFAULT CHARACTER SET utf8;
USE `ProjectControlSystem` ;
-- -----------------------------------------------------
-- Table `ProjectControlSystem`.`projects`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ProjectControlSystem`.`projects` ;
CREATE TABLE IF NOT EXISTS `ProjectControlSystem`.`projects` (
`id` INT NOT NULL AUTO_INCREMENT,
`name` VARCHAR(45) NULL,
`description` VARCHAR(255) NULL,
PRIMARY KEY (`id`),
UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `ProjectControlSystem`.`users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ProjectControlSystem`.`users`;
CREATE TABLE IF NOT EXISTS `ProjectControlSystem`.`users` (
`id` INT NOT NULL AUTO_INCREMENT,
`email` VARCHAR(255) NOT NULL,
`password` VARCHAR(255) NULL,
`name` VARCHAR(100) NULL,
`role` VARCHAR(100) NOT NULL,
PRIMARY KEY(`id`),
UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `ProjectControlSystem`.`project_pack`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ProjectControlSystem`.`project_pack`;
CREATE TABLE IF NOT EXISTS `ProjectControlSystem`.`project_pack` (
`id` INT NOT NULL AUTO_INCREMENT,
`project_id` INT NOT NULL,
`user_id` INT NOT NULL,
PRIMARY KEY(`id`),
UNIQUE INDEX `id_UNIQUE` (`id` ASC),
CONSTRAINT `c_project_pack_project`
FOREIGN KEY (`project_id`)
REFERENCES `ProjectControlSystem`.`projects` (`id`)
ON DELETE NO ACTION
ON UPDATE NO ACTION,
CONSTRAINT `c_project_pack_useres`
FOREIGN KEY (`user_id`)
REFERENCES `ProjectControlSystem`.`users` (`id`)
ON DELETE NO ACTION
ON UPDATE NO ACTION)
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `ProjectControlSystem`.`tasks`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ProjectControlSystem`.`tasks`;
CREATE TABLE IF NOT EXISTS `ProjectControlSystem`.`tasks` (
`id` INT NOT NULL AUTO_INCREMENT,
`project_id` INT NOT NULL,
`name` VARCHAR(100) NULL,
`description` VARCHAR(255) NULL,
`deadline` DATETIME NULL,
`dependence` INT NOT NULL,
`status` ENUM("TO DO", "IN PROGRESS", "RESOLVED", "DONE") NULL,
PRIMARY KEY (`id`, `dependence`),
UNIQUE INDEX `id_UNIQUE` (`id` ASC),
CONSTRAINT `c_tasks_projects`
FOREIGN KEY (`project_id`)
REFERENCES `ProjectControlSystem`.`projects` (`id`)
ON DELETE NO ACTION
ON UPDATE NO ACTION,
CONSTRAINT `c_tasks_dependency`
FOREIGN KEY (`dependence`)
REFERENCES `ProjectControlSystem`.`tasks` (`id`)
ON DELETE NO ACTION
ON UPDATE NO ACTION)
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `ProjectControlSystem`.`actions`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ProjectControlSystem`.`actions`;
CREATE TABLE IF NOT EXISTS `ProjectControlSystem`.`actions` (
`id` INT NOT NULL AUTO_INCREMENT,
`task_id` INT NOT NULL,
`user_id` INT NOT NULL,
`acted_at` DATETIME NULL,
`previous_status` ENUM("TO DO", "IN PROGRESS", "RESOLVED", "DONE") NULL,
`current_status` ENUM("TO DO", "IN PROGRESS", "RESOLVED", "DONE") NULL,
PRIMARY KEY (`id`),
UNIQUE INDEX `id_UNIQUE` (`id` ASC),
CONSTRAINT `c_actions_tasks`
FOREIGN KEY (`task_id`)
REFERENCES `ProjectControlSystem`.`tasks` (`id`)
ON DELETE NO ACTION
ON UPDATE NO ACTION,
CONSTRAINT `c_actions_users`
FOREIGN KEY(`user_id`)
REFERENCES `ProjectControlSystem`.`users` (`id`)
ON DELETE NO ACTION
ON UPDATE NO ACTION)
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `ProjectControlSystem`.`artifacts`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ProjectControlSystem`.`artifacts`;
CREATE TABLE IF NOT EXISTS `ProjectControlSystem`.`artifacts` (
`id` INT NOT NULL AUTO_INCREMENT,
`name` VARCHAR(100) NOT NULL NULL,
`description` VARCHAR(255) NULL,
`link` VARCHAR(255) NULL,
`project_id` INT NOT NULL,
PRIMARY KEY (`id`),
INDEX `tasks_task_id` (`task_id` ASC),
UNIQUE INDEX `id_UNIQUE` (`id` ASC),
CONSTRAINT `c_artifacts_tasks`
FOREIGN KEY (`project_id`)
REFERENCES `ProjectControlSystem`.`projects` (`id`)
ON DELETE NO ACTION
ON UPDATE NO ACTION)
ENGINE = InnoDB;