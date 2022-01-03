const router = require('express').Router();
const validation = require('../middlewares/Validations');

router.post('/', validation.registerValidations);

module.exports = router;