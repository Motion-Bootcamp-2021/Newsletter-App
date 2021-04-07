const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

const model = mongoose.model('Category', CategorySchema);
module.exports = model;