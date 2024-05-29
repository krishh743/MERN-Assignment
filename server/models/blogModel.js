const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    schoolId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'School',
        required: true,
    },
    blogTitle: {
        type: String,
        required: true,
    },
    slug: {
        type: String
    },
    desc: {
        type: String,
    },
    image: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Documents'
    },
    category: {
        type: String,
    },
    tags: [
        {
            type: String,
        },
    ],

}, { timestamps: true });


const Blog = mongoose.model('Blog', blogSchema);

module.exports = {Blog};

