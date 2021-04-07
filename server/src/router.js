const { Router } = require('express');
const router = Router();

const controllers = require('./controllers');

router.use('/user', controllers.user);
router.use('/newsletter', controllers.newsletter);
router.use('/news', controllers.news);

module.exports = router;
