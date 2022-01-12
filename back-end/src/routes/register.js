const router = require('express').Router();
const validation = require('../middlewares/Validations');
const controller = require('../controllers/Register');

router.post('/', validation.registerValidations, controller.registerUser);

// router.get('/users')

module.exports = router;