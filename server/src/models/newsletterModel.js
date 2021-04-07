const mongoose = require('mongoose');

const NewsletterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: true
    },
    articles: [{
        type: 'ObjectId',
        ref: 'Article'
    }]
})

module.exports = mongoose.model('Newsletter', NewsletterSchema);