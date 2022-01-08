const router = require('express').Router();
const { validateJWT } = require('../middlewares/validateJWT');
const prodCtrl = require('../controllers/Products');
const salesCtrl = require('../controllers/Sales');
const usersCtrl = require('../controllers/Users');

router.get('/products', prodCtrl.getProducts);

router.post('/checkout/get-users', validateJWT, usersCtrl.getUsersByRole);

router.post('/checkout', validateJWT, salesCtrl.createSale);

// router.post('/orders/:id');

module.exports = router;

// const moment = require('moment');
// const localDate = new Date();
// console.log(moment.utc(localDate).format());