const express = require('express');
const router = express.Router();

const UserController = require('../controller/UserController');

// Get requests.
router.get('/', UserController.getAllUsers);

router.get('/:id', UserController.getUserByID);

// Post requests.
router.post('/create', UserController.createUser);

router.post('/delete', (req, res) => {
    res.send('Delete user');
});

module.exports = router;