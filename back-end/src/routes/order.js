const router = require('express').Router();
const controller = require('../controllers/Sales');

router.post('/', controller.changeOrderStatus);

module.exports = router;
