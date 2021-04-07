const mongoose = require('mongoose');
const config = require('./config');

module.exports = () => {
    mongoose.set('useCreateIndex', true);
    
    return mongoose.connect(config.dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if (err) {
            throw err;
        }
        console.log('Database connected.');
    });
}