-- SET key checks to 0 to truncate all tables
SET FOREIGN_KEY_CHECKS = 0;
-- -----------------------------------------------
-- Creating users --------------------------------
-- -----------------------------------------------
TRUNCATE users;
INSERT INTO users (email, password, name)
VALUES 
('boldak@example.mail', MD5('qwerty12345'), 'Andriy Boldak'),
('lazariev@example.mail', MD5('admin'), 'Lazariev Ivan'),
('kobilinskiy@example.mail', MD5('fyodOR'), 'Kobilinskiy Fedir'),
('naumchuk@example.mail', MD5('sany0k'), 'Naumchuk Oleksandr'),
('sadlovskiy@example.mail', MD5('password'), 'Sadlovskiy Anton'),
('kurta_semen@example.mail', MD5('s3m3nKurt4'), 'Kurta Semen'),
('radkovskiy@example.mail', MD5('YuriY'), 'Radkovskiy Yuriy'),
('bondarenko@example.mail', MD5('bond4r3nk0'), 'Bondarenko Serhiy'),
('pupkin@example.mail', MD5('pupk1n'), 'Pupkin Vladimyr'),
('shevchenko@example.mail', MD5('k0bz4r'), 'Shevchenko Taras');
-- --------------------------------------------------
-- Creating projects --------------------------------
-- --------------------------------------------------
TRUNCATE projects;
INSERT INTO projects (name, description)
VALUES
('Database project', 'Simple database learning project'),
('Github clone', 'Project for our own github clone');
-- ----------------------------------------------------------------------
-- Creating data for roles table --------------------------------
-- ----------------------------------------------------------------------
TRUNCATE roles;
INSERT INTO roles (project_id, user_id, role) 
VALUES (1, 1, 'Project Manager'), (1, 2, 'Teamlead'), (1, 3, 'Developer'),
(2, 3, 'Teamlead'), (2, 2, 'Project Manager');
INSERT INTO roles (project_id, user_id, role) 
SELECT 2, id, 'Developer' FROM users WHERE name LIKE '%e%';
-- ----------------------------------------------------
-- Creating some tasks --------------------------------
-- ----------------------------------------------------
TRUNCATE tasks;
INSERT INTO tasks (project_id, user_id, name, description, deadline, dependence, status)
VALUES
(1, (SELECT r.user_id FROM roles as r WHERE r.project_id = 1 AND r.user_id = 2),
	'Create database', 'Create SQL database', STR_TO_DATE('30-June-2022', '%d-%M-%Y'), 1, 'TO DO'),
(1, (SELECT r.user_id FROM roles as r WHERE r.project_id = 1 AND r.user_id = 4),
	'Create `users` schema', 'Create one of the SQL schemas', STR_TO_DATE('30-July-2022', '%d-%M-%Y'), 1, 'TO DO'),
(2, (SELECT r.user_id FROM roles as r WHERE r.project_id = 2 AND r.user_id = 4),
	'Research', 'Research github', STR_TO_DATE('30-June-2022', '%d-%M-%Y'), 3, 'IN PROGRESS');
-- --------------------------------------------------------
-- Creating some artifacts --------------------------------
-- --------------------------------------------------------
TRUNCATE artifacts;
INSERT INTO artifacts (name, description, link, project_id)
VALUES
(
	'Github repo',
    'Github repo for project',
    'github.com/user/repo', 
	(SELECT id FROM projects WHERE projects.id = 1)
),
(
	'Design document',
    'Design Document for project',
    'drive.com/ourproject/design-doc.pdf',
    (SELECT id FROM projects WHERE projects.id = 1)
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
    (SELECT roles.user_id FROM roles
	INNER JOIN tasks ON tasks.project_id = roles.project_id
	INNER JOIN users ON users.id = roles.user_id
	WHERE tasks.id = 3 AND users.id = 4),
	STR_TO_DATE('30-May-2022', '%d-%M-%Y'),
    'TO DO',
    (SELECT status FROM tasks WHERE tasks.id = 3)
);
-- SET key cheks back to 1
SET FOREIGN_KEY_CHECKS = 1;