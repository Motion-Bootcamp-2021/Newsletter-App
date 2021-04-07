const ArticleModel = require('../models/articleModel');

module.exports = {
    async getAllArticles() {
        return await ArticleModel.find().lean();
    }
}