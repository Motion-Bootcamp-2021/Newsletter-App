const CommentModel = require('../models/CommentModel');

const create = async (userId, content, rating, newsId) => {
    try {
        const author = userId;
        const article = newsId;
        const comment = new CommentModel({ author, content, rating, article });
        await comment.save();

        return comment
    } catch (error) {
        throw error;
    }
}

module.exports = {
    create,
}