const User = require('../models/userModel');

// Get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

// Get a specific user by ID
const getUserById = async (req, res) => {
    const id = req.params.id;
    try {
        const users = await User.findById(id);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

// Update a user
const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id, req.body, {
                new: true,
            });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

// Delete a user
const deleteUser = async (req, res) => {
    const id = req.params.id
    try {
        const user = await User.findByIdAndDelete(id);
        res.json({message: 'User deleted'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const verifyHandle = async (req, res) => {
    const requestedHandle = req.params.handle;

    if (/\s/.test(requestedHandle)) {
        return res.status(400).json({error: 'Handle cannot contain spaces.'});
    }
    // Check if the handle is already taken
    const existingUser = await User.findOne({handle: requestedHandle});

    // Suggest available handles
    const suggestions = ['handle3', 'handle4', 'handle5']; // Replace with your logic to generate suggestions

    if (existingUser) {
        res.status(200).json({status: 'error', available: false, message: 'Handle is already taken.', suggestions});
    } else {
        res.status(200).json({status: 'success', available: true, message: 'Handle is available.'});
    }

}


module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    verifyHandle
}
