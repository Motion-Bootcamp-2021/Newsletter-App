const FeedModel = require('../models/FeedModel');

const getOne = async (id) => {
    const feed = await FeedModel.findById(id).populate('newsletters');
    return feed;
};

const getAll = async (id) => {
    const feed = await FeedModel.find();
    return feed;
};

const addNewsletter = async (newsletterId, feedId) => {
    try {
        await FeedModel.findByIdAndUpdate(feedId, {
            $addToSet: {
                newsletters: newsletterId
            }
        });

        return 'Success';
    } catch (error) {
        throw error;
    }
}

const removeNewsletter = async (newsletterId, feedId) => {
    try {
        await FeedModel.findByIdAndUpdate(feedId, {
            $pull: {
                newsletters: newsletterId
            }
        });

        return 'Success';
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getOne,
    getAll,
    addNewsletter,
    removeNewsletter,
};
