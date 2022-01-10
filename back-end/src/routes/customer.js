const router = require('express').Router();
const { validateJWT } = require('../middlewares/validateJWT');
const prodCtrl = require('../controllers/Products');
const salesCtrl = require('../controllers/Sales');
const usersCtrl = require('../controllers/Users');

router.get('/products', prodCtrl.getProducts);

router.post('/checkout/get-users', validateJWT, usersCtrl.getUsersByRole);

router.post('/checkout', validateJWT, salesCtrl.createSale);

router.get('/orders/:id', validateJWT, salesCtrl.getOrderDetailsById);

router.get('/orders', validateJWT, usersCtrl.getUserOrders);

module.exports = router;
