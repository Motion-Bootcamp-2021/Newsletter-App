const { Router } = require('express');
const router = Router();

const { newsletterService } = require('../services');

router.get('/', async (req, res) => {
    try {
        const newsletters = await newsletterService.getAllNewsletters();
        return res.status(200).json(newsletters);
    } catch (error) {
        return res.status(400).json([]);
    }
});

module.exports = router;