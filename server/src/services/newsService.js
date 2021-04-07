const NewsletterModel = require('../models/NewsletterModel');
const NewsModel = require('../models/NewsModel');

const newsletterService = require('../services/newsletterService');
const calculateReadTime = require('./helpers/CalculateReadTime');

const add = async (newsData, newsletterName) => {
    let newsletter = await newsletterService.getOneByName(newsletterName);

    if (newsletter == null) {
        newsletter = await newsletterService.create(newsletterName);
    }

    const timeToRead = calculateReadTime(newsData.content);
    
    let news = new NewsModel({ ...newsData, readTime: timeToRead, newsletter: newsletter._id });
    newsletter.news.push(news._id);

    await newsletter.save();
    return news.save();
};

module.exports = {
    add,
};
