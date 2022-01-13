const router = require('express').Router();
const { validateJWT } = require('../middlewares/validateJWT');
const usersCtrl = require('../controllers/Users');

router.get('/users', usersCtrl.getUsers);

module.exports = router;