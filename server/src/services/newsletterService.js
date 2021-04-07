const NewsletterModel = require('../models/NewsletterModel');
const UserModel = require('../models/UserModel');

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

const getOneByUser = async (id, _id) => {
    const hiddenNews = await UserModel.findById(_id).then(res => res.hiddenNews);
    const newsletter = await NewsletterModel.findById(id).populate({ path: 'news', match: { _id: {$nin:hiddenNews }}, populate: { path: 'categories newsletter' } });
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
    getOneByUser,
    getOneByName,
};
