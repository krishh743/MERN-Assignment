const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Register a new user
router.post('/registerUser', authController.register);

// Login user
router.post('/login', authController.login);

router.post('/googleauth',authController.googleLogin)

module.exports = router;
