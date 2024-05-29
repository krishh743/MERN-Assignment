const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');
// const newsletterscontroller = require('../controllers/newslettersController');
const verifyToken = require('../middleware/auth');

// Get all users
userRouter.get('/', userController.getAllUsers);

// Get a specific user by ID
userRouter.get('/:id', userController.getUserById);

// Update a user
userRouter.put('/:id', verifyToken, userController.updateUser);

// Delete a user
userRouter.delete('/:id', verifyToken, userController.deleteUser);

//verify user handle
userRouter.get('/verify-handle/:handle', userController.verifyHandle);

//subscribe user for newsletter
// userRouter.post('/subscribe', newsletterscontroller.subscribeToNewsletter);

//unsubscribe user for news letter
// userRouter.post('/unsubscribe', newsletterscontroller.unsubscribeFromNewsletter);

//get List of subscribers by Id
// userRouter.get('/subscribe/:id', newsletterscontroller.getAllSubscribersById);


module.exports = userRouter;