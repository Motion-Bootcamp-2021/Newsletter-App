const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    topics: {
        type: Array,
        required: true
    },
    subscriptions: {
        type: Array,
        required: true
    },
    emailMask: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const model = mongoose.model('users', UsersSchema);
module.exports = model;