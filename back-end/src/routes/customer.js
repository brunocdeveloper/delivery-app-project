const router = require('express').Router();
const { validateJWT } = require('../middlewares/validateJWT');
const prodCtrl = require('../controllers/Products');
const salesCtrl = require('../controllers/Sales');

router.get('/products', prodCtrl.getProducts);

router.post('/checkout', validateJWT, salesCtrl.createSale);

// router.post('/orders/:id');

module.exports = router;
