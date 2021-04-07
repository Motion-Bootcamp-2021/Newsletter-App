const config = require('../config/config');
const User = require('../models/usersModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = config.jwtSecret;

const changePassword = async function ({token, newPassword}) {
    const passwordPatern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/

    if (!newPassword.match(passwordPatern)) {
        return {status: 'error', message: 'Ivalid password...'};

    } 

    try {
        const user = jwt.verify(token, JWT_SECRET);
        const _id = user.id;

        const saltPassword = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, saltPassword);

        await User.updateOne(
            {_id},
            {
                $set: {password: hashedPassword}
            }
        );

        return {status: 'ok', message: 'Successfully changed password!'}
    } catch (error) {
        return {status: 'error', message: 'Failed to verify!'};
    }
}

module.exports = changePassword;