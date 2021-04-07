const { Router } = require('express');
const router = Router();

const { authenticateUser } = require('../services');

router.post('/', async (req, res) => {
    let data = req.body;

    try {
        let user = await authenticateUser(data);
        
        if(user.status === 'error') {
            return res.status(403).json({ status: 'error', message: user.message});
        }
        return res.status(200).json({ status: 'ok', data: user, message: "Succesfully logged in!" });
    } catch (errora) {
        throw error;
    }
});


module.exports = router;