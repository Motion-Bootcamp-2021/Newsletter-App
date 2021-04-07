const config = require('../config/config');
const User = require('../models/usersModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = config.jwtSecret;

const authenticateUser = async function ({email, password}) {
    try {
        const user = await User.findOne({email}).lean();

        if(!user) {
            return {status: 'error', message: 'Ivalid email/password!'};
        }

        if(await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({
                id: user._id,
                email: user.email
            }, JWT_SECRET);


            return {status: 'ok', token};
        }

        return {status: 'error', message: 'Ivalid email/password!'};
    } catch (error) {
        return error;
        
    }
}

module.exports = authenticateUser;