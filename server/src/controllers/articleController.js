const { Router } = require('express');
const router = Router();

const { articleService } = require('../services');

router.get('/', async (req, res) => {
    try {
        const articles = await articleService.getAllArticles();
        return res.status(200).json(articles);
    } catch (error) {
        return res.status(400).json([]);
    }
});

module.exports = router;