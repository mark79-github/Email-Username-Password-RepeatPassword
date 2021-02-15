const {Router} = require('express');
const router = Router();

const {userController, homeController, errorController} = require('../controllers');

router.use('/', homeController);
router.use('/users', userController);
router.use('*', errorController);

module.exports = router;
