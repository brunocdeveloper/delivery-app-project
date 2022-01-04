const router = require('express').Router();
const controller = require('../controllers/login');

router.post('/', controller.verifyExistenceUser);

module.exports = router;
