const router = require('express').Router();
// const validation = require('../middlewares/Validations');
const controller = require('../controllers/Register');

router.post('/', controller.registerUser);

module.exports = router;