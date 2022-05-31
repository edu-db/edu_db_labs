const express = require('express');
const router = express.Router();

const TaskController = require('../controller/task_controller');
const ActionsController = require('../controller/actions');

// Get requests.
router.get('/', (req, res) => {
    res.send('Nothing?');
});
router.get('/:id', TaskController.getTaskByID);

// Post requests.
router.post('/create', (req, res) => {
    res.send('Create task -> task model + actions model + actions controller (task table + actions table)');
});
// Update task means editing it and changing status
router.post('/update', (req, res) => {
    res.send('Update task -> task model + actions model + actions controller (task table + actions table)');
});
router.post('/delete', (req, res) => {
    res.send('Delete task -> task model + actions model + actions controller (task table + actions table)');
});
router.post('/assign', TaskController.assignUser);

module.exports = router;