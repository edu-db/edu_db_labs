//import express from 'express';
const express = require('express');
const router = express.Router();

// Get requests.
router.get('/', (req, res) => {
    res.send('Hello from projects');
});
router.get('/:id', (req, res) => {
    res.send('Get projects info by id');
});

// Post requests.
router.post('/create', (req, res) => {
    res.send('Create project');
});
router.post('/edit', (req, res) => {
    res.send('Edit project');
});
router.post('/delete', (req, res) => {
    res.send('Delete project');
});
router.post('/assign', (req, res) => {
    res.send('Assign people to project');
});

module.exports = router;