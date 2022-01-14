const router = require('express').Router();
const controller = require('../controllers/Sales');

router.post('/:id', controller.changeOrderStatus);

module.exports = router;
