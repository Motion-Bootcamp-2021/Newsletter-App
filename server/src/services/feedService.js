const FeedModel = require('../models/FeedModel');

const getOne = async (id) => {
    const feed = await FeedModel.findById(id).populate('newsletters');
    return feed;
};

const getAll = async (id) => {
    const feed = await FeedModel.find();
    return feed;
};

module.exports = {
    getOne,
    getAll,
};
