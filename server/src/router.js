const { Router } = require('express');
const router = Router();

const controllers = require('./controllers');

router.get('/', (req, res) => {
    res.json({
        message: 'Binary Zone'
    });
})

router.use('/articles', controllers.articleController);
router.use('/newsletters', controllers.newsletterController);
router.use('/signup', controllers.signUpController);
router.use('/signin', controllers.signInController);
router.use('/change-password', controllers.changePasswordController);

module.exports = router;