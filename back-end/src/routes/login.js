const router = require('express').Router();
const controller = require('../controllers/Login');

router.post('/', controller.authLogin);

module.exports = router;
