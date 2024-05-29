const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String
    },
    uid: {
        type: String,
    },
    password: {
        type: String,
    },
    about: {
        type: String,
    },
    handle: {
        type: String,
    },
    medialinks: [{
        platform: String,
        link: String,
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;