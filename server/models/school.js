const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    coverImage: {
        type: mongoose.Schema.Types.ObjectId, // object id from "Image" model
        ref: "Documents",
    },
}, {
    timestamps: true, // Add createdAt and updatedAt fields
});

// Create the Schools model
const School = mongoose.model('School', schoolSchema);

module.exports = School;