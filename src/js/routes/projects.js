//import express from 'express';
const express = require('express');
const router = express.Router();

const TaskController = require('../controller/task_controller');
const ProjectController = require('../controller/project_controller');
const UserController = require('../controller/user_controller');

// Get requests.
router.get('/', ProjectController.getAllProjects);
router.get('/:id', ProjectController.getProjectByID);
router.get('/:id/tasks', TaskController.getAllTasksInProject);
router.get('/:id/users', UserController.getUsersInProject);

// Post requests.
router.post('/create', ProjectController.createProject);
router.post('/:id/edit', ProjectController.editProject);
router.post('/:id/delete', ProjectController.deleteProject);
router.post('/:id/assign', ProjectController.assignUser);
router.post('/:id/artifacts/create', (req, res) => {
    res.send('Create artifact -> artifact model + artifact controller for artifacts table');
});
router.post('/:id/artifacts/delete', (req, res) => {
    res.send('Delete artifact -> artifact model + artifact controller for artifacts table');
});

module.exports = router;