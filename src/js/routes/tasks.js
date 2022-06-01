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
router.post('/:id/edit', (req, res) => {
    res.send('Edit task -> task model + task controller');
});
router.post('/:id/delete', (req, res) => {
    res.send('Delete task -> actions model + actions controller (task table + actions table)');
});
router.post('/assign', TaskController.assignUser);

module.exports = router;