//import express from 'express';
const express = require('express');
const router = express.Router();

const TaskController = require('../controller/task_controller');

// Get requests.
router.get('/', (req, res) => {
    res.send('All projects -> project model + project controller');
});
router.get('/:id', (req, res) => {
    res.send('Project info -> project model + project controller');
});
router.get('/:id/tasks', TaskController.getAllTasks);

// Post requests.
router.post('/create', (req, res) => {
    res.send('Create project -> project model + project controller');
});
router.post('/edit', (req, res) => {
    res.send('Edit project -> project model + project controller');
});
router.post('/delete', (req, res) => {
    res.send('Delete project -> project model + project controller');
});
router.post('/assign', (req, res) => {
    res.send('Assign people to project -> project model + project controller for project_pack table');
});
router.post('/artifact/create', (req, res) => {
    res.send('Create artifact -> project model + project controller for artifacts table');
});
router.post('/artifact/delete', (req, res) => {
    res.send('Delete artifact -> project model + project controller for artifacts table');
});

module.exports = router;