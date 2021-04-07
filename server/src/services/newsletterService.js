const NewsletterModel = require('../models/NewsletterModel');
require('../models/NewsModel');
require('../models/CategoryModel');

const create = async (name) => {
    const newsletter = new NewsletterModel({ name });

    return newsletter.save();
};

const getAll = async () => {
    const newsletters = await NewsletterModel.find();
    return newsletters;
};

const getOne = async (id) => {
    const newsletter = await NewsletterModel.findById(id).populate({ path: 'news', populate: { path: 'categories newsletter' } });
    return newsletter;
};

const getOneByName = async (name) => {
    const newsletter = await NewsletterModel.findOne({ name });
    return newsletter;
};

module.exports = {
    create,
    getAll,
    getOne,
    getOneByName,
};
