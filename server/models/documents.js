const mongoose = require('mongoose');

const documentsSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    filename: {
        type: String,
    },
    path: {
        type: String,
    },
    storage: {
        type: String,
    },
    size: {
        type: Number,
    },
    mime: {
        type: String,
    },
    type: {
        type: String,
    },
}, {timestamps: true})


const Documents = mongoose.model('Documents', documentsSchema);

module.exports = {Documents};
