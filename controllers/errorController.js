const {Router} = require('express');
const router = Router();

router.get('*', (req, res) => {
    res.render('errors/404');
});

module.exports = router;