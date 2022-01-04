const router = require('express').Router();
const controller = require('../controller/login');

router.post('/', controller.verifyExistenceUser);

module.exports = router;
