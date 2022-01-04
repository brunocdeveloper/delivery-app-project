const router = require('express').Router();
const controller = require('../controllers/Login');

router.post('/', controller.verifyExistenceUser, controller.authLogin);

module.exports = router;
