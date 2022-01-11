const router = require('express').Router();
const { validateJWT } = require('../middlewares/validateJWT');
const usersCtrl = require('../controllers/Users');
const salesCtrl = require('../controllers/Sales');

router.get('/orders/:id', validateJWT, salesCtrl.getOrderDetailsById);

router.get('/orders', validateJWT, usersCtrl.getUserOrders);

module.exports = router;