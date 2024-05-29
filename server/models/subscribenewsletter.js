const mongoose = require('mongoose');

const subscribenewsletterSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    subscribeto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true,
    },
    subscriptionActive: {
        type: Boolean,
        default: true,
    },
    subscribedAt: {
        type: Date,
        default: Date.now,
    }
})

const subscribe = mongoose.model('Subscribenewsletter', subscribenewsletterSchema);
module.exports = subscribe;