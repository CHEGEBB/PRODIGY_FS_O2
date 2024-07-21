const express = require('express');
const router = express.Router();
const userController = require('../controllers/authContoller');

// Register a new user

router.post('/register', userController.register);

// Login an existing user
router.post ('/login', userController.login);

module.exports = router;