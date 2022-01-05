const router = require('express').Router();
const controller = require('../controllers/Products');

router.get('/products', controller.getProducts);

module.exports = router;
