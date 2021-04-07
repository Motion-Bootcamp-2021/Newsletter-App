const { Router } = require('express');
const router = Router();

const verifyIdToken = require('../middlewares/verifyIdToken');
const { feedService } = require('../services');

router.post('/', verifyIdToken, async (req, res) => {
    const { feedName } = req.body;

    if (res.admin) {
        try {
            const newFeed = await feedService.create(feedName);
            return res.json(newFeed);
        } catch (error) {
            res.status(400).json({ error });
        }
    }
});

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

router.post('/:feedId/add-newsletter/:newsletterId', verifyIdToken, async (req, res) => {
    if (res.admin) {
        const { newsletterId, feedId } = req.params;
        try {
            const response = await feedService.addNewsletter(newsletterId, feedId);
            return res.json(response);
        } catch (error) {
            res.status(400).json({ error });
        }
    }
});

router.post('/:feedId/remove-newsletter/:newsletterId', verifyIdToken, async (req, res) => {
    if (res.admin) {
        const { newsletterId, feedId } = req.params;
        try {
            const response = await feedService.removeNewsletter(newsletterId, feedId);
            return res.json(response);
        } catch (error) {
            res.status(400).json({ error });
        }
    }
});

module.exports = router;
