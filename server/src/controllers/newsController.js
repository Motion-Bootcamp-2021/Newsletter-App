const { Router } = require('express');
const router = Router();

const { newsService } = require('../services');

router.post('/add', async (req, res) => {
    try {
        const newsData = extractData(req);
        const newsletter = req.body.newsletter;

        newsService.add(newsData, newsletter);
    } catch (error) {
        return res.status(400).json({ error });
    }

    res.status(200);
});

function extractData(req) {
    const newsData = {
        title: req.body.title,
        content: req.body.content,
        date: req.body.date,
        image:
            'https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=6&m=1182477852&s=612x612&w=0&h=X-UipiiX5xcMw9dBhzKZWG7UcWjEOARl2s_oTVV8rtE=',
        categories: [],
    };

    return newsData;
}

module.exports = router;
