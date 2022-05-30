-- SET key checks to 0 to truncate all tables
SET FOREIGN_KEY_CHECKS = 0;
-- -----------------------------------------------
-- Creating users --------------------------------
-- -----------------------------------------------
TRUNCATE users;
INSERT INTO users (email, password, name, role)
VALUES 
('boldak@example.mail', MD5('qwerty12345'), 'Andriy Boldak', 'Project Manager'),
('lazariev@example.mail', MD5('admin'), 'Lazariev Ivan', 'Teamlead'),
('kobilinskiy@example.mail', MD5('fyodOR'), 'Kobilinskiy Fedir', 'Developer'),
('naumchuk@example.mail', MD5('sany0k'), 'Naumchuk Oleksandr', 'Developer'),
('sadlovskiy@example.mail', MD5('password'), 'Sadlovskiy Anton', 'Developer'),
('kurta_semen@example.mail', MD5('s3m3nKurt4'), 'Kurta Semen', 'Developer'),
('radkovskiy@example.mail', MD5('YuriY'), 'Radkovskiy Yuriy', 'Developer'),
('bondarenko@example.mail', MD5('bond4r3nk0'), 'Bondarenko Serhiy', 'Developer'),
('pupkin@example.mail', MD5('pupk1n'), 'Pupkin Vladimyr', 'User'),
('shevchenko@example.mail', MD5('k0bz4r'), 'Shevchenko Taras', 'User');
-- --------------------------------------------------
-- Creating projects --------------------------------
-- --------------------------------------------------
TRUNCATE projects;
INSERT INTO projects (name, description)
VALUES
('Database project', 'Simple database learning project'),
('Github clone', 'Project for our own github clone');
-- ----------------------------------------------------------------------
-- Creating project->user relation table --------------------------------
-- ----------------------------------------------------------------------
TRUNCATE project_pack;
INSERT INTO project_pack (project_id, user_id) 
SELECT 1, id FROM users WHERE `role` != 'User'; # Add all developers, teamlead & project manager to project #1
INSERT INTO project_pack (project_id, user_id)
SELECT 2, id FROM users WHERE `name` LIKE '%e%' AND `role` != 'User'; # Add all people with letter 'e' in name to project #2
-- ----------------------------------------------------
-- Creating some tasks --------------------------------
-- ----------------------------------------------------
TRUNCATE tasks;
INSERT INTO tasks (project_id, name, description, deadline, dependence, status)
VALUES
(1, 'Create database', 'Create SQL database', STR_TO_DATE('30-June-2022', '%d-%M-%Y'), 1, 'TO DO'),
(1, 'Create `users` schema', 'Create one of the SQL schemas', STR_TO_DATE('30-July-2022', '%d-%M-%Y'), 1, 'TO DO'),
(2, 'Research', 'Research github', STR_TO_DATE('30-June-2022', '%d-%M-%Y'), 3, 'IN PROGRESS');
-- --------------------------------------------------------
-- Creating some artifacts --------------------------------
-- --------------------------------------------------------
TRUNCATE artifacts;
INSERT INTO artifacts (name, description, link, task_id)
VALUES
(
	'Database: privileges',
    'Fix privileges for new user',
    'link_to_initial_task.com', 
	(SELECT id FROM tasks WHERE tasks.id = 1)
);
-- --------------------------------------------------------
-- Creating some actions ----------------------------------
-- --------------------------------------------------------
TRUNCATE actions;
INSERT INTO actions (task_id, user_id, acted_at, previous_status, current_status)
VALUES
(
	(SELECT id FROM tasks WHERE tasks.id = 3),
    # Get user id from corresponding task from particular project.
    (SELECT user_id FROM project_pack
	INNER JOIN tasks ON tasks.project_id = project_pack.project_id
	INNER JOIN users ON users.id = project_pack.user_id
	WHERE tasks.id = 3 AND users.id = 4),
	STR_TO_DATE('30-May-2022', '%d-%M-%Y'),
    'TO DO',
    (SELECT status FROM tasks WHERE tasks.id = 3)
);
-- SET key cheks back to 1
SET FOREIGN_KEY_CHECK = 1;