const {Router} = require('express');
const router = Router();

router.use((req, res) => {
    res.status(404).render('errors/404');
});

module.exports = router;