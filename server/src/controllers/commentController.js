const { Router } = require('express');
const router = Router();
const { commentService } = require('../services')

const verifyIdToken = require('../middlewares/verifyIdToken');

router.post('/', verifyIdToken, async (req, res) => {
    const {content, rating, newsId} = req.body;
    try {
        console.log('heeeeelo')
        const response = await commentService.create(res._id, content, rating, newsId);
        console.log(res.json(response))
        return res.json(response);
    } catch(error) {
        console.log(error)
        return res.status(400).json({ error })
    }
})

module.exports = router;