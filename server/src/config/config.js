const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 5000,
        dbUrl: 'mongodb+srv://admin:qwe123qwe@cluster0.5uonz.mongodb.net/database?retryWrites=true&w=majority',
        jwtSecret: 'fawf*F*A5(WHp9AHF{)WFA12_)AWJ(JN_}AM_)@.?3FA()JA@!$AWD23@'
    },
    production: {}
};

module.exports = config[env];