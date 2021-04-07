const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 25,
        serverAddress: 'http://localhost:5000',
    },
    production: {
        port: process.env.PORT || 25,
        serverAddress: 'https://letterbox-binary-zone.herokuapp.com',
    },
};

module.exports = config[env];
