const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    publicationDate: {
        type: Date,
        default: Date.now
    },
    rating: {
        type: Number,
        default: null
    },
    likes: [{
        type: 'ObjectId',
        ref: 'Users'
    }],
    author: {
        type: 'ObjectId',
        ref: 'Users'
    },
    article: {
        type: 'ObjectId',
        ref: 'News'
    },
    answerTo: {
        type: 'ObjectId',
        ref: 'Comments'
    }
});

const model = mongoose.model('Comment', CommentSchema);
module.exports = model;

