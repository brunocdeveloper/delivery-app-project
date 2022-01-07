const router = require('express').Router();
const { validateJWT } = require('../middlewares/validateJWT');
const prodCtrl = require('../controllers/Products');
const salesCtrl = require('../controllers/Sales');
const usersCtrl = require('../controllers/Users');

router.get('/products', prodCtrl.getProducts);

router.post('/checkout', validateJWT, salesCtrl.createSale);

router.get('/checkout', validateJWT, usersCtrl.getUsersByRole);

// router.post('/orders/:id');

module.exports = router;

// const moment = require('moment');
// const localDate = new Date();
// console.log(moment.utc(localDate).format());