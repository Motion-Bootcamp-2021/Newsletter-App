const User = require('../models/usersModel');
const bcrypt = require('bcrypt');

const createUser = async function ({email, password, topics, subscriptions, emailMask}) {
    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (!email.match(emailPattern)) {
        return {status: 'error', message: 'Ivalid email...'};
    }

    const passwordPatern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/

    if (!password.match(passwordPatern)) {
        return {status: 'error', message: 'Ivalid password...'};

    } 

    const saltPassword = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(password, saltPassword);

    
    try {
        const signedUpUser = await User.create({
            email,
            password: securePassword,
            topics,
            subscriptions,
            emailMask
        });

        let data = await signedUpUser.save();
        return data;
    } catch (error) {
        if(error.code === 11000) {
            return {status: 'error', message: 'Email already in use.'};
        }
        throw error;
    }
}

module.exports = createUser;