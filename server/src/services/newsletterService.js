const newsletterModel = require('../models/newsletterModel');

module.exports = {
    async getAllNewsletters() {
        return await newsletterModel.find().lean();
    }
}