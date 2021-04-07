const { Router } = require('express');
const router = Router();

const { userService } = require('../services');
const verifyIdToken = require('../middlewares/verifyIdToken');

router.post('/signup', async (req, res) => {
    const userRecord = await userService.signUp(req.body);
    return res.json(userRecord);
});

router.post('/createemailmask', verifyIdToken, async (req, res) => {
    try {
        const status = await userService.createEmailMask(req.body.emailMask, res._id, res.uid);
        return res.json(status);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.post('/createdbuser', verifyIdToken, async (req, res) => {
    try {
        const status = await userService.createDbUser(req.body, res.uid);
        return res.json(status);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.post('/subscribe', async (req, res) => {
    try {
        const subscriberRecord = await userService.subscribe(req.body);
        return res.json(subscriberRecord);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.post('/create-label', verifyIdToken, async (req, res) => {
    try {
        const labelRecord = await userService.createLabel(req.body.label, res._id);
        return res.json(labelRecord);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.get('/get-labels', verifyIdToken, async (req, res) => {
    try {
        const labels = await userService.getLabels(res._id);
        return res.json(labels);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.post('/readlater', verifyIdToken, async (req, res) => {
    try {
        const status = await userService.markNewsReadLater(res._id, req.body.selectedNews);
        return res.json(status);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.get('/readlater', verifyIdToken, async (req, res) => {
    try {
        const news = await userService.getReadLaterNews(res._id);
        return res.json(news);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

module.exports = router;