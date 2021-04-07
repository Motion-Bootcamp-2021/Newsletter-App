const articleService = require('./articleService');
const newsletterService = require('./newsletterService');
const createUser = require('./signUpService');
const authenticateUser = require('./signInService');
const changePassword = require('./changePasswordService');

module.exports = {
    articleService,
    newsletterService,
    createUser,
    authenticateUser,
    changePassword
}