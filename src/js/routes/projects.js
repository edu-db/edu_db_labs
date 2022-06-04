//import express from 'express';
const express = require('express');
const router = express.Router();

const TaskController = require('../controller/task_controller');
const ProjectController = require('../controller/project_controller');
const UserController = require('../controller/user_controller');
const ArtifactController = require('../controller/artifact_controller');

// Get requests.
router.get('/', ProjectController.getAllProjects);
router.get('/:id', ProjectController.getProjectByID);
router.get('/:id/tasks', TaskController.getAllTasksInProject);
router.get('/:id/users', UserController.getUsersInProject);
router.get('/:id/users/:user_id/role', UserController.getUserRole);
router.get('/:id/artifacts', ArtifactController.getAllArtifacts);
router.get('/:id/artifacts/:artifact_id', ArtifactController.getArtifact);

// Post requests.
router.post('/create', ProjectController.createProject);
router.post('/:id/edit', ProjectController.editProject);
router.post('/:id/delete', ProjectController.deleteProject);
router.post('/:id/users/:user_id/change_role', UserController.changeRole);
router.post('/:id/assign', ProjectController.assignUser);
router.post('/:id/artifacts/create', ArtifactController.createArtifact);
router.post('/:id/artifacts/:artifact_id/edit', ArtifactController.editArtifact);
router.post('/:id/artifacts/:artifact_id/delete', ArtifactController.deleteArtifact);

module.exports = router;