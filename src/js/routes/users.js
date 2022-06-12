const express = require('express');
const router = express.Router();

const UserController = require('../controller/user_controller');

// Get requests.
router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserByID);

// Post requests.
router.post('/create', UserController.createUser);
router.post('/update/:id', UserController.updateUser);
router.post('/delete/:id', UserController.deleteUser);

module.exports = router;