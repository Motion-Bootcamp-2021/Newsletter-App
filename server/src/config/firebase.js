const admin = require('firebase-admin');
const serviceAccount = require('./newsletter-app-10766-firebase-adminsdk-213kz-65852c257e.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;