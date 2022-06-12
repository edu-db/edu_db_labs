const express = require('express');
const router = express.Router();

const TaskController = require('../controller/task_controller');
const ActionsController = require('../controller/actions');

// Get requests.
router.get('/', TaskController.getAllTasks);
router.get('/:id', TaskController.getTaskByID);

// Post requests.
router.post('/create', ActionsController.createTask);
router.post('/update', ActionsController.updateTask);
router.post('/:id/edit', TaskController.editTask);
router.post('/assign', TaskController.assignUser);

module.exports = router;