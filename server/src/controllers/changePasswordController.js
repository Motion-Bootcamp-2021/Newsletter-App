const { Router } = require('express');
const router = Router();

const { changePassword } = require('../services');

router.post('/', async (req, res) => {
    let data = req.body;

    try {
        let user = await changePassword(data);
        
        if(user.status === 'error') {
            return res.status(403).json({ status: 'error', message: user.message});
        }
        return res.status(200).json({data: user});
    } catch (error) {
        throw error;
    }
});


module.exports = router;