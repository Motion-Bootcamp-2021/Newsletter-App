const { Router } = require('express');
const router = Router();

const verifyIdToken = require('../middlewares/verifyIdToken');
const { feedService } = require('../services');

router.get('/one', verifyIdToken, async (req, res) => {
    try {
        const feed = await feedService.getOne(req.query._id);
        return res.json(feed);
    } catch (error) {
        res.status(400).json({ error });
    }
});

router.get('/all', verifyIdToken, async (req, res) => {
    try {
        const feeds = await feedService.getAll();
        return res.json(feeds);
    } catch (error) {
        res.status(400).json({ error });
    }
});

module.exports = router;
