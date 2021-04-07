const { Router } = require('express');
const router = Router();

const { createUser } = require('../services');

router.post('/', async (req, res) => {
    let data = req.body;
    let {email, password, topics, subscriptions, emailMask} = data;

    if(
        email === ''                         ||
        typeof email === 'undefined'         ||
        password === ''                      ||
        typeof password === 'undefined'      ||
        topics.length <= 0                   ||
        typeof topics === 'undefined'        ||
        subscriptions.length <= 0            ||
        typeof subscriptions === 'undefined' ||
        emailMask === ''                     ||
        typeof emailMask === 'undefined'
        ) {
            return res.status(403).json({ status: 'error', message: 'Invalid Data!'});
    }
    
    try {
        let user = await createUser(data);

        if(user.status === 'error') {
            return res.status(403).json({ status: 'error', message: user.message});
        }

        return res.status(200).json({ status: 'ok', data: user, message: "User created succesfully!" });

    } catch (error) {
        throw error;
    }
});

module.exports = router;