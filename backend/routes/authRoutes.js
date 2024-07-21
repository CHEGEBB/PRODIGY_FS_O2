const express = require('express');
const router = express.Router();
const userController = require('../controllers/authContoller'); // Ensure this path is correct

// Register a new user
router.post('/signup', userController.signup); // Change 'register' to 'signup'

// Login an existing user
router.post('/login', userController.login); // 'login' is correct here

module.exports = router;
