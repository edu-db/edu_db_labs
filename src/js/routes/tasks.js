//import express from 'express';
const express = require('express');
const router = express.Router();

// Get requests.
router.get('/', (req, res) => {
    res.send('Hello from tasks');
});
router.get('/:id', (req, res) => {
    res.send('Get task info by id');
});

// Post requests.
router.post('/create', (req, res) => {
    res.send('Create task');
});
// Update task means editing it and changing status
router.post('/update', (req, res) => {
    res.send('Update task');
});
router.post('/delete', (req, res) => {
    res.send('Delete task');
});
router.post('/assign', (req, res) => {
    res.send('Assign user to task');
});
// Create a separate route for artifacts?
router.post('/artifact/create', (req, res) => {
    res.send('Create artifact');
});
router.post('/artifact/delete', (req, res) => {
    res.send('Delete artifact');
});

module.exports = router;